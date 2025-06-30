<template><div><h1 id="eslint-配置" tabindex="-1"><a class="header-anchor" href="#eslint-配置"><span>ESLint 配置</span></a></h1>
<p><strong>@mqy/eslint-config</strong> - 统一的代码规范配置包，支持 Vue、React、Svelte 三大框架。</p>
<h2 id="📦-安装" tabindex="-1"><a class="header-anchor" href="#📦-安装"><span>📦 安装</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @mqy/eslint-config --save-dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="🚀-快速开始" tabindex="-1"><a class="header-anchor" href="#🚀-快速开始"><span>🚀 快速开始</span></a></h2>
<h3 id="vue-项目" tabindex="-1"><a class="header-anchor" href="#vue-项目"><span>Vue 项目</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// eslint.config.mjs</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/eslint-config'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@mqy/eslint-config/vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-项目" tabindex="-1"><a class="header-anchor" href="#react-项目"><span>React 项目</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// eslint.config.mjs</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/eslint-config'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@mqy/eslint-config/react'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="svelte-项目" tabindex="-1"><a class="header-anchor" href="#svelte-项目"><span>Svelte 项目</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// eslint.config.mjs</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/eslint-config'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@mqy/eslint-config/svelte'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔧-配置选项" tabindex="-1"><a class="header-anchor" href="#🔧-配置选项"><span>🔧 配置选项</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<p><strong>JavaScript/TypeScript 通用规则</strong>：</p>
<ul>
<li>代码质量检查</li>
<li>最佳实践规则</li>
<li>变量命名规范</li>
<li>函数复杂度控制</li>
</ul>
<p><strong>代码格式化</strong>：</p>
<ul>
<li>集成 Prettier 规则</li>
<li>统一缩进和空格</li>
<li>自动修复格式问题</li>
</ul>
<h3 id="vue-特定规则" tabindex="-1"><a class="header-anchor" href="#vue-特定规则"><span>Vue 特定规则</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@mqy/eslint-config/vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// Vue 3 Composition API 规范</span></span>
<span class="line">		<span class="token string-property property">'vue/component-definition-name-casing'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token string">'PascalCase'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'vue/component-name-in-template-casing'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token string">'PascalCase'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'vue/custom-event-name-casing'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token string">'camelCase'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// 组件结构规范</span></span>
<span class="line">		<span class="token string-property property">'vue/component-tags-order'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">			<span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				<span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'script'</span><span class="token punctuation">,</span> <span class="token string">'template'</span><span class="token punctuation">,</span> <span class="token string">'style'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// 响应式数据规范</span></span>
<span class="line">		<span class="token string-property property">'vue/no-ref-as-operand'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'vue/no-setup-props-destructure'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-特定规则" tabindex="-1"><a class="header-anchor" href="#react-特定规则"><span>React 特定规则</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@mqy/eslint-config/react'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// React Hooks 规范</span></span>
<span class="line">		<span class="token string-property property">'react-hooks/rules-of-hooks'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'react-hooks/exhaustive-deps'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// JSX 规范</span></span>
<span class="line">		<span class="token string-property property">'react/jsx-pascal-case'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'react/jsx-fragments'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token string">'syntax'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'react/jsx-no-useless-fragment'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// 组件规范</span></span>
<span class="line">		<span class="token string-property property">'react/function-component-definition'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">			<span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				<span class="token literal-property property">namedComponents</span><span class="token operator">:</span> <span class="token string">'arrow-function'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="svelte-特定规则" tabindex="-1"><a class="header-anchor" href="#svelte-特定规则"><span>Svelte 特定规则</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@mqy/eslint-config/svelte'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// Svelte 组件规范</span></span>
<span class="line">		<span class="token string-property property">'svelte/component-name-in-template-casing'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token string">'PascalCase'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'svelte/no-at-html-tags'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'svelte/no-debug'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// 响应式语法规范</span></span>
<span class="line">		<span class="token string-property property">'svelte/valid-compile'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'svelte/no-unused-svelte-ignore'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🎯-自定义配置" tabindex="-1"><a class="header-anchor" href="#🎯-自定义配置"><span>🎯 自定义配置</span></a></h2>
<h3 id="覆盖规则" tabindex="-1"><a class="header-anchor" href="#覆盖规则"><span>覆盖规则</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@mqy/eslint-config/vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 覆盖默认规则</span></span>
<span class="line">		<span class="token string-property property">'no-console'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'no-debugger'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// 添加自定义规则</span></span>
<span class="line">		<span class="token string-property property">'prefer-const'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'no-var'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件"><span>忽略文件</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@mqy/eslint-config/vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">ignorePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'dist/'</span><span class="token punctuation">,</span> <span class="token string">'node_modules/'</span><span class="token punctuation">,</span> <span class="token string">'*.min.js'</span><span class="token punctuation">,</span> <span class="token string">'public/'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@mqy/eslint-config/vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 全局变量</span></span>
<span class="line">		<span class="token constant">APP_VERSION</span><span class="token operator">:</span> <span class="token string">'readonly'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token constant">API_BASE_URL</span><span class="token operator">:</span> <span class="token string">'readonly'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📋-完整配置示例" tabindex="-1"><a class="header-anchor" href="#📋-完整配置示例"><span>📋 完整配置示例</span></a></h2>
<h3 id="vue-项目完整配置" tabindex="-1"><a class="header-anchor" href="#vue-项目完整配置"><span>Vue 项目完整配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// eslint.config.mjs</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/eslint-config'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@mqy/eslint-config/vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 解析器选项</span></span>
<span class="line">	<span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2022</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 环境配置</span></span>
<span class="line">	<span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 全局变量</span></span>
<span class="line">	<span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">defineProps</span><span class="token operator">:</span> <span class="token string">'readonly'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">defineEmits</span><span class="token operator">:</span> <span class="token string">'readonly'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">defineExpose</span><span class="token operator">:</span> <span class="token string">'readonly'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">withDefaults</span><span class="token operator">:</span> <span class="token string">'readonly'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 自定义规则</span></span>
<span class="line">	<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// TypeScript 规则</span></span>
<span class="line">		<span class="token string-property property">'@typescript-eslint/no-unused-vars'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">			<span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				<span class="token literal-property property">argsIgnorePattern</span><span class="token operator">:</span> <span class="token string">'^_'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// Vue 规则</span></span>
<span class="line">		<span class="token string-property property">'vue/multi-word-component-names'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'vue/component-definition-name-casing'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token string">'PascalCase'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// 通用规则</span></span>
<span class="line">		<span class="token string-property property">'no-console'</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'error'</span> <span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'no-debugger'</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'error'</span> <span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 忽略模式</span></span>
<span class="line">	<span class="token literal-property property">ignorePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'dist/'</span><span class="token punctuation">,</span> <span class="token string">'node_modules/'</span><span class="token punctuation">,</span> <span class="token string">'*.d.ts'</span><span class="token punctuation">,</span> <span class="token string">'vite.config.ts.timestamp-*'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🛠️-集成指南" tabindex="-1"><a class="header-anchor" href="#🛠️-集成指南"><span>🛠️ 集成指南</span></a></h2>
<h3 id="vs-code-集成" tabindex="-1"><a class="header-anchor" href="#vs-code-集成"><span>VS Code 集成</span></a></h3>
<p><strong>安装扩展</strong>：</p>
<ul>
<li>ESLint (dbaeumer.vscode-eslint)</li>
<li>Prettier (esbenp.prettier-vscode)</li>
</ul>
<p><strong>配置文件</strong>：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token comment">// .vscode/settings.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"javascript"</span><span class="token punctuation">,</span> <span class="token string">"typescript"</span><span class="token punctuation">,</span> <span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token string">"react"</span><span class="token punctuation">,</span> <span class="token string">"svelte"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">"source.fixAll.eslint"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令行使用" tabindex="-1"><a class="header-anchor" href="#命令行使用"><span>命令行使用</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token comment">// package.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint . --fix"</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token property">"lint:check"</span><span class="token operator">:</span> <span class="token string">"eslint ."</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token property">"lint:fix"</span><span class="token operator">:</span> <span class="token string">"eslint . --fix"</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-hooks-集成" tabindex="-1"><a class="header-anchor" href="#git-hooks-集成"><span>Git Hooks 集成</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装 husky 和 lint-staged</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> husky lint-staged --save-dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 初始化 husky</span></span>
<span class="line">npx husky <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token comment">// package.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">"*.{js,ts,vue,jsx,tsx,svelte}"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"eslint --fix"</span><span class="token punctuation">,</span> <span class="token string">"git add"</span><span class="token punctuation">]</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔍-规则说明" tabindex="-1"><a class="header-anchor" href="#🔍-规则说明"><span>🔍 规则说明</span></a></h2>
<h3 id="代码质量规则" tabindex="-1"><a class="header-anchor" href="#代码质量规则"><span>代码质量规则</span></a></h3>
<table>
<thead>
<tr>
<th>规则</th>
<th>说明</th>
<th>级别</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>no-unused-vars</code></td>
<td>禁止未使用的变量</td>
<td>Error</td>
</tr>
<tr>
<td><code v-pre>no-console</code></td>
<td>生产环境禁止 console</td>
<td>Warn/Error</td>
</tr>
<tr>
<td><code v-pre>prefer-const</code></td>
<td>优先使用 const</td>
<td>Error</td>
</tr>
<tr>
<td><code v-pre>no-var</code></td>
<td>禁止使用 var</td>
<td>Error</td>
</tr>
</tbody>
</table>
<h3 id="typescript-规则" tabindex="-1"><a class="header-anchor" href="#typescript-规则"><span>TypeScript 规则</span></a></h3>
<table>
<thead>
<tr>
<th>规则</th>
<th>说明</th>
<th>级别</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@typescript-eslint/no-explicit-any</code></td>
<td>禁止使用 any</td>
<td>Warn</td>
</tr>
<tr>
<td><code v-pre>@typescript-eslint/no-unused-vars</code></td>
<td>禁止未使用的变量</td>
<td>Error</td>
</tr>
<tr>
<td><code v-pre>@typescript-eslint/explicit-function-return-type</code></td>
<td>要求函数返回类型</td>
<td>Off</td>
</tr>
<tr>
<td><code v-pre>@typescript-eslint/prefer-nullish-coalescing</code></td>
<td>优先使用空值合并</td>
<td>Error</td>
</tr>
</tbody>
</table>
<h3 id="框架特定规则" tabindex="-1"><a class="header-anchor" href="#框架特定规则"><span>框架特定规则</span></a></h3>
<p><strong>Vue 规则</strong>：</p>
<ul>
<li>组件命名规范</li>
<li>模板语法检查</li>
<li>Composition API 规范</li>
<li>Props 验证规范</li>
</ul>
<p><strong>React 规则</strong>：</p>
<ul>
<li>Hooks 使用规范</li>
<li>JSX 语法检查</li>
<li>组件性能优化</li>
<li>事件处理规范</li>
</ul>
<p><strong>Svelte 规则</strong>：</p>
<ul>
<li>组件语法检查</li>
<li>响应式语法规范</li>
<li>编译时检查</li>
<li>性能优化建议</li>
</ul>
<h2 id="🚀-最佳实践" tabindex="-1"><a class="header-anchor" href="#🚀-最佳实践"><span>🚀 最佳实践</span></a></h2>
<ol>
<li><strong>团队规范统一</strong>：所有团队成员使用相同配置</li>
<li><strong>CI/CD 集成</strong>：在构建流程中加入代码检查</li>
<li><strong>编辑器集成</strong>：配置实时错误提示</li>
<li><strong>渐进式采用</strong>：在现有项目中逐步引入规则</li>
<li><strong>自定义扩展</strong>：根据团队需求调整规则</li>
</ol>
<p>通过使用 @mqy/eslint-config，您可以确保代码质量的一致性和可维护性。</p>
</div></template>


