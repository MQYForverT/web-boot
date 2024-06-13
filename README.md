## 环境
`最好还是和我一样，大部分错误都来源于环境不一致`
+ node：20.11.0
+ pnpm：9.0.6

## vscode插件（地基）
1. [eslint：检查js](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. [stylelint：检查css](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
3. [Prettier - Code formatter：代码格式化](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4. [Prettier ESLint：两者都有格式规则，此插件抹平冲突；另外，eslint计划会放弃格式规则这块](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
5. [unocss：原子样式补全](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

## vscode插件（推荐）
1. [中文语言包](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)
2. [GitLens — Git supercharged：git操作](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
3. [Vitest：vite工程测试工具](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)
4. [Vue - Official：vue语法支持](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
5. [markdown所见即所得](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
6. [代码补全](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

## 关于依赖
`vite-plugin-vue-devtools`、`vite-plugin-react-click-to-component`
这种可以在页面中通过鼠标点击在vscode中打开项目的插件，需要vscode配置shell命令支持
https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line
1、启动 VS 代码。
2、打开命令面板( Cmd/ctrl +Shift+P ) 并输入“shell 命令”以查找Shell 命令：在 PATH命令中安装“code”命令。
3、重新启动终端以使新$PATH值生效

## 关于命令
`查看配置文件：，用于确认自己extends后是否如期`

- ts
npx tsc -p tsconfig.xxx.json --showConfig
___
- eslint
npx eslint --print-config eslint.config.mjs
___
- stylelint
 npx stylelint stylelint.config.mjs --print-config
___
## 关于实时检查插件问题
比如eslint、stylelint、typescript不生效，你又觉得你的配置没问题，可能需要重启这些插件。
`比如eslint：`
 command + shift + p 输入：restart ESlint server
 或者卸载插件，重新安装，反正这vscode插件这块挺坑的


 ## 关于组件库
 为了实现公用性，选择了用`vue3 + element plus 开发 web component`的，关于这两者之间的可用性，我凭借自己的经验做一点说明（[官网](https://cn.vuejs.org/guide/extras/web-components.html#vue-and-web-components)有的我就不复述了）。
1. 不支持v-model，所以所有的属性都是单向数据流，不存在update:xxx这种写法了，以后都要定义事件去父组件改
2. 事件可以通过@xxx接收，比如emit('click', 'xxx')，父组件可以<parent @click="handClick"/>，而不是说只能通过监听事件去处理addEventListener
3. ref可以起作用，可以通过`_instance`属性拿到所有子组件属性
```
<parent ref="mqy" @click="handClick"/>

const mqy = ref(null)

onMounted(() => {
    mqy.value._instance.devtoolsRawSetupState.say()
    mqy.value._instance.exposed.say()
    console.log(mqy.value._instance)
})
```
___
总结：因为种种不便，太过复杂的组件实现不了，但是简单的还是可以，至于性能方面，目前还没测试