// import express from express
const express = require("express")

// create server
const server = express();

// handle different request like get, post etc
server.get('/', (req, res, next) => {
  res.send("express server is running")
})

// for sending the static files to the server we need middleware
server.use(express.static('public'))

// specify the port
server.listen(3100, () => console.log("server has started"))