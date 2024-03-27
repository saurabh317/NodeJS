// create a server using node js
// step 1 - import the library / module
const http = require('http');
const fs = require('fs')

// step 2 - create server
const server = http.createServer((req, res) => {
  // here comes the request
  // res.write("<h1>hi</h1>");
  // res.write("<p>hi i am saurabh sagar</p>");
  // res.end()

  //handling the request based on the url
  const a = 3
  console.log(req.url)
  if (req.url === '/product') {
    res.write("welcome to our product page")
  } else if (req.url === '/dashboard') {
    res.write('welcome to our dashboard')
  } else {
    // here rendering entire html page
    // res.write("this is the home page")
    const data = fs.readFileSync('index.html')
    res.write(data)
  }
  res.end()
})

// specify a port number to client's requests
server.listen('3000', () => console.log("server is ruuning on the port 3000"));
