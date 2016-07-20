import { apiServer, postJson } from './'

export default {
  login: ({ username, password }) => postJson(`${apiServer}/user/login`, { username, password }),
  logout: ({ id }) => postJson(`${apiServer}/user/logout`, { id }),
  loginVerify: ({ username, password }) => postJson(`${apiServer}/user/loginVerify`, { username, password }),
}
