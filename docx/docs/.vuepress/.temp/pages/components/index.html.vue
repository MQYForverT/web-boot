<template>
	<div>
		<h1 id="组件文档" tabindex="-1">
			<a class="header-anchor" href="#组件文档"><span>组件文档</span></a>
		</h1>
		<p>Web Boot 提供了丰富的组件库，包括布局组件、登录组件和通用组件，帮助您快速构建现代化的后台管理系统。</p>
		<h2 id="组件概览" tabindex="-1">
			<a class="header-anchor" href="#组件概览"><span>组件概览</span></a>
		</h2>
		<h3 id="🏗️-布局组件-backgroundlayout" tabindex="-1">
			<a class="header-anchor" href="#🏗️-布局组件-backgroundlayout"
				><span>🏗️ <RouteLink to="/components/layout/">布局组件 (BackgroundLayout)</RouteLink></span></a
			>
		</h3>
		<ul>
			<li>完整的后台管理系统布局</li>
			<li>响应式设计，支持移动端</li>
			<li>多种布局模式切换</li>
			<li>侧边栏折叠/展开功能</li>
			<li>面包屑导航和标签页管理</li>
			<li>主题切换（明暗模式）</li>
		</ul>
		<h3 id="🔐-登录组件-backgroundlogin" tabindex="-1">
			<a class="header-anchor" href="#🔐-登录组件-backgroundlogin"
				><span>🔐 <RouteLink to="/components/login/">登录组件 (BackgroundLogin)</RouteLink></span></a
			>
		</h3>
		<ul>
			<li>美观的登录界面设计</li>
			<li>表单验证和错误处理</li>
			<li>多种登录方式支持</li>
			<li>响应式布局适配</li>
			<li>国际化支持</li>
		</ul>
		<h3 id="🧩-通用组件" tabindex="-1">
			<a class="header-anchor" href="#🧩-通用组件"
				><span>🧩 <RouteLink to="/components/common/">通用组件</RouteLink></span></a
			>
		</h3>
		<ul>
			<li>主题切换组件</li>
			<li>语言切换组件</li>
			<li>全局状态管理</li>
			<li>通用工具函数</li>
		</ul>
		<h2 id="组件特性" tabindex="-1">
			<a class="header-anchor" href="#组件特性"><span>组件特性</span></a>
		</h2>
		<h3 id="🎨-统一设计风格" tabindex="-1">
			<a class="header-anchor" href="#🎨-统一设计风格"><span>🎨 统一设计风格</span></a>
		</h3>
		<ul>
			<li>现代化的 UI 设计</li>
			<li>一致的交互体验</li>
			<li>丰富的动画效果</li>
			<li>优雅的过渡动画</li>
		</ul>
		<h3 id="🔧-高度可配置" tabindex="-1">
			<a class="header-anchor" href="#🔧-高度可配置"><span>🔧 高度可配置</span></a>
		</h3>
		<ul>
			<li>灵活的配置选项</li>
			<li>支持自定义主题</li>
			<li>可扩展的功能模块</li>
			<li>类型安全的 API</li>
		</ul>
		<h3 id="📱-响应式设计" tabindex="-1">
			<a class="header-anchor" href="#📱-响应式设计"><span>📱 响应式设计</span></a>
		</h3>
		<ul>
			<li>移动端优先设计</li>
			<li>自适应不同屏幕尺寸</li>
			<li>触摸友好的交互</li>
			<li>优化的性能表现</li>
		</ul>
		<h3 id="🌍-国际化支持" tabindex="-1">
			<a class="header-anchor" href="#🌍-国际化支持"><span>🌍 国际化支持</span></a>
		</h3>
		<ul>
			<li>多语言切换</li>
			<li>本地化配置</li>
			<li>RTL 语言支持</li>
			<li>时区处理</li>
		</ul>
		<h2 id="安装使用" tabindex="-1">
			<a class="header-anchor" href="#安装使用"><span>安装使用</span></a>
		</h2>
		<h3 id="npm-安装" tabindex="-1">
			<a class="header-anchor" href="#npm-安装"><span>NPM 安装</span></a>
		</h3>
		<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh">
			<pre v-pre><code><span class="line"><span class="token comment"># 安装布局组件</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> mqy-background-layout</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装登录组件  </span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> mqy-background-login</span>
