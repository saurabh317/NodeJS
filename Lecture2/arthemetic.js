export function sum (a, b) {
  return a + b
}

export function div (a, b) {
  return a/b
}

// so to import these functions in result.js file we need to export them and there are two ways to doing that
//1. using common JS
// module.exports = {
//   sum: sum,
//   div: div
// }

//2. using eS6
// we can directly use the key word "export" in front of what ever we want to export