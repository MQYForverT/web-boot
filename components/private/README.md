# @tsoul/component-private

Web Boot 项目的私有组件库，基于 Vue 3 + Element Plus，提供了功能丰富的后台管理系统布局组件和登录组件。

## 特性

- 🎨 **主题系统** - 支持明暗主题切换，带动画效果
- 🌍 **国际化** - 内置多语言支持
- 📱 **响应式** - 完美适配移动端和桌面端
- ⚙️ **高度可配置** - 丰富的配置选项满足不同业务需求
- 🔧 **TypeScript** - 完整的类型定义支持
- 🎯 **开箱即用** - 简单配置即可快速集成

## 安装

```bash
# npm
npm install @tsoul/component-private

# yarn
yarn add @tsoul/component-private

# pnpm
pnpm add @tsoul/component-private
```

## 快速开始

```vue
<script setup lang="ts">
	import { registerAll, setGlobalConfig } from '@tsoul/component-private'

	// 注册所有组件
	registerAll()

	// 可选：设置全局配置
	setGlobalConfig({
		theme: 'light',
		globalTitle: '我的管理系统',
	})
</script>
```

## 组件列表

### BackgroundLayout 布局组件

一个功能丰富的后台管理系统布局组件，提供完整的后台管理界面解决方案：

**🎨 布局功能**

- 多种布局模式（横向布局、纵向布局）
- 响应式设计，自适应移动端和桌面端
- 可自定义容器大小和背景样式

**📋 菜单系统**

- 支持多级嵌套菜单
- 菜单折叠/展开功能
- 手风琴效果
- 菜单图标支持
- 面包屑导航

**🏷️ 标签页管理**

- 标签页视图（TagsView）
- 标签页拖拽排序
- 标签页本地缓存
- 可配置标签页数量限制
- 标签页图标显示

**👤 用户功能**

- 用户头像展示
- 下拉菜单配置
- 全屏功能
- 主题切换（明暗模式）
- 多语言切换

**⚙️ 其他功能**

- 水印设置
- 页脚信息配置
- 设置面板（抽屉式）

#### 基础用法

```vue
<template>
	<ts-background-layout
		:menu-list="menuList"
		:active-path="activePath"
		:setting="{ enable: true }"
		:user-avatar="userConfig"
		@select-menu="handleSelectMenu"
		@command-user="handleUserCommand"
	/>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const menuList = ref([
		{
			path: '/dashboard',
			title: '仪表盘',
			icon: 'dashboard',
		},
		{
			path: '/system',
			title: '系统管理',
			icon: 'setting',
			children: [
				{
					path: '/system/user',
					title: '用户管理',
					icon: 'user',
				},
			],
		},
	])

	const activePath = ref('/dashboard')

	const userConfig = ref({
		show: true,
		name: '管理员',
		avatar: '/avatar.jpg',
		dropdownMenu: [
			{ key: 'profile', value: '个人中心' },
			{ key: 'logout', value: '退出登录' },
		],
	})

	const handleSelectMenu = (path: string) => {
		activePath.value = path
	}

	const handleUserCommand = (command: string) => {
		console.log('用户操作:', command)
	}
</script>
```

### BackgroundLogin 登录组件

一个功能完整的登录页面组件，提供开箱即用的登录界面：

**🎨 界面配置**

- 自定义容器大小和背景样式
- 多种布局方式（左对齐、居中、右对齐）
- 响应式设计，适配不同屏幕尺寸

**📝 表单功能**

- 灵活的账号字段配置（用户名、密码、验证码）
- 内置表单验证规则
- 可自定义字段显示/隐藏
- 可自定义占位符文本

**⚙️ 自定义选项**

- 可自定义登录标题
- 可自定义提交按钮文案
- 支持验证码功能

#### 基础用法

