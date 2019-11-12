/**
 * Замыкание - функция которая замыкает в себе функции из вышестоящего scope/рамки (|| родителя)
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
