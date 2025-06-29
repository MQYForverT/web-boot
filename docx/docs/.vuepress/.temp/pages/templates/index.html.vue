<template>
	<div>
		<h1 id="模板介绍" tabindex="-1">
			<a class="header-anchor" href="#模板介绍"><span>模板介绍</span></a>
		</h1>
		<p>Web Boot 提供三种主流前端框架的项目模板，每个模板都包含完整的后台管理系统功能。</p>
		<h2 id="模板对比" tabindex="-1">
			<a class="header-anchor" href="#模板对比"><span>模板对比</span></a>
		</h2>
		<table>
			<thead>
				<tr>
					<th>特性</th>
					<th>Vue 模板</th>
					<th>React 模板</th>
					<th>Svelte 模板</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>框架版本</td>
					<td>Vue 3.5+</td>
					<td>React 18+</td>
					<td>Svelte 4+</td>
				</tr>
				<tr>
					<td>构建工具</td>
					<td>Vite</td>
					<td>Vite</td>
					<td>Vite</td>
				</tr>
				<tr>
					<td>类型支持</td>
					<td>TypeScript</td>
					<td>TypeScript</td>
					<td>TypeScript</td>
				</tr>
				<tr>
					<td>状态管理</td>
					<td>Pinia</td>
					<td>Zustand</td>
					<td>Writable Stores</td>
				</tr>
				<tr>
					<td>路由管理</td>
					<td>Vue Router</td>
					<td>React Router</td>
					<td>page.js</td>
				</tr>
				<tr>
					<td>UI 组件库</td>
					<td>Element Plus</td>
					<td>Ant Design</td>
					<td>自定义组件</td>
				</tr>
				<tr>
					<td>样式方案</td>
					<td>SCSS + UnoCSS</td>
					<td>SCSS + UnoCSS</td>
					<td>SCSS + UnoCSS</td>
				</tr>
			</tbody>
		</table>
		<h2 id="共同特性" tabindex="-1">
			<a class="header-anchor" href="#共同特性"><span>共同特性</span></a>
		</h2>
		<p>所有模板都包含以下核心功能：</p>
		<h3 id="🔐-身份认证" tabindex="-1">
			<a class="header-anchor" href="#🔐-身份认证"><span>🔐 身份认证</span></a>
		</h3>
		<ul>
			<li>完整的登录/注销流程</li>
			<li>JWT Token 管理</li>
			<li>路由权限控制</li>
			<li>用户信息管理</li>
		</ul>
		<h3 id="🎨-布局系统" tabindex="-1">
			<a class="header-anchor" href="#🎨-布局系统"><span>🎨 布局系统</span></a>
		</h3>
		<ul>
			<li>响应式设计</li>
			<li>多种布局模式切换</li>
			<li>侧边栏折叠/展开</li>
			<li>面包屑导航</li>
			<li>标签页管理</li>
		</ul>
		<h3 id="🌈-主题系统" tabindex="-1">
			<a class="header-anchor" href="#🌈-主题系统"><span>🌈 主题系统</span></a>
		</h3>
		<ul>
			<li>明暗模式切换</li>
			<li>自定义主题色</li>
			<li>动态主题切换动画</li>
			<li>主题配置持久化</li>
		</ul>
		<h3 id="🛠️-开发体验" tabindex="-1">
			<a class="header-anchor" href="#🛠️-开发体验"><span>🛠️ 开发体验</span></a>
		</h3>
		<ul>
			<li>热模块替换 (HMR)</li>
			<li>ESLint + Prettier 代码规范</li>
			<li>Stylelint 样式规范</li>
			<li>TypeScript 类型检查</li>
			<li>Vite 构建优化</li>
		</ul>
		<h3 id="📱-响应式设计" tabindex="-1">
			<a class="header-anchor" href="#📱-响应式设计"><span>📱 响应式设计</span></a>
		</h3>
		<ul>
			<li>移动端适配</li>
			<li>触摸手势支持</li>
			<li>自适应布局</li>
			<li>媒体查询优化</li>
		</ul>
		<h2 id="选择建议" tabindex="-1">
			<a class="header-anchor" href="#选择建议"><span>选择建议</span></a>
		</h2>
		<h3 id="选择-vue-模板-如果您" tabindex="-1">
			<a class="header-anchor" href="#选择-vue-模板-如果您"><span>选择 Vue 模板 如果您：</span></a>
		</h3>
		<ul>
			<li>熟悉 Vue 3 生态系统</li>
			<li>需要丰富的 UI 组件库支持</li>
			<li>偏好模板语法和指令系统</li>
			<li>团队有 Vue 开发经验</li>
		</ul>
		<h3 id="选择-react-模板-如果您" tabindex="-1">
			<a class="header-anchor" href="#选择-react-模板-如果您"><span>选择 React 模板 如果您：</span></a>
		</h3>
		<ul>
			<li>熟悉 React 生态系统</li>
			<li>需要大型应用的状态管理</li>
			<li>偏好 JSX 语法</li>
			<li>团队有 React 开发经验</li>
		</ul>
		<h3 id="选择-svelte-模板-如果您" tabindex="-1">
			<a class="header-anchor" href="#选择-svelte-模板-如果您"><span>选择 Svelte 模板 如果您：</span></a>
		</h3>
		<ul>
			<li>追求更小的包体积</li>
			<li>需要更好的运行时性能</li>
			<li>喜欢简洁的语法</li>
			<li>想尝试新技术栈</li>
		</ul>
		<h2 id="快速开始" tabindex="-1">
			<a class="header-anchor" href="#快速开始"><span>快速开始</span></a>
		</h2>
		<p>选择您偏好的模板后，按照以下步骤开始开发：</p>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre v-pre><code><span class="line"><span class="token comment"># 进入对应模板目录</span></span>
<span class="line"><span class="token builtin class-name">cd</span> templates/<span class="token punctuation">[</span>vue<span class="token operator">|</span>react<span class="token operator">|</span>svelte<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装依赖</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动开发服务器</span></span>
<span class="line"><span class="token function">pnpm</span> dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 构建生产版本</span></span>
<span class="line"><span class="token function">pnpm</span> build</span>
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
		<p>每个模板都有详细的使用文档，请点击相应的模板链接查看具体配置和使用方法。</p>
	</div>
</template>
