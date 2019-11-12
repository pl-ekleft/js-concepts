// console.log(sum(1, 41)) // 42
//
// function sum(a, b) { // все функции перемещаются в начало файла
//   return a + b
// }

// console.log(i) // undefined (переменная всплыта т.к. var и её значение по умолчанию undefined)
// var i
// console.log(i) // undefined
// i = 42
// console.log(i) // 42

// console.log(num) // ReferenceError: num is not defined (const && let не всплывают)
// let num = 42
// console.log(num) // 42


// Function Expression & Function Declaration (способы объявления функции)

/**
 *   Function Declaration
 **/
// console.log(square(25)) // 625
// function square(num) {
//   return num ** 2
// }

/**
 *   Function Expression
 **/
// console.log(square(25)) // TypeError: square is not a function (т.к. это переменная, то она всплыла с undefined)
var square = function(num) {
  return num ** 2
}

console.log(square(25)) // 625
