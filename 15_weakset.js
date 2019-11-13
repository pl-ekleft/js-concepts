const users = [
  {name:'Елена'},
  {name:'Семен'},
  {name:'Катя'},
  {name:'Саша'}
]

const visits = new WeakSet() // Weak - "слабоват" т.е. работает с ограничением

visits.add(users[0]).add(users[1])

users.splice(1, 1) // удаляем  с помощью splice (первый индекс, 1 кол-во элементов)

console.log(visits.has(users[0])); // true
console.log(visits.has(users[1])); // false (удален, но порядок индексов сохранён)
