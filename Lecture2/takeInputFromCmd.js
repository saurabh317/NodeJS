// take the inputs through cmd

// step 1 => import readline
// const readLine = require('readline');

import * as readLine from 'readline'

// step 2 => configure interface to connect with terminal/ cmd
const interFace = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

// step 3 => reading values
interFace.question("enter your first number", (num1) => {
  interFace.question("enter your second number", (num2) => {
    const sum = Number(num1) + Number(num2)
    console.log(sum)
  })
})