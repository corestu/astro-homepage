export type NavItem = {
  label: string;
  href: string;
  activeMatch?: string;
};

export type ContactLinkItem = {
  type: "link";
  label: string;
  href: string;
};

export type ContactPopoverItem = {
  type: "popover";
  label: string;
  tip: string;
  qrImage?: string;
  qrAlt?: string;
};

export type ContactItem = ContactLinkItem | ContactPopoverItem;

export type PostItem = {
  title: string;
  category: string;
  date: string;
  datetime: string;
  href: string;
};

export type FeedSource = {
  url: string;
  count: number;
};

export type ProjectItem = {
  type: string;
  title: string;
  description: string;
  href?: string;
};

export type SiteCardItem = {
  name: string;
  description: string;
  href: string;
  avatar?: string;
  mark?: string;
  avatarAlt?: string;
};

export const siteConfig = {
  meta: {
    title: "个人主页模板",
    description: "一份基于 Astro 的个人主页模板示例，可用于展示简介、文章、项目与站点信息。",
    favicon: "/favicon.ico"
  },
  brand: {
    logoMark: "H",
    logoText: "HOME",
    logoImage: "/Corestu.svg",
    logoAlt: "Home Logo"
  },
  nav: [
    { label: "首页", href: "/#home", activeMatch: "/" },
    { label: "关于我", href: "/about", activeMatch: "/about" },
    { label: "文章", href: "/#posts" },
    { label: "作品", href: "/#projects" },
  ] satisfies NavItem[],
  intro: {
    avatar: "/avatar.jpg",
    avatarAlt: "站长头像",
    greetingPrefix: "Hi！我是",
    name: "你的名字",
    signature: "在这里写一句简单的个性签名",
    bio: "这里是一段个人简介示例，可用于介绍你的职业方向、学习经历或长期关注的内容。",
    contacts: [
      { type: "link", label: "GitHub", href: "https://github.com/yourname" },
      { type: "link", label: "Email", href: "mailto:hello@example.com" },
      { type: "link", label: "QQ", href: "https://example.com" },
    ] satisfies ContactItem[]
  },
  latestPosts: {
    title: "最新文章",
    moreText: "查看更多→",
    moreHref: "https://example.com/",
    feed: {
      url: "https://example.com/feed",
      count: 5
    } satisfies FeedSource,
    fallbackItems: [
      {
        title: "加载异常",
        category: "文章列表",
        date: "2026.06.01",
        datetime: "2026-06-01",
        href: "#post-1"
      }
    ] satisfies PostItem[]
  },
  featuredPosts: {
    title: "精选文章",
    items: [
      {
        title: "用长期主义打磨个人作品集",
        category: "随笔",
        date: "2026.04.12",
        datetime: "2026-04-12",
        href: "https://example.com/post-1"
      },
      {
        title: "从零搭建一套简洁的个人主页",
        category: "折腾",
        date: "2026.03.16",
        datetime: "2026-03-16",
        href: "https://example.com/post-2"
      }
    ] satisfies PostItem[]
  },
  projects: {
    title: "我的项目",
    description: "我参与或独立开发的项目",
    items: [
      {
        type: "个人项目",
        title: "内容站点主题优化",
        description: "围绕现有主题进行样式重构、交互优化与功能补充，持续提升整体浏览体验。",
        href: "https://example.com/project-theme"
      },
      {
        type: "独立开发",
        title: "业务管理移动应用",
        description: "面向日常业务流程的信息化工具，支持订单、进度、结算与基础资料管理等场景。"
      },
      {
        type: "参与开发",
        title: "Astro 内容站模板",
        description: "基于 Astro 的博客与主页模板项目，主要聚焦主题层与页面层的能力实现。",
        href: "https://example.com/project-astro"
      }
    ] satisfies ProjectItem[]
  },
  sites: {
    title: "我的站点",
    items: [
      {
        name: "个人博客",
        description: "记录日常、笔记与一些长期更新的内容",
        href: "https://example.com/",
        avatar: "/avatar.jpg",
        avatarAlt: "站点头像"
      },
      {
        name: "项目站点",
        description: "用于展示实验项目、页面设计与功能组件的独立站点",
        href: "https://example.com/lab",
        avatar: "/favicon.ico",
        avatarAlt: "站点头像"
      },
      {
        name: "工具导航",
        description: "收集常用工具、服务入口与个人协作资源",
        href: "https://example.com/tools",
        avatar: "/favicon.ico",
        avatarAlt: "站点头像"
      }
    ] satisfies SiteCardItem[]
  },
  footer: {
    signature: "在这里展示一句简短的站点签名",
    copyright: "© 2026 Home Template. All rights reserved."
  }
} as const;
