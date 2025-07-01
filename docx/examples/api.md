---
outline: deep
---

# 运行时 API 示例

本页面演示了 VitePress 提供的一些运行时 API 的使用方法。

主要的 `useData()` API 可用于访问当前页面的站点、主题和页面数据。它可以在 `.md` 和 `.vue` 文件中使用：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>
```

## 结果

### 主题数据

<pre>{{ theme }}</pre>

### 页面数据

<pre>{{ page }}</pre>

### 页面前置元数据

<pre>{{ frontmatter }}</pre>

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据

<pre>{{ theme }}</pre>

### 页面数据

<pre>{{ page }}</pre>

### 页面前置元数据

<pre>{{ frontmatter }}</pre>

## 更多功能

查看 [完整的运行时 API 列表](https://vitepress.dev/reference/runtime-api#usedata) 文档。

## 常用 API 示例

### useData()

获取当前页面的数据：

```vue
<script setup>
	import { useData } from 'vitepress'

	const { site, theme, page, frontmatter } = useData()

	console.log('站点标题:', site.title)
	console.log('当前页面路径:', page.relativePath)
	console.log('页面标题:', frontmatter.title)
</script>
```

### useRoute()

获取当前路由信息：

```vue
<script setup>
	import { useRoute } from 'vitepress'

	const route = useRoute()

	console.log('当前路径:', route.path)
	console.log('查询参数:', route.query)
	console.log('路由参数:', route.params)
</script>
```

### useRouter()

进行路由导航：

```vue
<script setup>
	import { useRouter } from 'vitepress'

	const router = useRouter()

	// 导航到指定路径
	function goToPage(path) {
		router.go(path)
	}

	// 替换当前页面
	function replacePage(path) {
		router.replace(path)
	}
</script>
```

### useSidebar()

获取侧边栏数据：

```vue
<script setup>
	import { useSidebar } from 'vitepress/theme'

	const { sidebar } = useSidebar()

	console.log('侧边栏数据:', sidebar.value)
</script>
```

### useLocalNav()

获取本地导航数据：

```vue
<script setup>
	import { useLocalNav } from 'vitepress/theme'

	const { localNav } = useLocalNav()

	console.log('本地导航:', localNav.value)
</script>
```

## 组合式函数示例

### 创建自定义 Hook

```typescript
// composables/usePageInfo.ts
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'

export function usePageInfo() {
	const { page, frontmatter } = useData()
	const route = useRoute()

	const pageTitle = computed(() => {
		return frontmatter.title || page.title || 'Untitled'
	})

	const pageDescription = computed(() => {
		return frontmatter.description || page.description || ''
	})

	const isHomePage = computed(() => {
		return route.path === '/'
	})

	return {
		pageTitle,
		pageDescription,
		isHomePage,
		currentPath: route.path,
	}
}
```

### 在组件中使用

```vue
<template>
	<div class="page-info">
		<h1>{{ pageTitle }}</h1>
		<p v-if="pageDescription">{{ pageDescription }}</p>
		<p v-if="isHomePage">这是首页</p>
		<p>当前路径: {{ currentPath }}</p>
	</div>
</template>

<script setup>
	import { usePageInfo } from '../composables/usePageInfo'

	const { pageTitle, pageDescription, isHomePage, currentPath } = usePageInfo()
</script>
```

## 主题 API 示例

### 获取主题配置

```vue
<script setup>
	import { useData } from 'vitepress'

	const { theme } = useData()

	// 获取导航栏配置
	const nav = theme.value.nav

	// 获取侧边栏配置
	const sidebar = theme.value.sidebar

	// 获取社交链接
	const socialLinks = theme.value.socialLinks

	// 获取页脚配置
	const footer = theme.value.footer
</script>
```

### 动态修改主题

```vue
<script setup>
	import { useData } from 'vitepress'
	import { watch } from 'vue'

	const { theme } = useData()

	// 监听主题变化
	watch(
		() => theme.value,
		(newTheme) => {
			console.log('主题配置已更新:', newTheme)
		},
		{ deep: true },
	)
