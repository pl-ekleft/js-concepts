/**
 * Object.getOwnPropertyDescriptors()
 * Этот метод позволяет возвращать все сведения для всех свойств заданного объекта включая данные о геттерах и сеттеров
 * Подробнее: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
 */

// Применение get и set в объектах
const person = {
  name: 'Pavel',
  age: 30,
  set personName(name) {
    this.name = name
  },
  get password() {
    return `${this.name}${this.age}`
  }
};

// console.log(person) // { name: 'Pavel', age: 30, personName: [Setter], password: [Getter] }
// console.log(person.password) // Pavel30 // обращаемся к password не как к методу, а как к обычному свойству

/**
 * Дескрипторы
 */
// Метод Object.getOwnPropertyDescriptors(obj) возвращает все собственные дескрипторы свойств данного объекта.
// obj - Объект, для которого нужно получить все собственные дескрипторы свойств.

// console.log(Object.getOwnPropertyDescriptors(person))
/*
  {
    name: { value: 'Pavel', writable: true, enumerable: true, configurable: true },
    age: { value: 30, writable: true, enumerable: true, configurable: true },
    personName: { get: undefined, set: [Function: set personName], enumerable: true, configurable: true },
    password: { get: [Function: get password], set: undefined, enumerable: true, configurable: true }
  }
*/

/**
 * Пример поиска наличия ключа в объекте (аналогично можно сделать и с values)
 * Object.keys(s).every(key => obj.hasOwnProperty(key) && obj[key] === s[key])
 */
// console.log(person.hasOwnProperty('age')) // true

/**
 * Проблема: Object.assign() не копирует геттеры и сеттеры
 */
console.log('Клонируем объект (поверхностно)')
const admin = Object.assign({}, person) // или const admin = { ...person };
// Поверхностное копирование объекта "person"
console.log(admin) // { name: 'Pavel', age: 30, personName: undefined, password: 'Pavel30' }
// Геттер и сеттер превратились в обычные свойства
// О том же скажет и метод getOwnPropertyDescriptors т.к. опишет свойства "personName" и "password" как обычные значения
// console.log(Object.getOwnPropertyDescriptors(admin))
/*
  {
    name: { value: 'Pavel', writable: true, enumerable: true, configurable: true },
    age: { value: 30, writable: true, enumerable: true, configurable: true },
    personName: { value: undefined, enumerable: true, configurable: true },
    password: { value: 'Pavel30', enumerable: true, configurable: true }
  }
*/

console.log('Клонируем объект с помощью getOwnPropertyDescriptors (полностью)')
const superAdmin = Object.defineProperties({}, Object.getOwnPropertyDescriptors(person)) // или const superAdmin = { ...person }
// Метод Object.defineProperty(obj, prop, descriptor) определяет новое или изменяет существующее свойство непосредственно на объекте, возвращая этот объект.
// obj - Объект, на котором определяется свойство.
// prop - Имя определяемого или изменяемого свойства.
// descriptor - Дескриптор определяемого или изменяемого свойства.

console.log(Object.getOwnPropertyDescriptors(superAdmin));
/*
  {
    name: { value: 'Pavel', writable: true, enumerable: true, configurable: true },
    age: { value: 30, writable: true, enumerable: true, configurable: true },
    personName: { get: undefined, set: [Function: set personName], enumerable: true, configurable: true },
    password: { get: [Function: get password], set: undefined, enumerable: true, configurable: true }
  }
*/
