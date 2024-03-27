// here comes the result of the arthemetic operations
// modules are the resuable codes in js

// NOTE:- symbols used as suffix in the package.json file
// ~ this represents that it will auto download the patch release
// ^ this represents that it will auto download the minor release

// importing using common js
// const arthemetic = require('./arthemetic')// importing the functions of arthemetic.js
// console.log(arthemetic.sum(4, 6))

// importing using es6
//first we have to use the extension mjs instead of js
import { sum } from "./arthemetic.js";
console.log(sum(4, 6))