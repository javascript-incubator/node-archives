const express = require('express')
const {ConnectionPromise} = require('./config')
const {InsertInterceptor, FindInterceptor, UpdateInterceptor, EitherPromise} = require('./promises/interceptorpromises')
const router = express.Router()

router.post('/:location', function (req, res, next) {
  ConnectionPromise()
  .then(db => EitherPromise(
    () => FindInterceptor(db, 'fakerpublic', {fakername: req.params.location}, false),
    () => UpdateInterceptor(db, 'fakerpublic', {fakerpaylaod: req.body}, {fakername: req.params.location}),
    () => InsertInterceptor(db, 'fakerpublic', {fakername: req.params.location, fakerpaylaod: req.body}),
    result => !!result
  ))
  .then(result => res.send(result))
  .catch(err => console.log(err))
})

router.get('/:location', function (req, res, next) {
  ConnectionPromise()
  .then(db => FindInterceptor(db, 'fakerpublic', {fakername: req.params.location}, true))
  .then(result => res.send((result && result.fakerpaylaod) || {}))
  .catch(err => console.log(err))
})

module.exports = router
