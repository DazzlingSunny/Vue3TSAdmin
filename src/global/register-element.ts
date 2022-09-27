import type { App } from 'vue'
import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElTable,
  ElTabPane,
  ElCheckbox,
  ElLink
} from 'element-plus'

const components = [
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElTable,
  ElTabPane,
  ElCheckbox,
  ElLink
]
// 注册全局ELement-plus组件
export default function (app: App): void {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
