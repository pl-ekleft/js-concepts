const set = new Set([1,2,3,3,3,4,5,5,6]) // конструктор set

// console.log(set); // Set { 1, 2, 3, 4, 5, 6 } (вывод всегда уникальных значений)

set.add(10).add(10).add(20).add(30).add(30) // добавляем с дублями

// console.log(set); // Set { 1, 2, 3, 4, 5, 6, 10, 20, 30 }
// console.log(set.has(30)); // true
// console.log(set.size); // 9
// console.log(set.delete(2)); // true (удаляем 2)
// console.log(set.size); // 8
// console.log(set.clear()); // очистка
// console.log(set.size); // 0
//
// console.log(set.values()); // [Set Iterator] { 1, 2, 3, 4, 5, 6, 10, 20, 30 }
// console.log(set.keys());   // [Set Iterator] { 1, 2, 3, 4, 5, 6, 10, 20, 30 }
// console.log(set.entries());// [Set Iterator] { 1, 2, 3, 4, 5, 6, 10, 20, 30 }
// Set имеет все методы из Map и является обратно-совместимым

// for (let key of set) {
//   console.log(key); // получаю ключи (они же значения в данном примере)
// }

function uniqValues(array) {
  // return [new Set(array)] // [ Set { 1, 2, 3, 4, 5, 6, 9, 7, 8 } ]
  return [...new Set(array)] // [ 1, 2, 3, 4, 5, 6, 9, 7, 8 ] (развернутый при помощи Spread оператора)
}

console.log(uniqValues([1,1,2,2,2,2,3,3,3,4,5,6,9,7,8])); // [ 1, 2, 3, 4, 5, 6, 9, 7, 8 ]
