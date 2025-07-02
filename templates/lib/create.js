import path from 'path'
import logger from './utils/logger.js'
import { promptForProjectInfo } from './utils/prompt.js'
import { getTemplatePath, generatePackageJson } from './utils/templateManager.js'
import { createProjectDir, writePackageJson, copyTemplate } from './utils/fileOperations.js'
import fs from 'fs-extra'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * 复制环境变量文件并更新 vite.config.ts
 * @param {string} targetDir 目标目录
 * @param {string} rootDir 项目根目录路径
 */
async function copyEnvAndUpdateConfig(targetDir, rootDir) {
	try {
		// 复制环境变量文件
		const envFiles = ['.env', '.env.development', '.env.production']
		for (const file of envFiles) {
			const sourcePath = path.join(rootDir, file)
			if (await fs.pathExists(sourcePath)) {
				await fs.copy(sourcePath, path.join(targetDir, file))
				logger.success(`复制 ${file} 成功`)
			}
		}

		// 更新 vite.config.ts
		const viteConfigPath = path.join(targetDir, 'vite.config.ts')
		if (await fs.pathExists(viteConfigPath)) {
			let content = await fs.readFile(viteConfigPath, 'utf-8')

			// 删除 envDir 配置及其注释
			content = content.replace(/\s*\/\/[^\n]*环境变量[^\n]*\n\s*envDir:\s*resolve\([^)]+\),/, '')

			await fs.writeFile(viteConfigPath, content)
			logger.success('更新 vite.config.ts 成功')
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
		// 获取项目根目录路径
		const rootDir = path.resolve(__dirname, '../..')

		// 复制项目根目录下的 types 文件夹
		const typesDir = path.join(rootDir, 'types')
		if (await fs.pathExists(typesDir)) {
			await fs.copy(typesDir, path.join(targetDir, 'types'))
			logger.success('复制 types 文件夹成功')
		}

		// 复制 internal/utils/global.d.ts
		const globalDtsPath = path.join(rootDir, 'internal/utils/global.d.ts')
		if (await fs.pathExists(globalDtsPath)) {
			const targetDtsDir = path.join(targetDir, 'types/internal')
			await fs.ensureDir(targetDtsDir)
			await fs.copy(globalDtsPath, path.join(targetDtsDir, 'global.d.ts'))
			logger.success('复制 global.d.ts 成功')
		}

		// 复制 tsconfig.base.json
		const baseTsconfigPath = path.join(rootDir, 'tsconfig.base.json')
		if (await fs.pathExists(baseTsconfigPath)) {
			await fs.copy(baseTsconfigPath, path.join(targetDir, 'tsconfig.base.json'))
			logger.success('复制 tsconfig.base.json 成功')
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
			logger.success('更新 tsconfig.json 成功')
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
		const rootDir = path.resolve(__dirname, '../..')

		// 3. 创建项目目录
		await createProjectDir(targetDir)

		// 4. 生成并写入 package.json
		const packageJson = await generatePackageJson(projectName, template)
		await writePackageJson(targetDir, packageJson)

		// 5. 复制模板文件
		await copyTemplate(templateDir, targetDir)

		// 6. 复制类型定义文件并更新配置
		await copyTypeDefinitions(targetDir, template)

		// 7. 复制环境变量文件并更新 vite 配置
		await copyEnvAndUpdateConfig(targetDir, rootDir)

		// 8. 显示成功信息和后续步骤
		logger.success(`
项目 ${projectName} 创建成功！

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
