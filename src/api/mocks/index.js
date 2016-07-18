import fetchMock from 'fetch-mock'

import { apiServer } from '../'
import user from './user.json'
import restaurants from './restaurants.json'

fetchMock
  .mock(`${apiServer}/me/profile`, 'GET', user[0])
  .mock(`${apiServer}/user/login`, 'POST', user[0])
  .mock(`${apiServer}/user/logout`, 'POST', {})
  .mock(`${apiServer}/user/loginVerify`, 'POST', (url, data) => {
    const userInfo = JSON.parse(data.body)
    if (userInfo.username === 'admin' && userInfo.password === 'admin') {
      return user[0]
    }
    return {
      token: null
    }
  })
  .mock(`${apiServer}/restaurants`, 'GET', restaurants)
  .mock(`${apiServer}/order`, 'POST', (url, data) => {
    const newOrder = JSON.parse(data.body)
    restaurants.allOrder.push(newOrder)
    return restaurants
  })
