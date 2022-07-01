import axios from 'axios';

const baseURL = process.env.REACT_APP_BASEURL

export const BASE_URL = baseURL;

/* получит токен пользователя */
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

/* создаст запрос с URL-адресом из env */
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

/* создаст запрос к URL-адресу из env с токеном пользователя */
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});