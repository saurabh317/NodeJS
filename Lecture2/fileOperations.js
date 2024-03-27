// import the fs module from core node js modules
import fs from "fs";

//*******************BLOCKING OPERATIONS******************

// blocking operations using "readFileSync"-----------
// const buffer = fs.readFileSync("data.txt")
// console.log(buffer.toString())// instead of converting the buffer to string we can directly get the data
// const data = fs.readFileSync('data.txt', {encoding: 'utf-8'})
// console.log(data)

// // writting the file using "writeFileSync"
// fs.writeFileSync('newData.txt' , "name: saurabh")

// // appending content to the existing file using "appendFileSync"
// fs.appendFileSync("newData.txt", "age:24")

// // deleting an existing file using "unlinkSync"
// fs.unlinkSync('newData.txt')

//non -blocking operation
// note:- simply we have to just remove the keyword sync from all the functions coz by default it will handle the async oprations
//e.g => realFile, writeFile etc.
// here we will be using the path module
// const path = require('path')
import path from "path";
const pathOfFile = path.join('src', 'home', 'pathData.txt') 

//similarly we have another function resolve that gives the absolute path
const resolvedPath = path.resolve('src', 'home', 'pathData.txt') 
console.log(resolvedPath)
// we can find the extension of the file
console.log(path.extname(resolvedPath))

fs.readFile(pathOfFile, (err, data) => {
  if(err) {
    console.log(err)
  } else {
    console.log(data.toString())
  }
})
