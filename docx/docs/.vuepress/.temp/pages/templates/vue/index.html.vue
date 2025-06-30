<template>
	<div>
		<h1 id="vue-模板" tabindex="-1">
			<a class="header-anchor" href="#vue-模板"><span>Vue 模板</span></a>
		</h1>
		<p>基于 Vue 3 + Vite + TypeScript 的现代化后台管理系统模板。</p>
		<h2 id="技术栈" tabindex="-1">
			<a class="header-anchor" href="#技术栈"><span>技术栈</span></a>
		</h2>
		<ul>
			<li><strong>前端框架</strong>: Vue 3.5+</li>
			<li><strong>构建工具</strong>: Vite 6.0+</li>
			<li><strong>开发语言</strong>: TypeScript 5.0+</li>
			<li><strong>状态管理</strong>: Pinia</li>
			<li><strong>路由管理</strong>: Vue Router 4.x</li>
			<li><strong>UI 组件库</strong>: Element Plus</li>
			<li><strong>样式方案</strong>: SCSS + UnoCSS</li>
			<li><strong>HTTP 客户端</strong>: Axios</li>
			<li><strong>代码规范</strong>: ESLint + Prettier + Stylelint</li>
		</ul>
		<h2 id="项目结构" tabindex="-1">
			<a class="header-anchor" href="#项目结构"><span>项目结构</span></a>
		</h2>
		<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text">
			<pre v-pre><code><span class="line">templates/vue/</span>
<span class="line">├── public/                 # 静态资源</span>
<span class="line">├── src/</span>
<span class="line">│   ├── api/               # API 接口</span>
<span class="line">│   ├── assets/            # 资源文件</span>
<span class="line">│   ├── components/        # 公共组件</span>
<span class="line">│   ├── config/            # 配置文件</span>
<span class="line">│   ├── layouts/           # 布局组件</span>
<span class="line">│   ├── pages/             # 页面组件</span>
<span class="line">│   ├── routers/           # 路由配置</span>
<span class="line">│   ├── stores/            # 状态管理</span>
<span class="line">│   ├── styles/            # 样式文件</span>
<span class="line">│   ├── types/             # TypeScript 类型</span>
<span class="line">│   └── main.ts           # 应用入口</span>
<span class="line">├── index.html</span>
<span class="line">├── vite.config.ts        # Vite 配置</span>
<span class="line">├── tsconfig.json         # TypeScript 配置</span>
<span class="line">├── eslint.config.mjs     # ESLint 配置</span>
<span class="line">└── package.json</span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
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
		<h2 id="核心功能" tabindex="-1">
			<a class="header-anchor" href="#核心功能"><span>核心功能</span></a>
		</h2>
		<h3 id="路由管理" tabindex="-1">
			<a class="header-anchor" href="#路由管理"><span>路由管理</span></a>
		</h3>
		<p>使用 Vue Router 4.x 提供动态路由功能：</p>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// routers/index.tsx</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> routes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./modules'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">	routes<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="状态管理" tabindex="-1">
			<a class="header-anchor" href="#状态管理"><span>状态管理</span></a>
		</h3>
		<p>使用 Pinia 进行状态管理：</p>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// stores/modules/setting.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useSettingStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'setting'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">		theme<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">		collapsed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	actions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">toggleTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">this</span><span class="token punctuation">.</span>theme <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>theme <span class="token operator">===</span> <span class="token string">'light'</span> <span class="token operator">?</span> <span class="token string">'dark'</span> <span class="token operator">:</span> <span class="token string">'light'</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token function">toggleCollapsed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">this</span><span class="token punctuation">.</span>collapsed <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>collapsed</span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
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
		<h3 id="布局组件" tabindex="-1">
			<a class="header-anchor" href="#布局组件"><span>布局组件</span></a>
		</h3>
		<p>集成 <code v-pre>mqy-background-layout</code> 组件：</p>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre v-pre><code><span class="line"><span class="token comment">&lt;!-- layouts/index.vue --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mqy-background-layout</span> <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layoutConfig<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">@update:</span>theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleThemeChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mqy-background-layout</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> layoutConfig <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token comment">// 更多配置...</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleThemeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">theme</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		layoutConfig<span class="token punctuation">.</span>value<span class="token punctuation">.</span>theme <span class="token operator">=</span> theme</span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
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
		<h2 id="开发指南" tabindex="-1">
			<a class="header-anchor" href="#开发指南"><span>开发指南</span></a>
		</h2>
		<h3 id="添加新页面" tabindex="-1">
			<a class="header-anchor" href="#添加新页面"><span>添加新页面</span></a>
		</h3>
		<ol>
			<li><strong>创建页面组件</strong>：</li>
		</ol>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre
				v-pre
			><code><span class="line"><span class="token comment">&lt;!-- src/pages/Example/index.vue --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example-page<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>示例页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token comment">// 页面逻辑</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">	<span class="token selector">.example-page</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
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
		<ol start="2">
			<li><strong>添加路由配置</strong>：</li>
		</ol>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// routers/modules/example.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> exampleRoutes<span class="token operator">:</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		path<span class="token operator">:</span> <span class="token string">'/example'</span><span class="token punctuation">,</span></span>
