import axios from 'axios'

const baseURL = process.env.REACT_APP_BASEURL

export const BASE_URL = baseURL

/* создаст запрос с URL-адресом из env */
export const publicRequest = axios.create({
  baseURL: BASE_URL,
})
