// 整个UI包的入口
import Button from './components/button'
import './fonts/font.scss'
const components = [
  Button
]
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
