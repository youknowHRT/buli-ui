// 整个UI包的入口
import Button from './components/button'
import Dialog from './components/dialog'
import Input from './components/input'
import Switch from './components/switch'
import Radio from './components/radio'
import RadioGroup from './components/radio-group'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'
import Form from './components/form'
import FormItem from './components/form-item'
import Pagination from './components/pagination'
import './fonts/font.scss'
const components = [
  Button,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Pagination
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
