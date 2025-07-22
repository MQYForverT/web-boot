import { createRequire } from 'module'

const require = createRequire(import.meta.url)

interface CheckDepsParams {
	packageName: string
	devDeps?: string[]
	deps?: string[]
}

export function checkPeerDeps({ packageName, devDeps = [], deps = [] }: CheckDepsParams) {
	const missingDevDeps: string[] = []
	const missingDeps: string[] = []

	for (const dep of devDeps) {
		try {
			require.resolve(dep, { paths: [process.cwd()] })
		} catch {
			missingDevDeps.push(dep)
		}
	}

	for (const dep of deps) {
		try {
			require.resolve(dep, { paths: [process.cwd()] })
		} catch {
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
