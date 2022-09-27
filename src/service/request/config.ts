// 方式一：手动的切换不同的环境（不推荐）
// const BASE_URL = 'http://yang.org/dev'
// const BASE_NAME = 'coderyang'

// const BASE_URL = 'http://yang.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://yang.org/test'
// const BASE_NAME = 'james'

// 方式二：根据process.env.NODE_ENV区分
// 开发环境：development
// 生产环境：production
// 测试环境：test
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://yang.org/prod'
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = 'http://yang.org/test'
}

export { BASE_URL, TIME_OUT }