```vue
<template>
	<ts-background-login
		title="系统登录"
		submit-label="立即登录"
		layout="center"
		:account="accountConfig"
		@submit="handleSubmit"
		@get-code="handleGetCode"
	/>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const accountConfig = ref({
		username: {
			show: true,
			field: 'username',
			placeholder: '请输入用户名',
			btnLabel: '用户名',
			validate: { required: true, message: '用户名不能为空', trigger: 'blur' },
		},
		password: {
			show: true,
			field: 'password',
			placeholder: '请输入密码',
			validate: { required: true, message: '密码不能为空', trigger: 'blur' },
		},
		code: {
			show: true,
			field: 'code',
			placeholder: '请输入验证码',
			validate: { required: true, message: '验证码不能为空', trigger: 'blur' },
		},
	})

	const handleSubmit = (form: { username: string; password: string; code?: string }) => {
		console.log('登录信息：', form)
		// 处理登录逻辑
	}

	const handleGetCode = (form: { username: string }) => {
		console.log('获取验证码：', form)
		// 处理获取验证码逻辑
	}
</script>
```

## 全局配置

### setGlobalConfig

设置组件库的全局配置，影响所有组件的默认行为。

```typescript
import { setGlobalConfig, themeModeEnum } from '@tsoul/component-private'

setGlobalConfig({
	theme: themeModeEnum.light, // 主题模式
	themeConfig: {
		// 主题配置
		show: true, // 是否显示主题切换
		showAnimation: true, // 是否显示切换动画
		AnimationDuration: 500, // 动画持续时间(ms)
	},
	activeLanguage: 'zh-CN', // 当前激活语言
	language: {
		// 语言配置
		show: true, // 是否显示语言切换
		trigger: 'click', // 触发方式
		dropdownMenu: [
			// 语言选项
			{ key: 'zh-CN', value: '简体中文' },
			{ key: 'en-US', value: 'English' },
		],
	},
	uiConfigProvider: {
		// UI配置
		size: 'default', // 组件尺寸
		button: { autoInsertSpace: true }, // 按钮配置
	},
	globalTitle: 'Web Boot', // 全局标题
})
```

## API 文档

### BackgroundLayout Props

#### 基础配置

| 属性名              | 类型                  | 默认值     | 说明         |
| ------------------- | --------------------- | ---------- | ------------ |
| containerSize       | object/string         | '{}'       | 容器大小配置 |
| containerBackground | object/string         | '{}'       | 容器背景配置 |
| layout              | 'defaults'/'vertical' | 'defaults' | 布局模式     |
| isMobile            | boolean/string        | undefined  | 是否为移动端 |

#### 菜单配置

| 属性名         | 类型           | 默认值    | 说明                 |
| -------------- | -------------- | --------- | -------------------- |
| menuList       | array/string   | '[]'      | 菜单列表（必填）     |
| activePath     | string         | undefined | 当前激活的路径       |
| activeTags     | array/string   | undefined | 激活的标签列表       |
| menuMode       | 'light'/'dark' | undefined | 菜单主题模式         |
| isCollapse     | boolean/string | undefined | 是否折叠菜单         |
| isAllOpen      | boolean/string | undefined | 是否默认展开所有菜单 |
| isUniqueOpened | boolean/string | undefined | 是否开启手风琴效果   |
| isBreadcrumb   | boolean/string | undefined | 是否显示面包屑导航   |

#### 标签页配置

| 属性名             | 类型           | 默认值    | 说明                   |
| ------------------ | -------------- | --------- | ---------------------- |
| isTagsView         | boolean/string | undefined | 是否开启标签页视图     |
| isTagsViewIcon     | boolean/string | undefined | 是否显示标签页图标     |
| tagsShowNum        | number/string  | 10        | 标签页最大显示数量     |
| isCacheTagsView    | boolean/string | true      | 是否缓存标签页到本地   |
| isSortableTagsView | boolean/string | true      | 是否开启标签页拖拽排序 |

#### 功能配置

| 属性名         | 类型           | 默认值            | 说明             |
| -------------- | -------------- | ----------------- | ---------------- |
| setting        | object/string  | '{"enable":true}' | 设置面板配置     |
| settingVisible | boolean/string | false             | 设置面板显示状态 |
| fullScreen     | object/string  | '{"show":true}'   | 全屏功能配置     |
| userAvatar     | object/string  | '{}'              | 用户头像配置     |
| watermark      | object/string  | '{}'              | 水印配置         |

