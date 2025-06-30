# Vite 配置

**@mqy/vite-config** - 优化的构建配置包，提供框架特定的 Vite 配置和插件集成。

## 📦 安装

```bash
npm install @mqy/vite-config --save-dev
```

## 🚀 快速开始

### Vue 项目

```typescript
// vite.config.ts
import { defineConfig } from '@mqy/vite-config/vue'

export default defineConfig({
	// 项目特定配置
	server: {
		port: 3000,
	},
})
```

### React 项目

```typescript
// vite.config.ts
import { defineConfig } from '@mqy/vite-config/react'

export default defineConfig({
	// 项目特定配置
	server: {
		port: 3001,
	},
})
```

### Svelte 项目

```typescript
// vite.config.ts
import { defineConfig } from '@mqy/vite-config/svelte'

export default defineConfig({
	// 项目特定配置
	server: {
		port: 3002,
	},
})
```

## 🔧 内置插件

### 核心插件

**🎨 UnoCSS**

- 原子化 CSS 框架
- 按需生成样式
- 自定义主题支持

**📦 Auto Import**

- 自动导入 Vue/React/Svelte API
- 自定义导入规则
- TypeScript 类型支持

**🧩 Components**

- 组件自动注册
- 按需导入组件
- 支持多种组件库

**📊 Bundle Analyzer**

- 打包分析工具
- 可视化依赖关系
- 体积优化建议

**🗜️ Compression**

- Gzip/Brotli 压缩
- 资源优化
- 缓存策略

## 📋 完整配置选项

### Vue 项目配置

```typescript
// vite.config.ts
import { defineConfig } from '@mqy/vite-config/vue'

export default defineConfig({
	// 服务器配置
	server: {
		port: 3000,
		host: '0.0.0.0',
		open: true,
		cors: true,
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},

	// 构建配置
	build: {
		target: 'es2015',
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: false,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
		rollupOptions: {
			output: {
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',
				assetFileNames: '[ext]/[name]-[hash].[ext]',
			},
		},
	},

	// 路径别名
	resolve: {
		alias: {
			'@': '/src',
			'@components': '/src/components',
			'@utils': '/src/utils',
			'@assets': '/src/assets',
		},
	},

	// CSS 配置
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/styles/variables.scss";`,
			},
		},
	},

	// 环境变量
	define: {
		__APP_VERSION__: JSON.stringify(process.env.npm_package_version),
		__BUILD_TIME__: JSON.stringify(new Date().toISOString()),
	},
})
```

### React 项目配置

```typescript
// vite.config.ts
import { defineConfig } from '@mqy/vite-config/react'

export default defineConfig({
	// React 特定配置
	plugins: [
		// 额外的 React 插件
	],

	// 开发服务器
	server: {
		port: 3001,
		hmr: {
			overlay: false,
		},
	},

	// JSX 配置
	esbuild: {
		jsxInject: `import React from 'react'`,
	},

	// 优化配置
	optimizeDeps: {
		include: ['react', 'react-dom'],
		exclude: ['@emotion/react'],
	},
})
```

### Svelte 项目配置

```typescript
// vite.config.ts
import { defineConfig } from '@mqy/vite-config/svelte'

export default defineConfig({
	// Svelte 特定配置
	server: {
		port: 3002,
	},

	// 构建优化
	build: {
		target: 'es2020',
	},

	// 优化依赖
	optimizeDeps: {
		include: ['svelte/transition', 'svelte/store'],
	},
})
```

## 🎯 自定义插件

### 添加自定义插件

```typescript
// vite.config.ts
import { defineConfig } from '@mqy/vite-config/vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineConfig({
	plugins: [
		// 添加 SVG 图标插件
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
			symbolId: 'icon-[dir]-[name]',
		}),
	],
})
```

### 自定义 UnoCSS 配置

```typescript
// vite.config.ts
import { defineConfig } from '@mqy/vite-config/vue'

