<template>
	<div>
		<h1 id="svelte-模板" tabindex="-1">
			<a class="header-anchor" href="#svelte-模板"><span>Svelte 模板</span></a>
		</h1>
		<p>基于 Svelte 4 + Vite + TypeScript 的轻量级后台管理系统模板。</p>
		<h2 id="技术栈" tabindex="-1">
			<a class="header-anchor" href="#技术栈"><span>技术栈</span></a>
		</h2>
		<ul>
			<li><strong>前端框架</strong>: Svelte 4+</li>
			<li><strong>构建工具</strong>: Vite 6.0+</li>
			<li><strong>开发语言</strong>: TypeScript 5.0+</li>
			<li><strong>状态管理</strong>: Writable Stores</li>
			<li><strong>路由管理</strong>: page.js</li>
			<li><strong>UI 组件库</strong>: 自定义组件</li>
			<li><strong>样式方案</strong>: SCSS + UnoCSS</li>
			<li><strong>HTTP 客户端</strong>: Axios</li>
			<li><strong>代码规范</strong>: ESLint + Prettier + Stylelint</li>
		</ul>
		<h2 id="项目结构" tabindex="-1">
			<a class="header-anchor" href="#项目结构"><span>项目结构</span></a>
		</h2>
		<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text">
			<pre v-pre><code><span class="line">templates/svelte/</span>
<span class="line">├── public/                 # 静态资源</span>
<span class="line">├── src/</span>
<span class="line">│   ├── api/               # API 接口</span>
<span class="line">│   ├── assets/            # 资源文件</span>
<span class="line">│   ├── components/        # 公共组件</span>
<span class="line">│   ├── config/            # 配置文件</span>
<span class="line">│   ├── layouts/           # 布局组件</span>
<span class="line">│   ├── lib/               # Svelte 组件库</span>
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
				<div class="line-number"></div>
			</div>
		</div>
		<h2 id="核心功能" tabindex="-1">
			<a class="header-anchor" href="#核心功能"><span>核心功能</span></a>
		</h2>
		<h3 id="路由管理" tabindex="-1">
			<a class="header-anchor" href="#路由管理"><span>路由管理</span></a>
		</h3>
		<p>使用 page.js 提供客户端路由功能：</p>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// routers/index.ts</span></span>
<span class="line"><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'page'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> routes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./modules'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注册路由</span></span>
<span class="line">routes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>route <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">router</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>path<span class="token punctuation">,</span> route<span class="token punctuation">.</span>handler<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 启动路由</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="状态管理" tabindex="-1">
			<a class="header-anchor" href="#状态管理"><span>状态管理</span></a>
		</h3>
		<p>使用 Svelte 原生的 Writable Stores：</p>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// stores/modules/setting.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> writable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'svelte/store'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> browser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$app/environment'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">SettingState</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token string">'light'</span> <span class="token operator">|</span> <span class="token string">'dark'</span></span>
<span class="line">  collapsed<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">createSettingStore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> defaultState<span class="token operator">:</span> SettingState <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    theme<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">    collapsed<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> subscribe<span class="token punctuation">,</span> set<span class="token punctuation">,</span> update <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span>defaultState<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    subscribe<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">toggleTheme</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">update</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token operator">...</span>state<span class="token punctuation">,</span></span>
<span class="line">      theme<span class="token operator">:</span> state<span class="token punctuation">.</span>theme <span class="token operator">===</span> <span class="token string">'light'</span> <span class="token operator">?</span> <span class="token string">'dark'</span> <span class="token operator">:</span> <span class="token string">'light'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">toggleCollapsed</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">update</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token operator">...</span>state<span class="token punctuation">,</span></span>
<span class="line">      collapsed<span class="token operator">:</span> <span class="token operator">!</span>state<span class="token punctuation">.</span>collapsed</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">set</span><span class="token punctuation">(</span>defaultState<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> settingStore <span class="token operator">=</span> <span class="token function">createSettingStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
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
		<div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte">
			<pre v-pre><code><span class="line">&lt;!-- layouts/index.svelte --&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { BackgroundLayout } from 'mqy-background-layout'</span>
