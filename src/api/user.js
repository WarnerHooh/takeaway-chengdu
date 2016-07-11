import { apiServer, getJson, postJson } from './'

export default {
  login: ({ username, password }) => postJson(`${apiServer}/user/login`, { username, password }),
  logout: ({ id }) => postJson(`${apiServer}/user/logout`, { id })
}
