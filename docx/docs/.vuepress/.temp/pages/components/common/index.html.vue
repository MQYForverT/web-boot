<template>
	<div>
		<h1 id="通用组件" tabindex="-1">
			<a class="header-anchor" href="#通用组件"><span>通用组件</span></a>
		</h1>
		<p>Web Boot 提供了一系列通用组件和工具函数，帮助您快速构建功能完整的应用程序。</p>
		<h2 id="组件概览" tabindex="-1">
			<a class="header-anchor" href="#组件概览"><span>组件概览</span></a>
		</h2>
		<h3 id="🎨-主题组件" tabindex="-1">
			<a class="header-anchor" href="#🎨-主题组件"><span>🎨 主题组件</span></a>
		</h3>
		<ul>
			<li><strong>ThemeToggle</strong> - 主题切换按钮</li>
			<li><strong>ColorPicker</strong> - 颜色选择器</li>
			<li><strong>ThemeProvider</strong> - 主题上下文提供者</li>
		</ul>
		<h3 id="🌍-国际化组件" tabindex="-1">
			<a class="header-anchor" href="#🌍-国际化组件"><span>🌍 国际化组件</span></a>
		</h3>
		<ul>
			<li><strong>LanguageSelector</strong> - 语言选择器</li>
			<li><strong>LocaleProvider</strong> - 国际化上下文提供者</li>
			<li><strong>TranslationManager</strong> - 翻译管理器</li>
		</ul>
		<h3 id="🔧-工具组件" tabindex="-1">
			<a class="header-anchor" href="#🔧-工具组件"><span>🔧 工具组件</span></a>
		</h3>
		<ul>
			<li><strong>Loading</strong> - 加载动画</li>
			<li><strong>ErrorBoundary</strong> - 错误边界</li>
			<li><strong>KeepAlive</strong> - 组件缓存</li>
			<li><strong>Portal</strong> - 传送门组件</li>
		</ul>
		<h3 id="📊-状态管理" tabindex="-1">
			<a class="header-anchor" href="#📊-状态管理"><span>📊 状态管理</span></a>
		</h3>
		<ul>
			<li><strong>GlobalStore</strong> - 全局状态管理</li>
			<li><strong>PersistentStorage</strong> - 持久化存储</li>
			<li><strong>EventBus</strong> - 事件总线</li>
		</ul>
		<h2 id="主题组件" tabindex="-1">
			<a class="header-anchor" href="#主题组件"><span>主题组件</span></a>
		</h2>
		<h3 id="themetoggle-主题切换" tabindex="-1">
			<a class="header-anchor" href="#themetoggle-主题切换"><span>ThemeToggle - 主题切换</span></a>
		</h3>
		<p>美观的主题切换按钮，支持明暗模式切换。</p>
		<h4 id="基础使用" tabindex="-1">
			<a class="header-anchor" href="#基础使用"><span>基础使用</span></a>
		</h4>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre v-pre><code><span class="line"><span class="token comment">&lt;!-- Vue 3 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThemeToggle</span> <span class="token attr-name">:theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentTheme<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleThemeChange<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line">	<span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeToggle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'web-boot-common'</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> currentTheme <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'light'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleThemeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">theme</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		currentTheme<span class="token punctuation">.</span>value <span class="token operator">=</span> theme</span>
<span class="line">		<span class="token comment">// 应用主题变更</span></span>
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
			</div>
		</div>
		<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx">
			<pre v-pre><code><span class="line"><span class="token comment">// React</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeToggle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'web-boot-common'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">const</span> <span class="token punctuation">[</span>theme<span class="token punctuation">,</span> setTheme<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'light'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleThemeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newTheme<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">setTheme</span><span class="token punctuation">(</span>newTheme<span class="token punctuation">)</span></span>
<span class="line">		<span class="token comment">// 应用主题变更</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ThemeToggle</span></span> <span class="token attr-name">theme</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleThemeChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span></span>
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
			</div>
		</div>
		<div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte">
			<pre v-pre><code><span class="line">&lt;!-- Svelte --&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { ThemeToggle } from 'web-boot-common'</span>
