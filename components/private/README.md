# @tsoul/component-private

Web Boot 项目的私有组件库，基于 Vue 3 + Element Plus，提供了布局、登录等业务组件。

## 安装

```bash
# npm
npm install @tsoul/component-private

# yarn
yarn add @tsoul/component-private

# pnpm
pnpm add @tsoul/component-private
```

## 组件列表

### BackgroundLayout 布局组件

一个功能丰富的后台管理系统布局组件，支持：

- 多种布局模式（默认横向、纵向布局）
- 菜单管理（折叠、手风琴效果）
- 面包屑导航
- 标签页视图
- 全屏功能
- 用户头像
- 水印设置
- 页脚信息

#### 基础用法

```vue
<template>
	<background-layout :menu-list="menuList" :active-path="activePath" @select-menu="handleSelectMenu" />
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { BackgroundLayout } from '@tsoul/component-private'

	const menuList = ref([
		{
			path: '/home',
			name: '首页',
			icon: 'home',
		},
		// ... 更多菜单项
	])

	const activePath = ref('/home')

	const handleSelectMenu = (path: string) => {
		activePath.value = path
	}
</script>
```

### BackgroundLogin 登录组件

一个可配置的登录页面组件，支持：

- 自定义容器大小和背景
- 灵活的账号配置
- 多种布局方式（左、中、右）
- 可自定义标题和按钮文案

#### 基础用法

```vue
<template>
	<background-login title="系统登录" @submit="handleSubmit" />
</template>

<script setup lang="ts">
	import { BackgroundLogin } from '@tsoul/component-private'

	const handleSubmit = (form: { username: string; password: string }) => {
		console.log('登录信息：', form)
	}
</script>
```

## API 文档

### BackgroundLayout Props

| 属性名              | 类型                  | 默认值                | 说明             |
| ------------------- | --------------------- | --------------------- | ---------------- |
| containerSize       | object/string         | '{}'                  | 容器大小配置     |
| containerBackground | object/string         | '{}'                  | 容器背景配置     |
| settingVisible      | boolean/string        | false                 | 设置菜单显示状态 |
| menuList            | array/string          | '[]'                  | 菜单列表（必填） |
| layout              | 'defaults'/'vertical' | 'defaults'            | 布局模式         |
| isFooter            | boolean/string        | true                  | 是否显示页脚     |
| footerCompany       | string                | '漠轻阴（郁金香）...' | 公司名称         |
| footerRecord        | string                | '京ICP备...'          | 备案信息         |

### BackgroundLogin Props

| 属性名              | 类型                    | 默认值   | 说明         |
| ------------------- | ----------------------- | -------- | ------------ |
| containerSize       | object/string           | {...}    | 容器大小配置 |
| containerBackground | object/string           | {...}    | 容器背景配置 |
| account             | object/string           | {...}    | 账号配置     |
| title               | string                  | '登录'   | 标题文案     |
| submitLabel         | string                  | '登录'   | 提交按钮文案 |
| layout              | 'left'/'center'/'right' | 'center' | 布局方式     |

## 更多信息

- [在线文档](https://mqyforvert.github.io/web-boot/templates/)
- [问题反馈](https://github.com/MQYForverT/web-boot/issues)
- [更新日志](https://github.com/MQYForverT/web-boot/blob/main/CHANGELOG.md)

## License

ISC
