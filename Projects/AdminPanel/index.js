const express = require('express');

const server = express();

server.get('/', (req,res)=>{
    return res.send('Welcome to Admin Panel');
});

server.listen(3400);