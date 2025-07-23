import { existsSync } from 'fs'
import { join } from 'path'

interface CheckDepsParams {
	packageName: string
	devDeps?: string[]
	deps?: string[]
}

export function checkPeerDeps({ packageName, devDeps = [], deps = [] }: CheckDepsParams) {
	const missingDevDeps: string[] = []
	const missingDeps: string[] = []
	const projectRoot = process.cwd()
	const projectNodeModules = join(projectRoot, 'node_modules')

	// 更严格的检查：直接检查项目 node_modules 目录
	for (const dep of devDeps) {
		const depPath = join(projectNodeModules, dep)
		if (!existsSync(depPath)) {
			missingDevDeps.push(dep)
		}
	}

	for (const dep of deps) {
		const depPath = join(projectNodeModules, dep)
		if (!existsSync(depPath)) {
			missingDeps.push(dep)
		}
	}

	if (missingDevDeps.length > 0 || missingDeps.length > 0) {
		const errorParts: string[] = []
		if (missingDevDeps.length > 0) {
			errorParts.push(`\n  - For development: pnpm add -D ${missingDevDeps.join(' ')}`)
		}
		if (missingDeps.length > 0) {
			errorParts.push(`\n  - For runtime: pnpm add ${missingDeps.join(' ')}`)
		}
		throw new Error(
			`[${packageName}] Some peer dependencies are not installed. Please run the following commands:${errorParts.join(
				'',
			)}`,
		)
	}
}
