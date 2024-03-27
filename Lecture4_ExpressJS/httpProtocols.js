const express = require('express')
const server = express()

// different types of the https requests
server.get('/', (req, res) => {
  res.send("this is a get request")
})
server.post('/', (req, res) => {
  res.set('Content-Type', 'text/plain') // setting headers :- headers provides extra info about the type of the data
  res.status(201).send("this is a post request")
})
server.put('/', (req, res) => {
  res.send("this is a put request")
})
server.delete('/', (req, res) => {
  res.send("this is a delete request")
})

server.listen(3100, ()=> console.log('server started'))