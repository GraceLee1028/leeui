// 按需引入
import Select from './src'
Select.install = function(Vue){
  Vue.component(Select.name,Select)
}
export default Select