</script>
```

## 页面数据示例

### 获取页面信息

```vue
<script setup>
	import { useData } from 'vitepress'

	const { page } = useData()

	// 页面基本信息
	console.log('页面标题:', page.title)
	console.log('页面描述:', page.description)
	console.log('相对路径:', page.relativePath)
	console.log('文件路径:', page.filePath)

	// 页面内容
	console.log('页面内容:', page.content)

	// 页面头部
	console.log('页面头部:', page.headers)

	// 页面前置元数据
	console.log('前置元数据:', page.frontmatter)
</script>
```

### 页面导航

```vue
<script setup>
	import { useData } from 'vitepress'

	const { page } = useData()

	// 获取上一页和下一页
	const prev = page.value.prev
	const next = page.value.next

	console.log('上一页:', prev)
	console.log('下一页:', next)
</script>
```

## 站点数据示例

### 获取站点信息

```vue
<script setup>
	import { useData } from 'vitepress'

	const { site } = useData()

	// 站点基本信息
	console.log('站点标题:', site.title)
	console.log('站点描述:', site.description)
	console.log('站点语言:', site.lang)

	// 站点配置
	console.log('站点配置:', site.themeConfig)
</script>
```

## 实际应用示例

### 面包屑导航

```vue
<template>
	<nav class="breadcrumb">
		<span v-for="(item, index) in breadcrumbs" :key="index">
			<a v-if="item.link" :href="item.link">{{ item.text }}</a>
			<span v-else>{{ item.text }}</span>
			<span v-if="index < breadcrumbs.length - 1" class="separator">/</span>
		</span>
	</nav>
</template>

<script setup>
	import { useData, useRoute } from 'vitepress'
	import { computed } from 'vue'

	const { theme } = useData()
	const route = useRoute()

	const breadcrumbs = computed(() => {
		const path = route.path
		const segments = path.split('/').filter(Boolean)

		const result = [{ text: '首页', link: '/' }]

		let currentPath = ''
		segments.forEach((segment, index) => {
			currentPath += `/${segment}`

			// 这里可以根据实际需求查找对应的标题
			const title = segment.charAt(0).toUpperCase() + segment.slice(1)

			result.push({
				text: title,
				link: index === segments.length - 1 ? null : currentPath,
			})
		})

		return result
	})
</script>

<style scoped>
	.breadcrumb {
		padding: 10px 0;
		font-size: 14px;
	}

	.separator {
		margin: 0 8px;
		color: #999;
	}

	a {
		color: #409eff;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
```

### 页面目录

```vue
<template>
	<div class="toc">
		<h3>目录</h3>
		<ul>
			<li v-for="header in headers" :key="header.slug">
				<a :href="`#${header.slug}`" :style="{ paddingLeft: `${header.depth * 10}px` }">
					{{ header.title }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { useData } from 'vitepress'

	const { page } = useData()

	const headers = computed(() => {
		return page.value.headers || []
	})
</script>

<style scoped>
	.toc {
		position: sticky;
		top: 20px;
		max-height: calc(100vh - 40px);
		overflow-y: auto;
	}

	.toc ul {
		list-style: none;
		padding: 0;
	}

	.toc li {
		margin: 5px 0;
	}

	.toc a {
		color: #666;
		text-decoration: none;
		font-size: 14px;
		display: block;
		padding: 5px 0;
	}

	.toc a:hover {
		color: #409eff;
	}
</style>
```

## 注意事项

1. **服务端渲染**: 这些 API 在服务端渲染时也可用，但某些浏览器特定的功能可能不可用。

2. **响应式数据**: 大多数 API 返回的数据都是响应式的，可以使用 `ref()` 和 `computed()` 进行进一步处理。

3. **类型安全**: 如果使用 TypeScript，这些 API 都提供了完整的类型定义。

4. **性能考虑**: 避免在组件中过度使用这些 API，特别是在频繁重新渲染的组件中。

5. **调试**: 可以在浏览器控制台中查看这些 API 返回的数据结构，以便更好地理解和使用它们。
