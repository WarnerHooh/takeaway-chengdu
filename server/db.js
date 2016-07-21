import path from 'path'
import Datastore from 'nedb'

let db

export const initDB = (filename = path.join(__dirname, '../data.db')) => {
  db = new Datastore({
    filename: filename,
    autoload: true
  })
  db.loadDatabase()
}

export const getDB = () => db
