import Select from './components/select'
import Download from './components/download'
import fileUtil from './utils/file'
const components = [
  Select,
  Download
]
function install(Vue){
  // 判断是否安装
  if (install.installed) return
  // 遍历 components 数组，来进行全局注册
  components.map(component => {
      Vue.component(component.name, component)
  })
}
//直接引入vue依赖文件时，执行
if(typeof window!==undefined&&window.Vue){
  install(window.Vue)
}
export default install
export {
  //公共的方法模块
  fileUtil,
  //按需加载
  Select,
  Download,
  //全局安装
  install
}