var jsonServer = require('json-server')
var server = jsonServer.create()
var got = jsonServer.router('got.json')
var middlewares = jsonServer.defaults()
server.use(middlewares)
/* Routers here */
server.use('/gameofthrones', got)

// For c9
// server.listen(process.env.PORT, process.env.IP, function () {
//   console.log('JSON Server is running')
// })

server.listen(process.env.PORT, function () {
   console.log('JSON Server is running')
})
