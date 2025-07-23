import path from 'path'
import logger from './utils/logger.js'
import { promptForProjectInfo } from './utils/prompt.js'
import { getTemplatePath, generatePackageJson } from './utils/templateManager.js'
import { createProjectDir, writePackageJson, copyTemplate } from './utils/fileOperations.js'
import fs from 'fs-extra'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const packageRoot = path.resolve(__dirname, '..')

/**
 * 复制公共配置文件到项目根目录
 * 包括 uno.config.ts、tsconfig.base.json 和环境变量文件
 * @param {string} targetDir 目标目录
 */
async function copyCommonFiles(targetDir) {
	try {
		// 复制 uno.config.ts 配置文件
		const unoConfigPath = path.join(packageRoot, 'uno.config.ts')
		if (await fs.pathExists(unoConfigPath)) {
			await fs.copy(unoConfigPath, path.join(targetDir, 'uno.config.ts'))
		}

		// 复制 tsconfig.base.json 配置文件
		const tsconfigBasePath = path.join(packageRoot, 'tsconfig.base.json')
		if (await fs.pathExists(tsconfigBasePath)) {
			await fs.copy(tsconfigBasePath, path.join(targetDir, 'tsconfig.base.json'))
		}

		// 从 templates 目录复制环境变量文件
		const envFiles = ['.env', '.env.development', '.env.production']

		const copyTasks = envFiles.map(async (envFile) => {
			const sourcePath = path.join(packageRoot, envFile)
			if (await fs.pathExists(sourcePath)) {
				await fs.copy(sourcePath, path.join(targetDir, envFile))
			}
		})

		await Promise.all(copyTasks)
	} catch (err) {
		throw new Error(`复制公共配置文件失败: ${err.message}`)
	}
}

/**
 * 清理 vite.config.ts，删除 envDir 配置
 * @param {string} targetDir 目标目录
 */
async function cleanupViteConfig(targetDir) {
	try {
		const viteConfigPath = path.join(targetDir, 'vite.config.ts')
		if (!(await fs.pathExists(viteConfigPath))) {
			return // 文件不存在，跳过处理
		}

		let content = await fs.readFile(viteConfigPath, 'utf-8')

		// 删除 envDir 相关的配置和注释
		content = content
			.replace(/\s*\/\/[^\n]*环境变量[^\n]*\n/g, '') // 删除注释
			.replace(/\s*envDir:\s*resolve\([^)]+\),?\n?/g, '') // 删除 envDir 配置
			.replace(/,(\s*})/g, '$1') // 清理尾随逗号

		await fs.writeFile(viteConfigPath, content)
	} catch (err) {
		throw new Error(`清理 vite.config.ts 失败: ${err.message}`)
	}
}

/**
 * 复制类型定义文件到 src 目录
 * 将 templates/types 目录下的文件复制到项目的 src 目录（不保留 types 文件夹结构）
 * @param {string} targetDir 目标目录
 */
async function copyTypeDefinitions(targetDir) {
	try {
		const templatesTypesDir = path.join(packageRoot, 'types')
		const targetSrcDir = path.join(targetDir, 'src')

		await fs.ensureDir(targetSrcDir)

		// 复制 types 目录下的所有文件到 src 目录
		const typeFiles = await fs.readdir(templatesTypesDir)
		const copyTasks = typeFiles.map(async (file) => {
			const sourcePath = path.join(templatesTypesDir, file)
			const targetPath = path.join(targetSrcDir, file)

			// 只复制文件，跳过目录
			if ((await fs.stat(sourcePath)).isFile()) {
				await fs.copy(sourcePath, targetPath)
			}
		})

		await Promise.all(copyTasks)
	} catch (err) {
		throw new Error(`复制类型定义文件失败: ${err.message}`)
	}
}

/**
 * 更新 tsconfig.json 配置
 * 1. 删除对 ../types/route.d.ts 的引用，因为文件已经移动到 src 目录
 * 2. 更新 extends 路径指向根目录的 tsconfig.base.json
 * @param {string} targetDir 目标目录
 */
async function updateTsConfig(targetDir) {
	try {
		const tsconfigPath = path.join(targetDir, 'tsconfig.json')
		if (!(await fs.pathExists(tsconfigPath))) {
			return // 文件不存在，跳过处理
		}

		let content = await fs.readFile(tsconfigPath, 'utf-8')

		// 删除 ../types/route.d.ts 引用
		content = content.replace(/,?\s*"\.\.\/types\/route\.d\.ts"/g, '').replace(/,(\s*])/g, '$1') // 清理尾随逗号

		// 更新 extends 路径，将相对路径改为指向根目录的 tsconfig.base.json
		content = content.replace(/"extends":\s*"[^"]*tsconfig\.base\.json"/g, '"extends": "./tsconfig.base.json"')

		await fs.writeFile(tsconfigPath, content)
	} catch (err) {
		throw new Error(`更新 tsconfig.json 失败: ${err.message}`)
	}
}

/**
 * 创建新项目
 * 主要流程：选择模板 -> 复制文件 -> 配置环境 -> 清理配置
 */
async function create() {
	try {
		// 1. 获取项目信息
		const { projectName, template, packageManager } = await promptForProjectInfo()

		// 2. 获取模板路径和目标路径
		const templateDir = getTemplatePath(template)
		const targetDir = path.resolve(process.cwd(), projectName)

		// 3. 创建项目目录
		await createProjectDir(targetDir)

		// 4. 生成并写入 package.json
		const packageJson = await generatePackageJson(projectName, template)
		await writePackageJson(targetDir, packageJson)

		// 5. 复制模板文件
		await copyTemplate(templateDir, targetDir)

		// 6. 复制公共配置文件（uno.config.ts 和环境变量）
		await copyCommonFiles(targetDir)

		// 7. 清理 vite.config.ts（删除 envDir 配置）
		await cleanupViteConfig(targetDir)

		// 8. 复制类型定义文件到 src 目录
		await copyTypeDefinitions(targetDir)

		// 9. 更新 tsconfig.json（删除 types 引用）
		await updateTsConfig(targetDir)

		// 10. 显示成功信息
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
