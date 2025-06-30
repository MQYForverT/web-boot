<template>
	<div>
		<h1 id="react-模板" tabindex="-1">
			<a class="header-anchor" href="#react-模板"><span>React 模板</span></a>
		</h1>
		<p>基于 React 18 + Vite + TypeScript 的现代化后台管理系统模板。</p>
		<h2 id="技术栈" tabindex="-1">
			<a class="header-anchor" href="#技术栈"><span>技术栈</span></a>
		</h2>
		<ul>
			<li><strong>前端框架</strong>: React 18+</li>
			<li><strong>构建工具</strong>: Vite 6.0+</li>
			<li><strong>开发语言</strong>: TypeScript 5.0+</li>
			<li><strong>状态管理</strong>: Zustand</li>
			<li><strong>路由管理</strong>: React Router 6.x</li>
			<li><strong>UI 组件库</strong>: Ant Design</li>
			<li><strong>样式方案</strong>: SCSS + UnoCSS</li>
			<li><strong>HTTP 客户端</strong>: Axios</li>
			<li><strong>代码规范</strong>: ESLint + Prettier + Stylelint</li>
		</ul>
		<h2 id="项目结构" tabindex="-1">
			<a class="header-anchor" href="#项目结构"><span>项目结构</span></a>
		</h2>
		<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text">
			<pre v-pre><code><span class="line">templates/react/</span>
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
<span class="line">│   └── main.tsx          # 应用入口</span>
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
		<p>使用 React Router 6.x 提供动态路由功能：</p>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// routers/index.tsx</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createBrowserRouter<span class="token punctuation">,</span> RouterProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> routes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./modules'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createBrowserRouter</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">AppRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>RouterProvider router<span class="token operator">=</span><span class="token punctuation">{</span>router<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
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
			</div>
		</div>
		<h3 id="状态管理" tabindex="-1">
			<a class="header-anchor" href="#状态管理"><span>状态管理</span></a>
		</h3>
		<p>使用 Zustand 进行状态管理：</p>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// stores/modules/setting.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> create <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'zustand'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> persist <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'zustand/middleware'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">SettingState</span> <span class="token punctuation">{</span></span>
