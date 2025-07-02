import chalk from 'chalk'

const logger = {
	info(message) {
		console.log(chalk.blue(`ℹ ${message}`))
	},
	success(message) {
		console.log(chalk.green(`✔ ${message}`))
	},
	warning(message) {
		console.log(chalk.yellow(`⚠ ${message}`))
	},
	error(message) {
		console.log(chalk.red(`✖ ${message}`))
	},
	command(message) {
		console.log(chalk.cyan(`$ ${message}`))
	},
}

export default logger
