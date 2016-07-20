import { apiServer, getJson } from './'

export default {
  history: () => getJson(`${apiServer}/history`)
}
