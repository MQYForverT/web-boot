# Markdown 扩展示例

本页面演示了 VitePress 提供的一些内置 markdown 扩展功能。

## 语法高亮

VitePress 提供了由 [Shiki](https://github.com/shikijs/shiki) 驱动的语法高亮功能，并具有行高亮等附加功能：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**输入**

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个详情块。
:::
```

**输出**

::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个详情块。
:::

## 更多功能

查看 [完整的 markdown 扩展列表](https://vitepress.dev/guide/markdown) 文档。

## 代码块示例

### JavaScript

```javascript
// 这是一个 JavaScript 代码示例
function greet(name) {
	return `Hello, ${name}!`
}

console.log(greet('World'))
```

### TypeScript

```typescript
// 这是一个 TypeScript 代码示例
interface User {
	id: number
	name: string
	email: string
}

function createUser(user: User): User {
	return {
		...user,
		id: Date.now(),
	}
}
```

### Vue

```vue
<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const msg = ref('Hello Vue 3!')
</script>

<style scoped>
	.hello {
		text-align: center;
	}
</style>
```

### CSS

```css
/* 这是一个 CSS 代码示例 */
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
}

.button {
	background-color: #007bff;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

.button:hover {
	background-color: #0056b3;
}
```

## 表格示例

| 功能       | 描述                           | 状态 |
| ---------- | ------------------------------ | ---- |
| 语法高亮   | 支持多种编程语言的语法高亮     | ✅   |
| 自定义容器 | 支持 info、tip、warning 等容器 | ✅   |
| 表格       | 支持 Markdown 表格语法         | ✅   |
| 代码块     | 支持行高亮和语言标识           | ✅   |
| 数学公式   | 支持 LaTeX 数学公式            | ❌   |

## 链接和图片

### 链接

- [VitePress 官网](https://vitepress.dev/)
- [Vue.js 官网](https://vuejs.org/)
- [GitHub 仓库](https://github.com/vuejs/vitepress)

### 图片

![VitePress Logo](https://vitepress.dev/vitepress-logo-mini.svg)

## 列表示例

### 无序列表

- 第一项
- 第二项
  - 嵌套项 1
  - 嵌套项 2
- 第三项

### 有序列表

1. 第一步
2. 第二步
   1. 子步骤 1
   2. 子步骤 2
3. 第三步

### 任务列表

- [x] 完成项目设置
- [x] 编写基础文档
- [ ] 添加更多示例
- [ ] 部署到生产环境

## 引用示例

> 这是一个引用块。
>
> 可以包含多行内容。

> 也可以嵌套使用：
>
> > 这是嵌套的引用
> >
> > > 更深层的嵌套

## 脚注示例

这里是一个脚注示例[^1]。

[^1]: 这是脚注的内容。

## 删除线和强调

~~这是删除的文本~~

**这是粗体文本**

_这是斜体文本_

**_这是粗斜体文本_**

## 内联代码

使用 `console.log()` 来输出信息。

## 转义字符

\*这不是斜体\*

\`这不是代码\`

## 水平分割线

---

上面的内容

---

下面的内容
