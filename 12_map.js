const obj = {
  name: 'Имя',
  age: 11,
  city: 'Москва'
}

const entries = [
  ['name', 'имя'],
  ['age', 11],
  ['city', 'Москва']
]


// console.log(Object.entries(obj)) // [ [ 'name', 'Имя' ], [ 'age', 11 ], [ 'city', 'Москва' ] ]
// console.log(Object.fromEntries(entries)) // { name: 'Имя', age: 11, city: 'Москва' }

const map = new Map(entries) // конструктор класса map

// console.log(map); // Map { 'name' => 'имя', 'age' => 11, 'city' => 'Москва' }
// console.log(map.get('name')); // на "карте" вызываем метод get, который принимает строковый параметр (ключ).

// map
//   .set('country', 'Россия')
//   .set(obj, 'Value of object') // ключами могут являться объекты
//   .set(NaN, 'NaN')
// // console.log(map);
//
// map.delete(obj) // удаление ключа
// console.log(map.has(obj)); // false (проверка на наличие ключа)
// console.log(map.size); // 5 (размер карты)
//
// map.clear() // очистка
// console.log(map.size); // 0

/**
 * for in циклах перечислимых имен свойств объекта (по индексам)
 *
 * for of (ES6) использует объектно-ориентированный итератор и перебирает значения (по ключам)
 */
// for (let entry of map.entries()) { // .entries() не обязательно вызывать, он по умолчанию вызывается в map (см. ниже)
//   console.log(entry);
// }

// for (let [key, value] of map) {
//   console.log(key, value);
// }

// for (let val of map.values()) { // итерация по значениям
//   console.log(val);
// }
//
// for (let val of map.keys()) { // итерация по ключая
//   console.log(val);
// }

// map.forEach((val, key, m) => { // m = map
//   console.log(val, key);
// })

/**
 *
 */
// const array = [...map] // развернуть карту в массив
// // const array  = Array.from(map) // альтернатива
//
// console.log(array);

/**
 *
 */

const users = [
  {name:'Елена'},
  {name:'Семен'},
  {name:'Катя'},
  {name:'Саша'}
]

const visits = new Map()

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
  return visits.get(user)
}

console.log(lastVisit(users[1]));
