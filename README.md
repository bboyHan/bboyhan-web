# bboyhan-web

> bboyhan website

### Step 1

```
# install something dependecies
npm i element-ui -S
npm i axios -S
npm i echarts -S

# main.js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
...

```
### Use wordcloud
```
npm i echarts-wordcloud -S
```

### Use ElementUI NavMenu

```
# 删除背景色
node_modules/mavon-editor/dist/mavon-editor.js修改样式，

.v-note-wrapper .v-note-panel .v-note-show .v-show-content,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html

删除background

```

### npm run build bug

```
# 描述：vue打包后出现"Failed to load resource: net::ERR_FILE_NOT_FOUND"错误

解决办法:

打开config/index.js文件，将build->assetsPublicPath改为“./”即可。
build: {
    ...
    // assetsPublicPath: '/',
    assetsPublicPath: './',
    ...
}
```

### 使用vuex进行状态管理（保存用户状态）

```
npm install vuex --save

# main.js
import Vuex from 'vuex'
Vue.use(Vuex)

Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：

1.Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

2.你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

```

### 解决本地localhost能访问，ip不能访问

```
/config/index.js

方法1.将index.js中的host的值改为‘0.0.0.0’

方法2.修改package.json中script下dev的值，在后面加入--host 0.0.0.0 也可以解决

### 跳转route 携带参数

this.$router.push({ path: "/article/1", query: { id: "1" } });
this.$router.push({ name:'/article/2', params: { id: "2" } });

console.log(this.$route.params.id)
console.log(this.$route.query.id)

### created和mounted的区别

created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
