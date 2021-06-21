var MongoClient = require('mongodb').MongoClient

const DBURL = 'mongodb://lunasunkaiser:rajatrules123@ds131119.mlab.com:31119/faker'

const ConnectionPromise = () => new Promise((resolve, reject) => {
  MongoClient.connect(DBURL, function (err, db) {
    if (err) reject(err)
    resolve(db)
  })
})

const DisconnectionPromise = (db) => new Promise((resolve, reject) => {
  try {
    resolve(db.close())
  } catch (e) {
    reject(e)
  }
})

module.exports = {ConnectionPromise, DisconnectionPromise}
