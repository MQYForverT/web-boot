import path from 'path'
import fs from 'fs-extra'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 获取 templates 根目录路径
const templatesRoot = path.resolve(__dirname, '../../')

/**
 * 模板配置
 */
const TEMPLATES = {
	vue: {
		name: 'Vue',
		description: 'Vue 3 + TypeScript + Vite',
		path: 'vue',
	},
	react: {
		name: 'React',
		description: 'React + TypeScript + Vite',
		path: 'react',
	},
	svelte: {
		name: 'Svelte',
		description: 'Svelte + TypeScript + Vite',
		path: 'svelte',
	},
}

/**
 * 处理依赖版本
 * @param {Object} dependencies 依赖对象
 * @returns {Object} 处理后的依赖对象
 */
function processDependencies(dependencies) {
	if (!dependencies) return {}

	const processed = {}
	for (const [name, version] of Object.entries(dependencies)) {
		if (name.startsWith('@tsoul/')) {
			processed[name] = 'latest' // 将所有 @tsoul 包的版本设为 latest
		} else {
			processed[name] = version
		}
	}
	return processed
}

/**
 * 获取模板列表
 * @returns {Array<{name: string, value: string, description: string}>}
 */
function getTemplateChoices() {
	return Object.entries(TEMPLATES).map(([key, { name, description }]) => ({
		name,
		value: key,
		description,
	}))
}

/**
 * 获取模板路径
 * @param {string} templateName 模板名称
 * @returns {string}
 * @throws {Error} 当模板不存在时抛出错误
 */
function getTemplatePath(templateName) {
	const template = TEMPLATES[templateName]
	if (!template) {
		throw new Error(`未找到模板: ${templateName}`)
	}

	const templatePath = path.join(templatesRoot, template.path)
	if (!fs.existsSync(templatePath)) {
		throw new Error(`模板目录不存在: ${templatePath}`)
	}

	return templatePath
}

/**
 * 生成项目的 package.json
 * @param {string} projectName 项目名称
 * @param {string} templateName 模板名称
 * @returns {Promise<object>}
 * @throws {Error} 当读取模板 package.json 失败时抛出错误
 */
async function generatePackageJson(projectName, templateName) {
	const templatePath = getTemplatePath(templateName)
	const templatePackageJson = await fs.readJSON(path.join(templatePath, 'package.json'))

	return {
		name: projectName,
		version: '0.0.0',
		private: true,
		type: 'module',
		scripts: templatePackageJson.scripts,
		dependencies: processDependencies(templatePackageJson.dependencies),
		devDependencies: processDependencies(templatePackageJson.devDependencies),
	}
}

export { getTemplateChoices, getTemplatePath, generatePackageJson }
