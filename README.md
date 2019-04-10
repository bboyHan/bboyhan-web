# bboyhan-web

> bboyhan website

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
