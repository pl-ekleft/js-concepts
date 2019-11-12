// null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'Javascript') // "", '', ``
// console.log(typeof undefined)
// console.log(typeof Math)
// console.log(typeof Symbol('JS'))
// console.log(typeof null)
// console.log(typeof function() {})
// console.log(typeof NaN)

// Приведение типов
// let language = 'JavaScript'
// if (language) {
//   console.log('The best language is: ', language)
// }


// '', 0, null, undefined, NaN, false
// console.log(Boolean(''))
// console.log(Boolean('Hello'))
// console.log(Boolean(' '))
// console.log(Boolean('0'))
// console.log(Boolean(0))
// console.log(Boolean(null))
// console.log(Boolean([]))
// console.log(Boolean({}))
// console.log(Boolean(function(){}))

// Строки и числа (конкатенация)
// console.log(1 + '2') // string 12
// console.log(typeof ('' + 1 + 0), '' + 1 + 0) // string 10
// console.log('' - 1 + 0) // number
// console.log('3' * '8') // number
// console.log(4 + 10 + 'px') // string
// console.log('px' + 5 + 10) // string
// console.log('42' - 40) // number 2
// console.log('42px' - 2) // NaN (при приведении строки '42px' к числу, получаем NaN)
// console.log(null + 2)  // number 2
// console.log(undefined + 42) // NaN (при приведении undefined к числу, получаем NaN)

// Операторы == и ===
// == равенство (сравнивает значения с приведением типов)
// === соответствие (сравнивает значения без приведения типов)
// console.log(2 == '2') // true
// console.log(2 === '2') // false
// console.log(undefined == null) // true
// console.log(undefined === null) // false (разные типы данных)
// console.log('0' == false) //  true (интерпретитор приводит строку к числу при == / равенстве)
// console.log('0' == 0) // true
// console.log(0 == 0) // true
// console.log(0 === 0) // true

// =====
// console.log(false == '') // true
// console.log(false == []) // true
// console.log(false == {}) // false (разные типы)
// console.log('' == 0) // true
// console.log('' == []) // true
// console.log('' == {}) // false (разные типы)
// console.log(0 == []) // true
// console.log(0 == {}) // false (разные типы)
// console.log(0 == null) // false (разные типы)

// undefined
// 1. не обьявлена
// 2. было всплытие необьявленной ранее переменной (значение по умолчанию)
// 3. функция без return

// null
// 1. отсутствует значение

// NaN - not at number
console.log(isNaN(null), isNaN(NaN), isNaN('text'))

// prototype.includes()
let pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'), pets.includes('bird'))
