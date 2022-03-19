import axios from 'axios'
const request = axios.create({
  baseURL: '/api/'
})
request.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (res) {
    return res.data
  },
  function (error) {
    return error
  }
)
export default request
