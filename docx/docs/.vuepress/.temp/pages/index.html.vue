<template>
	<div>
		<h2 id="项目核心" tabindex="-1">
			<a class="header-anchor" href="#项目核心"><span>项目核心</span></a>
		</h2>
		<p>
			Web Boot 是一个<strong>框架无关</strong>的 Web Components 组件库和开发工具集，专为企业级后台管理系统开发而设计。
		</p>
		<h3 id="🎯-核心优势" tabindex="-1">
			<a class="header-anchor" href="#🎯-核心优势"><span>🎯 核心优势</span></a>
		</h3>
		<p><strong>🔧 不是框架，是工具</strong></p>
		<ul>
			<li>基于 Web Components 标准，不绑定特定框架</li>
			<li>可在 Vue、React、Svelte、Angular 或原生 JavaScript 中使用</li>
			<li>提供统一的开发体验，无论你使用什么技术栈</li>
		</ul>
		<p><strong>📦 两大核心产品</strong></p>
		<h4 id="_1-web-components-组件库" tabindex="-1">
			<a class="header-anchor" href="#_1-web-components-组件库"><span>1. Web Components 组件库</span></a>
		</h4>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre
				v-pre
			><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @mqy/component-private  <span class="token comment"># 企业级组件</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> @mqy/component-public   <span class="token comment"># 通用组件</span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h4 id="_2-开发工具集" tabindex="-1">
			<a class="header-anchor" href="#_2-开发工具集"><span>2. 开发工具集</span></a>
		</h4>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre
				v-pre
			><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @mqy/eslint-config     <span class="token comment"># 代码规范</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> @mqy/stylelint-config  <span class="token comment"># 样式规范</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> @mqy/vite-config       <span class="token comment"># 构建配置</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> @mqy/utils             <span class="token comment"># 实用工具</span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="🚀-快速开始" tabindex="-1">
			<a class="header-anchor" href="#🚀-快速开始"><span>🚀 快速开始</span></a>
		</h3>
		<p><strong>在任何项目中使用组件</strong>：</p>
		<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html">
			<pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 原生 HTML --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mqy-background-layout</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mqy-background-login</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mqy-background-login</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mqy-background-layout</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre v-pre><code><span class="line"><span class="token comment">&lt;!-- Vue 项目 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mqy-background-layout</span> <span class="token attr-name">:theme-config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>config<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mqy-background-layout</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx">
			<pre v-pre><code><span class="line"><span class="token comment">// React 项目</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mqy-background-layout</span> <span class="token attr-name">themeConfig</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>config<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Routes</span></span><span class="token punctuation">></span></span><span class="token plain-text">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Routes</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mqy-background-layout</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="📖-使用示例" tabindex="-1">
			<a class="header-anchor" href="#📖-使用示例"><span>📖 使用示例</span></a>
		</h3>
		<p>为了帮助你快速上手，我们提供了三个主流框架的完整示例项目：</p>
		<ul>
			<li>
				<strong><RouteLink to="/templates/vue/">Vue 示例</RouteLink></strong
				>: Vue 3 + TypeScript 集成示例
			</li>
			<li>
				<strong><RouteLink to="/templates/react/">React 示例</RouteLink></strong
				>: React 18 + TypeScript 集成示例
			</li>
			<li>
				<strong><RouteLink to="/templates/svelte/">Svelte 示例</RouteLink></strong
				>: Svelte 5 + TypeScript 集成示例
			</li>
		</ul>
		<h3 id="🛠️-核心功能" tabindex="-1">
			<a class="header-anchor" href="#🛠️-核心功能"><span>🛠️ 核心功能</span></a>
		</h3>
		<p><strong>组件库特性</strong>：</p>
		<ul>
			<li>🎨 完整的后台管理布局系统</li>
			<li>🔐 企业级登录认证组件</li>
			<li>🌗 明暗主题无缝切换</li>
			<li>📱 响应式设计适配</li>
			<li>🔧 高度可配置化</li>
		</ul>
		<p><strong>工具集特性</strong>：</p>
		<ul>
			<li>📏 统一的代码规范配置</li>
			<li>⚡ 优化的构建配置</li>
			<li>🛠️ 常用工具函数封装</li>
			<li>📦 TypeScript 类型完善</li>
		</ul>
		<p>立即开始使用 Web Boot，让你的项目开发更加高效！</p>
	</div>
</template>
