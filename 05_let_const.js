/**
 *  Let
 **/
// let a = 'Variable a'
// let b = 'Variable b'
// { //  block scope (ES6+)
//   a = 'New Variable A'
//   let b = 'Local Variable B'
//   console.log('Scope A', a) // Scope A New Variable A
//   console.log('Scope B', b) // Scope B Local Variable B
//   // console.log('Scope C', c) // ReferenceError: c is not defined
//   // let c = 'Something'
// }
// console.log('A:', a) // A: New Variable A
// console.log('B:', b) // B: Variable b

/**
 *  Const
 **/
const PORT = 8080
// POST = 8181 // error (нельзя переназначить константу с примитивными типами)
const array = ['Javascript', 'is', 'Awesome'] // мы можем изменять массив или объект
array.push('!') // включая shift, unshift, reverse и т.п. прототипы, которые модифицируют массив или объект
array[0] = 'JS' // допустимо изменение и по ключам/индексам
console.log(array) // [ 'JS', 'is', 'Awesome', '!' ]

const obj = {}
obj.name = 'Vladilen'
obj.age = 26

console.log(obj) // { name: 'Vladilen', age: 26 }

delete obj.name

console.log(obj) // { age: 26 }

