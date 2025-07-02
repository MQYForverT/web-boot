# Create WebBoot Template CLI

这是一个用于生成 Vue/React/Svelte 项目模板的命令行工具。

## 功能特性

1. 支持多框架模板

   - Vue 3 + TypeScript + Vite
   - React + TypeScript + Vite
   - Svelte + TypeScript + Vite

2. 项目配置继承

   - 继承基础 TypeScript 配置（tsconfig.base.json）
   - 继承基础 ESLint 配置
   - 继承基础 Stylelint 配置
   - 继承基础 Vite 配置

3. 类型定义支持

   - 复制并配置全局类型定义
   - 复制环境变量类型定义
   - 复制路由类型定义
   - 自动更新类型引用路径

4. 环境变量处理
   - 复制环境变量文件到项目根目录
   - 自动更新 vite.config.ts 中的配置

## 实现细节

### 1. 项目创建流程

```javascript
async function create() {
	// 1. 获取项目信息（名称、模板类型）
	// 2. 获取模板路径
	// 3. 创建项目目录
	// 4. 生成并写入 package.json
	// 5. 复制模板文件
	// 6. 复制类型定义文件并更新配置
	// 7. 复制环境变量文件并更新 vite 配置
	// 8. 显示成功信息和后续步骤
}
```

### 2. 类型定义处理

- 复制 types 文件夹
  - env.d.ts：环境变量类型
  - route.d.ts：路由类型
- 复制 internal/utils/global.d.ts
- 复制 tsconfig.base.json
- 更新 tsconfig.json 中的引用路径

### 3. 环境变量处理

- 复制环境变量文件
  - .env
  - .env.development
  - .env.production
- 更新 vite.config.ts
  - 删除 envDir 配置
  - 删除相关注释

### 4. 依赖处理

- 处理 @mqy 相关依赖
  - 从 workspace:^ 改为固定版本
  - 版本号从项目根目录的 package.json 中读取

## 使用方法

1. 安装

```bash
npm install create-webboot-template -g
```

2. 创建项目

```bash
create-webboot-template
```

3. 按提示操作
   - 输入项目名称
   - 选择项目模板（Vue/React/Svelte）

## 注意事项

1. 项目要求

   - Node.js >= 20.11.0
   - pnpm >= 9.6.0

2. 模板特性

   - 基于 Vite 构建
   - TypeScript 支持
   - ESLint + Stylelint + Prettier
   - 自动导入
   - 原子化 CSS (UnoCSS)
   - 组件库集成
     - Vue: Element Plus
     - React: Ant Design
     - Svelte: 原生组件

3. 开发建议
   - 使用 VS Code 作为 IDE
   - 安装推荐的 VS Code 插件
   - 遵循项目的代码规范

## 未来计划

1. 功能增强

   - [ ] 支持自定义模板
   - [ ] 支持模板配置选项
   - [ ] 支持插件系统

2. 工具改进

   - [ ] 优化错误处理
   - [ ] 添加单元测试
   - [ ] 添加 CI/CD 支持

3. 文档完善
   - [ ] 添加详细的 API 文档
   - [ ] 添加更多使用示例
   - [ ] 添加贡献指南
