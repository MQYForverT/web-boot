<template>
	<div>
		<h1 id="登录组件-backgroundlogin" tabindex="-1">
			<a class="header-anchor" href="#登录组件-backgroundlogin"><span>登录组件 (BackgroundLogin)</span></a>
		</h1>
		<p><code v-pre>BackgroundLogin</code> 是 Web Boot 提供的美观且功能完整的登录组件，支持多种登录方式和自定义配置。</p>
		<h2 id="特性" tabindex="-1">
			<a class="header-anchor" href="#特性"><span>特性</span></a>
		</h2>
		<ul>
			<li>🎨 <strong>精美设计</strong>: 现代化的登录界面设计</li>
			<li>🔐 <strong>多种登录方式</strong>: 支持用户名/邮箱/手机号登录</li>
			<li>✅ <strong>表单验证</strong>: 内置完整的表单验证逻辑</li>
			<li>📱 <strong>响应式布局</strong>: 完美适配各种屏幕尺寸</li>
			<li>🌍 <strong>国际化支持</strong>: 支持多语言切换</li>
			<li>🎭 <strong>主题切换</strong>: 支持明暗主题</li>
			<li>🔒 <strong>安全加密</strong>: 密码加密传输</li>
			<li>💾 <strong>记住登录</strong>: 支持记住登录状态</li>
		</ul>
		<h2 id="安装" tabindex="-1">
			<a class="header-anchor" href="#安装"><span>安装</span></a>
		</h2>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre
				v-pre
			><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> mqy-background-login</span>
<span class="line"><span class="token comment"># 或</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> mqy-background-login</span>
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
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BackgroundLogin</span></span>
<span class="line">		<span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loginConfig<span class="token punctuation">"</span></span></span>
<span class="line">		<span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleLogin<span class="token punctuation">"</span></span></span>
<span class="line">		<span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleRegister<span class="token punctuation">"</span></span></span>
<span class="line">		<span class="token attr-name">@forgot-password</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleForgotPassword<span class="token punctuation">"</span></span></span>
<span class="line">	<span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line">	<span class="token keyword">import</span> <span class="token punctuation">{</span> BackgroundLogin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mqy-background-login'</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> loginConfig <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Web Boot'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">subtitle</span><span class="token operator">:</span> <span class="token string">'一键式任何前端语言开发后端管理系统'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">loginMethods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'username'</span><span class="token punctuation">,</span> <span class="token string">'email'</span><span class="token punctuation">,</span> <span class="token string">'phone'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">showRegister</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">showForgotPassword</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">formData</span><span class="token operator">:</span> LoginFormData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'登录数据:'</span><span class="token punctuation">,</span> formData<span class="token punctuation">)</span></span>
<span class="line">		<span class="token comment">// 处理登录逻辑</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleRegister</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'跳转注册页面'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleForgotPassword</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'跳转忘记密码页面'</span><span class="token punctuation">)</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
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
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BackgroundLogin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mqy-background-login'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> LoginPage<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">const</span> <span class="token punctuation">[</span>loginConfig<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">		title<span class="token operator">:</span> <span class="token string">'Web Boot'</span><span class="token punctuation">,</span></span>
<span class="line">		subtitle<span class="token operator">:</span> <span class="token string">'一键式任何前端语言开发后端管理系统'</span><span class="token punctuation">,</span></span>
<span class="line">		theme<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">		loginMethods<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'username'</span><span class="token punctuation">,</span> <span class="token string">'email'</span><span class="token punctuation">,</span> <span class="token string">'phone'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		showRegister<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		showForgotPassword<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span>formData<span class="token operator">:</span> LoginFormData<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'登录数据:'</span><span class="token punctuation">,</span> formData<span class="token punctuation">)</span></span>
<span class="line">		<span class="token comment">// 处理登录逻辑</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleRegister</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'跳转注册页面'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleForgotPassword</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'跳转忘记密码页面'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BackgroundLogin</span></span></span>
<span class="line">			<span class="token attr-name">config</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loginConfig<span class="token punctuation">}</span></span></span>
<span class="line">			<span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleLogin<span class="token punctuation">}</span></span></span>
<span class="line">			<span class="token attr-name">onRegister</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleRegister<span class="token punctuation">}</span></span></span>
<span class="line">			<span class="token attr-name">onForgotPassword</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleForgotPassword<span class="token punctuation">}</span></span></span>
<span class="line">		<span class="token punctuation">/></span></span></span>
<span class="line">	<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> LoginPage</span>
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
			</div>
		</div>
		<h3 id="svelte" tabindex="-1">
			<a class="header-anchor" href="#svelte"><span>Svelte</span></a>
		</h3>
		<div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte">
			<pre v-pre><code><span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { BackgroundLogin } from 'mqy-background-login'</span>
