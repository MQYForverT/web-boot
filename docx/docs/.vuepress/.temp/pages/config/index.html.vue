<template>
	<div>
		<h1 id="配置说明" tabindex="-1">
			<a class="header-anchor" href="#配置说明"><span>配置说明</span></a>
		</h1>
		<p>Web Boot 提供了灵活的配置系统，让您能够根据项目需求自定义各种功能和行为。</p>
		<h2 id="配置文件结构" tabindex="-1">
			<a class="header-anchor" href="#配置文件结构"><span>配置文件结构</span></a>
		</h2>
		<h3 id="主配置文件" tabindex="-1">
			<a class="header-anchor" href="#主配置文件"><span>主配置文件</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// config/config.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 应用基础配置</span></span>
<span class="line">  app<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    title<span class="token operator">:</span> <span class="token string">'Web Boot'</span><span class="token punctuation">,</span></span>
<span class="line">    description<span class="token operator">:</span> <span class="token string">'一键式任何前端语言开发后端管理系统'</span><span class="token punctuation">,</span></span>
<span class="line">    version<span class="token operator">:</span> <span class="token string">'2.0.0'</span><span class="token punctuation">,</span></span>
<span class="line">    author<span class="token operator">:</span> <span class="token string">'Web Boot Team'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// API 配置</span></span>
<span class="line">  api<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    baseURL<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_BASE_URL</span> <span class="token operator">||</span> <span class="token string">'/api'</span><span class="token punctuation">,</span></span>
<span class="line">    timeout<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span></span>
<span class="line">    withCredentials<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 路由配置</span></span>
<span class="line">  router<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    mode<span class="token operator">:</span> <span class="token string">'history'</span><span class="token punctuation">,</span></span>
<span class="line">    base<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">    loginPath<span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span></span>
<span class="line">    homePath<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">    errorPath<span class="token operator">:</span> <span class="token string">'/error'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 布局配置</span></span>
<span class="line">  layout<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    theme<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">    layout<span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span></span>
<span class="line">    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      collapsed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      width<span class="token operator">:</span> <span class="token number">240</span><span class="token punctuation">,</span></span>
<span class="line">      collapsedWidth<span class="token operator">:</span> <span class="token number">64</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    header<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      height<span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span></span>
<span class="line">      fixed<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    tabs<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      persistent<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 其他配置...</span></span>
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
			</div>
		</div>
		<h3 id="环境变量配置" tabindex="-1">
			<a class="header-anchor" href="#环境变量配置"><span>环境变量配置</span></a>
		</h3>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre v-pre><code><span class="line"><span class="token comment"># .env.development</span></span>
<span class="line"><span class="token assign-left variable">VITE_API_BASE_URL</span><span class="token operator">=</span>http://localhost:3000/api</span>
<span class="line"><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>Web Boot Dev</span>
<span class="line"><span class="token assign-left variable">VITE_APP_DEBUG</span><span class="token operator">=</span>true</span>
<span class="line"></span>
<span class="line"><span class="token comment"># .env.production</span></span>
<span class="line"><span class="token assign-left variable">VITE_API_BASE_URL</span><span class="token operator">=</span>https://api.example.com</span>
<span class="line"><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>Web Boot</span>
<span class="line"><span class="token assign-left variable">VITE_APP_DEBUG</span><span class="token operator">=</span>false</span>
<span class="line"></span>
<span class="line"><span class="token comment"># .env.test</span></span>
<span class="line"><span class="token assign-left variable">VITE_API_BASE_URL</span><span class="token operator">=</span>http://test-api.example.com</span>
<span class="line"><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>Web Boot Test</span>
<span class="line"><span class="token assign-left variable">VITE_APP_DEBUG</span><span class="token operator">=</span>true</span>
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
		<h2 id="详细配置选项" tabindex="-1">
			<a class="header-anchor" href="#详细配置选项"><span>详细配置选项</span></a>
		</h2>
		<h3 id="应用配置-app-config" tabindex="-1">
			<a class="header-anchor" href="#应用配置-app-config"><span>应用配置 (App Config)</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 基础信息</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span>                    <span class="token comment">// 应用标题</span></span>
