import axios from 'axios'

const baseURL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'local'
    ? process.env.NEXT_PUBLIC_APP_BASEURL
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL?.split('/')[3]}`

export const BASE_URL = baseURL

/* создаст запрос с URL-адресом из env */
export const publicRequest = axios.create({
  baseURL: BASE_URL,
})
