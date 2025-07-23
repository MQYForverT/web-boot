# Vite 配置

## 📖 概述

`@tsoul/vite-config` 是一个功能强大的 Vite 配置解决方案，支持 Vue、React、Svelte 等多个框架。它提供了一套完整的构建工具链，包括自动导入、插件管理、构建优化等功能。

## 🎯 特性

- **多框架支持**: Vue 3、React、Svelte
- **自动导入**: 组件、样式、图标等自动导入
- **插件集成**: 开箱即用的常用插件
- **构建优化**: 压缩、分析、调试等工具
- **开发增强**: 开发工具、热更新等功能
- **类型支持**: 完整的 TypeScript 支持

## 📦 安装

### 包信息

- **包名**：`@tsoul/vite-config`
- **类型**：开发依赖
- **最新版本**：1.0.7

### 安装命令

::: code-group

```bash [pnpm (推荐)]
pnpm add -D @tsoul/vite-config
```

```bash [npm]
npm install -D @tsoul/vite-config
```

```bash [yarn]
yarn add -D @tsoul/vite-config
```

:::

## 🚀 快速开始

### 基础配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import viteConfig from '@tsoul/vite-config'

export default defineConfig((configEnv) => {
	const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv
	return viteConfig(viteEnv)
})
```

## 📝 框架配置

### Vue 项目

```typescript
import vueConfig from '@tsoul/vite-config/vue'

export default defineConfig((configEnv) => {
	const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv
	return vueConfig(viteEnv)
})
```

### React 项目

```typescript
import reactConfig from '@tsoul/vite-config/react'

export default defineConfig((configEnv) => {
	const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv
	return reactConfig(viteEnv)
})
```

### Svelte 项目

```typescript
import svelteConfig from '@tsoul/vite-config/svelte'

export default defineConfig((configEnv) => {
	const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv
	return svelteConfig(viteEnv)
})
```

## 🔧 功能配置

### 自动导入

```typescript
{
	plugins: [
		// API 自动导入
		AutoImport({
			imports: ['vue', '@vueuse/core', 'vue-router'],
			resolvers: [ElementPlusResolver({ importStyle: 'sass' }), IconsResolver({ prefix: 'Icon' })],
			dirs: ['./src/stores'],
			vueTemplate: true,
		}),

		// 组件自动导入
		ComponentsVue({
			extensions: ['vue', 'md'],
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
			resolvers: [ElementPlusResolver({ importStyle: 'sass' }), IconsResolver({ enabledCollections: ['ep'] })],
		}),
	]
}
```

### 插件配置

```typescript
{
	plugins: [
		// UnoCSS 原子化 CSS
		UnoCSS(),

		// 构建进度
		progress(),

		// 源码调试
		inspect(),

		// 打包分析（仅开发环境）
		process.env.NODE_ENV === 'development' && visualizer,

		// 压缩配置
		compress(viteEnv.VITE_COMPRESS_TYPE),
	]
}
```

### 开发服务器

```typescript
{
  server: {
    host: true,
    port: 3000,
    open: true,
    cors: true,
    proxy: {
      // 配置代理
    }
  }
}
```

### 构建配置

```typescript
{
  build: {
    target: 'es2015',
    cssTarget: 'chrome80',
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      // Rollup 配置
    }
  }
}
```

## 🎨 自定义配置

### 扩展配置

```typescript
export default defineConfig((configEnv) => {
	const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv
	return vueConfig(viteEnv, {
		// 自定义配置
		server: {
			port: 8080,
		},
		build: {
			sourcemap: true,
		},
	})
})
```

### 环境变量

```env
# .env
VITE_APP_TITLE=My App
VITE_API_URL=http://api.example.com
VITE_COMPRESS_TYPE=gzip
```

## 🚨 常见问题

### 1. 自动导入不生效

检查以下几点：

- 确保目录路径配置正确
- 检查文件扩展名是否包含在配置中
- 验证组件名称是否符合命名规范

### 2. 构建性能问题

优化建议：

- 使用 `build.reportCompressedSize: false` 关闭压缩报告
- 配置适当的 `build.chunkSizeWarningLimit`
- 使用 `build.rollupOptions.output.manualChunks` 优化分包

### 3. 开发服务器配置

如果遇到跨域问题：

```typescript
{
  server: {
    proxy: {
      '/api': {
        target: 'http://api.example.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}
```

## 📚 相关资源

- [Vite 官方文档](https://vitejs.dev/)
- [UnoCSS 文档](https://unocss.dev/)
- [Vue 开发者工具](https://devtools.vuejs.org/)
