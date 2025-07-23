# 快速开始

## 环境要求

在开始使用 Web Boot 之前，请确保您的开发环境满足以下要求：

### 必需环境

- **Node.js**: 22.17.1+
- **包管理器**: pnpm 10.13.1+

### 推荐环境

- **编辑器**: VS Code
- **操作系统**: Windows 10+ / macOS / Linux

## 使用脚手架

### 1. 创建项目（推荐方式）

::: code-group

```bash [npx (推荐)]
# 无需安装，直接运行脚手架
npx @tsoul/create-webboot-template
```

```bash [pnpm]
# 使用 pnpm 创建
pnpm create @tsoul/webboot-template
```

```bash [npm]
# 全局安装后使用
npm install -g @tsoul/create-webboot-template
create-webboot-template
```

:::

### 2. 脚手架交互流程

脚手架会引导您完成以下步骤：

1. **输入项目名称**：只能包含小写字母、数字和连字符
2. **选择框架模板**：Vue/React/Svelte
3. **选择包管理器**：pnpm（推荐）/npm/yarn

### 3. 自动化配置

脚手架会自动为您完成：

- ✅ **项目结构创建**：生成完整的目录结构
- ✅ **环境变量配置**：自动创建 `.env`、`.env.development`、`.env.production` 文件
- ✅ **UnoCSS 配置**：自动复制 `uno.config.ts` 配置文件
- ✅ **类型定义**：将类型文件复制到 `src` 目录，无需额外引用
- ✅ **配置优化**：自动清理 `vite.config.ts` 中的 `envDir` 配置
- ✅ **TypeScript 优化**：自动更新 `tsconfig.json`，删除不必要的类型引用

### 4. 启动项目

```bash
# 进入项目目录
cd your-project-name

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 项目结构

创建后的项目包含完整的目录结构：

```
your-project-name/
├── src/
│   ├── api/              # API 接口
│   ├── assets/           # 静态资源
│   ├── config/           # 配置文件
│   ├── layouts/          # 布局组件
│   ├── pages/            # 页面组件
│   ├── routers/          # 路由配置
│   ├── stores/           # 状态管理
│   ├── styles/           # 样式文件
│   ├── route.d.ts        # 路由类型定义（自动复制）
│   ├── App.*            # 根组件
│   └── main.*           # 入口文件
├── public/              # 静态资源
├── .env                 # 环境变量（自动创建）
├── .env.development     # 开发环境变量（自动创建）
├── .env.production      # 生产环境变量（自动创建）
├── uno.config.ts        # UnoCSS 配置（自动复制）
├── package.json         # 依赖配置
├── vite.config.ts       # Vite 配置（已优化）
├── tsconfig.json        # TypeScript 配置（已优化）
└── README.md           # 项目说明
```

## 环境变量配置

脚手架会自动为您创建三个环境变量文件：

### `.env` - 基础环境变量

```bash
# 基础环境变量
VITE_APP_TITLE=Web Boot
VITE_APP_BASE_URL=/
```

### `.env.development` - 开发环境变量

```bash
# 开发环境变量
VITE_APP_TITLE=Web Boot (Development)
VITE_APP_BASE_URL=/
VITE_APP_API_URL=http://localhost:3000/api
VITE_APP_ENV=development
```

### `.env.production` - 生产环境变量

```bash
# 生产环境变量
VITE_APP_TITLE=Web Boot
VITE_APP_BASE_URL=/
VITE_APP_API_URL=https://api.yourdomain.com
VITE_APP_ENV=production
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

## 常见问题

### 脚手架相关

**Q: 推荐使用哪种方式创建项目？**
A: 推荐使用 `npx @tsoul/create-webboot-template`，无需全局安装，始终使用最新版本。

**Q: 为什么选择 pnpm 作为包管理器？**
A: pnpm 具有更快的安装速度、更小的磁盘占用和更好的依赖管理。

**Q: 环境变量不生效怎么办？**
A: 确保变量名以 `VITE_` 开头，文件名正确，重启开发服务器。

### 类型定义相关

**Q: TypeScript 报类型错误怎么办？**
A: 确保 `src/route.d.ts` 文件存在，重启 TypeScript 服务器。

**Q: 为什么类型文件在 src 目录？**
A: 新版本脚手架会自动将类型文件复制到 src 目录，无需在 tsconfig.json 中额外配置。

## 下一步

- 查看 [环境要求](./requirements.md) 了解详细的环境配置
- 了解 [项目结构](./structure.md) 的详细说明
- 学习 [开发工具](./dev-tools.md) 的使用方法
- 探索 [模板文档](../templates/) 了解各框架模板的特性
