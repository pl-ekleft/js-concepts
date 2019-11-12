// __proto__ - можно получить доступ до родительского прототипа
// Object.getPrototypeOf() - аналог __proto__ в ES5

function Cat(name, color) {
  this.name = name
  this.color = color
}

Cat.prototype.voice = function() {
  console.log(`Cat ${this.name} says myay`)
}

// const cat = new Cat('Kot', 'white')
//
// console.log(Cat.prototype) // Cat { voice: [Function] }
// console.log(cat) // Cat { name: 'Kot', color: 'white' }
// console.log(cat.__proto__ === Cat.prototype) // true
// console.log(cat.constructor) // [Function: Cat]
// cat.voice() // Cat Kot says myay

// ============
function Person() {}
Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Pavel'

// console.log('skin' in person) // true
// console.log(person.legs) // 2
// console.log(person.name) // Pavel
//
// console.log(person.hasOwnProperty('name')) // true - hasOwnProperty проверяет наличия свойства у самого объекта
// console.log(person.hasOwnProperty('skin')) // false - свойство `skin` находится уже у прототипа

// Object.create()
var proto = {year: 2019}
const myYear = Object.create(proto)

console.log(myYear.__proto__ === proto) // true
console.log(myYear.year) // 2019

proto.year = 2200 // меняет свойство

// console.log(myYear.year) // 2200
// proto = {year: 1999} // ничего не поменяется
console.log(myYear.year) // 2019  или 2200 если меняется значение свойства

// console.log(myYear.hasOwnProperty('year')) // false
// console.log(myYear.__proto__ === proto) // true

