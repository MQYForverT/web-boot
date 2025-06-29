<template>
	<div>
		<h1 id="布局组件-backgroundlayout" tabindex="-1">
			<a class="header-anchor" href="#布局组件-backgroundlayout"><span>布局组件 (BackgroundLayout)</span></a>
		</h1>
		<p><code v-pre>BackgroundLayout</code> 是 Web Boot 的核心布局组件，提供完整的后台管理系统布局功能。</p>
		<h2 id="特性" tabindex="-1">
			<a class="header-anchor" href="#特性"><span>特性</span></a>
		</h2>
		<ul>
			<li>🎨 <strong>多主题支持</strong>: 内置明暗主题，支持自定义主题</li>
			<li>📱 <strong>响应式设计</strong>: 完美适配桌面端和移动端</li>
			<li>🔧 <strong>高度可配置</strong>: 丰富的配置选项，满足不同需求</li>
			<li>🚀 <strong>性能优化</strong>: 虚拟滚动、懒加载等性能优化</li>
			<li>🌍 <strong>国际化</strong>: 支持多语言切换</li>
			<li>♿ <strong>可访问性</strong>: 符合 WCAG 无障碍标准</li>
		</ul>
		<h2 id="安装" tabindex="-1">
			<a class="header-anchor" href="#安装"><span>安装</span></a>
		</h2>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre
				v-pre
			><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> mqy-background-layout</span>
<span class="line"><span class="token comment"># 或</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> mqy-background-layout</span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h2 id="基础使用" tabindex="-1">
			<a class="header-anchor" href="#基础使用"><span>基础使用</span></a>
		</h2>
		<h3 id="vue-3" tabindex="-1">
			<a class="header-anchor" href="#vue-3"><span>Vue 3</span></a>
		</h3>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre
				v-pre
			><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BackgroundLayout</span> <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layoutConfig<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BackgroundLayout</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BackgroundLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mqy-background-layout'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> layoutConfig <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">collapsed</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
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
			</div>
		</div>
		<h3 id="react" tabindex="-1">
			<a class="header-anchor" href="#react"><span>React</span></a>
		</h3>
		<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BackgroundLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mqy-background-layout'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>layoutConfig<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    theme<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">    layout<span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span></span>
<span class="line">    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      collapsed<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BackgroundLayout</span></span> <span class="token attr-name">config</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>layoutConfig<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token punctuation">{</span><span class="token comment">/* 您的应用内容 */</span><span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">BackgroundLayout</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
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
			</div>
		</div>
		<h3 id="svelte" tabindex="-1">
			<a class="header-anchor" href="#svelte"><span>Svelte</span></a>
		</h3>
		<div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte">
			<pre v-pre><code><span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { BackgroundLayout } from 'mqy-background-layout'</span>