#### 页脚配置

| 属性名        | 类型           | 默认值                        | 说明         |
| ------------- | -------------- | ----------------------------- | ------------ |
| isFooter      | boolean/string | true                          | 是否显示页脚 |
| footerCompany | string         | '漠轻阴（郁金香）能力不大...' | 公司名称     |
| footerRecord  | string         | '京ICP备17012835号-1'         | 备案信息     |

#### Events

| 事件名      | 参数类型 | 说明             |
| ----------- | -------- | ---------------- |
| selectMenu  | string   | 菜单选择事件     |
| commandUser | string   | 用户操作命令事件 |
| tagRefresh  | string   | 标签页刷新事件   |
| changeProp  | any      | 属性变化事件     |

### BackgroundLogin Props

| 属性名              | 类型                    | 默认值   | 说明         |
| ------------------- | ----------------------- | -------- | ------------ |
| containerSize       | object/string           | {...}    | 容器大小配置 |
| containerBackground | object/string           | {...}    | 容器背景配置 |
| account             | object/string           | {...}    | 账号配置     |
| title               | string                  | '登录'   | 标题文案     |
| submitLabel         | string                  | '登录'   | 提交按钮文案 |
| layout              | 'left'/'center'/'right' | 'center' | 布局方式     |

#### Events

| 事件名  | 参数类型 | 说明         |
| ------- | -------- | ------------ |
| submit  | object   | 提交登录表单 |
| getCode | object   | 获取验证码   |

## 高级配置

### 菜单数据结构

```typescript
interface Menu {
	path: string // 路由路径
	title: string // 菜单标题
	icon?: string // 菜单图标
	affix?: boolean // 是否固定标签页
	redirect?: string // 重定向路径
	isShowFooter?: boolean // 是否显示页脚
	children?: Menu[] // 子菜单
	parentPath?: string // 父菜单路径
}
```

### 容器配置

```typescript
// 容器大小配置
interface ContainerSize {
	height: string // 容器高度
	width: string // 容器宽度
	style: object // 自定义样式
}

// 容器背景配置
interface ContainerBackground {
	background: string // 背景图片或颜色
	opacity: number // 透明度
	style: object // 自定义样式
}
```

### 用户头像配置

```typescript
interface UserAvatar {
	show?: boolean // 是否显示
	trigger?: 'click' | 'hover' // 触发方式
	name?: string // 用户名
	avatar?: string // 头像地址
	to?: string // 传送到的节点
	dropdownMenu?: Array<{
		// 下拉菜单
		key: string
		value: string
	}>
}
```

### 水印配置

```typescript
interface Watermark {
	text?: string // 水印文字
	fontFamily?: string // 字体，默认 Arial
	size?: string // 字体大小，默认 14px
	color?: string // 字体颜色
	rotate?: number // 旋转角度，默认 -12
}
```

## Web Components 支持

组件库支持作为 Web Components 使用，所有属性都支持字符串格式传入：

```html
<ts-background-layout
	menu-list='[{"path":"/home","title":"首页","icon":"home"}]'
	active-path="/home"
	setting='{"enable":true}'
>
</ts-background-layout>
```

## 开发相关

### 依赖要求

- Vue 3.5.17+
- Element Plus 2.10.4+
- Node.js 16+

### 本地开发

```bash
# 克隆项目
git clone https://github.com/MQYForverT/web-boot.git

# 安装依赖
pnpm install

# 启动开发服务器
pnpm start

# 构建组件库
pnpm build

# 运行测试
pnpm test
```

## 更多信息

- [在线文档](https://mqyforvert.github.io/web-boot/templates/)
- [问题反馈](https://github.com/MQYForverT/web-boot/issues)
- [更新日志](https://github.com/MQYForverT/web-boot/blob/main/CHANGELOG.md)

## License

ISC
