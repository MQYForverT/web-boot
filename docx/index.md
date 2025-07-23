---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Web Boot'
  text: '现代化的前端项目脚手架'
  tagline: 支持Vue、React、Svelte等多种框架，提供完整的开发工具链和组件库
  image:
    src: /logo.png
    alt: WebBoot
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 查看模板
      link: /templates/
    - theme: alt
      text: 组件库
      link: /components/
---

## 🎯 在线体验

### 🔥 革命性的 Web Components 技术

**一套组件，三端通用**  
Vue · React · Svelte **完全一致**的体验

> _一次编写，处处运行_

<iframe 
  src="/web-boot/demo/index.html" 
  width="100%" 
  height="600px" 
  frameborder="0"
  style="border: none; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin: 20px 0;">
</iframe>

> 🚀 **核心优势**：基于标准 Web Components，实现真正的**跨框架兼容**！同一套组件在 Vue、React、Svelte 中表现完全一致，大幅降低开发成本，提升团队效率！

---

---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}

.VPHero {
  position: relative;
  padding: 0;
  overflow: hidden;
  margin-bottom: 24px;
}

.VPHero .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1152px;
  margin: 0 auto;
  padding: 24px;
  gap: 120px;
}

.VPHero .main {
  flex: 1;
  max-width: 592px;
  padding-right: 48px;
}

.VPHero .image-container {
  position: relative;
  width: 240px;
  height: 240px;
  margin: 0;
  margin-left: 48px;
  transform: none;
}

.VPHero .image {
  position: relative;
  width: 240px;
  height: 240px;
  z-index: 1;
  animation: float 6s ease-in-out infinite;
}

.VPHero .image-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 320px;
  background: radial-gradient(
    circle at center,
    rgba(65, 209, 255, 0.1) 0%,
    rgba(65, 209, 255, 0.05) 35%,
    rgba(189, 52, 254, 0.05) 70%,
    rgba(189, 52, 254, 0.1) 100%
  );
  border-radius: 50%;
  animation: pulse 4s ease-in-out infinite;
}

.VPHero .image-bg::before {
  content: '';
  position: absolute;
  top: -5%;
  left: -5%;
  right: -5%;
  bottom: -5%;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(65, 209, 255, 0.05) 0%,
    rgba(189, 52, 254, 0.05) 100%
  );
  animation: rotate 10s linear infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (min-width: 640px) {
  .VPHero .image-container,
  .VPHero .image {
    width: 280px;
    height: 280px;
  }
  .VPHero .image-bg {
    width: 360px;
    height: 360px;
  }
}

@media (min-width: 960px) {
  .VPHero .image-container,
  .VPHero .image {
    width: 320px;
    height: 320px;
  }
  .VPHero .image-bg {
    width: 400px;
    height: 400px;
  }
}

.VPHome .VPFeatures {
  margin-top: 16px;
  padding-top: 16px;
}
</style>

## 为什么选择 Web Boot？

Web Boot 是一个现代化的前端项目脚手架工具，旨在为开发者提供一套完整、高效的前端开发解决方案。

### ✨ 核心特性

- **多框架支持**: 同时支持Vue、React、Svelte三大主流框架
- **组件库**: 提供可复用的布局和登录组件，支持主题定制
- **工具函数**: 封装常用的工具函数，提高开发效率
- **构建工具**: 提供完整的Vite配置，支持多种优化策略
- **代码规范**: 统一的代码规范配置，确保代码质量

### 🎯 适用场景

- 快速搭建前端项目
- 企业级应用开发
- 组件库开发
- 工具函数封装

### 📈 技术栈

- **包管理**: pnpm workspace
- **构建工具**: Vite 7.x
- **框架**: Vue 3.5 / React 19.x / Svelte 5.36
- **UI框架**: Element Plus 2.x / Ant Design 5.x
- **状态管理**: Mobx 6.x
- **路由**: Vue Router 4.x / React Router 7.x / Page.js 1.11.6
- **语言**: TypeScript 5.8
- **代码规范**: ESLint 9.x / Stylelint 16.x / Prettier 3.x
- **Git规范**: Husky / Commitlint
- **文档**: VitePress