<span class="line">  description<span class="token operator">:</span> <span class="token builtin">string</span>              <span class="token comment">// 应用描述</span></span>
<span class="line">  version<span class="token operator">:</span> <span class="token builtin">string</span>                  <span class="token comment">// 版本号</span></span>
<span class="line">  author<span class="token operator">:</span> <span class="token builtin">string</span>                   <span class="token comment">// 作者信息</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 多语言配置</span></span>
<span class="line">  locale<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token builtin">string</span>                <span class="token comment">// 默认语言</span></span>
<span class="line">    fallback<span class="token operator">:</span> <span class="token builtin">string</span>               <span class="token comment">// 回退语言</span></span>
<span class="line">    supported<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>            <span class="token comment">// 支持的语言列表</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 调试配置</span></span>
<span class="line">  debug<span class="token operator">:</span> <span class="token builtin">boolean</span>                   <span class="token comment">// 是否开启调试模式</span></span>
<span class="line">  mock<span class="token operator">:</span> <span class="token builtin">boolean</span>                    <span class="token comment">// 是否启用 Mock 数据</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 权限配置</span></span>
<span class="line">  auth<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    tokenKey<span class="token operator">:</span> <span class="token builtin">string</span>               <span class="token comment">// Token 存储键名</span></span>
<span class="line">    refreshTokenKey<span class="token operator">:</span> <span class="token builtin">string</span>        <span class="token comment">// 刷新令牌键名</span></span>
<span class="line">    tokenExpireTime<span class="token operator">:</span> <span class="token builtin">number</span>        <span class="token comment">// Token 过期时间(秒)</span></span>
<span class="line">    autoRefresh<span class="token operator">:</span> <span class="token builtin">boolean</span>           <span class="token comment">// 是否自动刷新</span></span>
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
			</div>
		</div>
		<h3 id="api-配置-api-config" tabindex="-1">
			<a class="header-anchor" href="#api-配置-api-config"><span>API 配置 (API Config)</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ApiConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 基础配置</span></span>
