/**
 * Замыкание - функция которая замыкает в себе функции из вышестоящего scope/рамки (|| родителя)
 * Проще: Замыкание это функция внутри другой функции.
 */
// function sayHelloTo(name) {
//   const message = 'Hello ' + name
//
//   return function() {
//     console.log(message)
//   }
// }
//
// const helloToElena = sayHelloTo('Elena')
// const helloToIgor = sayHelloTo('Igor')
// console.log(helloToElena) // [Function]
// helloToElena() // Hello Elena
// helloToIgor() // Hello Igor

function createFrameworkManager() {
  const fw = ['Angular', 'React']

  return {
    print: function() {
      console.log(fw.join(' '))
    },
    add: function(framework) {
      fw.push(framework)
    }
  }
}

// const manager = createFrameworkManager()
// console.log(manager) // { print: [Function: print], add: [Function: add] }
// manager.print() // Angular React
// manager.add('VueJS') // своего рода мутация
// manager.print() // Angular React VueJS

/**
 * setTimeout
 **/
const fib = [1, 2, 3, 5, 8, 13] // массив фибоначчи
for (var i = 0; i < fib.length; i++) { // `i < fib.length` всегда будет `false` + можно заменить var на let
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`) // fib[6] = undefined
  }, 1500)
}

for (var i = 0; i < fib.length; i++) {
  (function(j) { // замыкание j = i, используем если недоступен let (ES6)
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`) // выведет оочередно fib[0] = 1 ... fib[5] = 13
    }, 1500)
  })(i) // передаем параметром i
}

// ============

// function createCallFunction(n) {
//   return function () {
//     console.log(1000 * n); // замкнутая функция имеет доступ к scope верхней функции
//   }
// }
//
// const calc = createCallFunction(42) // calc === function
//
// console.log(calc());


// function createIncrementor(n) {
//   return function (num) {
//     return n + num
//   }
// }
//
// const addOne = createIncrementor(1) // n замкнули
// const addTen = createIncrementor(10)
//
// console.log(addOne(10)); // передаем num // return 21
// console.log(addOne(20)); // 21
//
// console.log(addTen(10)); // 20


function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

console.log(comUrl('google')); // https://google.com
console.log(ruUrl('yandex')); // https://yandex.ru

// =============

/**
 * Задача: Пишем собственную функцию bind
 */
function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}

function  logPerson() {
  console.log(`Person ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: 'Михаил', age: 22, job: 'Frontend' }
const person2 = { name: 'Елена', age: 18, job: 'SMM' }

bind(person1, logPerson)()
bind(person2, logPerson)()
