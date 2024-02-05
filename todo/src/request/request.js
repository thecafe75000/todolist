import axios from 'axios'

//? Secondary Encapsulation of Axios
const request = axios.create({
  baseURL: "/api1",
  timeout: 10000,
  headers: {}
})

//? Configuration of Request Interceptors 
request.interceptors.request.use((config) => {
  return config
})


//? Configuration of Response Interceptors
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request