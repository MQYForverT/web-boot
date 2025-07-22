import { createRequire } from 'module'
import pluginReact from 'eslint-plugin-react'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import getJsConfig from '../common/js-config.mjs'
import getTsConfig from '../common/ts-config.mjs'
import ignores from '../common/ignores.mjs'
import unocss from '@unocss/eslint-config/flat'
import * as parserTypeScript from '@typescript-eslint/parser'
import { defineFlatConfig } from 'eslint-define-config'

const require = createRequire(import.meta.url)
// 检查必需的对等依赖
const requiredDeps = ['eslint-plugin-react', 'eslint-plugin-react-hooks', 'eslint-plugin-react-refresh']
const missingDeps = []

for (const dep of requiredDeps) {
	try {
		require.resolve(dep, { paths: [process.cwd()] })
	} catch {
		missingDeps.push(dep)
	}
}

if (missingDeps.length > 0) {
	throw new Error(
		`[@tsoul/eslint-config/react] The following peer dependencies are not installed: ${missingDeps.join(
			', ',
		)}. Please run "pnpm add -D ${missingDeps.join(' ')}"`,
	)
}

// 详细配置：https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files
export default defineFlatConfig([
	ignores,
	unocss,
	getJsConfig(['**/*.{js,jsx,mjs,cjs}']),
	getTsConfig(['**/*.{ts,tsx}']),
	{
		files: ['./**/*.{jsx,tsx}'],
		// 提供了一些语言选项，用于配置 Vue 文件的解析器和解析器选项
		languageOptions: {
			//提供了解析器的选项
			parserOptions: {
				parser: parserTypeScript,
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react: pluginReact,
			'react-refresh': pluginReactRefresh,
			'react-hooks': pluginReactHooks,
		},
		rules: {
			// ...pluginReact.rules,
			'react-refresh/only-export-components': 'warn',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
		},
	},
])
