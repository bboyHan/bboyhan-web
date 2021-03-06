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

Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，
它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：

1.Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，
若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

2.你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。
这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

```

### 解决本地localhost能访问，ip不能访问

```
/config/index.js

方法1.将index.js中的host的值改为‘0.0.0.0’

方法2.修改package.json中script下dev的值，在后面加入--host 0.0.0.0 也可以解决
```

### 跳转route 携带参数
```
this.$router.push({ path: "/article/1", query: { id: "1" } });
this.$router.push({ name:'/article/2', params: { id: "2" } });

console.log(this.$route.params.id)
console.log(this.$route.query.id)
```
### created和mounted的区别
```
created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
```

### 解决build webpack的时候css中的background背景图404问题
```
问题一描述：css中配置如下，但打包之后报错 net:ERR_FILE_NOT_FOUND
.img {
background: url("./assets/img/demo.jpg") no-repeat;
}

解决：找到build/utils.js中的代码
if (options.extract) {
  return ExtractTextPlugin.extract({
    use: loaders,
    publicPath: '../../', //添加此行
    fallback: 'vue-style-loader'
  })
}

问题二描述：build之后页面空白,not found

解决：找到config/index.js中的build.assetsPublicPath

assetsPublicPath: '/' -> 改为 './'
```

### 如何刷新当前页面
```
场景描述：处理某些页面（组件）时，可能需要重新刷新当前页面。

存在问题：
1. 使用vue-router重新路由到当前页面，页面不会刷新
2. 采用window.reload()，或者router.go(0)刷新时，整个浏览器进行了重新加载，闪烁，体验不好

解决：
provide / inject 组合

作用：允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。

```
[参考链接](https://www.cnblogs.com/yinn/p/9056731.html)

### 实现页面滚动时，顶部导航栏固定的效果
```
<div class="header-tab" :class="{'headerTab':navBarFixed}">
  ...
</div>

method:{
  watchScroll() {
    var _this = this
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    console.log(scrollTop)
    //  当滚动超过 59 时，实现吸顶效果
    if (scrollTop > 59) {
      _this.navBarFixed = true
    } else {
      _this.navBarFixed = false
    }
    console.log(_this.navBarFixed)
  }
},
mounted() {
  // 事件监听滚动条
  window.addEventListener('scroll', this.watchScroll)
}


.headerTab{
  ...
  position: fixed;
  top: 0;
  z-index: 999;
}
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

### vue引入jquery

```
# package.json 添加

"dependencies": {
    "jquery": "^2.2.3"
}


# build/webpack.base.conf.js 添加

var webpack = require("webpack")

module.exports = {
  plugins: [
      new webpack.optimize.CommonsChunkPlugin('common.js'),
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery"
      })
    ]
}
```
