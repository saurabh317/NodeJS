// here we'll be learning how to get the data from clients on the server using post request

// 1. import http
const http = require('http')

// 2. create a server using http module
const server = http.createServer((req, res) => {

  // 3. verify the type of the request using method 'method'
  if (req.method === 'POST') {
    // 4. here goona handle the req
    let body = ""
    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    // 5. lets verifies that all the data has been recieved
    req.on('end', () => {
      console.log(body)
      res.end("data has been recieved")
    })
  } else {
    res.end("hello from server")
  }


})

server.listen('3000', () => console.log("server has started"))