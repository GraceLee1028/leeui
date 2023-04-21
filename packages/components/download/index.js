// 按需引入
import Download from './src'
Download.install = function(Vue){
  Vue.component(Download.name,Download)
}
export default Download