<span class="line"></span></code></pre>
			<div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="基础使用" tabindex="-1">
			<a class="header-anchor" href="#基础使用"><span>基础使用</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// Vue 3</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BackgroundLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mqy-background-layout'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// React</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BackgroundLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mqy-background-layout'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Svelte</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BackgroundLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mqy-background-layout'</span></span>
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
		<h3 id="配置示例" tabindex="-1">
			<a class="header-anchor" href="#配置示例"><span>配置示例</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre
				v-pre
			><code><span class="line"><span class="token keyword">const</span> layoutConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 主题配置</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span> <span class="token comment">// 'light' | 'dark'</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 布局模式</span></span>
<span class="line">  layout<span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span> <span class="token comment">// 'default' | 'vertical'</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 侧边栏配置</span></span>
<span class="line">  sidebar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    collapsed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    width<span class="token operator">:</span> <span class="token number">240</span><span class="token punctuation">,</span></span>
<span class="line">    collapsedWidth<span class="token operator">:</span> <span class="token number">64</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 头部配置</span></span>
<span class="line">  header<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    height<span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span></span>
<span class="line">    fixed<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 标签页配置</span></span>
<span class="line">  tabs<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    persistent<span class="token operator">:</span> <span class="token boolean">true</span></span>
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
			</div>
		</div>
		<h2 id="组件架构" tabindex="-1">
			<a class="header-anchor" href="#组件架构"><span>组件架构</span></a>
		</h2>
		<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text">
			<pre v-pre><code><span class="line">components/</span>
<span class="line">├── BackgroundLayout/     # 布局组件</span>
<span class="line">│   ├── component/       # 子组件</span>
<span class="line">│   │   ├── Aside/      # 侧边栏</span>
<span class="line">│   │   ├── Header/     # 头部导航</span>
<span class="line">│   │   ├── Main/       # 主内容区</span>
<span class="line">│   │   ├── Footer/     # 底部</span>
<span class="line">│   │   └── NavTab/     # 标签页</span>
<span class="line">│   ├── hooks/          # 组合式函数</span>
<span class="line">│   ├── styles/         # 样式文件</span>
<span class="line">│   └── constants/      # 常量配置</span>
<span class="line">├── BackgroundLogin/     # 登录组件</span>
<span class="line">│   ├── component/      # 子组件</span>
<span class="line">│   ├── hooks/          # 组合式函数</span>
<span class="line">│   └── styles/         # 样式文件</span>
<span class="line">└── common/             # 通用组件</span>
<span class="line">    ├── components/     # 通用子组件</span>
<span class="line">    ├── utils/          # 工具函数</span>
<span class="line">    └── styles/         # 全局样式</span>
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
		<h2 id="开发指南" tabindex="-1">
			<a class="header-anchor" href="#开发指南"><span>开发指南</span></a>
		</h2>
		<h3 id="自定义主题" tabindex="-1">
			<a class="header-anchor" href="#自定义主题"><span>自定义主题</span></a>
		</h3>
		<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss">
			<pre v-pre><code><span class="line"><span class="token comment">// 定义主题变量</span></span>
<span class="line"><span class="token selector">:root </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--primary-color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--success-color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--warning-color</span><span class="token punctuation">:</span> #faad14<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--error-color</span><span class="token punctuation">:</span> #f5222d<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 布局变量</span></span>
<span class="line">  <span class="token property">--sidebar-width</span><span class="token punctuation">:</span> 240px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--header-height</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--footer-height</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 暗色主题</span></span>
<span class="line"><span class="token selector">[data-theme='dark'] </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--primary-color</span><span class="token punctuation">:</span> #177ddc<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--bg-color</span><span class="token punctuation">:</span> #141414<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--text-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span></span>
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
		<h3 id="扩展组件" tabindex="-1">
			<a class="header-anchor" href="#扩展组件"><span>扩展组件</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 扩展布局组件</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">CustomLayoutConfig</span> <span class="token keyword">extends</span> <span class="token class-name">LayoutConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 添加自定义配置</span></span>