<span class="line">  import { settingStore } from '@/stores'</span>
<span class="line">  </span>
<span class="line">  let layoutConfig = {</span>
<span class="line">    theme: 'light',</span>
<span class="line">    layout: 'default',</span>
<span class="line">    collapsed: false</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 响应式更新配置</span>
<span class="line">  $: layoutConfig = {</span>
<span class="line">    theme: $settingStore.theme,</span>
<span class="line">    layout: 'default',</span>
<span class="line">    collapsed: $settingStore.collapsed</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  const handleThemeChange = (event: CustomEvent) =&gt; {</span>
<span class="line">    const newTheme = event.detail</span>
<span class="line">    if (newTheme !== $settingStore.theme) {</span>
<span class="line">      settingStore.toggleTheme()</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;BackgroundLayout </span>
<span class="line">  config={layoutConfig}</span>
<span class="line">  on:updateTheme={handleThemeChange}</span>
<span class="line">&gt;</span>
<span class="line">  &lt;slot /&gt;</span>
<span class="line">&lt;/BackgroundLayout&gt;</span>
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
		<h2 id="开发指南" tabindex="-1">
			<a class="header-anchor" href="#开发指南"><span>开发指南</span></a>
		</h2>
		<h3 id="添加新页面" tabindex="-1">
			<a class="header-anchor" href="#添加新页面"><span>添加新页面</span></a>
		</h3>
		<ol>
			<li><strong>创建页面组件</strong>：</li>
		</ol>
		<div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte">
			<pre v-pre><code><span class="line">&lt;!-- src/pages/Example/index.svelte --&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { onMount } from 'svelte'</span>
<span class="line">  </span>
<span class="line">  let data = []</span>
<span class="line">  let loading = false</span>
<span class="line">  </span>
<span class="line">  onMount(async () =&gt; {</span>
<span class="line">    loading = true</span>
<span class="line">    try {</span>
<span class="line">      // 获取数据逻辑</span>
<span class="line">      data = await fetchData()</span>
<span class="line">    } finally {</span>
<span class="line">      loading = false</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line">  </span>
<span class="line">  const handleClick = () =&gt; {</span>
<span class="line">    console.log('按钮被点击')</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;div class=&quot;example-page&quot;&gt;</span>
<span class="line">  &lt;h1&gt;示例页面&lt;/h1&gt;</span>
<span class="line">  {#if loading}</span>
<span class="line">    &lt;p&gt;加载中...&lt;/p&gt;</span>
<span class="line">  {:else}</span>
<span class="line">    &lt;ul&gt;</span>
<span class="line">      {#each data as item (item.id)}</span>
<span class="line">        &lt;li&gt;{item.name}&lt;/li&gt;</span>
<span class="line">      {/each}</span>
<span class="line">    &lt;/ul&gt;</span>
<span class="line">  {/if}</span>
<span class="line">  &lt;button on:click={handleClick}&gt;点击按钮&lt;/button&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;style lang=&quot;scss&quot;&gt;</span>
<span class="line">.example-page {</span>
<span class="line">  padding: 20px;</span>
<span class="line">  </span>
<span class="line">  h1 {</span>
<span class="line">    color: var(--primary-color);</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
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
				<div class="line-number"></div>
			</div>
		</div>
		<ol start="2">
			<li><strong>添加路由配置</strong>：</li>
		</ol>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// routers/modules/example.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RouteHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../types'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> exampleRoutes <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">'/example'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> ExamplePage <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/Example/index.svelte'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// 路由处理逻辑</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    meta<span class="token operator">:</span> <span class="token punctuation">{</span></span>
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
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> writable<span class="token punctuation">,</span> derived <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'svelte/store'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ExampleItem</span> <span class="token punctuation">{</span></span>
<span class="line">  id<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  status<span class="token operator">:</span> <span class="token string">'active'</span> <span class="token operator">|</span> <span class="token string">'inactive'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ExampleState</span> <span class="token punctuation">{</span></span>
<span class="line">  items<span class="token operator">:</span> ExampleItem<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  loading<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  error<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">createExampleStore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> defaultState<span class="token operator">:</span> ExampleState <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    items<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    loading<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    error<span class="token operator">:</span> <span class="token keyword">null</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> subscribe<span class="token punctuation">,</span> set<span class="token punctuation">,</span> update <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span>defaultState<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    subscribe<span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// Actions</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">fetchItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">update</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> loading<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> error<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token function">update</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> items<span class="token punctuation">,</span> loading<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">update</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">          <span class="token operator">...</span>state<span class="token punctuation">,</span> </span>
<span class="line">          loading<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> </span>
<span class="line">          error<span class="token operator">:</span> error<span class="token punctuation">.</span>message </span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">addItem</span><span class="token punctuation">(</span>item<span class="token operator">:</span> ExampleItem<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">update</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span>state<span class="token punctuation">,</span></span>
<span class="line">        items<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>items<span class="token punctuation">,</span> item<span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">removeItem</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">update</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span>state<span class="token punctuation">,</span></span>
<span class="line">        items<span class="token operator">:</span> state<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">set</span><span class="token punctuation">(</span>defaultState<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> exampleStore <span class="token operator">=</span> <span class="token function">createExampleStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Derived stores</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> activeItems <span class="token operator">=</span> <span class="token function">derived</span><span class="token punctuation">(</span></span>
<span class="line">  exampleStore<span class="token punctuation">,</span></span>
<span class="line">  $exampleStore <span class="token operator">=></span> $exampleStore<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=></span> item<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">'active'</span><span class="token punctuation">)</span></span>
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
		<h3 id="组件通信" tabindex="-1">
			<a class="header-anchor" href="#组件通信"><span>组件通信</span></a>
		</h3>
		<p><strong>父子组件通信</strong>：</p>
		<div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte">
			<pre v-pre><code><span class="line">&lt;!-- Parent.svelte --&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import Child from './Child.svelte'</span>
<span class="line">  </span>
<span class="line">  let message = 'Hello from parent'</span>
<span class="line">  </span>
<span class="line">  const handleChildEvent = (event: CustomEvent) =&gt; {</span>
<span class="line">    console.log('收到子组件事件:', event.detail)</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child </span>
<span class="line">  {message} </span>
<span class="line">  on:childEvent={handleChildEvent}</span>
<span class="line">/&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- Child.svelte --&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { createEventDispatcher } from 'svelte'</span>
<span class="line">  </span>
<span class="line">  export let message: string</span>
<span class="line">  </span>
<span class="line">  const dispatch = createEventDispatcher()</span>
<span class="line">  </span>
<span class="line">  const sendEvent = () =&gt; {</span>
<span class="line">    dispatch('childEvent', { data: 'from child' })</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;div&gt;</span>
<span class="line">  &lt;p&gt;{message}&lt;/p&gt;</span>
<span class="line">  &lt;button on:click={sendEvent}&gt;发送事件&lt;/button&gt;</span>
<span class="line">&lt;/div&gt;</span>
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
<span class="line">  <span class="token comment">// 获取列表</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">getList</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/example/list'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 创建数据</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/api/example'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 更新数据</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">update</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/example/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> data<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 删除数据</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token keyword">delete</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/example/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
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
			</div>
		</div>
		<h2 id="svelte-特性" tabindex="-1">
			<a class="header-anchor" href="#svelte-特性"><span>Svelte 特性</span></a>
		</h2>
		<h3 id="响应式声明" tabindex="-1">
			<a class="header-anchor" href="#响应式声明"><span>响应式声明</span></a>
		</h3>
		<div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte">
			<pre v-pre><code><span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  let count = 0</span>
<span class="line">  let name = 'World'</span>
<span class="line">  </span>
<span class="line">  // 响应式声明</span>
<span class="line">  $: doubled = count * 2</span>
<span class="line">  $: greeting = `Hello ${name}!`</span>
<span class="line">  </span>
<span class="line">  // 响应式语句</span>
<span class="line">  $: if (count &gt;= 10) {</span>
<span class="line">    alert('count is getting big!')</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 响应式块</span>
<span class="line">  $: {</span>
<span class="line">    console.log(`count is ${count}`)</span>
<span class="line">    console.log(`doubled is ${doubled}`)</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;p&gt;{greeting}&lt;/p&gt;</span>
<span class="line">&lt;p&gt;Count: {count}, Doubled: {doubled}&lt;/p&gt;</span>
<span class="line">&lt;button on:click={() =&gt; count += 1}&gt;</span>
<span class="line">  Increment</span>
<span class="line">&lt;/button&gt;</span>
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
			</div>
		</div>
		<h3 id="条件渲染与循环" tabindex="-1">
			<a class="header-anchor" href="#条件渲染与循环"><span>条件渲染与循环</span></a>
		</h3>
		<div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte">
			<pre v-pre><code><span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  let items = [</span>
<span class="line">    { id: 1, name: 'Apple', category: 'fruit' },</span>
<span class="line">    { id: 2, name: 'Carrot', category: 'vegetable' },</span>
<span class="line">  ]</span>
<span class="line">  </span>
<span class="line">  let showItems = true</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">{#if showItems}</span>
<span class="line">  &lt;ul&gt;</span>
<span class="line">    {#each items as item (item.id)}</span>
<span class="line">      &lt;li class:fruit={item.category === 'fruit'}&gt;</span>
<span class="line">        {item.name}</span>
<span class="line">      &lt;/li&gt;</span>
<span class="line">    {:else}</span>
<span class="line">      &lt;li&gt;No items found&lt;/li&gt;</span>
<span class="line">    {/each}</span>
<span class="line">  &lt;/ul&gt;</span>
<span class="line">{:else}</span>
<span class="line">  &lt;p&gt;Items are hidden&lt;/p&gt;</span>
<span class="line">{/if}</span>
<span class="line"></span>
<span class="line">&lt;style&gt;</span>
<span class="line">  .fruit {</span>
<span class="line">    color: red;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
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
			</div>
		</div>
		<h3 id="组件插槽" tabindex="-1">
			<a class="header-anchor" href="#组件插槽"><span>组件插槽</span></a>
		</h3>
		<div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte">
			<pre v-pre><code><span class="line">&lt;!-- Card.svelte --&gt;</span>
<span class="line">&lt;div class=&quot;card&quot;&gt;</span>
<span class="line">  &lt;header&gt;</span>
<span class="line">    &lt;slot name=&quot;header&quot;&gt;Default header&lt;/slot&gt;</span>
<span class="line">  &lt;/header&gt;</span>
<span class="line">  </span>
<span class="line">  &lt;main&gt;</span>
<span class="line">    &lt;slot&gt;Default content&lt;/slot&gt;</span>
<span class="line">  &lt;/main&gt;</span>
<span class="line">  </span>
<span class="line">  &lt;footer&gt;</span>
<span class="line">    &lt;slot name=&quot;footer&quot; {footerData}&gt;</span>
<span class="line">      Default footer</span>
<span class="line">    &lt;/slot&gt;</span>
<span class="line">  &lt;/footer&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 使用组件 --&gt;</span>
<span class="line">&lt;Card&gt;</span>
<span class="line">  &lt;h1 slot=&quot;header&quot;&gt;Custom Header&lt;/h1&gt;</span>
<span class="line">  </span>
<span class="line">  &lt;p&gt;This is the main content&lt;/p&gt;</span>
<span class="line">  </span>
<span class="line">  &lt;div slot=&quot;footer&quot; let:footerData&gt;</span>
<span class="line">    Custom footer with data: {footerData}</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/Card&gt;</span>
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
<span class="line"><span class="token function">pnpm</span> check</span>
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
		<h2 id="性能优化" tabindex="-1">
			<a class="header-anchor" href="#性能优化"><span>性能优化</span></a>
		</h2>
		<h3 id="组件懒加载" tabindex="-1">
			<a class="header-anchor" href="#组件懒加载"><span>组件懒加载</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 动态导入组件</span></span>
<span class="line"><span class="token keyword">const</span> LazyComponent <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./LazyComponent.svelte'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="代码分割" tabindex="-1">
			<a class="header-anchor" href="#代码分割"><span>代码分割</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 路由级别的代码分割</span></span>
<span class="line"><span class="token function">router</span><span class="token punctuation">(</span><span class="token string">'/lazy'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> LazyPage <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/LazyPage/index.svelte'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// 渲染组件</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
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
<span class="line"><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>Web Boot Svelte</span>
<span class="line"></span>
<span class="line"><span class="token comment"># .env.production  </span></span>
<span class="line"><span class="token assign-left variable">VITE_API_BASE_URL</span><span class="token operator">=</span>https://api.example.com</span>
<span class="line"><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>Web Boot Svelte</span>
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
		<h3 id="vite-配置" tabindex="-1">
			<a class="header-anchor" href="#vite-配置"><span>Vite 配置</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// vite.config.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> svelte <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@sveltejs/vite-plugin-svelte'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">svelte</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  resolve<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    alias<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
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
			</div>
		</div>
		<h2 id="常见问题" tabindex="-1">
			<a class="header-anchor" href="#常见问题"><span>常见问题</span></a>
		</h2>
		<h3 id="q-如何在-svelte-中使用-typescript" tabindex="-1">
			<a class="header-anchor" href="#q-如何在-svelte-中使用-typescript"
				><span>Q: 如何在 Svelte 中使用 TypeScript？</span></a
			>
		</h3>
		<p>
			A: 项目已配置 TypeScript 支持，在 <code v-pre>&lt;script lang=&quot;ts&quot;&gt;</code> 中编写 TypeScript 代码。
		</p>
		<h3 id="q-如何处理组件间通信" tabindex="-1">
			<a class="header-anchor" href="#q-如何处理组件间通信"><span>Q: 如何处理组件间通信？</span></a>
		</h3>
		<p>A: 使用 props、events、stores 或 context API。</p>
		<h3 id="q-如何优化包体积" tabindex="-1">
			<a class="header-anchor" href="#q-如何优化包体积"><span>Q: 如何优化包体积？</span></a>
		</h3>
		<p>A: Svelte 编译时优化，天然具有更小的包体积，可进一步使用代码分割优化。</p>
		<p>更多问题请查看项目 Issues 或提交新问题。</p>
	</div>
</template>
