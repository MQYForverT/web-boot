## 环境

`最好还是和我一样，大部分错误都来源于环境不一致`

- node：20.11.0+
- pnpm：9.6.0+

## vscode插件（地基）

1. [eslint：检查js](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)，记得切换预发布版本
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

---

- eslint
  npx eslint --print-config eslint.config.mjs

---

- stylelint
  npx stylelint stylelint.config.mjs --print-config

---

## 关于实时检查插件问题

比如eslint、stylelint、typescript不生效，你又觉得你的配置没问题，可能需要重启这些插件。
`比如eslint：`
command + shift + p 输入：restart ESlint server
或者卸载插件，重新安装，反正这vscode插件这块挺坑的

## 关于web component（wc）的坑

为了实现公用性，选择了用`vue3 + element plus 开发 web component`的，关于这两者之间的可用性，我凭借自己的经验做一点说明（[官网](https://cn.vuejs.org/guide/extras/web-components.html#vue-and-web-components)有的我就不复述了）。

1. 不支持v-model，所以所有的属性都是单向数据流，不存在update:xxx这种写法了，以后都要定义事件去父组件改
2. 关于传递属性，最大的问题在于类型，因为wc属性attribute都是字符串，所以为了兼容所有平台，我要求对外提供的类型都为string【这个需要特别注意，虽然有类型提示，但是需要传入string类型】，然后在项目内自己再做类型映射转换
3. 属性传递注意事项：不是string类型都需要转为string，用JSON.stringify去转；如果本就是string，则不需要转。对于属性的key，在react中，需要把驼峰命名转为中划线，如myName => my-name

```
<parent myName="xxx" />   =>   <parent my-name="xxx" />
```

4. 事件注册在customEvent上，使用addEventListener监听接收，但是在vue中可以通过@xxx接收，比如emit('click', 'xxx')，父组件可以<parent @click="handClick"/>
   <br/>
   `注意：`因为组件前后挂载顺序问题，如果在wc初始化时就触发事件，父组件监听不到，因为此时父组件监听还没挂载，或许你可以延时来解决
5. ref可以起作用，可以通过`_instance`属性拿到所有子组件属性

```
<parent ref="mqy" @click="handClick"/>

const mqy = ref(null)

onMounted(() => {
    mqy.value._instance.devtoolsRawSetupState.say()
    mqy.value._instance.exposed.say()
    console.log(mqy.value._instance)
})
```

5. 对于组件嵌套，比如组件A内部是一些列组件组成的业务组件，比如A（B、C、D），儿A是我们对外的提供的是自定义组件，所以A是.ce.vue后缀，而
   B、C、D都是.vue后缀，这是你会发现在B中的写的样式不生效，如果想要下层组件样式生效，有两种办法：
   - 把下层所有用到的样式都在A中引入或声明
   - `【本项目使用这种】`把下层组件也改为wc，然后样式就可以自己组件内部声明了，当然，A中引用下层组件的时候不能import导入使用了，需要注册为wc了
   - 如果你选择全部样式在最上层组件声明，如果你使用scss这些且定义了变量，记得在vite.config.ts中引入这些变量，不然vite识别不到
6. 组件图标都是用unocss图标作为预设，所以layout组件传入的菜单动态图标都请配置在vite.config.ts中的unocss配置中，详细参考components/private/vite.config.ts文件
7. 且unocss不能在.vue文件和wc文件混用，所以，如果你是组件嵌套的话，所有组件最好都改成wc，因为unocss样式只会在根组件生效

---

总结：因为种种不便，太过复杂的组件实现不了，但是简单的还是可以，至于性能方面，目前还没测试

## todo

最后会用命令执行，把vue和react当作模板抛出去，但是很多依赖需要从根目录复制过去，比如rimraf、tsx。

---

记得要复制.npmrc文件，里面用到了shell-emulator开关，这样tsx中的NODE_OPTIONS等环境变量就可以跨平台，否则windows环境会报错
