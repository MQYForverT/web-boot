import path from 'path'
import logger from './utils/logger.js'
import { promptForProjectInfo } from './utils/prompt.js'
import { getTemplatePath, generatePackageJson } from './utils/templateManager.js'
import { createProjectDir, writePackageJson, copyTemplate } from './utils/fileOperations.js'
import fs from 'fs-extra'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// 获取包根目录路径
const packageRoot = path.resolve(__dirname, '..')

/**
 * 获取项目根目录
 * 如果是从git仓库安装的，则返回git仓库根目录
 * 否则返回包根目录
 * @returns {string} 项目根目录路径
 */
function getProjectRoot() {
	try {
		// 尝试从当前目录向上查找git仓库根目录
		const gitRoot = path.resolve(
			execSync('git rev-parse --show-toplevel', {
				cwd: __dirname,
				stdio: ['ignore', 'pipe', 'ignore'],
				encoding: 'utf-8',
			}).trim(),
		)
		return gitRoot
	} catch {
		// 如果不是git仓库，则返回包根目录
		return packageRoot
	}
}

// 获取项目根目录
const projectRoot = getProjectRoot()

/**
 * 复制根目录的配置文件
 * @param {string} targetDir 目标目录
 */
async function copyRootConfigFiles(targetDir) {
	try {
		const filesToCopy = ['uno.config.ts'] // 将来可以扩展更多文件

		for (const file of filesToCopy) {
			const sourcePath = path.join(projectRoot, file)
			if (await fs.pathExists(sourcePath)) {
				await fs.copy(sourcePath, path.join(targetDir, file))
			} else {
				logger.warn(`根配置文件 ${file} 未找到，跳过复制。`)
			}
		}
	} catch (err) {
		throw new Error(`复制根配置文件失败: ${err.message}`)
	}
}

/**
 * 复制环境变量文件并更新 vite.config.ts
 * @param {string} targetDir 目标目录
 */
async function copyEnvAndUpdateConfig(targetDir) {
	try {
		// 复制环境变量文件
		const envFiles = ['.env', '.env.development', '.env.production']
		let foundEnvFiles = false

		for (const file of envFiles) {
			const sourcePath = path.join(projectRoot, file)
			if (await fs.pathExists(sourcePath)) {
				await fs.copy(sourcePath, path.join(targetDir, file))
				foundEnvFiles = true
			}
		}

		// 如果没有找到环境变量文件，则创建一个简单的版本
		if (!foundEnvFiles) {
			// 创建一个基本的 .env 文件
			await fs.writeFile(
				path.join(targetDir, '.env'),
				'# 环境变量\n' + 'VITE_APP_TITLE=Web Boot\n' + 'VITE_APP_BASE_URL=/\n',
			)
		}

		// 更新 vite.config.ts
		const viteConfigPath = path.join(targetDir, 'vite.config.ts')
		if (await fs.pathExists(viteConfigPath)) {
			let content = await fs.readFile(viteConfigPath, 'utf-8')

			// 删除 envDir 配置及其注释
			content = content.replace(/\s*\/\/[^\n]*环境变量[^\n]*\n\s*envDir:\s*resolve\([^)]+\),/, '')

			await fs.writeFile(viteConfigPath, content)
		}
	} catch (err) {
		throw new Error(`处理环境变量文件失败: ${err.message}`)
	}
}

/**
 * 复制类型定义文件并更新 tsconfig.json
 * @param {string} targetDir 目标目录
 * @param {string} template 模板名称
 */
