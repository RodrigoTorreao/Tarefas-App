import Axios, { type AxiosInstance } from 'axios'
import { getCookie } from 'react-use-cookie'

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    mode: 'cors'
  }
})

axiosInstance.interceptors.request.use((request) => {
  const token = getCookie('token')

  request.headers.Authorization =
    `Bearer ${token ?? ''}`

  return request
})

export const getApi = (): AxiosInstance => {
  return axiosInstance
}
