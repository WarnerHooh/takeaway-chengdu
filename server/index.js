import path from 'path'
import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'

import { initDB } from './db'

const app = express()
app.use(express.static(path.join(__dirname, '../dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if(process.env.NODE_ENV !== 'production') {
  app.use(require('./client').default)
}

initDB()

http.createServer(app)
  .listen(3000, () => console.log('server start at 3000'))
