import inquirer from 'inquirer'
import fs from 'fs'
import { execSync } from 'child_process'

// 定义包含项目名称的数组
const projects = []

// 读取 packages 目录
fs.readdirSync('./packages').forEach((file) => {
	// 将子目录名称添加到数组中
	if (!fs.statSync(`./packages/${file}`).isDirectory()) {
		return
	}
	if (!file.includes('template')) {
		return
	}
	const prefix = file.substring(0, file.indexOf('-template'))
	projects.push(prefix)
})

const questions = [
	{
		type: 'list',
		name: 'type',
		message: '启动哪个项目呢',
		choices: projects.map((x) => {
			return {
				name: x,
				value: x,
			}
		}),
	},
]

inquirer
	.prompt(questions)
	.then((answers) => {
		const { type } = answers
		execSync(`npm run start:${type}`, { stdio: 'inherit' })
	})
	.catch((err) => {
		console.error(err.message)
	})
