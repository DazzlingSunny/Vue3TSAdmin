// serice统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = ''
      if (token) {
        if (config.headers) {
          // 因为config.headers的源码中类型添加了undefined，在undefined中取值肯定会报错呀，所以判断一下
          config.headers.Authorization = `Bearer ${token}`
        }
      }

      return config
    },
    requestInterceptorCatch(err) {
      return err
    },
    responseInterceptor(res) {
      return res
    },
    responseInterceptorCatch(err) {
      return err
    }
  }
})

export default hyRequest
