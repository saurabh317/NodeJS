const totalPrice = (arrayOfObjects) => {
  let total = 0
  arrayOfObjects.forEach((e) => {
    total = total + (e.quantity * e.price)
  })
  return total
}

let arrayOfObjects = [
  { name: "Item1", quantity: 5, price: 10 },
  { name: "Item2", quantity: 3, price: 15 },
  { name: "Item3", quantity: 7, price: 20 }
];

console.log(totalPrice(arrayOfObjects))

