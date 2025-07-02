# 快速开始

## 环境要求

在开始使用 Web Boot 之前，请确保您的开发环境满足以下要求：

### 必需环境

- **Node.js**: 20.11.0+
- **包管理器**: pnpm 9.6.0+

### 推荐环境

- **编辑器**: VS Code
- **操作系统**: Windows 10+ / macOS / Linux

## 使用脚手架

### 1. 安装脚手架

```bash
# 全局安装脚手架工具
npm install @tsoul/create-webboot-template -g
# 或
pnpm add -g @tsoul/create-webboot-template
```

### 2. 创建项目

```bash
# 创建新项目
npm create-webboot-template
# 或
pnpm create-webboot-template
```

按照提示输入以下信息：

- 项目名称
- 选择框架模板（Vue/React/Svelte）

### 3. 启动项目

```bash
# 进入项目目录
cd your-project-name

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 从源码开始

如果你想参与 Web Boot 的开发或需要修改模板，可以从源码开始：

### 1. 克隆项目

```bash
git clone https://github.com/MQYForverT/web-boot.git
cd web-boot
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发服务器

```bash
# 启动私有组件开发服务器
pnpm dev:private

# 启动公共组件开发服务器
pnpm dev:public
```

## 项目结构

```
web-boot/
├── components/          # 组件库
│   ├── private/        # 私有组件（Vue + Element Plus）
│   └── public/         # 公共组件（基础组件）
├── templates/          # 项目模板
│   ├── vue/           # Vue 模板
│   ├── react/         # React 模板
│   └── svelte/        # Svelte 模板
├── internal/          # 内部工具
│   ├── eslint-config/ # ESLint 配置
│   ├── stylelint-config/ # Stylelint 配置
│   ├── vite-config/   # Vite 配置
│   └── utils/         # 工具函数
├── docx/              # 文档站点
└── scripts/           # 构建脚本
```

## 开发工具配置

### VS Code 插件

为了获得最佳的开发体验，建议安装以下 VS Code 插件：

#### 必需插件

1. **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** - JavaScript 代码检查
2. **[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)** - CSS 代码检查
3. **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** - 代码格式化
4. **[UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)** - 原子化 CSS 支持

#### 推荐插件

1. **[中文语言包](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)**
2. **[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)** - Git 增强
3. **[Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)** - 测试工具
4. **[Vue](https://marketplace.visualstudio.com/items?itemName=Vue.volar)** - Vue 语法支持

## 下一步

- 查看 [环境要求](./requirements.md) 了解详细的环境配置
- 了解 [项目结构](./structure.md) 的详细说明
- 学习 [开发工具](./dev-tools.md) 的使用方法
- 探索 [模板文档](../templates/) 了解各框架模板的特性