<span class="line">  </span>
<span class="line">  let layoutConfig = {</span>
<span class="line">    theme: 'light',</span>
<span class="line">    layout: 'default',</span>
<span class="line">    sidebar: {</span>
<span class="line">      collapsed: false</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;BackgroundLayout config={layoutConfig}&gt;</span>
<span class="line">  &lt;!-- 您的应用内容 --&gt;</span>
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
			</div>
		</div>
		<h2 id="配置选项" tabindex="-1">
			<a class="header-anchor" href="#配置选项"><span>配置选项</span></a>
		</h2>
		<h3 id="完整配置接口" tabindex="-1">
			<a class="header-anchor" href="#完整配置接口"><span>完整配置接口</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">LayoutConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 主题配置</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token string">'light'</span> <span class="token operator">|</span> <span class="token string">'dark'</span> <span class="token operator">|</span> <span class="token string">'auto'</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 布局模式</span></span>
<span class="line">  layout<span class="token operator">:</span> <span class="token string">'default'</span> <span class="token operator">|</span> <span class="token string">'vertical'</span> <span class="token operator">|</span> <span class="token string">'horizontal'</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 侧边栏配置</span></span>
<span class="line">  sidebar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    collapsed<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    width<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">    collapsedWidth<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">    position<span class="token operator">:</span> <span class="token string">'left'</span> <span class="token operator">|</span> <span class="token string">'right'</span></span>
<span class="line">    fixed<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 头部配置</span></span>
<span class="line">  header<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    height<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">    fixed<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    showBreadcrumb<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    showUserInfo<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 标签页配置</span></span>
<span class="line">  tabs<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    enabled<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    persistent<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    closable<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    maxCount<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 底部配置</span></span>
<span class="line">  footer<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    enabled<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    height<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">    fixed<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    text<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 菜单配置</span></span>
<span class="line">  menu<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    data<span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    accordion<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    openKeys<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    selectedKeys<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 其他配置</span></span>
<span class="line">  watermark<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    enabled<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    text<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">    opacity<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  animation<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    enabled<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    duration<span class="token operator">:</span> <span class="token builtin">number</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
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
		<h3 id="菜单数据结构" tabindex="-1">
			<a class="header-anchor" href="#菜单数据结构"><span>菜单数据结构</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">MenuItem</span> <span class="token punctuation">{</span></span>
<span class="line">  key<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  children<span class="token operator">?</span><span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  hidden<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  badge<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span></span>
<span class="line">  meta<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    requiresAuth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    roles<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    keepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
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
			</div>
		</div>
		<h2 id="api-参考" tabindex="-1">
			<a class="header-anchor" href="#api-参考"><span>API 参考</span></a>
		</h2>
		<h3 id="props" tabindex="-1">
			<a class="header-anchor" href="#props"><span>Props</span></a>
		</h3>
		<table>
			<thead>
				<tr>
					<th>属性</th>
					<th>类型</th>
					<th>默认值</th>
					<th>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>config</td>
					<td><code v-pre>LayoutConfig</code></td>
					<td>-</td>
					<td>布局配置对象</td>
				</tr>
				<tr>
					<td>loading</td>
					<td><code v-pre>boolean</code></td>
					<td><code v-pre>false</code></td>
					<td>是否显示加载状态</td>
				</tr>
				<tr>
					<td>className</td>
					<td><code v-pre>string</code></td>
					<td>-</td>
					<td>自定义类名</td>
				</tr>
			</tbody>
		</table>
		<h3 id="events" tabindex="-1">
			<a class="header-anchor" href="#events"><span>Events</span></a>
		</h3>
		<table>
			<thead>
				<tr>
					<th>事件名</th>
					<th>参数</th>
					<th>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>update:theme</td>
					<td><code v-pre>(theme: string)</code></td>
					<td>主题切换时触发</td>
				</tr>
				<tr>
					<td>update:collapsed</td>
					<td><code v-pre>(collapsed: boolean)</code></td>
					<td>侧边栏折叠状态改变</td>
				</tr>
				<tr>
					<td>menu-click</td>
					<td><code v-pre>(menuItem: MenuItem)</code></td>
					<td>菜单项点击时触发</td>
				</tr>
				<tr>
					<td>tab-close</td>
					<td><code v-pre>(tabKey: string)</code></td>
					<td>标签页关闭时触发</td>
				</tr>
				<tr>
					<td>tab-change</td>
					<td><code v-pre>(tabKey: string)</code></td>
					<td>标签页切换时触发</td>
				</tr>
				<tr>
					<td>breadcrumb-click</td>
					<td><code v-pre>(item: BreadcrumbItem)</code></td>
					<td>面包屑点击时触发</td>
				</tr>
			</tbody>
		</table>
		<h3 id="slots-vue-children-react-slots-svelte" tabindex="-1">
			<a class="header-anchor" href="#slots-vue-children-react-slots-svelte"
				><span>Slots (Vue) / Children (React) / Slots (Svelte)</span></a
			>
		</h3>
		<table>
			<thead>
				<tr>
					<th>插槽名</th>
					<th>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>default</td>
					<td>主内容区域</td>
				</tr>
				<tr>
					<td>header-left</td>
					<td>头部左侧自定义内容</td>
				</tr>
				<tr>
					<td>header-right</td>
					<td>头部右侧自定义内容</td>
				</tr>
				<tr>
					<td>sidebar-top</td>
					<td>侧边栏顶部自定义内容</td>
				</tr>
				<tr>
					<td>sidebar-bottom</td>
					<td>侧边栏底部自定义内容</td>
				</tr>
				<tr>
					<td>footer</td>
					<td>底部自定义内容</td>
				</tr>
			</tbody>
		</table>
		<h2 id="高级功能" tabindex="-1">
			<a class="header-anchor" href="#高级功能"><span>高级功能</span></a>
		</h2>
		<h3 id="主题自定义" tabindex="-1">
			<a class="header-anchor" href="#主题自定义"><span>主题自定义</span></a>
		</h3>
		<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss">
			<pre v-pre><code><span class="line"><span class="token comment">// 自定义主题变量</span></span>
<span class="line"><span class="token selector">:root </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 主色调</span></span>
<span class="line">  <span class="token property">--layout-primary-color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--layout-success-color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--layout-warning-color</span><span class="token punctuation">:</span> #faad14<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--layout-error-color</span><span class="token punctuation">:</span> #f5222d<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 背景色</span></span>
<span class="line">  <span class="token property">--layout-bg-color</span><span class="token punctuation">:</span> #f0f2f5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--layout-content-bg</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--layout-sidebar-bg</span><span class="token punctuation">:</span> #001529<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 文字颜色</span></span>
<span class="line">  <span class="token property">--layout-text-color</span><span class="token punctuation">:</span> #000000d9<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--layout-text-color-secondary</span><span class="token punctuation">:</span> #00000073<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 边框和分割线</span></span>
<span class="line">  <span class="token property">--layout-border-color</span><span class="token punctuation">:</span> #d9d9d9<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--layout-border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 阴影</span></span>
<span class="line">  <span class="token property">--layout-shadow</span><span class="token punctuation">:</span> 0 2px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 暗色主题</span></span>
<span class="line"><span class="token selector">[data-theme='dark'] </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--layout-bg-color</span><span class="token punctuation">:</span> #141414<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--layout-content-bg</span><span class="token punctuation">:</span> #1f1f1f<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--layout-sidebar-bg</span><span class="token punctuation">:</span> #141414<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--layout-text-color</span><span class="token punctuation">:</span> #ffffffd9<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--layout-text-color-secondary</span><span class="token punctuation">:</span> #ffffff73<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--layout-border-color</span><span class="token punctuation">:</span> #434343<span class="token punctuation">;</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="动态配置" tabindex="-1">
			<a class="header-anchor" href="#动态配置"><span>动态配置</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// Vue 3 示例</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> layoutConfig <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">  sidebar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    collapsed<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 动态修改配置</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">toggleTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  layoutConfig<span class="token punctuation">.</span>theme <span class="token operator">=</span> layoutConfig<span class="token punctuation">.</span>theme <span class="token operator">===</span> <span class="token string">'light'</span> <span class="token operator">?</span> <span class="token string">'dark'</span> <span class="token operator">:</span> <span class="token string">'light'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">toggleSidebar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  layoutConfig<span class="token punctuation">.</span>sidebar<span class="token punctuation">.</span>collapsed <span class="token operator">=</span> <span class="token operator">!</span>layoutConfig<span class="token punctuation">.</span>sidebar<span class="token punctuation">.</span>collapsed</span>
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
			</div>
		</div>
		<h3 id="路由集成" tabindex="-1">
			<a class="header-anchor" href="#路由集成"><span>路由集成</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// Vue Router 集成</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleMenuClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>menuItem<span class="token operator">:</span> MenuItem<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>menuItem<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>menuItem<span class="token punctuation">.</span>path<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// React Router 集成</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleMenuClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>menuItem<span class="token operator">:</span> MenuItem<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>menuItem<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">navigate</span><span class="token punctuation">(</span>menuItem<span class="token punctuation">.</span>path<span class="token punctuation">)</span></span>
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
			</div>
		</div>
		<h3 id="权限控制" tabindex="-1">
			<a class="header-anchor" href="#权限控制"><span>权限控制</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 菜单权限过滤</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">filterMenuByPermission</span> <span class="token operator">=</span> <span class="token punctuation">(</span>menus<span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> userRoles<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> menus<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>menu <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>menu<span class="token punctuation">.</span>meta<span class="token operator">?.</span>roles <span class="token operator">&amp;&amp;</span> menu<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>roles<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> menu<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>roles<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>role <span class="token operator">=></span> userRoles<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>role<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>menu <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span>menu<span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> menu<span class="token punctuation">.</span>children <span class="token operator">?</span> <span class="token function">filterMenuByPermission</span><span class="token punctuation">(</span>menu<span class="token punctuation">.</span>children<span class="token punctuation">,</span> userRoles<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
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
			</div>
		</div>
		<h2 id="组件结构" tabindex="-1">
			<a class="header-anchor" href="#组件结构"><span>组件结构</span></a>
		</h2>
		<h3 id="目录结构" tabindex="-1">
			<a class="header-anchor" href="#目录结构"><span>目录结构</span></a>
		</h3>
		<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text">
			<pre v-pre><code><span class="line">BackgroundLayout/</span>
<span class="line">├── component/              # 子组件</span>
<span class="line">│   ├── Aside/             # 侧边栏组件</span>
<span class="line">│   │   ├── index.vue</span>
<span class="line">│   │   ├── Menu.vue</span>
<span class="line">│   │   └── MenuItem.vue</span>
<span class="line">│   ├── Header/            # 头部组件</span>
<span class="line">│   │   ├── index.vue</span>
<span class="line">│   │   ├── Breadcrumb.vue</span>
<span class="line">│   │   ├── UserAvatar.vue</span>
<span class="line">│   │   └── FullScreen.vue</span>
<span class="line">│   ├── Main/              # 主内容区</span>
<span class="line">│   │   └── index.vue</span>
<span class="line">│   ├── NavTab/            # 标签页组件</span>
<span class="line">│   │   ├── index.vue</span>
<span class="line">│   │   ├── TagItem.vue</span>
<span class="line">│   │   └── TagDropdown.vue</span>
<span class="line">│   └── Footer/            # 底部组件</span>
<span class="line">│       └── index.vue</span>
<span class="line">├── hooks/                 # 组合式函数</span>
<span class="line">│   ├── useTheme.ts</span>
<span class="line">│   ├── useState.ts</span>
<span class="line">│   ├── useTag.ts</span>
<span class="line">│   └── useWatermark.ts</span>
<span class="line">├── styles/                # 样式文件</span>
<span class="line">│   ├── index.scss</span>
<span class="line">│   ├── reset.scss</span>
<span class="line">│   ├── transition.scss</span>
<span class="line">│   └── element-plus.scss</span>
<span class="line">├── constants/             # 常量配置</span>
<span class="line">│   └── aside.ts</span>
<span class="line">├── BackgroundLayout.vue   # 主组件</span>
<span class="line">├── BackgroundLayout.ts    # 组件逻辑</span>
<span class="line">└── index.ts              # 导出文件</span>
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
			</div>
		</div>
		<h3 id="核心子组件" tabindex="-1">
			<a class="header-anchor" href="#核心子组件"><span>核心子组件</span></a>
		</h3>
		<h4 id="侧边栏-aside" tabindex="-1">
			<a class="header-anchor" href="#侧边栏-aside"><span>侧边栏 (Aside)</span></a>
		</h4>
		<ul>
			<li>可折叠的侧边导航</li>
			<li>多级菜单支持</li>
			<li>图标和徽章显示</li>
			<li>搜索功能</li>
		</ul>
		<h4 id="头部-header" tabindex="-1">
			<a class="header-anchor" href="#头部-header"><span>头部 (Header)</span></a>
		</h4>
		<ul>
			<li>Logo 和标题显示</li>
			<li>面包屑导航</li>
			<li>用户信息和操作</li>
			<li>全屏切换</li>
			<li>主题切换</li>
		</ul>
		<h4 id="标签页-navtab" tabindex="-1">
			<a class="header-anchor" href="#标签页-navtab"><span>标签页 (NavTab)</span></a>
		</h4>
		<ul>
			<li>多标签页管理</li>
			<li>右键菜单操作</li>
			<li>拖拽排序</li>
			<li>缓存机制</li>
		</ul>
		<h4 id="主内容区-main" tabindex="-1">
			<a class="header-anchor" href="#主内容区-main"><span>主内容区 (Main)</span></a>
		</h4>
		<ul>
			<li>内容展示区域</li>
			<li>滚动优化</li>
			<li>加载状态</li>
		</ul>
		<h2 id="自定义开发" tabindex="-1">
			<a class="header-anchor" href="#自定义开发"><span>自定义开发</span></a>
		</h2>
		<h3 id="扩展子组件" tabindex="-1">
			<a class="header-anchor" href="#扩展子组件"><span>扩展子组件</span></a>
		</h3>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 自定义头部组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token comment">&lt;!-- 自定义中间内容 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// 自定义头部逻辑</span></span>
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
			</div>
		</div>
		<h3 id="添加新功能" tabindex="-1">
			<a class="header-anchor" href="#添加新功能"><span>添加新功能</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 添加新的 Hook</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useCustomFeature</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">customMethod</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 自定义功能实现</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    state<span class="token punctuation">,</span></span>
<span class="line">    customMethod</span>
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
			</div>
		</div>
		<h2 id="性能优化" tabindex="-1">
			<a class="header-anchor" href="#性能优化"><span>性能优化</span></a>
		</h2>
		<h3 id="虚拟滚动" tabindex="-1">
			<a class="header-anchor" href="#虚拟滚动"><span>虚拟滚动</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 大数据量菜单优化</span></span>
<span class="line"><span class="token keyword">const</span> VirtualMenu <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  itemHeight<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span></span>
<span class="line">  visibleCount<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">  buffer<span class="token operator">:</span> <span class="token number">5</span></span>
<span class="line"><span class="token punctuation">}</span></span>
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
		<h3 id="懒加载" tabindex="-1">
			<a class="header-anchor" href="#懒加载"><span>懒加载</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 组件懒加载</span></span>
<span class="line"><span class="token keyword">const</span> LazyComponent <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./LazyComponent.vue'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="缓存策略" tabindex="-1">
			<a class="header-anchor" href="#缓存策略"><span>缓存策略</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 页面缓存配置</span></span>
<span class="line"><span class="token keyword">const</span> cacheConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  max<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">  exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'login'</span><span class="token punctuation">,</span> <span class="token string">'error'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h2 id="故障排除" tabindex="-1">
			<a class="header-anchor" href="#故障排除"><span>故障排除</span></a>
		</h2>
		<h3 id="常见问题" tabindex="-1">
			<a class="header-anchor" href="#常见问题"><span>常见问题</span></a>
		</h3>
		<ol>
			<li>
				<p><strong>样式不生效</strong></p>
				<ul>
					<li>确保正确导入样式文件</li>
					<li>检查 CSS 变量是否正确设置</li>
				</ul>
			</li>
			<li>
				<p><strong>菜单不显示</strong></p>
				<ul>
					<li>检查菜单数据格式</li>
					<li>确认权限配置</li>
				</ul>
			</li>
			<li>
				<p><strong>主题切换失效</strong></p>
				<ul>
					<li>检查主题变量定义</li>
					<li>确认事件监听是否正确</li>
				</ul>
			</li>
			<li>
				<p><strong>移动端适配问题</strong></p>
				<ul>
					<li>检查响应式断点</li>
					<li>确认触摸事件处理</li>
				</ul>
			</li>
		</ol>
		<h3 id="调试模式" tabindex="-1">
			<a class="header-anchor" href="#调试模式"><span>调试模式</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 开启调试模式</span></span>
<span class="line"><span class="token keyword">const</span> layoutConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启调试信息</span></span>
<span class="line">  <span class="token comment">// 其他配置...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h2 id="版本兼容性" tabindex="-1">
			<a class="header-anchor" href="#版本兼容性"><span>版本兼容性</span></a>
		</h2>
		<table>
			<thead>
				<tr>
					<th>版本</th>
					<th>Vue</th>
					<th>React</th>
					<th>Svelte</th>
					<th>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2.x</td>
					<td>3.0+</td>
					<td>18.0+</td>
					<td>4.0+</td>
					<td>当前版本</td>
				</tr>
				<tr>
					<td>1.x</td>
					<td>2.6+</td>
					<td>16.8+</td>
					<td>3.0+</td>
					<td>旧版本</td>
				</tr>
			</tbody>
		</table>
		<h2 id="更多示例" tabindex="-1">
			<a class="header-anchor" href="#更多示例"><span>更多示例</span></a>
		</h2>
		<p>查看完整的示例代码和演示，请访问：</p>
		<ul>
			<li><a href="https://web-boot-demo.com" target="_blank" rel="noopener noreferrer">在线演示</a></li>
			<li>
				<a href="https://github.com/your-username/web-boot" target="_blank" rel="noopener noreferrer">GitHub 仓库</a>
			</li>
			<li><a href="https://codesandbox.io/examples" target="_blank" rel="noopener noreferrer">CodeSandbox 示例</a></li>
		</ul>
	</div>
</template>