<span class="line">  customFeature<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  additionalOptions<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 自定义 Hook</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useCustomLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> CustomLayoutConfig<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 自定义逻辑</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 返回扩展功能</span></span>
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
			</div>
		</div>
		<h3 id="事件处理" tabindex="-1">
			<a class="header-anchor" href="#事件处理"><span>事件处理</span></a>
		</h3>
		<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts">
			<pre v-pre><code><span class="line"><span class="token comment">// 组件事件</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">LayoutEvents</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'update:theme'</span><span class="token operator">:</span> <span class="token punctuation">(</span>theme<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line">  <span class="token string-property property">'update:collapsed'</span><span class="token operator">:</span> <span class="token punctuation">(</span>collapsed<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line">  <span class="token string-property property">'menu-click'</span><span class="token operator">:</span> <span class="token punctuation">(</span>menuItem<span class="token operator">:</span> MenuItem<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line">  <span class="token string-property property">'tab-close'</span><span class="token operator">:</span> <span class="token punctuation">(</span>tabKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用示例</span></span>
<span class="line"><span class="token operator">&lt;</span>BackgroundLayout</span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">update</span></span><span class="token operator">:</span>theme<span class="token operator">=</span><span class="token string">"handleThemeChange"</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">menu</span></span><span class="token operator">-</span>click<span class="token operator">=</span><span class="token string">"handleMenuClick"</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">tab</span></span><span class="token operator">-</span>close<span class="token operator">=</span><span class="token string">"handleTabClose"</span></span>
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
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h2 id="最佳实践" tabindex="-1">
			<a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a>
		</h2>
		<h3 id="_1-配置管理" tabindex="-1">
			<a class="header-anchor" href="#_1-配置管理"><span>1. 配置管理</span></a>
		</h3>
		<ul>
			<li>使用 TypeScript 确保配置类型安全</li>
			<li>将配置文件独立管理</li>
			<li>支持运行时动态配置</li>
		</ul>
		<h3 id="_2-性能优化" tabindex="-1">
			<a class="header-anchor" href="#_2-性能优化"><span>2. 性能优化</span></a>
		</h3>
		<ul>
			<li>使用虚拟滚动处理大量数据</li>
			<li>实现组件懒加载</li>
			<li>优化重渲染性能</li>
		</ul>
		<h3 id="_3-可访问性" tabindex="-1">
			<a class="header-anchor" href="#_3-可访问性"><span>3. 可访问性</span></a>
		</h3>
		<ul>
			<li>支持键盘导航</li>
			<li>提供 ARIA 标签</li>
			<li>确保颜色对比度</li>
		</ul>
		<h3 id="_4-测试覆盖" tabindex="-1">
			<a class="header-anchor" href="#_4-测试覆盖"><span>4. 测试覆盖</span></a>
		</h3>
		<ul>
			<li>单元测试覆盖核心逻辑</li>
			<li>集成测试验证组件交互</li>
			<li>E2E 测试保证用户体验</li>
		</ul>
		<h2 id="浏览器支持" tabindex="-1">
			<a class="header-anchor" href="#浏览器支持"><span>浏览器支持</span></a>
		</h2>
		<table>
			<thead>
				<tr>
					<th>浏览器</th>
					<th>版本</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Chrome</td>
					<td>≥ 80</td>
				</tr>
				<tr>
					<td>Firefox</td>
					<td>≥ 78</td>
				</tr>
				<tr>
					<td>Safari</td>
					<td>≥ 14</td>
				</tr>
				<tr>
					<td>Edge</td>
					<td>≥ 80</td>
				</tr>
			</tbody>
		</table>
		<h2 id="更新日志" tabindex="-1">
			<a class="header-anchor" href="#更新日志"><span>更新日志</span></a>
		</h2>
		<h3 id="v2-0-0-2024-01-20" tabindex="-1">
			<a class="header-anchor" href="#v2-0-0-2024-01-20"><span>v2.0.0 (2024-01-20)</span></a>
		</h3>
		<ul>
			<li>🎉 支持 Vue 3、React 18、Svelte 4</li>
			<li>🆕 新增暗色主题支持</li>
			<li>🔧 重构组件架构</li>
			<li>📱 优化移动端体验</li>
		</ul>
		<h3 id="v1-5-0-2023-12-15" tabindex="-1">
			<a class="header-anchor" href="#v1-5-0-2023-12-15"><span>v1.5.0 (2023-12-15)</span></a>
		</h3>
		<ul>
			<li>✨ 新增标签页管理功能</li>
			<li>🐛 修复侧边栏折叠问题</li>
			<li>💄 优化组件样式</li>
		</ul>
		<p>查看完整的更新日志和迁移指南，请访问各组件的详细文档页面。</p>
	</div>
</template>
