const InsertInterceptor = (db, document, payload) => new Promise((resolve, reject) => {
  db.collection(document).insertMany([payload], function (err, result) {
    if (err) reject(err)
    db.close()
    resolve(result)
  })
})

const UpdateInterceptor = (db, document, payload, query) => new Promise((resolve, reject) => {
  db.collection(document).updateOne(query, { $set: payload }, function (err, result) {
    if (err) reject(err)
    db.close()
    resolve(result)
  })
})

const FindInterceptor = (db, document, query, requireClosing) => new Promise((resolve, reject) => {
  db.collection(document).findOne(query, function (err, result) {
    if (err) reject(err)
    requireClosing && db.close()
    resolve(result)
  })
})

const EitherPromise = (Promise0, Promise1, Promise2, conditioner) => new Promise((resolve, reject) => {
  Promise0().then(result => conditioner(result) ? Promise1() : Promise2())
    .then(result => resolve(result))
    .catch(err => reject(err))
})

module.exports = { FindInterceptor, InsertInterceptor, UpdateInterceptor, EitherPromise }