<span class="line">  baseURL<span class="token operator">:</span> <span class="token builtin">string</span>                  <span class="token comment">// API 基础地址</span></span>
<span class="line">  timeout<span class="token operator">:</span> <span class="token builtin">number</span>                  <span class="token comment">// 请求超时时间</span></span>
<span class="line">  withCredentials<span class="token operator">:</span> <span class="token builtin">boolean</span>         <span class="token comment">// 是否携带凭证</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 请求拦截器配置</span></span>
<span class="line">  interceptors<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    request<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      addToken<span class="token operator">:</span> <span class="token builtin">boolean</span>            <span class="token comment">// 是否自动添加 Token</span></span>
<span class="line">      addTimestamp<span class="token operator">:</span> <span class="token builtin">boolean</span>        <span class="token comment">// 是否添加时间戳</span></span>
<span class="line">      transformData<span class="token operator">:</span> <span class="token builtin">boolean</span>       <span class="token comment">// 是否转换请求数据</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    response<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      showError<span class="token operator">:</span> <span class="token builtin">boolean</span>           <span class="token comment">// 是否显示错误信息</span></span>
<span class="line">      errorHandler<span class="token operator">:</span> <span class="token builtin">Function</span>       <span class="token comment">// 自定义错误处理函数</span></span>
<span class="line">      codeHandler<span class="token operator">:</span> <span class="token punctuation">{</span>               <span class="token comment">// 状态码处理</span></span>
<span class="line">        <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">Function</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 重试配置</span></span>
<span class="line">  retry<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    times<span class="token operator">:</span> <span class="token builtin">number</span>                  <span class="token comment">// 重试次数</span></span>
<span class="line">    delay<span class="token operator">:</span> <span class="token builtin">number</span>                  <span class="token comment">// 重试延迟(毫秒)</span></span>
<span class="line">    codes<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>                <span class="token comment">// 需要重试的状态码</span></span>
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
			</div>
		</div>
		<h3 id="路由配置-router-config" tabindex="-1">
			<a class="header-anchor" href="#路由配置-router-config"><span>路由配置 (Router Config)</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">RouterConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 基础配置</span></span>
<span class="line">  mode<span class="token operator">:</span> <span class="token string">'hash'</span> <span class="token operator">|</span> <span class="token string">'history'</span>         <span class="token comment">// 路由模式</span></span>
<span class="line">  base<span class="token operator">:</span> <span class="token builtin">string</span>                     <span class="token comment">// 基础路径</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 特殊路径</span></span>
<span class="line">  loginPath<span class="token operator">:</span> <span class="token builtin">string</span>                <span class="token comment">// 登录页路径</span></span>
<span class="line">  homePath<span class="token operator">:</span> <span class="token builtin">string</span>                 <span class="token comment">// 首页路径</span></span>
<span class="line">  errorPath<span class="token operator">:</span> <span class="token builtin">string</span>                <span class="token comment">// 错误页路径</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 路由守卫配置</span></span>
<span class="line">  guards<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    beforeEach<span class="token operator">:</span> <span class="token builtin">boolean</span>            <span class="token comment">// 是否启用全局前置守卫</span></span>
<span class="line">    afterEach<span class="token operator">:</span> <span class="token builtin">boolean</span>             <span class="token comment">// 是否启用全局后置守卫</span></span>
<span class="line">    checkAuth<span class="token operator">:</span> <span class="token builtin">boolean</span>             <span class="token comment">// 是否检查用户认证</span></span>
<span class="line">    checkPermission<span class="token operator">:</span> <span class="token builtin">boolean</span>       <span class="token comment">// 是否检查权限</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 缓存配置</span></span>
<span class="line">  cache<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    enabled<span class="token operator">:</span> <span class="token builtin">boolean</span>               <span class="token comment">// 是否启用路由缓存</span></span>
<span class="line">    max<span class="token operator">:</span> <span class="token builtin">number</span>                    <span class="token comment">// 最大缓存数量</span></span>
<span class="line">    include<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>              <span class="token comment">// 需要缓存的路由</span></span>
<span class="line">    exclude<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>              <span class="token comment">// 不需要缓存的路由</span></span>
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
			</div>
		</div>
		<h3 id="布局配置-layout-config" tabindex="-1">
			<a class="header-anchor" href="#布局配置-layout-config"><span>布局配置 (Layout Config)</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">LayoutConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 主题配置</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token string">'light'</span> <span class="token operator">|</span> <span class="token string">'dark'</span> <span class="token operator">|</span> <span class="token string">'auto'</span> <span class="token comment">// 主题模式</span></span>
<span class="line">  primaryColor<span class="token operator">:</span> <span class="token builtin">string</span>             <span class="token comment">// 主色调</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 布局模式</span></span>
<span class="line">  layout<span class="token operator">:</span> <span class="token string">'default'</span> <span class="token operator">|</span> <span class="token string">'vertical'</span> <span class="token operator">|</span> <span class="token string">'horizontal'</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 侧边栏配置</span></span>
<span class="line">  sidebar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    collapsed<span class="token operator">:</span> <span class="token builtin">boolean</span>             <span class="token comment">// 是否折叠</span></span>
<span class="line">    width<span class="token operator">:</span> <span class="token builtin">number</span>                  <span class="token comment">// 展开宽度</span></span>
<span class="line">    collapsedWidth<span class="token operator">:</span> <span class="token builtin">number</span>         <span class="token comment">// 折叠宽度</span></span>
<span class="line">    position<span class="token operator">:</span> <span class="token string">'left'</span> <span class="token operator">|</span> <span class="token string">'right'</span>     <span class="token comment">// 位置</span></span>
<span class="line">    fixed<span class="token operator">:</span> <span class="token builtin">boolean</span>                 <span class="token comment">// 是否固定</span></span>
<span class="line">    accordion<span class="token operator">:</span> <span class="token builtin">boolean</span>             <span class="token comment">// 是否手风琴模式</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 头部配置</span></span>
<span class="line">  header<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    height<span class="token operator">:</span> <span class="token builtin">number</span>                 <span class="token comment">// 高度</span></span>
<span class="line">    fixed<span class="token operator">:</span> <span class="token builtin">boolean</span>                 <span class="token comment">// 是否固定</span></span>
<span class="line">    showLogo<span class="token operator">:</span> <span class="token builtin">boolean</span>              <span class="token comment">// 是否显示 Logo</span></span>
<span class="line">    showBreadcrumb<span class="token operator">:</span> <span class="token builtin">boolean</span>        <span class="token comment">// 是否显示面包屑</span></span>
<span class="line">    showUserInfo<span class="token operator">:</span> <span class="token builtin">boolean</span>          <span class="token comment">// 是否显示用户信息</span></span>
<span class="line">    showFullscreen<span class="token operator">:</span> <span class="token builtin">boolean</span>        <span class="token comment">// 是否显示全屏按钮</span></span>
<span class="line">    showThemeToggle<span class="token operator">:</span> <span class="token builtin">boolean</span>       <span class="token comment">// 是否显示主题切换</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 标签页配置</span></span>
<span class="line">  tabs<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    enabled<span class="token operator">:</span> <span class="token builtin">boolean</span>               <span class="token comment">// 是否启用</span></span>
<span class="line">    persistent<span class="token operator">:</span> <span class="token builtin">boolean</span>            <span class="token comment">// 是否持久化</span></span>
<span class="line">    closable<span class="token operator">:</span> <span class="token builtin">boolean</span>              <span class="token comment">// 是否可关闭</span></span>
<span class="line">    maxCount<span class="token operator">:</span> <span class="token builtin">number</span>               <span class="token comment">// 最大数量</span></span>
<span class="line">    showIcon<span class="token operator">:</span> <span class="token builtin">boolean</span>              <span class="token comment">// 是否显示图标</span></span>
<span class="line">    showRefresh<span class="token operator">:</span> <span class="token builtin">boolean</span>           <span class="token comment">// 是否显示刷新按钮</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 底部配置</span></span>
<span class="line">  footer<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    enabled<span class="token operator">:</span> <span class="token builtin">boolean</span>               <span class="token comment">// 是否显示</span></span>
<span class="line">    height<span class="token operator">:</span> <span class="token builtin">number</span>                 <span class="token comment">// 高度</span></span>
<span class="line">    fixed<span class="token operator">:</span> <span class="token builtin">boolean</span>                 <span class="token comment">// 是否固定</span></span>
<span class="line">    text<span class="token operator">:</span> <span class="token builtin">string</span>                   <span class="token comment">// 显示文本</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 水印配置</span></span>
<span class="line">  watermark<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    enabled<span class="token operator">:</span> <span class="token builtin">boolean</span>               <span class="token comment">// 是否启用</span></span>
<span class="line">    text<span class="token operator">:</span> <span class="token builtin">string</span>                   <span class="token comment">// 水印文本</span></span>
<span class="line">    opacity<span class="token operator">:</span> <span class="token builtin">number</span>                <span class="token comment">// 透明度</span></span>
<span class="line">    fontSize<span class="token operator">:</span> <span class="token builtin">number</span>               <span class="token comment">// 字体大小</span></span>
<span class="line">    angle<span class="token operator">:</span> <span class="token builtin">number</span>                  <span class="token comment">// 旋转角度</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 动画配置</span></span>
<span class="line">  animation<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    enabled<span class="token operator">:</span> <span class="token builtin">boolean</span>               <span class="token comment">// 是否启用动画</span></span>
<span class="line">    duration<span class="token operator">:</span> <span class="token builtin">number</span>               <span class="token comment">// 动画持续时间</span></span>
<span class="line">    easing<span class="token operator">:</span> <span class="token builtin">string</span>                 <span class="token comment">// 缓动函数</span></span>
<span class="line">    pageTransition<span class="token operator">:</span> <span class="token builtin">string</span>         <span class="token comment">// 页面切换动画</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h2 id="配置使用方法" tabindex="-1">
			<a class="header-anchor" href="#配置使用方法"><span>配置使用方法</span></a>
		</h2>
		<h3 id="基础使用" tabindex="-1">
			<a class="header-anchor" href="#基础使用"><span>基础使用</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 导入配置</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/config/config'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用配置</span></span>
<span class="line"><span class="token keyword">const</span> apiClient <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  baseURL<span class="token operator">:</span> config<span class="token punctuation">.</span>api<span class="token punctuation">.</span>baseURL<span class="token punctuation">,</span></span>
<span class="line">  timeout<span class="token operator">:</span> config<span class="token punctuation">.</span>api<span class="token punctuation">.</span>timeout</span>
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
			</div>
		</div>
		<h3 id="动态配置" tabindex="-1">
			<a class="header-anchor" href="#动态配置"><span>动态配置</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// Vue 3 示例</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/config/config'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建响应式配置</span></span>
<span class="line"><span class="token keyword">const</span> appConfig <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>config <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 修改配置</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">updateTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span>theme<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  appConfig<span class="token punctuation">.</span>layout<span class="token punctuation">.</span>theme <span class="token operator">=</span> theme</span>
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
			</div>
		</div>
		<h3 id="环境特定配置" tabindex="-1">
			<a class="header-anchor" href="#环境特定配置"><span>环境特定配置</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 根据环境加载不同配置</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">getConfig</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MODE</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>env<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">'development'</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span>baseConfig<span class="token punctuation">,</span></span>
<span class="line">        debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        mock<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">'production'</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span>baseConfig<span class="token punctuation">,</span></span>
<span class="line">        debug<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        mock<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">'test'</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span>baseConfig<span class="token punctuation">,</span></span>
<span class="line">        debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        mock<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        api<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token operator">...</span>baseConfig<span class="token punctuation">.</span>api<span class="token punctuation">,</span></span>
<span class="line">          baseURL<span class="token operator">:</span> <span class="token string">'http://test-api.example.com'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> baseConfig</span>
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
			</div>
		</div>
		<h3 id="配置验证" tabindex="-1">
			<a class="header-anchor" href="#配置验证"><span>配置验证</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 配置验证 Schema</span></span>
<span class="line"><span class="token keyword">import</span> Joi <span class="token keyword">from</span> <span class="token string">'joi'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> configSchema <span class="token operator">=</span> Joi<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  app<span class="token operator">:</span> Joi<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    title<span class="token operator">:</span> Joi<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    version<span class="token operator">:</span> Joi<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    debug<span class="token operator">:</span> Joi<span class="token punctuation">.</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  api<span class="token operator">:</span> Joi<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    baseURL<span class="token operator">:</span> Joi<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">uri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    timeout<span class="token operator">:</span> Joi<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">positive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  layout<span class="token operator">:</span> Joi<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    theme<span class="token operator">:</span> Joi<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valid</span><span class="token punctuation">(</span><span class="token string">'light'</span><span class="token punctuation">,</span> <span class="token string">'dark'</span><span class="token punctuation">,</span> <span class="token string">'auto'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token string">'light'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    sidebar<span class="token operator">:</span> Joi<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      width<span class="token operator">:</span> Joi<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">positive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token number">240</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      collapsed<span class="token operator">:</span> Joi<span class="token punctuation">.</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 验证配置</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">validateConfig</span> <span class="token operator">=</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> error<span class="token punctuation">,</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> configSchema<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">配置验证失败: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>error<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> value</span>
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
		<h2 id="配置管理最佳实践" tabindex="-1">
			<a class="header-anchor" href="#配置管理最佳实践"><span>配置管理最佳实践</span></a>
		</h2>
		<h3 id="_1-分层配置" tabindex="-1">
			<a class="header-anchor" href="#_1-分层配置"><span>1. 分层配置</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 基础配置</span></span>
<span class="line"><span class="token keyword">const</span> baseConfig <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">/* 基础配置 */</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 环境配置</span></span>
<span class="line"><span class="token keyword">const</span> envConfig <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">/* 环境特定配置 */</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 用户配置</span></span>
<span class="line"><span class="token keyword">const</span> userConfig <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">/* 用户个性化配置 */</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 合并配置</span></span>
<span class="line"><span class="token keyword">const</span> finalConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span>baseConfig<span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span>envConfig<span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span>userConfig</span>
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
		<h3 id="_2-配置持久化" tabindex="-1">
			<a class="header-anchor" href="#_2-配置持久化"><span>2. 配置持久化</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 保存用户配置</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">saveUserConfig</span> <span class="token operator">=</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> UserConfig<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'userConfig'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 加载用户配置</span></span>
<span class="line"><span class="token keyword">const</span> loadUserConfig <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> UserConfig <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> stored <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'userConfig'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> stored <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>stored<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
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
			</div>
		</div>
		<h3 id="_3-配置热更新" tabindex="-1">
			<a class="header-anchor" href="#_3-配置热更新"><span>3. 配置热更新</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 监听配置变更</span></span>
<span class="line"><span class="token keyword">const</span> configWatcher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">配置 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">String</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 已更新:</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 触发配置更新事件</span></span>
<span class="line">    eventBus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'config:updated'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token punctuation">,</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
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
			</div>
		</div>
		<h3 id="_4-配置类型安全" tabindex="-1">
			<a class="header-anchor" href="#_4-配置类型安全"><span>4. 配置类型安全</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 定义配置类型</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Config</span> <span class="token punctuation">{</span></span>
<span class="line">  app<span class="token operator">:</span> AppConfig</span>
<span class="line">  api<span class="token operator">:</span> ApiConfig</span>
<span class="line">  layout<span class="token operator">:</span> LayoutConfig</span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建类型安全的配置</span></span>
<span class="line"><span class="token keyword">const</span> createConfig <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Config</span><span class="token operator">></span><span class="token punctuation">(</span>config<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> config</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">createConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  app<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  api<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  layout<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span></span>
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
		<h2 id="配置迁移" tabindex="-1">
			<a class="header-anchor" href="#配置迁移"><span>配置迁移</span></a>
		</h2>
		<h3 id="版本升级配置迁移" tabindex="-1">
			<a class="header-anchor" href="#版本升级配置迁移"><span>版本升级配置迁移</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 配置迁移函数</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">migrateConfig</span> <span class="token operator">=</span> <span class="token punctuation">(</span>oldConfig<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> version<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>version<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">'1.0.0'</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">migrateFrom1_0_0</span><span class="token punctuation">(</span>oldConfig<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">'1.5.0'</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">migrateFrom1_5_0</span><span class="token punctuation">(</span>oldConfig<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> oldConfig</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 具体迁移逻辑</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">migrateFrom1_0_0</span> <span class="token operator">=</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span>config<span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 迁移逻辑</span></span>
<span class="line">    layout<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token operator">...</span>config<span class="token punctuation">.</span>layout<span class="token punctuation">,</span></span>
<span class="line">      theme<span class="token operator">:</span> config<span class="token punctuation">.</span>theme <span class="token operator">||</span> <span class="token string">'light'</span> <span class="token comment">// 迁移主题配置</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
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
			</div>
		</div>
		<h2 id="常见配置示例" tabindex="-1">
			<a class="header-anchor" href="#常见配置示例"><span>常见配置示例</span></a>
		</h2>
		<h3 id="开发环境配置" tabindex="-1">
			<a class="header-anchor" href="#开发环境配置"><span>开发环境配置</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> developmentConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  app<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    mock<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  api<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    baseURL<span class="token operator">:</span> <span class="token string">'http://localhost:3000/api'</span><span class="token punctuation">,</span></span>
<span class="line">    timeout<span class="token operator">:</span> <span class="token number">30000</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  layout<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    theme<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">    animation<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      duration<span class="token operator">:</span> <span class="token number">300</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
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
			</div>
		</div>
		<h3 id="生产环境配置" tabindex="-1">
			<a class="header-anchor" href="#生产环境配置"><span>生产环境配置</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> productionConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  app<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    debug<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    mock<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  api<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    baseURL<span class="token operator">:</span> <span class="token string">'https://api.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">    timeout<span class="token operator">:</span> <span class="token number">10000</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  layout<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    theme<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">    animation<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      duration<span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
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
			</div>
		</div>
		<h3 id="移动端配置" tabindex="-1">
			<a class="header-anchor" href="#移动端配置"><span>移动端配置</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> mobileConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  layout<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      width<span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span></span>
<span class="line">      collapsed<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 移动端默认折叠</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    header<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      height<span class="token operator">:</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token comment">// 移动端较小高度</span></span>
<span class="line">      showBreadcrumb<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 移动端隐藏面包屑</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    tabs<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      enabled<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 移动端禁用标签页</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
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
		<p>
			通过灵活的配置系统，您可以轻松定制 Web Boot 以满足不同的项目需求。更多配置选项和高级用法，请参考各组件的详细文档。
		</p>
	</div>
</template>