<span class="line">		name<span class="token operator">:</span> <span class="token string">'Example'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/Example/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">		meta<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			title<span class="token operator">:</span> <span class="token string">'示例页面'</span><span class="token punctuation">,</span></span>
<span class="line">			requiresAuth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="状态管理-1" tabindex="-1">
			<a class="header-anchor" href="#状态管理-1"><span>状态管理</span></a>
		</h3>
		<p>创建新的 store：</p>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// stores/modules/example.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ExampleState</span> <span class="token punctuation">{</span></span>
<span class="line">	data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">	loading<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useExampleStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'example'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">	state<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ExampleState <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">		data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		loading<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	getters<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function-variable function">hasData</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	actions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">async</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">			<span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token comment">// 获取数据逻辑</span></span>
<span class="line">				<span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">			<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
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
		<h3 id="api-请求" tabindex="-1">
			<a class="header-anchor" href="#api-请求"><span>API 请求</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// api/example.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/config/request'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> exampleApi <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 获取列表</span></span>
<span class="line">	<span class="token function-variable function">getList</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/example/list'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 创建数据</span></span>
<span class="line">	<span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/api/example'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 更新数据</span></span>
<span class="line">	<span class="token function-variable function">update</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> request<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/example/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 删除数据</span></span>
<span class="line">	<span class="token function-variable function">delete</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> request<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/example/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
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
		<h2 id="构建部署" tabindex="-1">
			<a class="header-anchor" href="#构建部署"><span>构建部署</span></a>
		</h2>
		<h3 id="开发环境" tabindex="-1">
			<a class="header-anchor" href="#开发环境"><span>开发环境</span></a>
		</h3>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre v-pre><code><span class="line"><span class="token comment"># 启动开发服务器</span></span>
<span class="line"><span class="token function">pnpm</span> dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动并开启主机访问</span></span>
<span class="line"><span class="token function">pnpm</span> dev <span class="token parameter variable">--host</span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="生产构建" tabindex="-1">
			<a class="header-anchor" href="#生产构建"><span>生产构建</span></a>
		</h3>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre v-pre><code><span class="line"><span class="token comment"># 构建生产版本</span></span>
<span class="line"><span class="token function">pnpm</span> build</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 预览构建结果</span></span>
<span class="line"><span class="token function">pnpm</span> preview</span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="代码规范" tabindex="-1">
			<a class="header-anchor" href="#代码规范"><span>代码规范</span></a>
		</h3>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre v-pre><code><span class="line"><span class="token comment"># 检查代码规范</span></span>
<span class="line"><span class="token function">pnpm</span> lint</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 自动修复规范问题</span></span>
<span class="line"><span class="token function">pnpm</span> lint:fix</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查样式规范</span></span>
<span class="line"><span class="token function">pnpm</span> stylelint</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 类型检查</span></span>
<span class="line"><span class="token function">pnpm</span> type-check</span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h2 id="配置说明" tabindex="-1">
			<a class="header-anchor" href="#配置说明"><span>配置说明</span></a>
		</h2>
		<h3 id="vite-配置" tabindex="-1">
			<a class="header-anchor" href="#vite-配置"><span>Vite 配置</span></a>
		</h3>
		<p>项目使用自定义的 Vite 配置，支持：</p>
		<ul>
			<li>自动导入 Vue API</li>
			<li>组件自动注册</li>
			<li>路径别名配置</li>
			<li>环境变量配置</li>
			<li>构建优化</li>
		</ul>
		<h3 id="环境变量" tabindex="-1">
			<a class="header-anchor" href="#环境变量"><span>环境变量</span></a>
		</h3>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre v-pre><code><span class="line"><span class="token comment"># .env.development</span></span>
<span class="line"><span class="token assign-left variable">VITE_API_BASE_URL</span><span class="token operator">=</span>http://localhost:3000/api</span>
<span class="line"><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>Web Boot Vue</span>
<span class="line"></span>
<span class="line"><span class="token comment"># .env.production</span></span>
<span class="line"><span class="token assign-left variable">VITE_API_BASE_URL</span><span class="token operator">=</span>https://api.example.com</span>
<span class="line"><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>Web Boot Vue</span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h2 id="常见问题" tabindex="-1">
			<a class="header-anchor" href="#常见问题"><span>常见问题</span></a>
		</h2>
		<h3 id="q-如何修改默认主题" tabindex="-1">
			<a class="header-anchor" href="#q-如何修改默认主题"><span>Q: 如何修改默认主题？</span></a>
		</h3>
		<p>A: 在 <code v-pre>src/config/config.ts</code> 中修改 <code v-pre>theme</code> 配置项。</p>
		<h3 id="q-如何添加新的-ui-组件" tabindex="-1">
			<a class="header-anchor" href="#q-如何添加新的-ui-组件"><span>Q: 如何添加新的 UI 组件？</span></a>
		</h3>
		<p>A: 可以直接使用 Element Plus 组件，或在 <code v-pre>src/components/</code> 目录下创建自定义组件。</p>
		<h3 id="q-如何配置代理" tabindex="-1">
			<a class="header-anchor" href="#q-如何配置代理"><span>Q: 如何配置代理？</span></a>
		</h3>
		<p>A: 在 <code v-pre>vite.config.ts</code> 中配置 <code v-pre>server.proxy</code> 选项。</p>
		<p>更多问题请查看项目 Issues 或提交新问题。</p>
	</div>
</template>
