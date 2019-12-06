function hello() {
  console.log('Hello', this)
}

const person = {
  name: 'Pavel',
  age: 30,
  sayHello: hello,
  // sayHelloWindow: hello.bind(document),
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`); // this === person
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`); // this не указываем т.к. передаем этот параметр в функцию
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  }
}

const lena = {
  name: 'Elena',
  age: 28
}

// person.logInfo.bind(lena)() // метод bind возвращает новую функцию, которая привязала к себе новый контекст и для вызова необходимы скобки ()
const newFun = person.logInfo.bind(lena) // первый параметр в bind это контекст, который привязан к новой функции
// person.logInfo.bind(lena, 'frontend', '800 22 33')() // остальные параметры/аргументы передаются в функцию (через запятую)
newFun('frontend', '800 22 33') // bind можно вызвать когда удобно

person.logInfo.call(lena, 'frontend', '800 22 33') // в отличии от bind метод call вызывает функцию сразу
person.logInfo.apply(lena, ['frontend', '800 22 33']) // apply принимает только 2 параметра, второй параметр это массив из аргументов и метод apply вызывает функцию сразу тоже

// ================

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) { // проблема: функцию нужно импортировать и после передавать туда параметры (arr, n)
//   return arr.map((i) => {
//     return i * n
//   })
// }
// console.log(multBy(array, 5));

// this всегда ссылкается на тот элемент, который слева от вызова (пример Array.prototype.multBy, this ссылается на prototype)
Array.prototype.multBy = function(n) { // родительский класс Array и обращаемся к prototype (n === this)
  return this.map((i) => { // при стрелочной функции this === n, а при function контекст изменится (станет глобальным объектом window || global если в nodejs)
    return i * n
  })
}

console.log(array.multBy(20));
