import inquirer from 'inquirer'
import { getTemplateChoices } from './templateManager.js'
import { getAvailablePackageManagers } from './packageManager.js'

/**
 * 验证项目名称
 * @param {string} input 用户输入的项目名称
 * @returns {boolean|string} 验证通过返回 true，否则返回错误信息
 */
function validateProjectName(input) {
	if (!input.trim()) {
		return '项目名称不能为空'
	}
	// 检查项目名称是否符合 npm 包命名规范
	if (!/^[a-z0-9-]+$/.test(input)) {
		return '项目名称只能包含小写字母、数字和连字符'
	}
	return true
}

/**
 * 获取项目信息
 * @returns {Promise<{projectName: string, template: string, packageManager: string}>}
 * @throws {Error} 当用户输入无效或获取选项失败时抛出错误
 */
async function promptForProjectInfo() {
	try {
		const answers = await inquirer.prompt([
			{
				type: 'input',
				name: 'projectName',
				message: '请输入项目名称:',
				validate: validateProjectName,
			},
			{
				type: 'list',
				name: 'template',
				message: '请选择项目模板:',
				choices: getTemplateChoices(),
			},
			{
				type: 'list',
				name: 'packageManager',
				message: '请选择包管理器:',
				choices: getAvailablePackageManagers(),
			},
		])

		return answers
	} catch (err) {
		throw new Error(`获取项目信息失败: ${err.message}`)
	}
}

export { promptForProjectInfo }
