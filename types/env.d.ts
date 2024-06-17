interface ImportMetaEnv {
	/** 项目基本地址 */
	readonly VITE_BASE_URL: string
	/** 项目名称 & zh */
	readonly VITE_PROJECT_NAME: string
	readonly VITE_PROJECT_NAME_ZH: string
	/** 压缩算法类型 */
	readonly VITE_COMPRESS_TYPE?: 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw'
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
