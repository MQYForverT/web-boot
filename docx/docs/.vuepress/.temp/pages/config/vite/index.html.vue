<template><div><h1 id="vite-配置" tabindex="-1"><a class="header-anchor" href="#vite-配置"><span>Vite 配置</span></a></h1>
<p><strong>@mqy/vite-config</strong> - 优化的构建配置包，提供框架特定的 Vite 配置和插件集成。</p>
<h2 id="📦-安装" tabindex="-1"><a class="header-anchor" href="#📦-安装"><span>📦 安装</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @mqy/vite-config --save-dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="🚀-快速开始" tabindex="-1"><a class="header-anchor" href="#🚀-快速开始"><span>🚀 快速开始</span></a></h2>
<h3 id="vue-项目" tabindex="-1"><a class="header-anchor" href="#vue-项目"><span>Vue 项目</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/vite-config/vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 项目特定配置</span></span>
<span class="line">	server<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		port<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-项目" tabindex="-1"><a class="header-anchor" href="#react-项目"><span>React 项目</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/vite-config/react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 项目特定配置</span></span>
<span class="line">	server<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		port<span class="token operator">:</span> <span class="token number">3001</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="svelte-项目" tabindex="-1"><a class="header-anchor" href="#svelte-项目"><span>Svelte 项目</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/vite-config/svelte'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 项目特定配置</span></span>
<span class="line">	server<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		port<span class="token operator">:</span> <span class="token number">3002</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔧-内置插件" tabindex="-1"><a class="header-anchor" href="#🔧-内置插件"><span>🔧 内置插件</span></a></h2>
<h3 id="核心插件" tabindex="-1"><a class="header-anchor" href="#核心插件"><span>核心插件</span></a></h3>
<p><strong>🎨 UnoCSS</strong></p>
<ul>
<li>原子化 CSS 框架</li>
<li>按需生成样式</li>
<li>自定义主题支持</li>
</ul>
<p><strong>📦 Auto Import</strong></p>
<ul>
<li>自动导入 Vue/React/Svelte API</li>
<li>自定义导入规则</li>
<li>TypeScript 类型支持</li>
</ul>
<p><strong>🧩 Components</strong></p>
<ul>
<li>组件自动注册</li>
<li>按需导入组件</li>
<li>支持多种组件库</li>
</ul>
<p><strong>📊 Bundle Analyzer</strong></p>
<ul>
<li>打包分析工具</li>
<li>可视化依赖关系</li>
<li>体积优化建议</li>
</ul>
<p><strong>🗜️ Compression</strong></p>
<ul>
<li>Gzip/Brotli 压缩</li>
<li>资源优化</li>
<li>缓存策略</li>
</ul>
<h2 id="📋-完整配置选项" tabindex="-1"><a class="header-anchor" href="#📋-完整配置选项"><span>📋 完整配置选项</span></a></h2>
<h3 id="vue-项目配置" tabindex="-1"><a class="header-anchor" href="#vue-项目配置"><span>Vue 项目配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/vite-config/vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 服务器配置</span></span>
<span class="line">	server<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		port<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span></span>
<span class="line">		host<span class="token operator">:</span> <span class="token string">'0.0.0.0'</span><span class="token punctuation">,</span></span>
<span class="line">		open<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		cors<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		proxy<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">				target<span class="token operator">:</span> <span class="token string">'http://localhost:8080'</span><span class="token punctuation">,</span></span>
<span class="line">				changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 构建配置</span></span>
<span class="line">	build<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		target<span class="token operator">:</span> <span class="token string">'es2015'</span><span class="token punctuation">,</span></span>
<span class="line">		outDir<span class="token operator">:</span> <span class="token string">'dist'</span><span class="token punctuation">,</span></span>
<span class="line">		assetsDir<span class="token operator">:</span> <span class="token string">'assets'</span><span class="token punctuation">,</span></span>
<span class="line">		sourcemap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">		minify<span class="token operator">:</span> <span class="token string">'terser'</span><span class="token punctuation">,</span></span>
<span class="line">		terserOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			compress<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">				drop_console<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">				drop_debugger<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			output<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">				chunkFileNames<span class="token operator">:</span> <span class="token string">'js/[name]-[hash].js'</span><span class="token punctuation">,</span></span>
<span class="line">				entryFileNames<span class="token operator">:</span> <span class="token string">'js/[name]-[hash].js'</span><span class="token punctuation">,</span></span>
<span class="line">				assetFileNames<span class="token operator">:</span> <span class="token string">'[ext]/[name]-[hash].[ext]'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 路径别名</span></span>
<span class="line">	resolve<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		alias<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token string-property property">'@'</span><span class="token operator">:</span> <span class="token string">'/src'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string-property property">'@components'</span><span class="token operator">:</span> <span class="token string">'/src/components'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string-property property">'@utils'</span><span class="token operator">:</span> <span class="token string">'/src/utils'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string-property property">'@assets'</span><span class="token operator">:</span> <span class="token string">'/src/assets'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// CSS 配置</span></span>
<span class="line">	css<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			scss<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">				additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@import "@/styles/variables.scss";</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 环境变量</span></span>
<span class="line">	define<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		__APP_VERSION__<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>npm_package_version<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">		__BUILD_TIME__<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-项目配置" tabindex="-1"><a class="header-anchor" href="#react-项目配置"><span>React 项目配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/vite-config/react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// React 特定配置</span></span>
<span class="line">	plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">		<span class="token comment">// 额外的 React 插件</span></span>
<span class="line">	<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 开发服务器</span></span>
<span class="line">	server<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		port<span class="token operator">:</span> <span class="token number">3001</span><span class="token punctuation">,</span></span>
<span class="line">		hmr<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			overlay<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// JSX 配置</span></span>
<span class="line">	esbuild<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		jsxInject<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">import React from 'react'</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 优化配置</span></span>
<span class="line">	optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'react'</span><span class="token punctuation">,</span> <span class="token string">'react-dom'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@emotion/react'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="svelte-项目配置" tabindex="-1"><a class="header-anchor" href="#svelte-项目配置"><span>Svelte 项目配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/vite-config/svelte'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// Svelte 特定配置</span></span>
<span class="line">	server<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		port<span class="token operator">:</span> <span class="token number">3002</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 构建优化</span></span>
<span class="line">	build<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		target<span class="token operator">:</span> <span class="token string">'es2020'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 优化依赖</span></span>
<span class="line">	optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'svelte/transition'</span><span class="token punctuation">,</span> <span class="token string">'svelte/store'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🎯-自定义插件" tabindex="-1"><a class="header-anchor" href="#🎯-自定义插件"><span>🎯 自定义插件</span></a></h2>
<h3 id="添加自定义插件" tabindex="-1"><a class="header-anchor" href="#添加自定义插件"><span>添加自定义插件</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/vite-config/vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createSvgIconsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite-plugin-svg-icons'</span></span>
<span class="line"><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">		<span class="token comment">// 添加 SVG 图标插件</span></span>
<span class="line">		<span class="token function">createSvgIconsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">			iconDirs<span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'src/assets/icons'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">			symbolId<span class="token operator">:</span> <span class="token string">'icon-[dir]-[name]'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义-unocss-配置" tabindex="-1"><a class="header-anchor" href="#自定义-unocss-配置"><span>自定义 UnoCSS 配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/vite-config/vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// UnoCSS 自定义配置</span></span>
<span class="line">	unocss<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		theme<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			colors<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">				primary<span class="token operator">:</span> <span class="token string">'#1890ff'</span><span class="token punctuation">,</span></span>
<span class="line">				success<span class="token operator">:</span> <span class="token string">'#52c41a'</span><span class="token punctuation">,</span></span>
<span class="line">				warning<span class="token operator">:</span> <span class="token string">'#faad14'</span><span class="token punctuation">,</span></span>
<span class="line">				error<span class="token operator">:</span> <span class="token string">'#f5222d'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			fontFamily<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">				sans<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Inter'</span><span class="token punctuation">,</span> <span class="token string">'system-ui'</span><span class="token punctuation">,</span> <span class="token string">'sans-serif'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		shortcuts<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token string-property property">'btn-primary'</span><span class="token operator">:</span> <span class="token string">'bg-primary text-white px-4 py-2 rounded hover:bg-primary/80'</span><span class="token punctuation">,</span></span>
<span class="line">			card<span class="token operator">:</span> <span class="token string">'bg-white rounded-lg shadow-md p-6'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🏗️-构建优化" tabindex="-1"><a class="header-anchor" href="#🏗️-构建优化"><span>🏗️ 构建优化</span></a></h2>
<h3 id="代码分割" tabindex="-1"><a class="header-anchor" href="#代码分割"><span>代码分割</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	build<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			output<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">				manualChunks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">					<span class="token comment">// 第三方库分离</span></span>
<span class="line">					vendor<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'vue'</span><span class="token punctuation">,</span> <span class="token string">'vue-router'</span><span class="token punctuation">,</span> <span class="token string">'pinia'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">					ui<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'element-plus'</span><span class="token punctuation">,</span> <span class="token string">'@element-plus/icons-vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">					utils<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'axios'</span><span class="token punctuation">,</span> <span class="token string">'dayjs'</span><span class="token punctuation">,</span> <span class="token string">'lodash-es'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预加载优化" tabindex="-1"><a class="header-anchor" href="#预加载优化"><span>预加载优化</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	build<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			output<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token comment">// 预加载关键资源</span></span>
<span class="line">				experimentalMinChunkSize<span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 依赖预构建</span></span>
<span class="line">	optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'vue'</span><span class="token punctuation">,</span> <span class="token string">'vue-router'</span><span class="token punctuation">,</span> <span class="token string">'pinia'</span><span class="token punctuation">,</span> <span class="token string">'element-plus/es'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="资源处理" tabindex="-1"><a class="header-anchor" href="#资源处理"><span>资源处理</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 静态资源处理</span></span>
<span class="line">	assetsInclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/*.woff'</span><span class="token punctuation">,</span> <span class="token string">'**/*.woff2'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	build<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			output<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token function-variable function">assetFileNames</span><span class="token operator">:</span> <span class="token punctuation">(</span>assetInfo<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">					<span class="token keyword">const</span> info <span class="token operator">=</span> assetInfo<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span></span>
<span class="line">					<span class="token keyword">const</span> ext <span class="token operator">=</span> info<span class="token punctuation">[</span>info<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">					<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpe?g|svg|gif|tiff|bmp|ico)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>assetInfo<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">						<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">images/[name]-[hash].</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ext<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">					<span class="token punctuation">}</span></span>
<span class="line">					<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(woff2?|eot|ttf|otf)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>assetInfo<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">						<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">fonts/[name]-[hash].</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ext<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">					<span class="token punctuation">}</span></span>
<span class="line">					<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">assets/[name]-[hash].</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ext<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔍-开发工具" tabindex="-1"><a class="header-anchor" href="#🔍-开发工具"><span>🔍 开发工具</span></a></h2>
<h3 id="调试配置" tabindex="-1"><a class="header-anchor" href="#调试配置"><span>调试配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 开发模式配置</span></span>
<span class="line">	define<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		__DEV__<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'development'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">		__PROD__<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 源码映射</span></span>
<span class="line">	build<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		sourcemap<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'development'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 开发服务器</span></span>
<span class="line">	server<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 错误覆盖</span></span>
<span class="line">		hmr<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			overlay<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="性能监控" tabindex="-1"><a class="header-anchor" href="#性能监控"><span>性能监控</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">		<span class="token comment">// 打包分析</span></span>
<span class="line">		process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ANALYZE</span> <span class="token operator">===</span> <span class="token string">'true'</span> <span class="token operator">&amp;&amp;</span></span>
<span class="line">			<span class="token function">bundleAnalyzer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">				analyzerMode<span class="token operator">:</span> <span class="token string">'server'</span><span class="token punctuation">,</span></span>
<span class="line">				openAnalyzer<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动化部署" tabindex="-1"><a class="header-anchor" href="#自动化部署"><span>自动化部署</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	base<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'/my-app/'</span> <span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	build<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 部署配置</span></span>
<span class="line">		outDir<span class="token operator">:</span> <span class="token string">'dist'</span><span class="token punctuation">,</span></span>
<span class="line">		emptyOutDir<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// 资源内联阈值</span></span>
<span class="line">		assetsInlineLimit<span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🧪-测试集成" tabindex="-1"><a class="header-anchor" href="#🧪-测试集成"><span>🧪 测试集成</span></a></h2>
<h3 id="vitest-配置" tabindex="-1"><a class="header-anchor" href="#vitest-配置"><span>Vitest 配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	test<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		environment<span class="token operator">:</span> <span class="token string">'jsdom'</span><span class="token punctuation">,</span></span>
<span class="line">		globals<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		setupFiles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./src/test/setup.ts'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		coverage<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			reporter<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'text'</span><span class="token punctuation">,</span> <span class="token string">'json'</span><span class="token punctuation">,</span> <span class="token string">'json-summary'</span><span class="token punctuation">,</span> <span class="token string">'html'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">			exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'node_modules/'</span><span class="token punctuation">,</span> <span class="token string">'dist/'</span><span class="token punctuation">,</span> <span class="token string">'**/*.d.ts'</span><span class="token punctuation">,</span> <span class="token string">'**/*.test.{ts,js}'</span><span class="token punctuation">,</span> <span class="token string">'**/*.spec.{ts,js}'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📊-性能优化建议" tabindex="-1"><a class="header-anchor" href="#📊-性能优化建议"><span>📊 性能优化建议</span></a></h2>
<h3 id="_1-依赖优化" tabindex="-1"><a class="header-anchor" href="#_1-依赖优化"><span>1. 依赖优化</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// 预构建常用依赖</span></span>
<span class="line">optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'vue'</span><span class="token punctuation">,</span> <span class="token string">'vue-router'</span><span class="token punctuation">,</span> <span class="token string">'pinia'</span><span class="token punctuation">,</span> <span class="token string">'element-plus/es'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@vueuse/core'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 按需导入的库</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-代码分割" tabindex="-1"><a class="header-anchor" href="#_2-代码分割"><span>2. 代码分割</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// 智能分包</span></span>
<span class="line"><span class="token function-variable function">manualChunks</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'node_modules'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'vue'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">'vue-vendor'</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'element-plus'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">'ui-vendor'</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token string">'vendor'</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-资源优化" tabindex="-1"><a class="header-anchor" href="#_3-资源优化"><span>3. 资源优化</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// 图片优化</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createSvgIconsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite-plugin-svg-icons'</span></span>
<span class="line"><span class="token keyword">import</span> viteImageOptimize <span class="token keyword">from</span> <span class="token string">'vite-plugin-imagemin'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">		<span class="token function">viteImageOptimize</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">			gifsicle<span class="token operator">:</span> <span class="token punctuation">{</span> optimizationLevel<span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			mozjpeg<span class="token operator">:</span> <span class="token punctuation">{</span> quality<span class="token operator">:</span> <span class="token number">80</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			pngquant<span class="token operator">:</span> <span class="token punctuation">{</span> quality<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.65</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			svgo<span class="token operator">:</span> <span class="token punctuation">{</span> plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'removeViewBox'</span><span class="token punctuation">,</span> active<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔧-环境配置" tabindex="-1"><a class="header-anchor" href="#🔧-环境配置"><span>🔧 环境配置</span></a></h2>
<h3 id="多环境管理" tabindex="-1"><a class="header-anchor" href="#多环境管理"><span>多环境管理</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># .env.development</span></span>
<span class="line"><span class="token assign-left variable">VITE_API_BASE_URL</span><span class="token operator">=</span>http://localhost:8080/api</span>
<span class="line"><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>开发环境</span>
<span class="line"></span>
<span class="line"><span class="token comment"># .env.production</span></span>
<span class="line"><span class="token assign-left variable">VITE_API_BASE_URL</span><span class="token operator">=</span>https://api.example.com</span>
<span class="line"><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>生产环境</span>
<span class="line"></span>
<span class="line"><span class="token comment"># .env.staging</span></span>
<span class="line"><span class="token assign-left variable">VITE_API_BASE_URL</span><span class="token operator">=</span>https://staging-api.example.com</span>
<span class="line"><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>测试环境</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript-类型定义" tabindex="-1"><a class="header-anchor" href="#typescript-类型定义"><span>TypeScript 类型定义</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// vite-env.d.ts</span></span>
<span class="line"><span class="token comment">/// &lt;reference types="vite/client" /></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ImportMetaEnv</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">readonly</span> <span class="token constant">VITE_API_BASE_URL</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">	<span class="token keyword">readonly</span> <span class="token constant">VITE_APP_TITLE</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">	<span class="token keyword">readonly</span> <span class="token constant">VITE_APP_DEBUG</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ImportMeta</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">readonly</span> env<span class="token operator">:</span> ImportMetaEnv</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🚀-最佳实践" tabindex="-1"><a class="header-anchor" href="#🚀-最佳实践"><span>🚀 最佳实践</span></a></h2>
<ol>
<li><strong>合理配置代理</strong>：避开跨域问题</li>
<li><strong>智能代码分割</strong>：提升加载性能</li>
<li><strong>资源优化</strong>：压缩图片和字体文件</li>
<li><strong>环境变量管理</strong>：区分不同部署环境</li>
<li><strong>依赖预构建</strong>：加速开发体验</li>
<li><strong>构建分析</strong>：定期检查打包体积</li>
<li><strong>缓存策略</strong>：合理设置资源缓存</li>
</ol>
<p>通过使用 @mqy/vite-config，您可以获得经过优化的构建配置和最佳的开发体验。</p>
</div></template>


