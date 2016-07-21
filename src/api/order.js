import { apiServer, postJson, getJson } from './'

export default {
  getRestaurants: () => getJson(`${apiServer}/restaurants`),
  postOrder: (orderinfo) => postJson(`${apiServer}/order`, orderinfo)
}
