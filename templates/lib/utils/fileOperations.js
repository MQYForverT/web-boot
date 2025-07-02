import fs from 'fs-extra'
import path from 'path'
import logger from './logger.js'

/**
 * 文件过滤规则
 * @type {string[]}
 */
const EXCLUDE_FILES = [
	// 依赖和构建产物
	'node_modules',
	'dist',
	'.vite',

	// IDE和编辑器配置
	'.idea',
	'.vscode',

	// 运行时生成的文件
	'auto-imports.d.ts',
	'components.d.ts',
	'.eslintcache',
	'.stylelintcache',
	'.prettier.cache',

	// 包管理器相关
	'.npmrc',
	'pnpm-lock.yaml',
	'yarn.lock',
	'package-lock.json',
	'.pnpm-debug.log',
	'npm-debug.log',
	'yarn-debug.log',
	'yarn-error.log',

	// 系统文件
	'.DS_Store',
	'Thumbs.db',

	// 临时文件
	'temp',
	'tmp',
	'*.log',
	'*.tmp',

	// 测试覆盖率报告
	'coverage',
	'.nyc_output',

	// 其他
	'.env.local',
	'.env.*.local',
	'*.local',

	// 排除 package.json，因为我们已经创建了
	'package.json',
]

/**
 * 检查文件是否应该被排除
 * @param {string} filename 文件名
 * @returns {boolean}
 */
function shouldExcludeFile(filename) {
	return EXCLUDE_FILES.some((exclude) => {
		if (exclude.includes('*')) {
			const regex = new RegExp('^' + exclude.replace(/\*/g, '.*') + '$')
			return regex.test(filename)
		}
		return filename === exclude
	})
}

/**
 * 复制模板文件到目标目录
 * @param {string} templateDir 模板目录
 * @param {string} targetDir 目标目录
 * @throws {Error} 当复制失败时抛出错误
 */
async function copyTemplate(templateDir, targetDir) {
	try {
		await fs.copy(templateDir, targetDir, {
			filter: (src) => {
				const filename = src.split(/[\\/]/).pop()
				return !shouldExcludeFile(filename)
			},
		})
		logger.success('模板文件复制完成')
	} catch (err) {
		throw new Error(`复制模板文件失败: ${err.message}`)
	}
}

/**
 * 创建项目目录
 * @param {string} targetDir 目标目录
 * @throws {Error} 当目录已存在或创建失败时抛出错误
 */
async function createProjectDir(targetDir) {
	try {
		if (await fs.pathExists(targetDir)) {
			throw new Error(`目录 ${targetDir} 已存在`)
		}
		await fs.ensureDir(targetDir)
		logger.success(`创建项目目录成功: ${targetDir}`)
	} catch (err) {
		throw new Error(`创建项目目录失败: ${err.message}`)
	}
}

/**
 * 写入 package.json 文件
 * @param {string} targetDir 目标目录
 * @param {object} packageJson package.json 内容
 * @throws {Error} 当写入失败时抛出错误
 */
async function writePackageJson(targetDir, packageJson) {
	try {
		const packageJsonPath = path.join(targetDir, 'package.json')
		await fs.writeJSON(packageJsonPath, packageJson, { spaces: 2 })
		logger.success('package.json 创建成功')
	} catch (err) {
		throw new Error(`创建 package.json 失败: ${err.message}`)
	}
}

export { copyTemplate, createProjectDir, writePackageJson }
