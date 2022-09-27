import { createApp } from 'vue'
import { globalRegister } from './global'
// 引入重置样式表
import 'normalize.css'
// 引入自己写的重置样式表
import '@/assets/css/index.less'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)
// 传入app，方式一
// globalRegister(app)
// 传入app，方式二：利用插件的方式，app.use(函数),会自动将app作为第一个参数传入，app.use(包含install函数的对象)，会将app传给install函数的第一个参数
app.use(globalRegister) // 注册element-plus和其他
app.use(router)
app.use(store)
app.mount('#app')
