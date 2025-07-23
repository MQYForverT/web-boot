# 环境要求

## 系统要求

### 操作系统

- **Windows**: 10 或更高版本
- **macOS**: 10.15 或更高版本
- **Linux**: Ubuntu 18.04+ / CentOS 7+ / 其他主流发行版

### 硬件要求

- **内存**: 最低 4GB，推荐 8GB 或更高
- **存储**: 至少 2GB 可用空间
- **处理器**: 支持 64 位架构

## 软件环境

### Node.js

**版本要求**: 22.17.1 或更高版本

#### 安装方法

**Windows**:

1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载 LTS 版本安装包
3. 运行安装程序，按提示完成安装

**macOS**:

```bash
# 使用 Homebrew
brew install node

# 或使用 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts
```

**Linux**:

```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# CentOS/RHEL
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
sudo yum install -y nodejs
```

#### 验证安装

```bash
node --version
npm --version
```

### pnpm

**版本要求**: 10.13.1 或更高版本

#### 安装方法

::: code-group

```bash [npm]
npm install -g pnpm
```

```bash [官方脚本 (推荐)]
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

```powershell [Windows PowerShell]
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

:::

#### 验证安装

```bash
pnpm --version
```

### Git

**版本要求**: 2.0 或更高版本

#### 安装方法

**Windows**:

1. 访问 [Git 官网](https://git-scm.com/)
2. 下载安装包并运行

**macOS**:

```bash
# 使用 Homebrew
brew install git

# 或使用官方安装包
# 访问 https://git-scm.com/download/mac
```

**Linux**:

```bash
# Ubuntu/Debian
sudo apt-get install git

# CentOS/RHEL
sudo yum install git
```

#### 验证安装

```bash
git --version
```

## 开发工具

### VS Code

**推荐版本**: 1.80.0 或更高版本

#### 安装方法

1. 访问 [VS Code 官网](https://code.visualstudio.com/)
2. 下载对应系统的安装包
3. 运行安装程序

#### 必需插件

安装以下插件以获得最佳开发体验：

1. **ESLint** - JavaScript 代码检查
   - 插件 ID: `dbaeumer.vscode-eslint`
   - 记得切换到预发布版本以获得最新功能

2. **Stylelint** - CSS 代码检查
   - 插件 ID: `stylelint.vscode-stylelint`

3. **Prettier** - 代码格式化
   - 插件 ID: `esbenp.prettier-vscode`

4. **Prettier ESLint** - 解决格式规则冲突
   - 插件 ID: `rvest.vs-code-prettier-eslint`

5. **UnoCSS** - 原子化 CSS 支持
   - 插件 ID: `antfu.unocss`

#### 推荐插件

1. **中文语言包** - `MS-CEINTL.vscode-language-pack-zh-hans`
2. **GitLens** - Git 增强功能 - `eamodio.gitlens`
3. **Vitest** - 测试工具 - `vitest.explorer`
4. **Vue** - Vue 语法支持 - `Vue.volar`
5. **Markdown All in One** - Markdown 支持 - `yzhang.markdown-all-in-one`
6. **IntelliCode** - 代码补全 - `VisualStudioExptTeam.vscodeintellicode`

## 环境配置

### 配置 VS Code Shell 命令

某些插件（如 `vite-plugin-vue-devtools`、`vite-plugin-react-click-to-component`）需要 VS Code 配置 shell 命令支持：

1. 启动 VS Code
2. 打开命令面板 (`Cmd/Ctrl + Shift + P`)
3. 输入 "shell 命令" 查找 "Shell 命令：在 PATH 中安装 'code' 命令"
4. 重新启动终端使新的 PATH 值生效

### 配置 Git

```bash
# 设置用户信息
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 设置默认分支名
git config --global init.defaultBranch main
```

## 验证环境

运行以下命令验证环境是否正确配置：

```bash
# 检查 Node.js 版本
node --version

# 检查 pnpm 版本
pnpm --version

# 检查 Git 版本
git --version

# 检查 VS Code 命令是否可用
code --version
```

## 常见问题

### Node.js 版本过低

如果遇到 Node.js 版本过低的问题，请升级到 22.17.1 或更高版本。

### pnpm 命令未找到

确保 pnpm 已正确安装并添加到系统 PATH 中。

### VS Code 插件不生效

如果 ESLint、Stylelint 等插件不生效：

1. 重启插件服务器：`Cmd/Ctrl + Shift + P` → 输入 "Restart ESLint Server"
2. 卸载并重新安装插件
3. 检查项目配置文件是否正确

### 权限问题

在某些系统上可能需要使用 `sudo` 来安装全局包：

```bash
sudo npm install -g pnpm
```
