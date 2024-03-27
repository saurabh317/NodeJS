const express = require('express');
const server = express()

// creating middlewares : it receives the request interprets it , can be used to modify the requests
// these are the routes level middleware
function firstMiddleware (req, res, next) {
  console.log("this is the first middleware")
  next()
}
function secondMiddleware (req, res, next) {
  console.log("this is the second middleware")
  next()
}
// this is the application level middleware
function globalMiddleware (req, res, next) {
  console.log("this is the global middleware")
  next()
}
// for calling the applicatio level middle ware we can use 'use' function
server.use(globalMiddleware)

// calling middlewares:- provide an array of all middlewares
server.get('/', [firstMiddleware, secondMiddleware], (req, res)=> {
  res.send("this is the express server running")
})

server.listen(3100, () => console.log("server has started"))
