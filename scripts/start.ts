import inquirer, { type DistinctQuestion } from 'inquirer'
import fs from 'fs'
import { execSync } from 'child_process'

// 定义包含项目名称的数组
const projects: { name: string; value: string }[] = []

// 读取 templates 目录
fs.readdirSync('./templates').forEach((file) => {
	if (['lib', 'types', 'node_modules'].includes(file)) {
		return
	}
	// 将子目录名称添加到数组中
	if (!fs.statSync(`./templates/${file}`).isDirectory()) {
		return
	}
	projects.push({ name: file, value: file })
})

// 读取 components 目录
projects.push({
	name: '私有组件',
	value: 'component-private',
})
projects.push({
	name: '公开组件',
	value: 'component-public',
})

//读取 docx 目录
projects.push({
	name: '文档',
	value: 'docx',
})

const questions = [
	{
		type: 'list',
		name: 'type',
		message: '官人想启动哪个项目',
		choices: projects,
	},
] satisfies DistinctQuestion[]

inquirer
	.prompt(questions)
	.then((answers) => {
		const { type } = answers
		execSync(`npm run start:${type}`, { stdio: 'inherit' })
	})
	.catch((err) => {
		console.error(err.message)
	})
