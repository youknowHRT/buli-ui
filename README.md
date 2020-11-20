# buli-ui

## 安装
```
yarn add buli-ui
<!-- or -->
npm install buli-ui
```

## 导入
```js{3,4}
import Vue from 'vue'
import App from './App.vue'
import BuliUi from 'buli-ui'  //引入组件库
import 'buli-ui/dist/buli-ui.css'  //引入样式文件
Vue.use(BuliUi)  //全局使用

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
```
