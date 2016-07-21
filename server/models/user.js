import { getDB } from '../db'

export getUser = ({ _id }) => {
  return new Promise((res, rej) => {
    getDB().findOne({ _id }, (err, doc) => {
      if (err) {
        return rej(err)
      }
      res(doc)
    })
  })
}