<span class="line">	theme<span class="token operator">:</span> <span class="token string">'light'</span> <span class="token operator">|</span> <span class="token string">'dark'</span></span>
<span class="line">	collapsed<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">	<span class="token function-variable function">toggleTheme</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line">	<span class="token function-variable function">toggleCollapsed</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useSettingStore <span class="token operator">=</span> <span class="token generic-function"><span class="token function">create</span><span class="token generic class-name"><span class="token operator">&lt;</span>SettingState<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span></span>
<span class="line">	<span class="token function">persist</span><span class="token punctuation">(</span></span>
<span class="line">		<span class="token punctuation">(</span>set<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">			theme<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">			collapsed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">			<span class="token function-variable function">toggleTheme</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">				<span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">					theme<span class="token operator">:</span> state<span class="token punctuation">.</span>theme <span class="token operator">===</span> <span class="token string">'light'</span> <span class="token operator">?</span> <span class="token string">'dark'</span> <span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">			<span class="token function-variable function">toggleCollapsed</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">				<span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">					collapsed<span class="token operator">:</span> <span class="token operator">!</span>state<span class="token punctuation">.</span>collapsed<span class="token punctuation">,</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			name<span class="token operator">:</span> <span class="token string">'setting-storage'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="布局组件" tabindex="-1">
			<a class="header-anchor" href="#布局组件"><span>布局组件</span></a>
		</h3>
		<p>集成 <code v-pre>mqy-background-layout</code> 组件：</p>
		<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx">
			<pre v-pre><code><span class="line"><span class="token comment">// layouts/index.tsx</span></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Outlet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BackgroundLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mqy-background-layout'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useSettingStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> Layout<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">const</span> <span class="token punctuation">{</span> theme<span class="token punctuation">,</span> collapsed<span class="token punctuation">,</span> toggleTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSettingStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> layoutConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">		theme<span class="token punctuation">,</span></span>
<span class="line">		layout<span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span></span>
<span class="line">		collapsed<span class="token punctuation">,</span></span>
<span class="line">		<span class="token comment">// 更多配置...</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleThemeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newTheme<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span>newTheme <span class="token operator">!==</span> theme<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token function">toggleTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BackgroundLayout</span></span> <span class="token attr-name">config</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>layoutConfig<span class="token punctuation">}</span></span> <span class="token attr-name">onUpdateTheme</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleThemeChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Outlet</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">BackgroundLayout</span></span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Layout</span>
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
		<h2 id="开发指南" tabindex="-1">
			<a class="header-anchor" href="#开发指南"><span>开发指南</span></a>
		</h2>
		<h3 id="添加新页面" tabindex="-1">
			<a class="header-anchor" href="#添加新页面"><span>添加新页面</span></a>
		</h3>
		<ol>
			<li><strong>创建页面组件</strong>：</li>
		</ol>
		<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx">
			<pre v-pre><code><span class="line"><span class="token comment">// src/pages/Example/index.tsx</span></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Card<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> ExamplePage<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example-page<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>示例页面<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">				</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">这是一个示例页面</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">				</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">点击按钮</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> ExamplePage</span>
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
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RouteObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> lazy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> ExamplePage <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/Example'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> exampleRoutes<span class="token operator">:</span> RouteObject<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">'/example'</span><span class="token punctuation">,</span></span>
<span class="line">    element<span class="token operator">:</span> <span class="token operator">&lt;</span>ExamplePage <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">    handle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      title<span class="token operator">:</span> <span class="token string">'示例页面'</span><span class="token punctuation">,</span></span>
<span class="line">      requiresAuth<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
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
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> create <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'zustand'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> devtools <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'zustand/middleware'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ExampleState</span> <span class="token punctuation">{</span></span>
<span class="line">	data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">	loading<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">	<span class="token function-variable function">fetchData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span></span>
<span class="line">	<span class="token function-variable function">addData</span><span class="token operator">:</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line">	<span class="token function-variable function">removeData</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useExampleStore <span class="token operator">=</span> <span class="token generic-function"><span class="token function">create</span><span class="token generic class-name"><span class="token operator">&lt;</span>ExampleState<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span></span>
<span class="line">	<span class="token function">devtools</span><span class="token punctuation">(</span></span>
<span class="line">		<span class="token punctuation">(</span>set<span class="token punctuation">,</span> get<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">			data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">			loading<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">			<span class="token function-variable function">fetchData</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">				<span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">					<span class="token comment">// 获取数据逻辑</span></span>
<span class="line">					<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">					<span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token operator">:</span> response<span class="token punctuation">.</span>data <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">				<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">					<span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">				<span class="token punctuation">}</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">			<span class="token function-variable function">addData</span><span class="token operator">:</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">				<span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">					data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>data<span class="token punctuation">,</span> item<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">			<span class="token function-variable function">removeData</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">				<span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">					data<span class="token operator">:</span> state<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">{</span></span>
<span class="line">			name<span class="token operator">:</span> <span class="token string">'example-store'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span></span>
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
		<h3 id="自定义-hook" tabindex="-1">
			<a class="header-anchor" href="#自定义-hook"><span>自定义 Hook</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// hooks/useExample.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useExampleStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useExample</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> fetchData<span class="token punctuation">,</span> addData<span class="token punctuation">,</span> removeData <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useExampleStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>fetchData<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">		data<span class="token punctuation">,</span></span>
<span class="line">		loading<span class="token punctuation">,</span></span>
<span class="line">		addData<span class="token punctuation">,</span></span>
<span class="line">		removeData<span class="token punctuation">,</span></span>
<span class="line">		refresh<span class="token operator">:</span> fetchData<span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
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
		<h2 id="react-特性" tabindex="-1">
			<a class="header-anchor" href="#react-特性"><span>React 特性</span></a>
		</h2>
		<h3 id="函数组件与-hooks" tabindex="-1">
			<a class="header-anchor" href="#函数组件与-hooks"><span>函数组件与 Hooks</span></a>
		</h3>
		<p>项目全面使用函数组件和 React Hooks：</p>
		<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> ExampleComponent<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> increment <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prev<span class="token punctuation">)</span> <span class="token operator">=></span> prev <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Count: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">当前计数: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">增加</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
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
		<h3 id="context-使用" tabindex="-1">
			<a class="header-anchor" href="#context-使用"><span>Context 使用</span></a>
		</h3>
		<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx">
			<pre v-pre><code><span class="line"><span class="token comment">// contexts/ThemeContext.tsx</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> createContext<span class="token punctuation">,</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ThemeContextType</span> <span class="token punctuation">{</span></span>
<span class="line">	theme<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">	<span class="token function-variable function">toggleTheme</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createContext</span><span class="token generic class-name"><span class="token operator">&lt;</span>ThemeContextType <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>context<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'useTheme must be used within ThemeProvider'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">return</span> context</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> ThemeProvider<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// Provider 实现</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ThemeContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ThemeContext.Provider</span></span><span class="token punctuation">></span></span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="错误边界" tabindex="-1">
			<a class="header-anchor" href="#错误边界"><span>错误边界</span></a>
		</h3>
		<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx">
			<pre v-pre><code><span class="line"><span class="token comment">// components/ErrorBoundary.tsx</span></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ErrorBoundaryState</span> <span class="token punctuation">{</span></span>
<span class="line">	hasError<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">	error<span class="token operator">?</span><span class="token operator">:</span> Error</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>PropsWithChildren<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">,</span> ErrorBoundaryState<span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token operator">:</span> React<span class="token punctuation">.</span>PropsWithChildren<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> hasError<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">)</span><span class="token operator">:</span> ErrorBoundaryState <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token punctuation">{</span> hasError<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> error <span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">componentDidCatch</span><span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">,</span> errorInfo<span class="token operator">:</span> React<span class="token punctuation">.</span>ErrorInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'ErrorBoundary caught an error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">出现错误，请刷新页面重试</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children</span>
<span class="line">	<span class="token punctuation">}</span></span>
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
		<h2 id="配置说明" tabindex="-1">
			<a class="header-anchor" href="#配置说明"><span>配置说明</span></a>
		</h2>
		<h3 id="环境变量" tabindex="-1">
			<a class="header-anchor" href="#环境变量"><span>环境变量</span></a>
		</h3>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre v-pre><code><span class="line"><span class="token comment"># .env.development</span></span>
<span class="line"><span class="token assign-left variable">VITE_API_BASE_URL</span><span class="token operator">=</span>http://localhost:3000/api</span>
<span class="line"><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>Web Boot React</span>
<span class="line"></span>
<span class="line"><span class="token comment"># .env.production</span></span>
<span class="line"><span class="token assign-left variable">VITE_API_BASE_URL</span><span class="token operator">=</span>https://api.example.com</span>
<span class="line"><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>Web Boot React</span>
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
		<h3 id="ant-design-配置" tabindex="-1">
			<a class="header-anchor" href="#ant-design-配置"><span>Ant Design 配置</span></a>
		</h3>
		<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx">
			<pre v-pre><code><span class="line"><span class="token comment">// main.tsx</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span></span>
<span class="line"><span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">'antd/locale/zh_CN'</span></span>
<span class="line"></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span></span>
<span class="line">	document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span></span>
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
		<h2 id="常见问题" tabindex="-1">
			<a class="header-anchor" href="#常见问题"><span>常见问题</span></a>
		</h2>
		<h3 id="q-如何配置主题" tabindex="-1">
			<a class="header-anchor" href="#q-如何配置主题"><span>Q: 如何配置主题？</span></a>
		</h3>
		<p>A: 可以通过 Ant Design 的 ConfigProvider 或在 SCSS 中自定义主题变量。</p>
		<h3 id="q-如何处理路由权限" tabindex="-1">
			<a class="header-anchor" href="#q-如何处理路由权限"><span>Q: 如何处理路由权限？</span></a>
		</h3>
		<p>A: 使用路由守卫组件，在路由配置中添加权限验证逻辑。</p>
		<h3 id="q-如何优化包体积" tabindex="-1">
			<a class="header-anchor" href="#q-如何优化包体积"><span>Q: 如何优化包体积？</span></a>
		</h3>
		<p>A: 使用动态导入、Tree Shaking、代码分割等技术优化构建产物。</p>
		<p>更多问题请查看项目 Issues 或提交新问题。</p>
	</div>
</template>
