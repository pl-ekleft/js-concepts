// let a = 42
// let b = a
// b++
// console.log('a', a)
// console.log('b', b)

let a = [1, 2, 3]
let b = a
b.push(4) // мутирует (изменения доступны и в `a` т.к. это ссылка||reference на объект)

console.log('a', a) // a [ 1, 2, 3, 4 ]
console.log('b', b) // b [ 1, 2, 3, 4 ]

// let a = [1, 2, 3]
// let b = a.concat()
// b.push(4) // не мутирует т.к. concat возвращает новый массив
//
// console.log('a', a) // a [ 1, 2, 3 ]
// console.log('b', b) // b [ 1, 2, 3, 4 ]

let c = [1, 2, 3, 4]

console.log('a', a)
console.log('b', b)

console.log(a === b) // true (см. выше)
console.log(a === c) // false (разные обьекты при приведении)
