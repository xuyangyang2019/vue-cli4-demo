import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入font-awesome
import 'font-awesome/css/font-awesome.css'
// 引入iconfont
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
