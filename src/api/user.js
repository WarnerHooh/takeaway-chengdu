import { apiServer, postJson, getJson } from './'

export default {
  login: ({ username, password }) => postJson(`${apiServer}/user/login`, { username, password }),
  logout: ({ id }) => postJson(`${apiServer}/user/logout`, { id }),
  loginVerify: ({ username, password }) => postJson(`${apiServer}/user/loginVerify`, { username, password }),
  logItems: () => getJson(`${apiServer}/restaurants`),
  orders: () => getJson(`${apiServer}/restaurants`)
}
