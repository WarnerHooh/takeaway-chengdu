import { apiServer, postJson, getJson } from './'

export default {
  login: ({ username, password }) => postJson(`${apiServer}/user/login`, { username, password }),
  logout: ({ id }) => postJson(`${apiServer}/user/logout`, { id }),
  logItems: () => getJson(`${apiServer}/restaurants`),
  postOrder: ({ meetingname, code, unit, time, comment }) => postJson((`${apiServer}/order`, { meetingname, code, unit, time, comment }))
}
