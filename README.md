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
