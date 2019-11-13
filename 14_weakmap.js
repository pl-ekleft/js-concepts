// WeakMap помогает избежать утечек данных в js
let obj = {name: 'weakmap'}

// obj = null
// console.log(obj); // null (js удаляет неиспользуемые данные из памяти)

// const arr = [obj] // объект остался в памяти
//
// obj = null
//
// console.log(obj, arr);

/**
 * Имеет методы get, set, delete, has
 * @type {WeakMap<*[], any>}
 */
const map = new WeakMap([ // в структуре WeakMap ключами могут являться только объекты
  [obj, 'obj data']
])

obj = null // сборщик мусора js удалил данный обьект и ссылки на объект больше нет

console.log(map.has(obj)); // false

// ===========
const cache = new WeakMap()

function cacheUser(user) {
   if (!cache.has(user)) {
     cache.set(user, Date.now())
   }
   return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

lena = null // удаление ключа в WeakMap (сборщиком мусора)

console.log(cache.has(lena)); // false (удалена из памяти)
console.log(cache.has(alex)); // true
