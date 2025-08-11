#!/usr/bin/env node
import inquirer from 'inquirer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 获取项目根目录
const rootDir = path.resolve(__dirname, '..')
const templateDir = path.join(rootDir, 'src', 'components', 'Template')
const componentsDir = path.join(rootDir, 'src', 'components')

// 定义问题
const questions = [
	{
		type: 'input',
		name: 'componentName',
		message: '请输入组件名称（首字母大写，如 Button）:',
		validate: (input: string) => {
			if (!input) {
				return '组件名称不能为空'
			}
			if (!/^[A-Z][a-zA-Z0-9]*$/.test(input)) {
				return '组件名称必须以大写字母开头，且只能包含字母和数字'
			}
			const componentDir = path.join(componentsDir, input)
			if (fs.existsSync(componentDir)) {
				return `组件 ${input} 已存在`
			}
			return true
		},
	},
]

// 主函数
async function createComponent() {
	try {
		// 获取用户输入
		const answers = await inquirer.prompt(questions)
		const { componentName } = answers

		// 组件目录
		const componentDir = path.join(componentsDir, componentName)

		// 创建组件目录
		fs.mkdirSync(componentDir)
		console.log(`✅ 创建目录: ${componentDir}`)

		// 读取模板文件并创建组件文件
		const files = fs.readdirSync(templateDir)

		files.forEach((file) => {
			const templateFilePath = path.join(templateDir, file)

			// 跳过目录
			if (fs.statSync(templateFilePath).isDirectory()) return

			// 读取模板文件内容
			let content = fs.readFileSync(templateFilePath, 'utf8')

			// 替换所有 Template 为组件名称
			content = content.replace(/Template/g, componentName)

			// 替换所有 ConfigProvider 为组件名称
			content = content.replace(/ConfigProvider/g, componentName)

			// 替换 tsoul-config-provider 为 tsoul-组件名称小写连字符格式
			const kebabCaseName = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
			content = content.replace(/tsoul-config-provider/g, `tsoul-${kebabCaseName}`)

			// 创建新文件名 (Template.vue -> Button.vue)
			const newFileName = file.replace(/Template/g, componentName)
			const newFilePath = path.join(componentDir, newFileName)

			// 写入新文件
			fs.writeFileSync(newFilePath, content)
			console.log(`✅ 创建文件: ${newFilePath}`)
		})

		console.log(`\n🎉 组件 ${componentName} 创建成功!`)
	} catch (error) {
		console.error(`❌ 创建组件失败: ${(error as Error).message}`)
	}
}

// 执行主函数
createComponent()
