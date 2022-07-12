import axios from 'axios'

// import router from '../router'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    // 将token通过请求头发送给后台
    const token = localStorage.getItem('token')
    if (token) config.headers.token = token

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    if (response.data.code === 200) {
      return response.data.data
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * 统一传参
 * @param {*} options
 * @returns
 */
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
