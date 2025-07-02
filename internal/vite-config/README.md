# @tsoul/vite-config

Web Boot 项目的 Vite 配置预设，提供了开箱即用的构建配置，支持 Vue、React 和 Svelte 框架。

## 特性

- 🚀 开箱即用的配置
- 🎨 支持多框架（Vue、React、Svelte）
- 📦 自动导入组件和 API
- 🎯 TypeScript 支持
- 🔧 灵活的配置扩展
- 🎁 丰富的插件集成

## 安装

```bash
# npm
npm install @tsoul/vite-config -D

# yarn
yarn add @tsoul/vite-config -D

# pnpm
pnpm add @tsoul/vite-config -D
```

## 使用方法

### Vue 项目

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vueConfig from '@tsoul/vite-config/vue'

export default defineConfig((configEnv) => {
	return vueConfig(configEnv.mode, {
		// 自定义配置
		server: {
			port: 3000,
		},
	})
})
```

### React 项目

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import reactConfig from '@tsoul/vite-config/react'

export default defineConfig((configEnv) => {
	return reactConfig(configEnv.mode, {
		// 自定义配置
		server: {
			port: 3000,
		},
	})
})
```

### Svelte 项目

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import svelteConfig from '@tsoul/vite-config/svelte'

export default defineConfig((configEnv) => {
	return svelteConfig(configEnv.mode, {
		// 自定义配置
		server: {
			port: 3000,
		},
	})
})
```

## 内置功能

### 自动导入

- 组件自动导入
- API 自动导入
- 图标自动导入
- CSS 按需导入

```typescript
// Vue 示例
// 无需手动导入，直接使用
<template>
  <el-button>按钮</el-button>
  <IconEpEdit />
</template>

<script setup>
// Vue API 自动导入
const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>
```

### 开发工具集成

- 开发服务器配置
- 热更新优化
- 调试工具
- 构建分析

### 构建优化

- 代码压缩
- Tree-shaking
- 分包策略
- 资源优化

### 类型生成

自动生成 `.d.ts` 类型文件。

### 样式处理

- Sass/Less/Stylus 支持
- PostCSS 配置
- CSS Modules
- UnoCSS 支持

## 配置项

### 通用配置

```typescript
{
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 2000
  },
  plugins: [
    // 压缩
    compress(),
    // 类型生成
    dts(),
    // 构建分析
    visualizer(),
    // 调试工具
    inspect()
  ]
}
```

### 自动导入配置

```typescript
{
  AutoImport: {
    // API 自动导入
    imports: ['vue', '@vueuse/core'],
    // 目录自动导入
    dirs: ['./src/stores'],
    // 自动导入解析器
    resolvers: [ElementPlusResolver()]
  },
  // 组件自动导入
  Components: {
    extensions: ['vue'],
    include: [/\.vue$/],
    resolvers: [ElementPlusResolver()]
  }
}
```

### 图标配置

```typescript
{
  Icons: {
    compiler: 'vue3',
    autoInstall: true,
    scale: 1,
    defaultClass: 'inline-block'
  }
}
```

## 环境变量

支持的环境变量配置：

```bash
# 开发服务器端口
VITE_PORT=3000

# 是否自动打开浏览器
VITE_OPEN=true

# 是否启用 mock
VITE_USE_MOCK=false

# 是否启用压缩
VITE_USE_COMPRESS=true

# 压缩算法类型
VITE_COMPRESS_TYPE=gzip
```

## 插件列表

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react)
- [vite-plugin-compression2](https://github.com/nonzzz/vite-plugin-compression)
- [vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts)
- [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)
- [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect)
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [unocss](https://github.com/unocss/unocss)

## 更多信息

- [在线文档](https://mqyforvert.github.io/web-boot/api/vite)
- [问题反馈](https://github.com/MQYForverT/web-boot/issues)
- [更新日志](https://github.com/MQYForverT/web-boot/blob/main/CHANGELOG.md)

## License

MIT
