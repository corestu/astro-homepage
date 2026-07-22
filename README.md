# 摸鱼大王的个人主页模板 - Astro

基于 Astro 构建的个人主页模板，支持文章、项目展示、站点导航等功能。简单易用，适合快速搭建个人主页和博客。

## 演示站点

**[查看演示](https://corestu.github.io)** - 使用本模板构建的个人主页

## 功能特点

- **文章系统** - 支持最新文章、精选文章展示，自动从 RSS 源获取
- **项目展示** - 展示个人项目和作品集
- **站点导航** - 多站点卡片式展示
- **关于页面** - 个人介绍、联系方式展示
- **响应式设计** - 完美适配桌面和移动端
- **深色/浅色模式** - 支持主题切换
- **TypeScript** - 完整的类型支持

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- TypeScript - 类型安全
- Tailwind CSS - 原子化 CSS 框架
- MDX - Markdown + JSX 支持

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/corestu/astro-homepage.git
cd astro-homepage
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:4321` 查看效果。

### 4. 构建生产版本

```bash
npm run build
npm run preview
```

## 项目结构

```
astro-homepage/
├── public/                # 静态资源（图标、图片等）
├── src/
│   ├── components/        # Astro 组件
│   ├── config/           # 站点配置（site.ts）
│   ├── content/          # MDX 文章内容
│   ├── layouts/          # 页面布局
│   ├── lib/              # 工具函数
│   ├── pages/            # 页面路由
│   └── styles/           # 全局样式
└── package.json
```

## 自定义配置

编辑 `src/config/site.ts` 修改站点信息：

```typescript
export const siteConfig = {
  meta: {
    title: "你的站点标题",
    description: "你的站点描述",
  },
  brand: {
    logoMark: "H",
    logoText: "HOME",
  },
  intro: {
    name: "你的名字",
    bio: "你的个人简介",
    contacts: [
      { type: "link", label: "GitHub", href: "https://github.com/yourname" },
    ],
  },
  // ... 更多配置
}
```

## 部署

支持部署到任何静态托管平台：

- **Vercel** - 推荐，零配置部署
- **Netlify** - 自动部署
- **GitHub Pages** - 免费托管
- **Cloudflare Pages** - 全球 CDN

只需将代码推送到 GitHub，在对应平台导入仓库即可。

## 相关链接

- **演示站点**：[corestu.github.io](https://corestu.github.io) - 使用本模板构建的个人主页
- **Astro 官方文档**：[docs.astro.build](https://docs.astro.build/)

## 作者

**摸鱼大王** | [摸鱼小窝](https://blog.aistu.cn) | [GitHub](https://github.com/corestu)

MIT License
