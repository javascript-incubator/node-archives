var jsonServer = require('json-server')
var server = jsonServer.create()
var got = jsonServer.router('got.json')
var middlewares = jsonServer.defaults()
server.use(middlewares)
/* Routers here */
server.use('/gameofthrones', got)


server.listen(process.env.PORT, process.env.IP, function () {
  console.log('JSON Server is running')
})