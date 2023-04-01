import axios from 'axios'

const baseURL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'local'
    ? `https://${process.env.NEXT_PUBLIC_APP_BASEURL?.split('/')[3]}`
    : process.env.NEXT_PUBLIC_VERCEL_URL

export const BASE_URL = baseURL

/* создаст запрос с URL-адресом из env */
export const publicRequest = axios.create({
  baseURL: BASE_URL,
})