<span class="line"></span>
<span class="line">  let loginConfig = {</span>
<span class="line">    title: 'Web Boot',</span>
<span class="line">    subtitle: '一键式任何前端语言开发后端管理系统',</span>
<span class="line">    theme: 'light',</span>
<span class="line">    loginMethods: ['username', 'email', 'phone'],</span>
<span class="line">    showRegister: true,</span>
<span class="line">    showForgotPassword: true</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  const handleLogin = (event: CustomEvent) =&gt; {</span>
<span class="line">    const formData = event.detail</span>
<span class="line">    console.log('登录数据:', formData)</span>
<span class="line">    // 处理登录逻辑</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  const handleRegister = () =&gt; {</span>
<span class="line">    console.log('跳转注册页面')</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  const handleForgotPassword = () =&gt; {</span>
<span class="line">    console.log('跳转忘记密码页面')</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;BackgroundLogin</span>
<span class="line">  config={loginConfig}</span>
<span class="line">  on:submit={handleLogin}</span>
<span class="line">  on:register={handleRegister}</span>
<span class="line">  on:forgotPassword={handleForgotPassword}</span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
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
			><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">LoginConfig</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 基础配置</span></span>
<span class="line">	title<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 登录页标题</span></span>
<span class="line">	subtitle<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 副标题</span></span>
<span class="line">	logo<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// Logo 图片地址</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 主题配置</span></span>
<span class="line">	theme<span class="token operator">:</span> <span class="token string">'light'</span> <span class="token operator">|</span> <span class="token string">'dark'</span> <span class="token operator">|</span> <span class="token string">'auto'</span> <span class="token comment">// 主题模式</span></span>
<span class="line">	primaryColor<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 主色调</span></span>
<span class="line">	backgroundImage<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 背景图片</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 登录方式配置</span></span>
<span class="line">	loginMethods<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token string">'username'</span> <span class="token operator">|</span> <span class="token string">'email'</span> <span class="token operator">|</span> <span class="token string">'phone'</span><span class="token operator">></span></span>
<span class="line">	defaultMethod<span class="token operator">:</span> <span class="token string">'username'</span> <span class="token operator">|</span> <span class="token string">'email'</span> <span class="token operator">|</span> <span class="token string">'phone'</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 功能开关</span></span>
<span class="line">	showRegister<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// 是否显示注册链接</span></span>
<span class="line">	showForgotPassword<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// 是否显示忘记密码</span></span>
<span class="line">	showRememberMe<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// 是否显示记住我</span></span>
<span class="line">	showSocialLogin<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// 是否显示第三方登录</span></span>
<span class="line">	showCaptcha<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// 是否显示验证码</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 第三方登录配置</span></span>
<span class="line">	socialProviders<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">		name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 提供商名称</span></span>
<span class="line">		icon<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 图标</span></span>
<span class="line">		color<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 主题色</span></span>
<span class="line">		enabled<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// 是否启用</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 验证规则配置</span></span>
<span class="line">	validation<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		username<span class="token operator">:</span> ValidationRule <span class="token comment">// 用户名验证规则</span></span>
<span class="line">		email<span class="token operator">:</span> ValidationRule <span class="token comment">// 邮箱验证规则</span></span>
<span class="line">		phone<span class="token operator">:</span> ValidationRule <span class="token comment">// 手机号验证规则</span></span>
<span class="line">		password<span class="token operator">:</span> ValidationRule <span class="token comment">// 密码验证规则</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 文本配置（国际化）</span></span>
<span class="line">	texts<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		loginTitle<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 登录标题</span></span>
<span class="line">		loginButton<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 登录按钮文本</span></span>
<span class="line">		registerLink<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 注册链接文本</span></span>
<span class="line">		forgotPasswordLink<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 忘记密码链接文本</span></span>
<span class="line">		rememberMe<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 记住我文本</span></span>
<span class="line">		<span class="token comment">// 更多文本配置...</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
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
		<h3 id="表单数据结构" tabindex="-1">
			<a class="header-anchor" href="#表单数据结构"><span>表单数据结构</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">LoginFormData</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 登录凭据</span></span>
<span class="line">	credential<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 用户名/邮箱/手机号</span></span>
<span class="line">	password<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 密码</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 附加信息</span></span>
<span class="line">	loginMethod<span class="token operator">:</span> <span class="token string">'username'</span> <span class="token operator">|</span> <span class="token string">'email'</span> <span class="token operator">|</span> <span class="token string">'phone'</span></span>
<span class="line">	rememberMe<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// 是否记住登录</span></span>
<span class="line">	captcha<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 验证码</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 设备信息</span></span>
<span class="line">	device<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		userAgent<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 用户代理</span></span>
<span class="line">		fingerprint<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 设备指纹</span></span>
<span class="line">		timestamp<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 时间戳</span></span>
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
					<td><code v-pre>LoginConfig</code></td>
					<td>-</td>
					<td>登录配置对象</td>
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
					<td>submit</td>
					<td><code v-pre>(formData: LoginFormData)</code></td>
					<td>表单提交时触发</td>
				</tr>
				<tr>
					<td>register</td>
					<td><code v-pre>()</code></td>
					<td>点击注册链接时触发</td>
				</tr>
				<tr>
					<td>forgot-password</td>
					<td><code v-pre>()</code></td>
					<td>点击忘记密码时触发</td>
				</tr>
				<tr>
					<td>social-login</td>
					<td><code v-pre>(provider: string)</code></td>
					<td>第三方登录时触发</td>
				</tr>
				<tr>
					<td>theme-change</td>
					<td><code v-pre>(theme: string)</code></td>
					<td>主题切换时触发</td>
				</tr>
				<tr>
					<td>method-change</td>
					<td><code v-pre>(method: string)</code></td>
					<td>登录方式切换时触发</td>
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
					<td>header</td>
					<td>自定义头部内容</td>
				</tr>
				<tr>
					<td>footer</td>
					<td>自定义底部内容</td>
				</tr>
				<tr>
					<td>form-top</td>
					<td>表单顶部自定义内容</td>
				</tr>
				<tr>
					<td>form-bottom</td>
					<td>表单底部自定义内容</td>
				</tr>
				<tr>
					<td>social-login</td>
					<td>自定义第三方登录区域</td>
				</tr>
			</tbody>
		</table>
		<h2 id="高级功能" tabindex="-1">
			<a class="header-anchor" href="#高级功能"><span>高级功能</span></a>
		</h2>
		<h3 id="自定义验证规则" tabindex="-1">
			<a class="header-anchor" href="#自定义验证规则"><span>自定义验证规则</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">const</span> customValidation <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	username<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		minLength<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">		maxLength<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">		pattern<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-zA-Z0-9_]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">		message<span class="token operator">:</span> <span class="token string">'用户名只能包含字母、数字和下划线'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	password<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		minLength<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">		pattern<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&amp;])[A-Za-z\d@$!%*?&amp;]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">		message<span class="token operator">:</span> <span class="token string">'密码必须包含大小写字母、数字和特殊字符'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	email<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		pattern<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[^\s@]+@[^\s@]+\.[^\s@]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">		message<span class="token operator">:</span> <span class="token string">'请输入有效的邮箱地址'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
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
		<h3 id="第三方登录配置" tabindex="-1">
			<a class="header-anchor" href="#第三方登录配置"><span>第三方登录配置</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">const</span> socialProviders <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		name<span class="token operator">:</span> <span class="token string">'google'</span><span class="token punctuation">,</span></span>
<span class="line">		icon<span class="token operator">:</span> <span class="token string">'fab fa-google'</span><span class="token punctuation">,</span></span>
<span class="line">		color<span class="token operator">:</span> <span class="token string">'#db4437'</span><span class="token punctuation">,</span></span>
<span class="line">		enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		name<span class="token operator">:</span> <span class="token string">'github'</span><span class="token punctuation">,</span></span>
<span class="line">		icon<span class="token operator">:</span> <span class="token string">'fab fa-github'</span><span class="token punctuation">,</span></span>
<span class="line">		color<span class="token operator">:</span> <span class="token string">'#333333'</span><span class="token punctuation">,</span></span>
<span class="line">		enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		name<span class="token operator">:</span> <span class="token string">'wechat'</span><span class="token punctuation">,</span></span>
<span class="line">		icon<span class="token operator">:</span> <span class="token string">'fab fa-weixin'</span><span class="token punctuation">,</span></span>
<span class="line">		color<span class="token operator">:</span> <span class="token string">'#7bb32e'</span><span class="token punctuation">,</span></span>
<span class="line">		enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="主题自定义" tabindex="-1">
			<a class="header-anchor" href="#主题自定义"><span>主题自定义</span></a>
		</h3>
		<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss">
			<pre v-pre><code><span class="line"><span class="token comment">// 登录页面主题变量</span></span>
<span class="line"><span class="token selector">:root </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 主色调</span></span>
<span class="line">	<span class="token property">--login-primary-color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-success-color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-warning-color</span><span class="token punctuation">:</span> #faad14<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-error-color</span><span class="token punctuation">:</span> #f5222d<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 背景配置</span></span>
<span class="line">	<span class="token property">--login-bg-color</span><span class="token punctuation">:</span> #f0f2f5<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-card-bg</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-input-bg</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 文字颜色</span></span>
<span class="line">	<span class="token property">--login-text-color</span><span class="token punctuation">:</span> #000000d9<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-text-secondary</span><span class="token punctuation">:</span> #00000073<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-placeholder-color</span><span class="token punctuation">:</span> #bfbfbf<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 边框和阴影</span></span>
<span class="line">	<span class="token property">--login-border-color</span><span class="token punctuation">:</span> #d9d9d9<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-box-shadow</span><span class="token punctuation">:</span> 0 4px 12px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 暗色主题</span></span>
<span class="line"><span class="token selector">[data-theme='dark'] </span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">--login-bg-color</span><span class="token punctuation">:</span> #141414<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-card-bg</span><span class="token punctuation">:</span> #1f1f1f<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-input-bg</span><span class="token punctuation">:</span> #262626<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-text-color</span><span class="token punctuation">:</span> #ffffffd9<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-text-secondary</span><span class="token punctuation">:</span> #ffffff73<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">--login-border-color</span><span class="token punctuation">:</span> #434343<span class="token punctuation">;</span></span>
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
			</div>
		</div>
		<h3 id="表单验证集成" tabindex="-1">
			<a class="header-anchor" href="#表单验证集成"><span>表单验证集成</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// Vue 3 使用 VeeValidate</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vee-validate'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> yup <span class="token keyword">from</span> <span class="token string">'yup'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> schema <span class="token operator">=</span> yup<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	username<span class="token operator">:</span> yup<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token string">'用户名不能为空'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'用户名至少3个字符'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">	password<span class="token operator">:</span> yup<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token string">'密码不能为空'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">'密码至少8个字符'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> handleSubmit<span class="token punctuation">,</span> errors <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	validationSchema<span class="token operator">:</span> schema<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// React 使用 React Hook Form</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-hook-form'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> yupResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@hookform/resolvers/yup'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">	register<span class="token punctuation">,</span></span>
<span class="line">	handleSubmit<span class="token punctuation">,</span></span>
<span class="line">	formState<span class="token operator">:</span> <span class="token punctuation">{</span> errors <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	resolver<span class="token operator">:</span> <span class="token function">yupResolver</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
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
			</div>
		</div>
		<h2 id="组件结构" tabindex="-1">
			<a class="header-anchor" href="#组件结构"><span>组件结构</span></a>
		</h2>
		<h3 id="目录结构" tabindex="-1">
			<a class="header-anchor" href="#目录结构"><span>目录结构</span></a>
		</h3>
		<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text">
			<pre v-pre><code><span class="line">BackgroundLogin/</span>
<span class="line">├── component/              # 子组件</span>
<span class="line">│   ├── Form/              # 登录表单组件</span>
<span class="line">│   │   ├── index.vue</span>
<span class="line">│   │   ├── UsernameLogin.vue</span>
<span class="line">│   │   ├── EmailLogin.vue</span>
<span class="line">│   │   ├── PhoneLogin.vue</span>
<span class="line">│   │   └── SocialLogin.vue</span>
<span class="line">│   ├── Top/               # 头部组件</span>
<span class="line">│   │   ├── index.vue</span>
<span class="line">│   │   ├── Logo.vue</span>
<span class="line">│   │   └── ThemeToggle.vue</span>
<span class="line">│   └── Background/        # 背景组件</span>
<span class="line">│       ├── index.vue</span>
<span class="line">│       └── Particles.vue</span>
<span class="line">├── hooks/                 # 组合式函数</span>
<span class="line">│   ├── useLogin.ts</span>
<span class="line">│   ├── useValidation.ts</span>
<span class="line">│   ├── useSocialLogin.ts</span>
<span class="line">│   └── useTheme.ts</span>
<span class="line">├── styles/                # 样式文件</span>
<span class="line">│   ├── index.scss</span>
<span class="line">│   ├── form.scss</span>
<span class="line">│   ├── animation.scss</span>
<span class="line">│   └── responsive.scss</span>
<span class="line">├── constants/             # 常量配置</span>
<span class="line">│   ├── validation.ts</span>
<span class="line">│   └── social.ts</span>
<span class="line">├── BackgroundLogin.vue    # 主组件</span>
<span class="line">├── BackgroundLogin.ts     # 组件逻辑</span>
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
			</div>
		</div>
		<h3 id="核心子组件" tabindex="-1">
			<a class="header-anchor" href="#核心子组件"><span>核心子组件</span></a>
		</h3>
		<h4 id="登录表单-form" tabindex="-1">
			<a class="header-anchor" href="#登录表单-form"><span>登录表单 (Form)</span></a>
		</h4>
		<ul>
			<li>多种登录方式切换</li>
			<li>实时表单验证</li>
			<li>密码强度指示</li>
			<li>验证码集成</li>
		</ul>
		<h4 id="头部组件-top" tabindex="-1">
			<a class="header-anchor" href="#头部组件-top"><span>头部组件 (Top)</span></a>
		</h4>
		<ul>
			<li>Logo 和标题显示</li>
			<li>主题切换按钮</li>
			<li>语言切换按钮</li>
			<li>自定义头部内容</li>
		</ul>
		<h4 id="背景组件-background" tabindex="-1">
			<a class="header-anchor" href="#背景组件-background"><span>背景组件 (Background)</span></a>
		</h4>
		<ul>
			<li>动态背景效果</li>
			<li>粒子动画</li>
			<li>渐变背景</li>
			<li>自定义背景图片</li>
		</ul>
		<h2 id="使用示例" tabindex="-1">
			<a class="header-anchor" href="#使用示例"><span>使用示例</span></a>
		</h2>
		<h3 id="完整的登录页面" tabindex="-1">
			<a class="header-anchor" href="#完整的登录页面"><span>完整的登录页面</span></a>
		</h3>
		<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue">
			<pre
				v-pre
			><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login-page<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BackgroundLogin</span></span>
<span class="line">			<span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loginConfig<span class="token punctuation">"</span></span></span>
<span class="line">			<span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loginLoading<span class="token punctuation">"</span></span></span>
<span class="line">			<span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleLogin<span class="token punctuation">"</span></span></span>
<span class="line">			<span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleRegister<span class="token punctuation">"</span></span></span>
<span class="line">			<span class="token attr-name">@forgot-password</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleForgotPassword<span class="token punctuation">"</span></span></span>
<span class="line">			<span class="token attr-name">@social-login</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSocialLogin<span class="token punctuation">"</span></span></span>
<span class="line">		<span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>欢迎使用 Web Boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>开始您的开发之旅<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&copy;">&amp;copy;</span> 2024 Web Boot. All rights reserved.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BackgroundLogin</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line">	<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line">	<span class="token keyword">import</span> <span class="token punctuation">{</span> BackgroundLogin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mqy-background-login'</span></span>
<span class="line">	<span class="token keyword">import</span> <span class="token punctuation">{</span> loginApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/auth'</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">const</span> loginLoading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> loginConfig <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Web Boot'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">subtitle</span><span class="token operator">:</span> <span class="token string">'一键式任何前端语言开发后端管理系统'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">loginMethods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'username'</span><span class="token punctuation">,</span> <span class="token string">'email'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">showRegister</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">showForgotPassword</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">showSocialLogin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">socialProviders</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">			<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'github'</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'fab fa-github'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span><span class="token punctuation">,</span> <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'google'</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'fab fa-google'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#db4437'</span><span class="token punctuation">,</span> <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleLogin</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">formData</span><span class="token operator">:</span> LoginFormData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		loginLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> loginApi<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">			<span class="token comment">// 保存用户信息和 Token</span></span>
<span class="line">			localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span>token<span class="token punctuation">)</span></span>
<span class="line">			localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'userInfo'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">			<span class="token comment">// 跳转到首页</span></span>
<span class="line">			router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'登录失败:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span></span>
<span class="line">			<span class="token comment">// 显示错误信息</span></span>
<span class="line">		<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">			loginLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleRegister</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/register'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleForgotPassword</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/forgot-password'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">handleSocialLogin</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">provider</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token comment">// 处理第三方登录</span></span>
<span class="line">			window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/auth/social/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>provider<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'第三方登录失败:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
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
		<h2 id="最佳实践" tabindex="-1">
			<a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a>
		</h2>
		<h3 id="安全建议" tabindex="-1">
			<a class="header-anchor" href="#安全建议"><span>安全建议</span></a>
		</h3>
		<ol>
			<li><strong>密码加密</strong>: 前端不应处理密码加密，由后端处理</li>
			<li><strong>HTTPS</strong>: 生产环境必须使用 HTTPS</li>
			<li><strong>Token 管理</strong>: 使用 JWT 并设置合理的过期时间</li>
			<li><strong>防暴力破解</strong>: 实现登录尝试次数限制</li>
			<li><strong>验证码</strong>: 在必要时添加图形或短信验证码</li>
		</ol>
		<h3 id="用户体验优化" tabindex="-1">
			<a class="header-anchor" href="#用户体验优化"><span>用户体验优化</span></a>
		</h3>
		<ol>
			<li><strong>响应式设计</strong>: 确保在各种设备上都有良好体验</li>
			<li><strong>加载状态</strong>: 提供清晰的加载反馈</li>
			<li><strong>错误处理</strong>: 友好的错误提示信息</li>
			<li><strong>自动填充</strong>: 支持浏览器密码管理器</li>
			<li><strong>键盘导航</strong>: 支持 Tab 键和 Enter 键操作</li>
		</ol>
		<h3 id="可访问性" tabindex="-1">
			<a class="header-anchor" href="#可访问性"><span>可访问性</span></a>
		</h3>
		<ol>
			<li><strong>ARIA 标签</strong>: 为屏幕阅读器提供语义信息</li>
			<li><strong>焦点管理</strong>: 合理的焦点顺序和高亮显示</li>
			<li><strong>颜色对比</strong>: 确保足够的颜色对比度</li>
			<li><strong>键盘支持</strong>: 完整的键盘操作支持</li>
		</ol>
		<h2 id="故障排除" tabindex="-1">
			<a class="header-anchor" href="#故障排除"><span>故障排除</span></a>
		</h2>
		<h3 id="常见问题" tabindex="-1">
			<a class="header-anchor" href="#常见问题"><span>常见问题</span></a>
		</h3>
		<ol>
			<li>
				<p><strong>样式不显示</strong></p>
				<ul>
					<li>检查是否正确导入样式文件</li>
					<li>确认 CSS 变量定义</li>
				</ul>
			</li>
			<li>
				<p><strong>表单验证不工作</strong></p>
				<ul>
					<li>检查验证规则配置</li>
					<li>确认表单数据绑定</li>
				</ul>
			</li>
			<li>
				<p><strong>第三方登录失败</strong></p>
				<ul>
					<li>检查 OAuth 配置</li>
					<li>确认回调地址设置</li>
				</ul>
			</li>
			<li>
				<p><strong>主题切换无效</strong></p>
				<ul>
					<li>检查主题变量定义</li>
					<li>确认事件监听器</li>
				</ul>
			</li>
		</ol>
		<h3 id="调试技巧" tabindex="-1">
			<a class="header-anchor" href="#调试技巧"><span>调试技巧</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 开启调试模式</span></span>
<span class="line"><span class="token keyword">const</span> loginConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 其他配置...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 监听所有事件</span></span>
<span class="line"><span class="token operator">&lt;</span>BackgroundLogin</span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">submit</span></span><span class="token operator">=</span><span class="token string">"console.log('submit:', $event)"</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">register</span></span><span class="token operator">=</span><span class="token string">"console.log('register clicked')"</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">theme</span></span><span class="token operator">-</span>change<span class="token operator">=</span><span class="token string">"console.log('theme changed:', $event)"</span></span>
<span class="line"><span class="token operator">/</span><span class="token operator">></span></span>
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
		<h2 id="更多资源" tabindex="-1">
			<a class="header-anchor" href="#更多资源"><span>更多资源</span></a>
		</h2>
		<ul>
			<li><a href="https://web-boot-login-demo.com" target="_blank" rel="noopener noreferrer">在线演示</a></li>
			<li>
				<a href="https://github.com/your-username/mqy-background-login" target="_blank" rel="noopener noreferrer"
					>GitHub 仓库</a
				>
			</li>
			<li><a href="https://design.web-boot.com/login" target="_blank" rel="noopener noreferrer">设计规范</a></li>
			<li><a href="https://api-docs.web-boot.com" target="_blank" rel="noopener noreferrer">API 文档</a></li>
		</ul>
	</div>
</template>