export default defineConfig({
	// UnoCSS 自定义配置
	unocss: {
		theme: {
			colors: {
				primary: '#1890ff',
				success: '#52c41a',
				warning: '#faad14',
				error: '#f5222d',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
		shortcuts: {
			'btn-primary': 'bg-primary text-white px-4 py-2 rounded hover:bg-primary/80',
			card: 'bg-white rounded-lg shadow-md p-6',
		},
	},
})
```

## 🏗️ 构建优化

### 代码分割

```typescript
export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					// 第三方库分离
					vendor: ['vue', 'vue-router', 'pinia'],
					ui: ['element-plus', '@element-plus/icons-vue'],
					utils: ['axios', 'dayjs', 'lodash-es'],
				},
			},
		},
	},
})
```

### 预加载优化

```typescript
export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				// 预加载关键资源
				experimentalMinChunkSize: 20000,
			},
		},
	},

	// 依赖预构建
	optimizeDeps: {
		include: ['vue', 'vue-router', 'pinia', 'element-plus/es'],
	},
})
```

### 资源处理

```typescript
export default defineConfig({
	// 静态资源处理
	assetsInclude: ['**/*.woff', '**/*.woff2'],

	build: {
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name.split('.')
					const ext = info[info.length - 1]

					if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
						return `images/[name]-[hash].${ext}`
					}
					if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
						return `fonts/[name]-[hash].${ext}`
					}
					return `assets/[name]-[hash].${ext}`
				},
			},
		},
	},
})
```

## 🔍 开发工具

### 调试配置

```typescript
export default defineConfig({
	// 开发模式配置
	define: {
		__DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
		__PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
	},

	// 源码映射
	build: {
		sourcemap: process.env.NODE_ENV === 'development',
	},

	// 开发服务器
	server: {
		// 错误覆盖
		hmr: {
			overlay: true,
		},
	},
})
```

### 性能监控

```typescript
export default defineConfig({
	plugins: [
		// 打包分析
		process.env.ANALYZE === 'true' &&
			bundleAnalyzer({
				analyzerMode: 'server',
				openAnalyzer: true,
			}),
	].filter(Boolean),
})
```

### 自动化部署

```typescript
export default defineConfig({
	base: process.env.NODE_ENV === 'production' ? '/my-app/' : '/',

	build: {
		// 部署配置
		outDir: 'dist',
		emptyOutDir: true,

		// 资源内联阈值
		assetsInlineLimit: 4096,
	},
})
```

## 🧪 测试集成

### Vitest 配置

```typescript
export default defineConfig({
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./src/test/setup.ts'],
		coverage: {
			reporter: ['text', 'json', 'json-summary', 'html'],
			exclude: ['node_modules/', 'dist/', '**/*.d.ts', '**/*.test.{ts,js}', '**/*.spec.{ts,js}'],
		},
	},
})
```

## 📊 性能优化建议

### 1. 依赖优化

```typescript
// 预构建常用依赖
optimizeDeps: {
  include: ['vue', 'vue-router', 'pinia', 'element-plus/es'],
  exclude: ['@vueuse/core'], // 按需导入的库
}
```

### 2. 代码分割

```typescript
// 智能分包
manualChunks: (id) => {
	if (id.includes('node_modules')) {
		if (id.includes('vue')) return 'vue-vendor'
		if (id.includes('element-plus')) return 'ui-vendor'
		return 'vendor'
	}
}
```

### 3. 资源优化

```typescript
// 图片优化
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import viteImageOptimize from 'vite-plugin-imagemin'

export default defineConfig({
	plugins: [
		viteImageOptimize({
			gifsicle: { optimizationLevel: 7 },
			mozjpeg: { quality: 80 },
			pngquant: { quality: [0.65, 0.8] },
			svgo: { plugins: [{ name: 'removeViewBox', active: false }] },
		}),
	],
})
```

## 🔧 环境配置

### 多环境管理

```bash
# .env.development
VITE_API_BASE_URL=http://localhost:8080/api
VITE_APP_TITLE=开发环境

# .env.production
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=生产环境

# .env.staging
VITE_API_BASE_URL=https://staging-api.example.com
VITE_APP_TITLE=测试环境
```

### TypeScript 类型定义

```typescript
// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_BASE_URL: string
	readonly VITE_APP_TITLE: string
	readonly VITE_APP_DEBUG: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
```

## 🚀 最佳实践

1. **合理配置代理**：避开跨域问题
2. **智能代码分割**：提升加载性能
3. **资源优化**：压缩图片和字体文件
4. **环境变量管理**：区分不同部署环境
5. **依赖预构建**：加速开发体验
6. **构建分析**：定期检查打包体积
7. **缓存策略**：合理设置资源缓存

通过使用 @mqy/vite-config，您可以获得经过优化的构建配置和最佳的开发体验。
