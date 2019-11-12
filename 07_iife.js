// Immediately Invoked Function Expression
// Самовызывающаяся функция
let result = []
// for (var i = 0; i < 5; i++) {
//   result.push( function() {
//     console.log(i)
//   } )
// }
//
// result[2]() // 5
// result[4]() // 5

for (var i = 0; i < 5; i++) {
  (function() {
    var j = i // копируем приметивное значение i в своем scope
    result.push( function() { console.log(j) } )
  })()
}

result[2]() // 2
result[4]() // 4
