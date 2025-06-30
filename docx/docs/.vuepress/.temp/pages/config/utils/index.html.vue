<template><div><h1 id="实用工具函数" tabindex="-1"><a class="header-anchor" href="#实用工具函数"><span>实用工具函数</span></a></h1>
<p><strong>@mqy/utils</strong> - 项目开发中常用的工具函数库，提供 HTTP 请求、进度条、特效等实用功能。</p>
<h2 id="📦-安装" tabindex="-1"><a class="header-anchor" href="#📦-安装"><span>📦 安装</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @mqy/utils</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="🚀-快速开始" tabindex="-1"><a class="header-anchor" href="#🚀-快速开始"><span>🚀 快速开始</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> httpRequest<span class="token punctuation">,</span> nprogress<span class="token punctuation">,</span> typewriter<span class="token punctuation">,</span> compatibleScrollTo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// HTTP 请求</span></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/users'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 进度条</span></span>
<span class="line">nprogress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 打字机效果</span></span>
<span class="line"><span class="token keyword">await</span> typewriter<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 兼容性滚动</span></span>
<span class="line"><span class="token function">compatibleScrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> behavior<span class="token operator">:</span> <span class="token string">'smooth'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🌐-http-请求工具" tabindex="-1"><a class="header-anchor" href="#🌐-http-请求工具"><span>🌐 HTTP 请求工具</span></a></h2>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> httpRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// GET 请求</span></span>
<span class="line"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/users'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/users/1'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// POST 请求</span></span>
<span class="line"><span class="token keyword">const</span> newUser <span class="token operator">=</span> <span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/api/users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">	name<span class="token operator">:</span> <span class="token string">'John Doe'</span><span class="token punctuation">,</span></span>
<span class="line">	email<span class="token operator">:</span> <span class="token string">'john@example.com'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// PUT 请求</span></span>
<span class="line"><span class="token keyword">const</span> updatedUser <span class="token operator">=</span> <span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">'/api/users/1'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">	name<span class="token operator">:</span> <span class="token string">'Jane Doe'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// DELETE 请求</span></span>
<span class="line"><span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'/api/users/1'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高级功能" tabindex="-1"><a class="header-anchor" href="#高级功能"><span>高级功能</span></a></h3>
<p><strong>文件上传</strong>：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> httpRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 单文件上传</span></span>
<span class="line"><span class="token keyword">const</span> file <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input[type="file"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span><span class="token string">'/api/upload'</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 多文件上传</span></span>
<span class="line"><span class="token keyword">const</span> files <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input[type="file"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>files<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">uploadMultiple</span><span class="token punctuation">(</span><span class="token string">'/api/upload/batch'</span><span class="token punctuation">,</span> files<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 带进度的上传</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span><span class="token string">'/api/upload'</span><span class="token punctuation">,</span> file<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function-variable function">onProgress</span><span class="token operator">:</span> <span class="token punctuation">(</span>progress<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">上传进度: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>progress<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>文件下载</strong>：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> httpRequest<span class="token punctuation">,</span> downBlobFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 直接下载</span></span>
<span class="line"><span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">'/api/download/file.pdf'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取文件数据后处理</span></span>
<span class="line"><span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">downloadBlob</span><span class="token punctuation">(</span><span class="token string">'/api/export/data.xlsx'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">downBlobFile</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> <span class="token string">'exported-data.xlsx'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 带进度的下载</span></span>
<span class="line"><span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">'/api/large-file.zip'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function-variable function">onProgress</span><span class="token operator">:</span> <span class="token punctuation">(</span>progress<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">下载进度: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>progress<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求配置" tabindex="-1"><a class="header-anchor" href="#请求配置"><span>请求配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> httpRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 全局配置</span></span>
<span class="line">httpRequest<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	baseURL<span class="token operator">:</span> <span class="token string">'https://api.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">	timeout<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span></span>
<span class="line">	headers<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		Authorization<span class="token operator">:</span> <span class="token string">'Bearer your-token'</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 请求拦截器</span></span>
<span class="line">httpRequest<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 添加时间戳</span></span>
<span class="line">	config<span class="token punctuation">.</span>params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token operator">...</span>config<span class="token punctuation">.</span>params<span class="token punctuation">,</span></span>
<span class="line">		_t<span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">return</span> config</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 响应拦截器</span></span>
<span class="line">httpRequest<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line">	<span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 统一处理响应数据</span></span>
<span class="line">		<span class="token keyword">return</span> response<span class="token punctuation">.</span>data</span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 统一错误处理</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'请求失败:'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span></span>
<span class="line">		<span class="token keyword">throw</span> error</span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理"><span>错误处理</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/users'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 服务器响应错误</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'状态码:'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'错误信息:'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>request<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 网络错误</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'网络错误:'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 其他错误</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'请求配置错误:'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📊-进度条工具" tabindex="-1"><a class="header-anchor" href="#📊-进度条工具"><span>📊 进度条工具</span></a></h2>
<h3 id="基础用法-1" tabindex="-1"><a class="header-anchor" href="#基础用法-1"><span>基础用法</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nprogress <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 开始进度条</span></span>
<span class="line">nprogress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 设置进度</span></span>
<span class="line">nprogress<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 增加进度</span></span>
<span class="line">nprogress<span class="token punctuation">.</span><span class="token function">inc</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 完成进度</span></span>
<span class="line">nprogress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置"><span>高级配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nprogress <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 自定义配置</span></span>
<span class="line">nprogress<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 显示旋转器</span></span>
<span class="line">	showSpinner<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 动画速度</span></span>
<span class="line">	speed<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 最小百分比</span></span>
<span class="line">	minimum<span class="token operator">:</span> <span class="token number">0.08</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 递增步长</span></span>
<span class="line">	trickleSpeed<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 自定义模板</span></span>
<span class="line">	template<span class="token operator">:</span></span>
<span class="line">		<span class="token string">'&lt;div class="bar" role="bar">&lt;div class="peg">&lt;/div>&lt;/div>&lt;div class="spinner" role="spinner">&lt;div class="spinner-icon">&lt;/div>&lt;/div>'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 自定义样式</span></span>
<span class="line">nprogress<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 自定义 CSS</span></span>
<span class="line">	css<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">    #nprogress .bar {</span>
<span class="line">      background: #29d !important;</span>
<span class="line">    }</span>
<span class="line">    #nprogress .peg {</span>
<span class="line">      box-shadow: 0 0 10px #29d, 0 0 5px #29d !important;</span>
<span class="line">    }</span>
<span class="line">    #nprogress .spinner-icon {</span>
<span class="line">      border-top-color: #29d !important;</span>
<span class="line">      border-left-color: #29d !important;</span>
<span class="line">    }</span>
<span class="line">  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由集成" tabindex="-1"><a class="header-anchor" href="#路由集成"><span>路由集成</span></a></h3>
<p><strong>Vue Router</strong>：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nprogress <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	nprogress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	nprogress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>React Router</strong>：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nprogress <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useLocation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    nprogress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> nprogress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>location<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="⌨️-打字机效果" tabindex="-1"><a class="header-anchor" href="#⌨️-打字机效果"><span>⌨️ 打字机效果</span></a></h2>
<h3 id="基础用法-2" tabindex="-1"><a class="header-anchor" href="#基础用法-2"><span>基础用法</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> typewriter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 简单打字效果</span></span>
<span class="line"><span class="token keyword">await</span> typewriter<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在指定元素中打字</span></span>
<span class="line"><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'typewriter'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">await</span> typewriter<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> element <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高级配置-1" tabindex="-1"><a class="header-anchor" href="#高级配置-1"><span>高级配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> typewriter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 完整配置</span></span>
<span class="line"><span class="token keyword">await</span> typewriter<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'Welcome to Web Boot!'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 目标元素</span></span>
<span class="line">	element<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'hero-text'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 打字速度（毫秒/字符）</span></span>
<span class="line">	speed<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 显示光标</span></span>
<span class="line">	cursor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 光标字符</span></span>
<span class="line">	cursorChar<span class="token operator">:</span> <span class="token string">'|'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 光标闪烁</span></span>
<span class="line">	cursorBlink<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 是否循环</span></span>
<span class="line">	loop<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 循环间隔</span></span>
<span class="line">	delay<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 删除效果</span></span>
<span class="line">	deleteAfter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 删除速度</span></span>
<span class="line">	deleteSpeed<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 删除延迟</span></span>
<span class="line">	deleteDelay<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多段文本" tabindex="-1"><a class="header-anchor" href="#多段文本"><span>多段文本</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> typewriter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 依次显示多段文本</span></span>
<span class="line"><span class="token keyword">const</span> texts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Welcome to Web Boot!'</span><span class="token punctuation">,</span> <span class="token string">'Build amazing applications.'</span><span class="token punctuation">,</span> <span class="token string">'With modern web technologies.'</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> text <span class="token keyword">of</span> texts<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">await</span> typewriter<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">		element<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'hero-text'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">		speed<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span></span>
<span class="line">		deleteAfter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		deleteDelay<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实时控制" tabindex="-1"><a class="header-anchor" href="#实时控制"><span>实时控制</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> typewriter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 开始打字</span></span>
<span class="line"><span class="token keyword">const</span> instance <span class="token operator">=</span> typewriter<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token string">'Your text here...'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">	element<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'text'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">	speed<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 暂停</span></span>
<span class="line">instance<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 恢复</span></span>
<span class="line">instance<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 停止</span></span>
<span class="line">instance<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 重置</span></span>
<span class="line">instance<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📜-兼容性滚动" tabindex="-1"><a class="header-anchor" href="#📜-兼容性滚动"><span>📜 兼容性滚动</span></a></h2>
<h3 id="基础用法-3" tabindex="-1"><a class="header-anchor" href="#基础用法-3"><span>基础用法</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> compatibleScrollTo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 滚动到顶部</span></span>
<span class="line"><span class="token function">compatibleScrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> top<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 滚动到指定位置</span></span>
<span class="line"><span class="token function">compatibleScrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	top<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span></span>
<span class="line">	left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">	behavior<span class="token operator">:</span> <span class="token string">'smooth'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 滚动到元素位置</span></span>
<span class="line"><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'target'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">compatibleScrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	element<span class="token punctuation">,</span></span>
<span class="line">	behavior<span class="token operator">:</span> <span class="token string">'smooth'</span><span class="token punctuation">,</span></span>
<span class="line">	block<span class="token operator">:</span> <span class="token string">'start'</span><span class="token punctuation">,</span></span>
<span class="line">	inline<span class="token operator">:</span> <span class="token string">'nearest'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高级功能-1" tabindex="-1"><a class="header-anchor" href="#高级功能-1"><span>高级功能</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> compatibleScrollTo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 带回调的滚动</span></span>
<span class="line"><span class="token function">compatibleScrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	top<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line">	behavior<span class="token operator">:</span> <span class="token string">'smooth'</span><span class="token punctuation">,</span></span>
<span class="line">	duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token function-variable function">onComplete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'滚动完成'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token function-variable function">onCancel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'滚动被取消'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 自定义缓动函数</span></span>
<span class="line"><span class="token function">compatibleScrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	top<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span></span>
<span class="line">	duration<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span></span>
<span class="line">	easing<span class="token operator">:</span> <span class="token string">'easeInOutQuad'</span><span class="token punctuation">,</span> <span class="token comment">// 'linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 滚动容器内的元素</span></span>
<span class="line"><span class="token function">compatibleScrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	container<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'scroll-container'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">	top<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span></span>
<span class="line">	behavior<span class="token operator">:</span> <span class="token string">'smooth'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔄-函数重载工具" tabindex="-1"><a class="header-anchor" href="#🔄-函数重载工具"><span>🔄 函数重载工具</span></a></h2>
<h3 id="基础用法-4" tabindex="-1"><a class="header-anchor" href="#基础用法-4"><span>基础用法</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createOverload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建重载函数</span></span>
<span class="line"><span class="token keyword">const</span> myFunction <span class="token operator">=</span> <span class="token function">createOverload</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'string'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">String: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'number'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Number: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'string'</span><span class="token punctuation">,</span> <span class="token string">'number'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">String: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, Number: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// "String: hello"</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// "Number: 42"</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// "String: hello, Number: 42"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复杂类型支持" tabindex="-1"><a class="header-anchor" href="#复杂类型支持"><span>复杂类型支持</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createOverload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">	name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">	age<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> processData <span class="token operator">=</span> <span class="token function">createOverload</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'string'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'number'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'object'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> User<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'string'</span><span class="token punctuation">,</span> <span class="token string">'object'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> user<span class="token operator">:</span> User<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">		type<span class="token operator">:</span> <span class="token string">'update'</span><span class="token punctuation">,</span></span>
<span class="line">		id<span class="token punctuation">,</span></span>
<span class="line">		user<span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token function">processData</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">processData</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">processData</span><span class="token punctuation">(</span><span class="token string">'user1'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🛠️-其他实用函数" tabindex="-1"><a class="header-anchor" href="#🛠️-其他实用函数"><span>🛠️ 其他实用函数</span></a></h2>
<h3 id="防抖和节流" tabindex="-1"><a class="header-anchor" href="#防抖和节流"><span>防抖和节流</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> debounce<span class="token punctuation">,</span> throttle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 防抖</span></span>
<span class="line"><span class="token keyword">const</span> debouncedFn <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'搜索:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 节流</span></span>
<span class="line"><span class="token keyword">const</span> throttledFn <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'滚动事件'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 取消</span></span>
<span class="line">debouncedFn<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">throttledFn<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝"><span>深拷贝</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> deepClone <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	name<span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span></span>
<span class="line">	hobbies<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'reading'</span><span class="token punctuation">,</span> <span class="token string">'coding'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	address<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		city<span class="token operator">:</span> <span class="token string">'New York'</span><span class="token punctuation">,</span></span>
<span class="line">		zipCode<span class="token operator">:</span> <span class="token string">'10001'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> cloned <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期格式化" tabindex="-1"><a class="header-anchor" href="#日期格式化"><span>日期格式化</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> formatDate<span class="token punctuation">,</span> parseDate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 格式化日期</span></span>
<span class="line"><span class="token keyword">const</span> formatted <span class="token operator">=</span> <span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'YYYY-MM-DD HH:mm:ss'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> short <span class="token operator">=</span> <span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'MM/DD/YYYY'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 解析日期</span></span>
<span class="line"><span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token function">parseDate</span><span class="token punctuation">(</span><span class="token string">'2024-01-20'</span><span class="token punctuation">,</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地存储" tabindex="-1"><a class="header-anchor" href="#本地存储"><span>本地存储</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> storage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// localStorage 封装</span></span>
<span class="line">storage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> storage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span></span>
<span class="line">storage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span></span>
<span class="line">storage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// sessionStorage 封装</span></span>
<span class="line">storage<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">,</span> <span class="token string">'abc123'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> token <span class="token operator">=</span> storage<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 带过期时间的存储</span></span>
<span class="line">storage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'temp-data'</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token number">3600</span><span class="token punctuation">)</span> <span class="token comment">// 1小时后过期</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📋-完整示例" tabindex="-1"><a class="header-anchor" href="#📋-完整示例"><span>📋 完整示例</span></a></h2>
<h3 id="综合使用示例" tabindex="-1"><a class="header-anchor" href="#综合使用示例"><span>综合使用示例</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> httpRequest<span class="token punctuation">,</span> nprogress<span class="token punctuation">,</span> typewriter<span class="token punctuation">,</span> compatibleScrollTo<span class="token punctuation">,</span> debounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mqy/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">DataService</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 配置 HTTP 请求</span></span>
<span class="line">		httpRequest<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">			baseURL<span class="token operator">:</span> <span class="token string">'/api'</span><span class="token punctuation">,</span></span>
<span class="line">			timeout<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// 配置进度条</span></span>
<span class="line">		nprogress<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">			showSpinner<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">			speed<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// 搜索防抖</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>debouncedSearch <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">async</span> <span class="token function">loadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">			nprogress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">			<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">)</span></span>
<span class="line">			nprogress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">			<span class="token keyword">return</span> data</span>
<span class="line">		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			nprogress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">			<span class="token keyword">throw</span> error</span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">async</span> <span class="token function">search</span><span class="token punctuation">(</span>keyword<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token keyword">await</span> httpRequest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/search'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> q<span class="token operator">:</span> keyword <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token keyword">return</span> results</span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">async</span> <span class="token function">showWelcome</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">await</span> typewriter<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'Welcome to our application!'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">			element<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'welcome'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">			speed<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span></span>
<span class="line">			cursor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// 滚动到内容区域</span></span>
<span class="line">		<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token function">compatibleScrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">				element<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">				behavior<span class="token operator">:</span> <span class="token string">'smooth'</span><span class="token punctuation">,</span></span>
<span class="line">				block<span class="token operator">:</span> <span class="token string">'start'</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token keyword">const</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataService</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">service<span class="token punctuation">.</span><span class="token function">showWelcome</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">service<span class="token punctuation">.</span><span class="token function">loadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🚀-最佳实践" tabindex="-1"><a class="header-anchor" href="#🚀-最佳实践"><span>🚀 最佳实践</span></a></h2>
<ol>
<li><strong>统一错误处理</strong>：在应用入口配置全局错误拦截</li>
<li><strong>合理使用防抖节流</strong>：避免频繁的网络请求或计算</li>
<li><strong>进度反馈</strong>：长时间操作添加进度提示</li>
<li><strong>用户体验优化</strong>：使用动画和特效提升交互体验</li>
<li><strong>性能考虑</strong>：大数据量处理时注意内存占用</li>
<li><strong>兼容性处理</strong>：在不同浏览器环境下测试工具函数</li>
</ol>
<p>通过使用 @mqy/utils，您可以大大提升开发效率，同时确保代码的健壮性和用户体验。</p>
</div></template>


