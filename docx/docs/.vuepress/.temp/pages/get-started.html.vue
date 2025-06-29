<template>
	<div>
		<h1 id="快速开始" tabindex="-1">
			<a class="header-anchor" href="#快速开始"><span>快速开始</span></a>
		</h1>
		<p>本指南将帮助您快速上手 Web Boot 项目，并创建您的第一个后台管理系统。</p>
		<h2 id="环境要求" tabindex="-1">
			<a class="header-anchor" href="#环境要求"><span>环境要求</span></a>
		</h2>
		<p>在开始之前，请确保您的开发环境满足以下要求：</p>
		<ul>
			<li><strong>Node.js</strong>: 版本 18.0.0 或更高</li>
			<li><strong>pnpm</strong>: 推荐使用 pnpm 作为包管理器</li>
			<li><strong>Git</strong>: 用于版本控制</li>
		</ul>
		<h2 id="安装步骤" tabindex="-1">
			<a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a>
		</h2>
		<h3 id="_1-克隆项目" tabindex="-1">
			<a class="header-anchor" href="#_1-克隆项目"><span>1. 克隆项目</span></a>
		</h3>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre
				v-pre
			><code><span class="line"><span class="token function">git</span> clone https://github.com/your-username/web-boot.git</span>
<span class="line"><span class="token builtin class-name">cd</span> web-boot</span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="_2-安装依赖" tabindex="-1">
			<a class="header-anchor" href="#_2-安装依赖"><span>2. 安装依赖</span></a>
		</h3>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre v-pre><code><span class="line"><span class="token comment"># 安装项目依赖</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="_3-选择模板" tabindex="-1">
			<a class="header-anchor" href="#_3-选择模板"><span>3. 选择模板</span></a>
		</h3>
		<p>Web Boot 提供三种前端框架模板：</p>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre v-pre><code><span class="line"><span class="token comment"># Vue 模板</span></span>
<span class="line"><span class="token builtin class-name">cd</span> templates/vue</span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">pnpm</span> dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># React 模板  </span></span>
<span class="line"><span class="token builtin class-name">cd</span> templates/react</span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">pnpm</span> dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Svelte 模板</span></span>
<span class="line"><span class="token builtin class-name">cd</span> templates/svelte</span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">pnpm</span> dev</span>
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
		<h3 id="_4-启动开发服务器" tabindex="-1">
			<a class="header-anchor" href="#_4-启动开发服务器"><span>4. 启动开发服务器</span></a>
		</h3>
		<p>选择您喜欢的框架模板后，运行相应的开发命令：</p>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre v-pre><code><span class="line"><span class="token function">pnpm</span> dev</span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
			</div>
		</div>
		<p>项目将在 <code v-pre>http://localhost:5173</code> 启动。</p>
		<h2 id="项目结构" tabindex="-1">
			<a class="header-anchor" href="#项目结构"><span>项目结构</span></a>
		</h2>
		<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text">
			<pre v-pre><code><span class="line">web-boot/</span>
<span class="line">├── components/          # 可复用组件库</span>
<span class="line">│   ├── private/        # 私有组件（完整功能）</span>
<span class="line">│   └── public/         # 公共组件（基础功能）</span>
<span class="line">├── templates/          # 项目模板</span>
<span class="line">│   ├── vue/           # Vue 模板</span>
<span class="line">│   ├── react/         # React 模板</span>
<span class="line">│   └── svelte/        # Svelte 模板</span>
<span class="line">├── internal/          # 内部工具和配置</span>
<span class="line">│   ├── eslint-config/ # ESLint 配置</span>
<span class="line">│   ├── stylelint-config/ # Stylelint 配置</span>
<span class="line">│   ├── utils/         # 工具函数</span>
<span class="line">│   └── vite-config/   # Vite 配置</span>
<span class="line">└── docx/              # 项目文档</span>
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
		<h2 id="核心功能" tabindex="-1">
			<a class="header-anchor" href="#核心功能"><span>核心功能</span></a>
		</h2>
		<h3 id="登录系统" tabindex="-1">
			<a class="header-anchor" href="#登录系统"><span>登录系统</span></a>
		</h3>
		<p>所有模板都内置了完整的登录系统：</p>
		<ul>
			<li>用户登录/注销</li>
			<li>路由守卫</li>
			<li>Token 管理</li>
			<li>权限验证</li>
		</ul>
		<h3 id="布局系统" tabindex="-1">
			<a class="header-anchor" href="#布局系统"><span>布局系统</span></a>
		</h3>
		<p>提供了灵活的布局组件：</p>
		<ul>
			<li>响应式侧边栏</li>
			<li>顶部导航栏</li>
			<li>面包屑导航</li>
			<li>标签页管理</li>
		</ul>
		<h3 id="主题系统" tabindex="-1">
			<a class="header-anchor" href="#主题系统"><span>主题系统</span></a>
		</h3>
		<p>支持多种主题配置：</p>
		<ul>
			<li>明暗模式切换</li>
			<li>自定义主题色</li>
			<li>布局样式切换</li>
		</ul>
		<h2 id="开发指南" tabindex="-1">
			<a class="header-anchor" href="#开发指南"><span>开发指南</span></a>
		</h2>
		<h3 id="添加新页面" tabindex="-1">
			<a class="header-anchor" href="#添加新页面"><span>添加新页面</span></a>
		</h3>
		<ol>
			<li>在 <code v-pre>src/pages/</code> 目录下创建新的页面组件</li>
			<li>在路由配置中添加对应的路由规则</li>
			<li>根据需要添加到侧边栏菜单中</li>
		</ol>
		<h3 id="自定义组件" tabindex="-1">
			<a class="header-anchor" href="#自定义组件"><span>自定义组件</span></a>
		</h3>
		<p>您可以基于现有的组件库开发自定义组件：</p>
		<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js">
			<pre v-pre><code><span class="line"><span class="token comment">// 引入基础组件</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BackgroundLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mqy-background-layout'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 自定义配置</span></span>
<span class="line"><span class="token keyword">const</span> layoutConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 您的配置选项</span></span>
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
			</div>
		</div>
		<h3 id="构建部署" tabindex="-1">
			<a class="header-anchor" href="#构建部署"><span>构建部署</span></a>
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
		<h2 id="下一步" tabindex="-1">
			<a class="header-anchor" href="#下一步"><span>下一步</span></a>
		</h2>
		<ul>
			<li>查看 <RouteLink to="/templates/">模板文档</RouteLink> 了解各框架的详细配置</li>
			<li>阅读 <RouteLink to="/components/">组件文档</RouteLink> 学习如何使用内置组件</li>
			<li>参考 <RouteLink to="/config/">配置文档</RouteLink> 进行项目定制</li>
		</ul>
		<p>如果您遇到任何问题，请查看项目的 GitHub Issues 或提交新的问题。</p>
	</div>
</template>
