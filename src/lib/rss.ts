import type { FeedSource, PostItem } from "../config/site";

const stripCdata = (value: string) =>
  value.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();

const decodeXml = (value: string) =>
  stripCdata(value)
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");

const readTag = (source: string, tagName: string) => {
  const pattern = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const match = source.match(pattern);
  return match ? decodeXml(match[1].trim()) : "";
};

const readCategories = (source: string) => {
  const matches = [...source.matchAll(/<category[^>]*>([\s\S]*?)<\/category>/gi)];
  return matches.map((match) => decodeXml(match[1].trim())).filter(Boolean);
};

const formatDate = (value: string) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return {
      date: "",
      datetime: ""
    };
  }

  const year = String(date.getUTCFullYear());
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return {
    date: `${year}.${month}.${day}`,
    datetime: `${year}-${month}-${day}`
  };
};

const parseFeed = (xml: string, count: number): PostItem[] => {
  const itemMatches = [...xml.matchAll(/<item\b[\s\S]*?>([\s\S]*?)<\/item>/gi)];

  return itemMatches.slice(0, count).map((match, index) => {
    const block = match[1];
    const title = readTag(block, "title");
    const href = readTag(block, "link");
    const categories = readCategories(block);
    const { date, datetime } = formatDate(readTag(block, "pubDate"));

    return {
      title,
      category: categories[0] || "未分类",
      date,
      datetime,
      href: href || `#post-${index + 1}`
    };
  });
};

export const loadFeedPosts = async (feed: FeedSource, fallbackItems: PostItem[]) => {
  try {
    const response = await fetch(feed.url, {
      headers: {
        accept: "application/rss+xml, application/xml, text/xml"
      }
    });

    if (!response.ok) {
      throw new Error(`Feed request failed: ${response.status}`);
    }

    const xml = await response.text();
    const parsedItems = parseFeed(xml, feed.count);

    return parsedItems.length > 0 ? parsedItems : fallbackItems;
  } catch (error) {
    console.warn("[rss] 使用 fallback 最新文章数据：", error);
    return fallbackItems;
  }
};
