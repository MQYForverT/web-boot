# Create WebBoot Template CLI

这是一个用于生成 Vue/React/Svelte 项目模板的命令行工具，提供智能化的文件管理和自动化配置。

## 功能特性

### 🎯 智能文件管理

1. **环境变量自动配置**
   - 自动复制 `.env`、`.env.development`、`.env.production` 到项目根目录
   - 自动清理 `vite.config.ts` 中的 `envDir` 配置

2. **UnoCSS 配置自动复制**
   - 自动复制 `uno.config.ts` 配置文件到项目根目录

3. **类型定义智能迁移**
   - 将 `templates/types/` 目录下的文件复制到项目的 `src/` 目录
   - 自动更新 `tsconfig.json`，删除不必要的类型引用
   - 无需手动配置路径，TypeScript 自动识别

4. **配置文件优化**
   - 自动清理 `vite.config.ts` 中的 `envDir` 配置和相关注释
   - 自动更新 `tsconfig.json`，删除 `../types/route.d.ts` 引用
   - 清理可能的语法错误（尾随逗号等）

### 🚀 支持多框架模板

- **Vue 3** + TypeScript + Vite + Element Plus
- **React 19** + TypeScript + Vite + Ant Design
- **Svelte 5** + TypeScript + Vite + 原生组件

### 📦 项目配置继承

- 继承基础 TypeScript 配置（tsconfig.base.json）
- 继承基础 ESLint 配置
- 继承基础 Stylelint 配置
- 继承基础 Vite 配置

## 实现细节

### 1. 项目创建流程

```javascript
async function create() {
	// 1. 获取项目信息（名称、模板类型、包管理器）
	// 2. 获取模板路径和创建目标目录
	// 3. 创建项目目录
	// 4. 生成并写入 package.json
	// 5. 复制模板文件
	// 6. 复制公共配置文件（uno.config.ts 和环境变量）
	// 7. 清理 vite.config.ts（删除 envDir 配置）
	// 8. 复制类型定义文件到 src 目录
	// 9. 更新 tsconfig.json（删除 types 引用）
	// 10. 显示成功信息和后续步骤
}
```

### 2. 智能文件管理

#### 环境变量文件处理

```javascript
// 从 templates 目录复制环境变量文件
const envFiles = ['.env', '.env.development', '.env.production']
const copyTasks = envFiles.map(async (envFile) => {
	const sourcePath = path.join(packageRoot, envFile)
	if (await fs.pathExists(sourcePath)) {
		await fs.copy(sourcePath, path.join(targetDir, envFile))
	}
})
await Promise.all(copyTasks)
```

#### 类型定义处理

```javascript
// 复制 types 目录下的所有文件到 src 目录（不保留 types 文件夹结构）
const templatesTypesDir = path.join(packageRoot, 'types')
const targetSrcDir = path.join(targetDir, 'src')

const typeFiles = await fs.readdir(templatesTypesDir)
const copyTasks = typeFiles.map(async (file) => {
	const sourcePath = path.join(templatesTypesDir, file)
	const targetPath = path.join(targetSrcDir, file)

	if ((await fs.stat(sourcePath)).isFile()) {
		await fs.copy(sourcePath, targetPath)
	}
})
await Promise.all(copyTasks)
```

#### 配置文件优化

```javascript
// 清理 vite.config.ts
content = content
	.replace(/\s*\/\/[^\n]*环境变量[^\n]*\n/g, '') // 删除注释
	.replace(/\s*envDir:\s*resolve\([^)]+\),?\n?/g, '') // 删除 envDir 配置
	.replace(/,(\s*})/g, '$1') // 清理尾随逗号

// 更新 tsconfig.json
content = content
	.replace(/,?\s*"\.\.\/types\/route\.d\.ts"/g, '') // 删除类型引用
	.replace(/,(\s*])/g, '$1') // 清理尾随逗号
```

### 3. 性能优化

- 使用 `Promise.all` 并行处理文件操作
- 避免不必要的文件存在性检查
- 优化正则表达式匹配性能

## 使用方法

### 1. 创建项目（推荐方式）

