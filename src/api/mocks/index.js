import fetchMock from 'fetch-mock'

import { apiServer } from '../'
import user from './user.json'

fetchMock
  .mock(`${apiServer}/me/profile`, 'GET', user[0])
  .mock(`${apiServer}/user/login`, 'POST', user[0])
  .mock(`${apiServer}/user/logout`, 'POST', {})
