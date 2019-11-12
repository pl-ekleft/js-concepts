const person = {
  surname: 'Старк',
  knows: function (what, name) {
    console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
  }
}

// const john = { surname: 'Сноу' }
//
// person.knows('все', 'Бран')
// person.knows.call(john, 'ничего не', 'Джон') // передача нового контекста john
// person.knows.apply(john, ['ничего не', 'Джон']) // отличие от call,  2 параметра, apply - вызывает функцию
// person.knows.call(john, ...['ничего не', 'Джон'])
// const bound = person.knows.bind(john, 'ничего не', 'Джон') // bind имеет неограниченное кол-во аргументов, bind - возвращает новую функцию
// bound()

// ========

// function Person(name, age) {
//   this.name = name
//   this.age = age
//
//   console.log(this)
// }
//
// const elena = new Person('Elena', 20) // Person { name: 'Elena', age: 20 }

// ======== Явный bind
// function logThis() {
//   console.log(this)
// }
//
// const obj = {num: 42}
// logThis.apply(obj) // { num: 42 }
// logThis.call(obj) // { num: 42 }
// logThis.bind(obj)() // { num: 42 } - bind вернет функцию и мы её сразу же вызываем bind(obj)()

// // ===== Неявный bind
// const animal = {
//   legs: 4,
//   logThis: function() {
//     console.log(this) // привязывается контекст родителя
//   }
// }
//
//
// animal.logThis() // { legs: 4, logThis: [Function: logThis] }

// Стреловчные функции
function Cat(color) {
  this.color = color
  console.log('This', this)
  ;( () => console.log('Arrow this', this) )() // стрелочная функция не создает новый контекст
}

new Cat('red')
// This Cat { color: 'red' }
// Arrow this Cat { color: 'red' }