```bash
# 方式一：npx 直接创建（推荐，无需安装）
npx @tsoul/create-webboot-template

# 方式二：使用 pnpm 创建
pnpm create @tsoul/webboot-template

# 方式三：全局安装后使用
npm install -g @tsoul/create-webboot-template
create-webboot-template
```

### 2. 交互流程

脚手架会引导您完成：

- 输入项目名称（只能包含小写字母、数字和连字符）
- 选择项目模板（Vue/React/Svelte）
- 选择包管理器（pnpm/npm/yarn，推荐 pnpm）

### 3. 自动化配置

创建完成后，脚手架会自动：

- ✅ 创建完整的项目目录结构
- ✅ 复制环境变量文件到项目根目录
- ✅ 复制 UnoCSS 配置文件
- ✅ 将类型定义文件复制到 `src` 目录
- ✅ 清理和优化 Vite 配置
- ✅ 更新 TypeScript 配置
- ✅ 生成完整的 `package.json`

### 4. 项目结构

创建后的项目包含：

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
├── .env                 # 环境变量（自动复制）
├── .env.development     # 开发环境变量（自动复制）
├── .env.production      # 生产环境变量（自动复制）
├── uno.config.ts        # UnoCSS 配置（自动复制）
├── package.json         # 依赖配置
├── vite.config.ts       # Vite 配置（已优化）
├── tsconfig.json        # TypeScript 配置（已优化）
└── README.md           # 项目说明
```

## 本地开发和测试

### 模拟发布测试

```bash
# 1. 模拟打包（不会实际创建包文件）
npm pack --dry-run

# 2. 本地链接测试
npm link

# 3. 验证链接成功
npm list -g --depth=0 @tsoul/create-webboot-template

# 4. 在新文件夹测试
create-webboot-template

# 5. 测试完毕后清理
npm unlink @tsoul/create-webboot-template
npm uninstall -g @tsoul/create-webboot-template
```

## 注意事项

### 1. 环境要求

- **Node.js**: >= 22.17.1
- **包管理器**: pnpm >= 10.13.1（推荐）

### 2. 模板特性

- 基于 **Vite 6.3** 构建
- **TypeScript 5.8** 支持
- **ESLint + Stylelint + Prettier** 代码规范
- **自动导入** 组件和 API
- **UnoCSS** 原子化 CSS
- **组件库集成**:
  - Vue: Element Plus 2.9
  - React: Ant Design 5.24
  - Svelte: 原生轻量组件

### 3. 开发建议

- 使用 **VS Code** 作为 IDE
- 安装推荐的 VS Code 插件（ESLint、Prettier、UnoCSS）
- 遵循项目的代码规范

### 4. 常见问题

**Q: 环境变量不生效？**
A: 确保变量名以 `VITE_` 开头，重启开发服务器。

**Q: TypeScript 报类型错误？**
A: 确保 `src/route.d.ts` 文件存在，重启 TypeScript 服务器。

**Q: 推荐使用哪种创建方式？**
A: 推荐使用 `npx @tsoul/create-webboot-template`，无需安装，始终最新版本。

## 更新日志

### v1.0.12 - 重大重构

- **🎯 重大更新**: 重构脚手架文件管理逻辑
- **✨ 新增**: 自动复制环境变量文件到项目根目录
- **✨ 新增**: 自动复制 UnoCSS 配置文件
- **✨ 新增**: 类型文件自动迁移到 src 目录
- **⚡ 优化**: 自动清理 vite.config.ts 中的 envDir 配置
- **⚡ 优化**: 自动更新 tsconfig.json 配置
- **🚀 改进**: 使用 Promise.all 并行处理文件操作，提升性能
- **🐛 修复**: 解决类型文件引用路径问题

### v1.0.0

- 初始版本发布
- 支持 Vue、React、Svelte 三种框架
- 集成完整的开发工具链
- 提供统一的项目结构

## 未来计划

### 功能增强

- [ ] 支持自定义模板配置
- [ ] 支持模板插件系统
- [ ] 支持更多框架（Nuxt、Next.js 等）

### 工具改进

- [ ] 优化错误处理和用户提示
- [ ] 添加单元测试覆盖
- [ ] 添加 CI/CD 自动化流程

### 文档完善

- [ ] 添加详细的 API 文档
- [ ] 添加更多使用示例和最佳实践
- [ ] 添加贡献指南和开发文档