async function copyTypeDefinitions(targetDir, template) {
	try {
		// 确保 types 目录存在
		const targetTypesDir = path.join(targetDir, 'types')
		await fs.ensureDir(targetTypesDir)

		// 尝试从项目根目录复制 types 文件夹
		const typesDir = path.join(projectRoot, 'types')
		let foundTypesFiles = false

		if (await fs.pathExists(typesDir)) {
			await fs.copy(typesDir, targetTypesDir)
			foundTypesFiles = true
		}

		// 如果没有找到 types 文件，则创建基本的类型定义文件
		if (!foundTypesFiles) {
			// 创建 env.d.ts
			await fs.writeFile(
				path.join(targetTypesDir, 'env.d.ts'),
				'/// <reference types="vite/client" />\n\n' +
					'interface ImportMetaEnv {\n' +
					'  readonly VITE_APP_TITLE: string\n' +
					'  readonly VITE_APP_BASE_URL: string\n' +
					'}\n\n' +
					'interface ImportMeta {\n' +
					'  readonly env: ImportMetaEnv\n' +
					'}\n',
			)

			// 创建 route.d.ts
			await fs.writeFile(
				path.join(targetTypesDir, 'route.d.ts'),
				'declare namespace Route {\n' +
					'  interface Meta {\n' +
					'    title?: string\n' +
					'    icon?: string\n' +
					'    hidden?: boolean\n' +
					'    roles?: string[]\n' +
					'    keepAlive?: boolean\n' +
					'  }\n\n' +
					'  interface Item {\n' +
					'    path: string\n' +
					'    name?: string\n' +
					'    redirect?: string\n' +
					'    component?: any\n' +
					'    meta?: Meta\n' +
					'    children?: Item[]\n' +
					'  }\n' +
					'}\n',
			)
		}

		// 确保 types/internal 目录存在
		const internalTypesDir = path.join(targetDir, 'types/internal')
		await fs.ensureDir(internalTypesDir)

		// 尝试复制 global.d.ts 文件
		const globalDtsPath = path.join(projectRoot, 'internal/utils/global.d.ts')
		if (await fs.pathExists(globalDtsPath)) {
			await fs.copy(globalDtsPath, path.join(internalTypesDir, 'global.d.ts'))
		} else {
			// 如果项目中没有 global.d.ts，则创建一个简单的版本
			await fs.writeFile(
				path.join(internalTypesDir, 'global.d.ts'),
				"declare module 'nprogress'\ndeclare module 'qs'\n",
			)
		}

		// 尝试复制 tsconfig.base.json
		const baseTsconfigPath = path.join(projectRoot, 'tsconfig.base.json')
		if (await fs.pathExists(baseTsconfigPath)) {
			await fs.copy(baseTsconfigPath, path.join(targetDir, 'tsconfig.base.json'))
		} else {
			// 如果项目中没有 tsconfig.base.json，则创建一个简单的版本
			await fs.writeFile(
				path.join(targetDir, 'tsconfig.base.json'),
				'{\n' +
					'  "compilerOptions": {\n' +
					'    "target": "ESNext",\n' +
					'    "sourceMap": false,\n' +
					'    "removeComments": false,\n' +
					'    "useDefineForClassFields": true,\n' +
					'    "esModuleInterop": true,\n' +
					'    "allowSyntheticDefaultImports": true,\n' +
					'    "strictNullChecks": true,\n' +
					'    "forceConsistentCasingInFileNames": true,\n' +
					'    "module": "ESNext",\n' +
					'    "lib": [],\n' +
					'    "skipLibCheck": true,\n' +
					'    "verbatimModuleSyntax": true,\n' +
					'    "moduleResolution": "node",\n' +
					'    "allowImportingTsExtensions": true,\n' +
					'    "resolveJsonModule": true,\n' +
					'    "isolatedModules": true,\n' +
					'    "noEmit": true,\n' +
					'    "jsx": "preserve",\n' +
					'    "experimentalDecorators": true,\n' +
					'    "emitDecoratorMetadata": true,\n' +
					'    "strict": true,\n' +
					'    "noUnusedLocals": true,\n' +
					'    "noUnusedParameters": true,\n' +
					'    "noFallthroughCasesInSwitch": true,\n' +
					'    "baseUrl": "."\n' +
					'  }\n' +
					'}\n',
			)
		}

		// 更新 tsconfig.json 中的类型引用路径
		const tsconfigPath = path.join(targetDir, 'tsconfig.json')
		if (await fs.pathExists(tsconfigPath)) {
			// 读取原始文件内容
			const tsconfigContent = await fs.readFile(tsconfigPath, 'utf-8')

			// 移除注释并解析 JSON
			const tsconfig = JSON.parse(
				tsconfigContent
					.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => (g ? '' : m))
					.replace(/,(\s*[}\]])/g, '$1'), // 移除尾随逗号
			)

			// 更新 extends 路径
			tsconfig.extends = './tsconfig.base.json'

			// 根据不同模板设置不同的类型引用
			const baseTypes = ['vite/client']
			if (template === 'vue') {
				baseTypes.push('element-plus/global')
			}

			tsconfig.compilerOptions.types = [
				...baseTypes,
				'./types/env.d.ts',
				'./types/route.d.ts',
				'./types/internal/global.d.ts',
			]

			// 保持原有的格式写回文件
			const updatedContent = tsconfigContent
				// 更新 extends 路径
				.replace(/"extends"\s*:\s*"[^"]*"/, `"extends": "./tsconfig.base.json"`)
				// 更新 types 数组
				.replace(
					/"types"\s*:\s*\[[^\]]*\]/,
					`"types": ${JSON.stringify(tsconfig.compilerOptions.types, null, '\t\t\t')}`,
				)

			await fs.writeFile(tsconfigPath, updatedContent)
		}
	} catch (err) {
		throw new Error(`复制类型定义文件失败: ${err.message}`)
	}
}

/**
 * 创建新项目
 */
async function create() {
	try {
		// 1. 获取项目信息
		const { projectName, template, packageManager } = await promptForProjectInfo()

		// 2. 获取模板路径
		const templateDir = getTemplatePath(template)
		const targetDir = path.resolve(process.cwd(), projectName)

		// 3. 创建项目目录
		await createProjectDir(targetDir)

		// 4. 生成并写入 package.json
		const packageJson = await generatePackageJson(projectName, template)
		await writePackageJson(targetDir, packageJson)

		// 5. 复制模板文件
		await copyTemplate(templateDir, targetDir)

		// 新增步骤：复制根目录配置文件
		await copyRootConfigFiles(targetDir)

		// 6. 复制类型定义文件并更新配置
		await copyTypeDefinitions(targetDir, template)

		// 7. 复制环境变量文件并更新 vite 配置
		await copyEnvAndUpdateConfig(targetDir)

		// 8. 显示成功信息和后续步骤
		logger.success(`项目 ${projectName} 创建成功！

请执行以下命令开始开发：

  cd ${projectName}
  ${packageManager} install
  ${packageManager} run dev
`)
	} catch (err) {
		logger.error(`创建项目失败: ${err.message}`)
		process.exit(1)
	}
}

export { create }
