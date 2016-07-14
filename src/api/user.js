import { apiServer, postJson, getJson } from './'

export default {
  login: ({ username, password }) => postJson(`${apiServer}/user/login`, { username, password }),
  logout: ({ id }) => postJson(`${apiServer}/user/logout`, { id }),
  logItems: () => getJson(`${apiServer}/restaurants`),
  orders: () => getJson(`${apiServer}/restaurants`)
}
