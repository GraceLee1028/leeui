import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
//全局引入
import zhyxUi from '../packages'
Vue.use(zhyxUi)
// 按需引入
// import {Chat} from '../packages'
// Vue.use(Chat)
Vue.config.productionTip = false

new Vue({
  render:h=>h(App)
}).$mount(document.querySelector('#app'))