<span class="line"></span>
<span class="line">  let currentTheme = 'light'</span>
<span class="line"></span>
<span class="line">  const handleThemeChange = (event) =&gt; {</span>
<span class="line">    currentTheme = event.detail</span>
<span class="line">    // 应用主题变更</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;ThemeToggle</span>
<span class="line">  theme={currentTheme}</span>
<span class="line">  on:change={handleThemeChange}</span>
<span class="line">/&gt;</span>
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
		<h4 id="api-参考" tabindex="-1">
			<a class="header-anchor" href="#api-参考"><span>API 参考</span></a>
		</h4>
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
					<td>theme</td>
					<td><code v-pre>'light' | 'dark' | 'auto'</code></td>
					<td><code v-pre>'light'</code></td>
					<td>当前主题</td>
				</tr>
				<tr>
					<td>size</td>
					<td><code v-pre>'small' | 'medium' | 'large'</code></td>
					<td><code v-pre>'medium'</code></td>
					<td>组件大小</td>
				</tr>
				<tr>
					<td>shape</td>
					<td><code v-pre>'circle' | 'round' | 'square'</code></td>
					<td><code v-pre>'circle'</code></td>
					<td>按钮形状</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td><code v-pre>boolean</code></td>
					<td><code v-pre>false</code></td>
					<td>是否禁用</td>
				</tr>
				<tr>
					<td>showLabel</td>
					<td><code v-pre>boolean</code></td>
					<td><code v-pre>false</code></td>
					<td>是否显示文字标签</td>
				</tr>
			</tbody>
		</table>
		<h3 id="colorpicker-颜色选择器" tabindex="-1">
			<a class="header-anchor" href="#colorpicker-颜色选择器"><span>ColorPicker - 颜色选择器</span></a>
		</h3>
		<p>功能丰富的颜色选择器组件。</p>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre
				v-pre
			><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primaryColor<span class="token punctuation">"</span></span> <span class="token attr-name">:presets</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>colorPresets<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleColorChange<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token keyword">const</span> primaryColor <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'#1890ff'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">const</span> colorPresets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'#1890ff'</span><span class="token punctuation">,</span> <span class="token string">'#52c41a'</span><span class="token punctuation">,</span> <span class="token string">'#faad14'</span><span class="token punctuation">,</span> <span class="token string">'#f5222d'</span><span class="token punctuation">,</span> <span class="token string">'#722ed1'</span><span class="token punctuation">,</span> <span class="token string">'#13c2c2'</span><span class="token punctuation">,</span> <span class="token string">'#eb2f96'</span><span class="token punctuation">,</span> <span class="token string">'#fa8c16'</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleColorChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">color</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		primaryColor<span class="token punctuation">.</span>value <span class="token operator">=</span> color</span>
<span class="line">		<span class="token comment">// 应用颜色变更</span></span>
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
			</div>
		</div>
		<h2 id="国际化组件" tabindex="-1">
			<a class="header-anchor" href="#国际化组件"><span>国际化组件</span></a>
		</h2>
		<h3 id="languageselector-语言选择器" tabindex="-1">
			<a class="header-anchor" href="#languageselector-语言选择器"><span>LanguageSelector - 语言选择器</span></a>
		</h3>
		<p>支持多语言切换的下拉选择器。</p>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre
				v-pre
			><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LanguageSelector</span> <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentLocale<span class="token punctuation">"</span></span> <span class="token attr-name">:languages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>supportedLanguages<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleLanguageChange<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token keyword">const</span> currentLocale <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'zh-CN'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">const</span> supportedLanguages <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">		<span class="token punctuation">{</span> <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'简体中文'</span><span class="token punctuation">,</span> <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token string">'🇨🇳'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">{</span> <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'English'</span><span class="token punctuation">,</span> <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token string">'🇺🇸'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">{</span> <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'ja-JP'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'日本語'</span><span class="token punctuation">,</span> <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token string">'🇯🇵'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleLanguageChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">locale</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		currentLocale<span class="token punctuation">.</span>value <span class="token operator">=</span> locale</span>
<span class="line">		<span class="token comment">// 应用语言变更</span></span>
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
			</div>
		</div>
		<h3 id="localeprovider-国际化提供者" tabindex="-1">
			<a class="header-anchor" href="#localeprovider-国际化提供者"><span>LocaleProvider - 国际化提供者</span></a>
		</h3>
		<p>为应用提供国际化上下文。</p>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre
				v-pre
			><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocaleProvider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentLocale<span class="token punctuation">"</span></span> <span class="token attr-name">:messages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>messages<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocaleProvider</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token keyword">const</span> currentLocale <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'zh-CN'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token string-property property">'zh-CN'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token string">'你好'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token literal-property property">welcome</span><span class="token operator">:</span> <span class="token string">'欢迎使用 Web Boot'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'en-US'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token literal-property property">welcome</span><span class="token operator">:</span> <span class="token string">'Welcome to Web Boot'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
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
			</div>
		</div>
		<h2 id="工具组件" tabindex="-1">
			<a class="header-anchor" href="#工具组件"><span>工具组件</span></a>
		</h2>
		<h3 id="loading-加载动画" tabindex="-1">
			<a class="header-anchor" href="#loading-加载动画"><span>Loading - 加载动画</span></a>
		</h3>
		<p>多种样式的加载动画组件。</p>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre
				v-pre
			><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token comment">&lt;!-- 基础使用 --></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoading<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">&lt;!-- 自定义样式 --></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoading<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>spinner<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#1890ff<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>加载中...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">&lt;!-- 局部加载 --></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoading<span class="token punctuation">"</span></span> <span class="token attr-name">:overlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token comment">&lt;!-- 内容 --></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
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
		<h4 id="loading-类型" tabindex="-1">
			<a class="header-anchor" href="#loading-类型"><span>Loading 类型</span></a>
		</h4>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">LoadingType</span> <span class="token operator">=</span></span>
<span class="line">	<span class="token operator">|</span> <span class="token string">'spinner'</span> <span class="token comment">// 旋转器</span></span>
<span class="line">	<span class="token operator">|</span> <span class="token string">'dots'</span> <span class="token comment">// 点动画</span></span>
<span class="line">	<span class="token operator">|</span> <span class="token string">'bars'</span> <span class="token comment">// 条形动画</span></span>
<span class="line">	<span class="token operator">|</span> <span class="token string">'pulse'</span> <span class="token comment">// 脉冲动画</span></span>
<span class="line">	<span class="token operator">|</span> <span class="token string">'skeleton'</span> <span class="token comment">// 骨架屏</span></span>
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
		<h3 id="errorboundary-错误边界" tabindex="-1">
			<a class="header-anchor" href="#errorboundary-错误边界"><span>ErrorBoundary - 错误边界</span></a>
		</h3>
		<p>捕获和处理组件错误的边界组件。</p>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre
				v-pre
			><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorBoundary</span> <span class="token attr-name">@error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleError<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#fallback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ error, retry }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error-fallback<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>出错了<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ error.message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>retry<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>重试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">&lt;!-- 可能出错的组件 --></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RiskyComponent</span> <span class="token punctuation">/></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ErrorBoundary</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleError</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> Error<span class="token punctuation">,</span> <span class="token literal-property property">errorInfo</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'组件错误:'</span><span class="token punctuation">,</span> error<span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span></span>
<span class="line">		<span class="token comment">// 上报错误日志</span></span>
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
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="portal-传送门组件" tabindex="-1">
			<a class="header-anchor" href="#portal-传送门组件"><span>Portal - 传送门组件</span></a>
		</h3>
		<p>将子组件渲染到指定的 DOM 节点。</p>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre
				v-pre
			><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showModal = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>显示模态框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Portal</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showModal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-overlay<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showModal = false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-content<span class="token punctuation">"</span></span> <span class="token attr-name">@click.stop</span><span class="token punctuation">></span></span></span>
<span class="line">					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>模态框内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span></span>
<span class="line">					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showModal = false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关闭<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Portal</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
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
		<h2 id="状态管理" tabindex="-1">
			<a class="header-anchor" href="#状态管理"><span>状态管理</span></a>
		</h2>
		<h3 id="globalstore-全局状态" tabindex="-1">
			<a class="header-anchor" href="#globalstore-全局状态"><span>GlobalStore - 全局状态</span></a>
		</h3>
		<p>轻量级的全局状态管理解决方案。</p>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// store/index.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'web-boot-common'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useGlobalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 状态定义</span></span>
<span class="line">	state<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		user<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">		theme<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">		locale<span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span></span>
<span class="line">		sidebarCollapsed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 计算属性</span></span>
<span class="line">	getters<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function-variable function">isLoggedIn</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span><span class="token operator">!</span>state<span class="token punctuation">.</span>user<span class="token punctuation">,</span></span>
<span class="line">		<span class="token function-variable function">themeClass</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">theme-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>state<span class="token punctuation">.</span>theme<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 操作方法</span></span>
<span class="line">	actions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">setUser</span><span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> user</span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token function">toggleTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">this</span><span class="token punctuation">.</span>theme <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>theme <span class="token operator">===</span> <span class="token string">'light'</span> <span class="token operator">?</span> <span class="token string">'dark'</span> <span class="token operator">:</span> <span class="token string">'light'</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token function">toggleSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">this</span><span class="token punctuation">.</span>sidebarCollapsed <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>sidebarCollapsed</span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<p>使用示例：</p>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre
				v-pre
			><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>themeClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoggedIn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>欢迎，{{ user.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggleTheme<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>切换主题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/store'</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">const</span> <span class="token punctuation">{</span> user<span class="token punctuation">,</span> isLoggedIn<span class="token punctuation">,</span> themeClass <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">const</span> <span class="token punctuation">{</span> toggleTheme <span class="token punctuation">}</span> <span class="token operator">=</span> store</span>
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
		<h3 id="persistentstorage-持久化存储" tabindex="-1">
			<a class="header-anchor" href="#persistentstorage-持久化存储"><span>PersistentStorage - 持久化存储</span></a>
		</h3>
		<p>带有过期时间和加密功能的本地存储工具。</p>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PersistentStorage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'web-boot-common'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建存储实例</span></span>
<span class="line"><span class="token keyword">const</span> storage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersistentStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	prefix<span class="token operator">:</span> <span class="token string">'web-boot:'</span><span class="token punctuation">,</span> <span class="token comment">// 键名前缀</span></span>
<span class="line">	encrypt<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否加密</span></span>
<span class="line">	defaultExpiration<span class="token operator">:</span> <span class="token number">7</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 默认过期时间(7天)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 基础使用</span></span>
<span class="line">storage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'user-info'</span><span class="token punctuation">,</span> userData<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> userInfo <span class="token operator">=</span> storage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user-info'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 设置过期时间</span></span>
<span class="line">storage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'temp-data'</span><span class="token punctuation">,</span> tempData<span class="token punctuation">,</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// 1分钟后过期</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 检查是否存在</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>storage<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">'user-token'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 处理逻辑</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 清除过期数据</span></span>
<span class="line">storage<span class="token punctuation">.</span><span class="token function">cleanup</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 清除所有数据</span></span>
<span class="line">storage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
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
			</div>
		</div>
		<h3 id="eventbus-事件总线" tabindex="-1">
			<a class="header-anchor" href="#eventbus-事件总线"><span>EventBus - 事件总线</span></a>
		</h3>
		<p>跨组件通信的事件总线。</p>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventBus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'web-boot-common'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建事件总线</span></span>
<span class="line"><span class="token keyword">const</span> eventBus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventBus</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 监听事件</span></span>
<span class="line">eventBus<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'user-login'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户登录:'</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 发送事件</span></span>
<span class="line">eventBus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'user-login'</span><span class="token punctuation">,</span> userData<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 一次性监听</span></span>
<span class="line">eventBus<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">'app-ready'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'应用准备就绪'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 移除监听器</span></span>
<span class="line"><span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> eventBus<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'theme-change'</span><span class="token punctuation">,</span> handleThemeChange<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 移除监听</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 移除所有监听器</span></span>
<span class="line">eventBus<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'user-login'</span><span class="token punctuation">)</span></span>
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
		<h2 id="工具函数" tabindex="-1">
			<a class="header-anchor" href="#工具函数"><span>工具函数</span></a>
		</h2>
		<h3 id="常用工具函数" tabindex="-1">
			<a class="header-anchor" href="#常用工具函数"><span>常用工具函数</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 类型检查</span></span>
<span class="line">	isString<span class="token punctuation">,</span></span>
<span class="line">	isNumber<span class="token punctuation">,</span></span>
<span class="line">	isArray<span class="token punctuation">,</span></span>
<span class="line">	isObject<span class="token punctuation">,</span></span>
<span class="line">	isEmpty<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 数组操作</span></span>
<span class="line">	unique<span class="token punctuation">,</span></span>
<span class="line">	flatten<span class="token punctuation">,</span></span>
<span class="line">	groupBy<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 对象操作</span></span>
<span class="line">	deepClone<span class="token punctuation">,</span></span>
<span class="line">	deepMerge<span class="token punctuation">,</span></span>
<span class="line">	pick<span class="token punctuation">,</span></span>
<span class="line">	omit<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 字符串操作</span></span>
<span class="line">	camelCase<span class="token punctuation">,</span></span>
<span class="line">	kebabCase<span class="token punctuation">,</span></span>
<span class="line">	capitalize<span class="token punctuation">,</span></span>
<span class="line">	truncate<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 数字操作</span></span>
<span class="line">	formatNumber<span class="token punctuation">,</span></span>
<span class="line">	formatCurrency<span class="token punctuation">,</span></span>
<span class="line">	formatPercent<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 日期操作</span></span>
<span class="line">	formatDate<span class="token punctuation">,</span></span>
<span class="line">	formatRelativeTime<span class="token punctuation">,</span></span>
<span class="line">	isDateValid<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 验证函数</span></span>
<span class="line">	isEmail<span class="token punctuation">,</span></span>
<span class="line">	isPhone<span class="token punctuation">,</span></span>
<span class="line">	isUrl<span class="token punctuation">,</span></span>
<span class="line">	isIdCard<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 防抖节流</span></span>
<span class="line">	debounce<span class="token punctuation">,</span></span>
<span class="line">	throttle<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 其他工具</span></span>
<span class="line">	uuid<span class="token punctuation">,</span></span>
<span class="line">	sleep<span class="token punctuation">,</span></span>
<span class="line">	retry<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'web-boot-common'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用示例</span></span>
<span class="line"><span class="token keyword">const</span> uniqueArray <span class="token operator">=</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> clonedObject <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>originalObject<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> debouncedFn <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>originalFn<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> formattedDate <span class="token operator">=</span> <span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">)</span></span>
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
			</div>
		</div>
		<h3 id="自定义-hook-vue-3" tabindex="-1">
			<a class="header-anchor" href="#自定义-hook-vue-3"><span>自定义 Hook (Vue 3)</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// useLocalStorage - 响应式本地存储</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useLocalStorage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'web-boot-common'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> theme<span class="token punctuation">,</span> setValue<span class="token operator">:</span> setTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span><span class="token string">'theme'</span><span class="token punctuation">,</span> <span class="token string">'light'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// useDebounce - 防抖</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useDebounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'web-boot-common'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> searchTerm <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> debouncedSearchTerm <span class="token operator">=</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span>searchTerm<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// useAsync - 异步状态管理</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'web-boot-common'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> error<span class="token punctuation">,</span> execute <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAsync</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">fetchUserData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
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
			</div>
		</div>
		<h2 id="样式系统" tabindex="-1">
			<a class="header-anchor" href="#样式系统"><span>样式系统</span></a>
		</h2>
		<h3 id="css-变量" tabindex="-1">
			<a class="header-anchor" href="#css-变量"><span>CSS 变量</span></a>
		</h3>
		<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss">
			<pre v-pre><code><span class="line"><span class="token comment">// 通用组件 CSS 变量</span></span>
<span class="line"><span class="token selector">:root </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 颜色系统</span></span>
<span class="line">	<span class="token property">--color-primary</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--color-success</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--color-warning</span><span class="token punctuation">:</span> #faad14<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--color-error</span><span class="token punctuation">:</span> #f5222d<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--color-info</span><span class="token punctuation">:</span> #13c2c2<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 灰度色彩</span></span>
<span class="line">	<span class="token property">--color-text</span><span class="token punctuation">:</span> #000000d9<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--color-text-secondary</span><span class="token punctuation">:</span> #00000073<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--color-text-disabled</span><span class="token punctuation">:</span> #00000040<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--color-border</span><span class="token punctuation">:</span> #d9d9d9<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--color-divider</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--color-background</span><span class="token punctuation">:</span> #fafafa<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 间距系统</span></span>
<span class="line">	<span class="token property">--spacing-xs</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--spacing-sm</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--spacing-md</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--spacing-lg</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--spacing-xl</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 圆角系统</span></span>
<span class="line">	<span class="token property">--border-radius-sm</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--border-radius-md</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--border-radius-lg</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--border-radius-xl</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 阴影系统</span></span>
<span class="line">	<span class="token property">--shadow-sm</span><span class="token punctuation">:</span> 0 1px 2px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.03<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--shadow-md</span><span class="token punctuation">:</span> 0 1px 6px -1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--shadow-lg</span><span class="token punctuation">:</span> 0 4px 12px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--shadow-xl</span><span class="token punctuation">:</span> 0 6px 16px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 动画系统</span></span>
<span class="line">	<span class="token property">--duration-fast</span><span class="token punctuation">:</span> 0.15s<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--duration-normal</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--duration-slow</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--easing</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.645<span class="token punctuation">,</span> 0.045<span class="token punctuation">,</span> 0.355<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
			</div>
		</div>
		<h3 id="工具类" tabindex="-1">
			<a class="header-anchor" href="#工具类"><span>工具类</span></a>
		</h3>
		<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss">
			<pre v-pre><code><span class="line"><span class="token comment">// 布局工具类</span></span>
<span class="line"><span class="token selector">.flex </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.flex-center </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.flex-column </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.flex-wrap </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 间距工具类</span></span>
<span class="line"><span class="token selector">.m-0 </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.p-0 </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.mt-1 </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--spacing-xs<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.mb-1 </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--spacing-xs<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// ... 更多间距类</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 文字工具类</span></span>
<span class="line"><span class="token selector">.text-center </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.text-left </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.text-right </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.text-bold </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.text-primary </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color-primary<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 显示隐藏</span></span>
<span class="line"><span class="token selector">.hidden </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.invisible </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.sr-only </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">/* 屏幕阅读器专用 */</span></span>
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
			</div>
		</div>
		<h2 id="使用指南" tabindex="-1">
			<a class="header-anchor" href="#使用指南"><span>使用指南</span></a>
		</h2>
		<h3 id="安装和配置" tabindex="-1">
			<a class="header-anchor" href="#安装和配置"><span>安装和配置</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// main.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createWebBootCommon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'web-boot-common'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 配置通用组件</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line">	<span class="token function">createWebBootCommon</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">		theme<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">			colors<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">				primary<span class="token operator">:</span> <span class="token string">'#1890ff'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		locale<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span></span>
<span class="line">			fallback<span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		storage<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			prefix<span class="token operator">:</span> <span class="token string">'web-boot:'</span><span class="token punctuation">,</span></span>
<span class="line">			encrypt<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span></span>
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
		<h3 id="按需导入" tabindex="-1">
			<a class="header-anchor" href="#按需导入"><span>按需导入</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 只导入需要的组件和函数</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeToggle<span class="token punctuation">,</span> LanguageSelector<span class="token punctuation">,</span> Loading<span class="token punctuation">,</span> useLocalStorage<span class="token punctuation">,</span> formatDate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'web-boot-common'</span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h2 id="最佳实践" tabindex="-1">
			<a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a>
		</h2>
		<h3 id="_1-主题一致性" tabindex="-1">
			<a class="header-anchor" href="#_1-主题一致性"><span>1. 主题一致性</span></a>
		</h3>
		<ul>
			<li>使用统一的 CSS 变量系统</li>
			<li>保持颜色和间距的一致性</li>
			<li>提供完整的明暗主题支持</li>
		</ul>
		<h3 id="_2-性能优化" tabindex="-1">
			<a class="header-anchor" href="#_2-性能优化"><span>2. 性能优化</span></a>
		</h3>
		<ul>
			<li>按需导入减少包体积</li>
			<li>使用防抖节流优化交互</li>
			<li>合理使用组件缓存</li>
		</ul>
		<h3 id="_3-可访问性" tabindex="-1">
			<a class="header-anchor" href="#_3-可访问性"><span>3. 可访问性</span></a>
		</h3>
		<ul>
			<li>提供 ARIA 标签支持</li>
			<li>确保键盘导航</li>
			<li>保证颜色对比度</li>
		</ul>
		<h3 id="_4-类型安全" tabindex="-1">
			<a class="header-anchor" href="#_4-类型安全"><span>4. 类型安全</span></a>
		</h3>
		<ul>
			<li>使用 TypeScript 定义类型</li>
			<li>提供完整的类型导出</li>
			<li>确保 API 的类型安全</li>
		</ul>
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
		<h2 id="贡献指南" tabindex="-1">
			<a class="header-anchor" href="#贡献指南"><span>贡献指南</span></a>
		</h2>
		<p>欢迎为 Web Boot 通用组件库贡献代码：</p>
		<ol>
			<li>Fork 项目仓库</li>
			<li>创建功能分支</li>
			<li>提交代码变更</li>
			<li>创建 Pull Request</li>
		</ol>
		<p>
			详细的贡献指南请查看
			<a
				href="https://github.com/your-username/web-boot/blob/main/CONTRIBUTING.md"
				target="_blank"
				rel="noopener noreferrer"
				>CONTRIBUTING.md</a
			>。
		</p>
	</div>
</template>
