import { defineFlatConfig } from 'eslint-define-config'
import getJsConfig from './common/js-config.mjs'
import getTsConfig from './common/ts-config.mjs'
import ignores from './common/ignores.mjs'
import unocss from '@unocss/eslint-config/flat'

// 详细配置：https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files
export default defineFlatConfig([ignores, unocss, getJsConfig(['**/*.{js,mjs,cjs}']), getTsConfig(['**/*.{ts}'])])
