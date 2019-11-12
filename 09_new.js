function Cat(color, name) {
  this.color = color
  this.name = name
}

// const cat = new Cat('black', 'KOT')
// console.log(cat) // инстанс класса Cat { color: 'black', name: 'KOT' }

// function myNew(constructor, ...args) { // альтернатива new в ES5
//   const obj = {}
//   Object.setPrototypeOf(obj, constructor.prototype)
//   return constructor.apply(obj, args) || obj
// }
//
// const cat = myNew(Cat, 'black', 'KOT') // конструктор (первый параметр), далее аргументы
// console.log(cat) // Cat { color: 'black', name: 'KOT' }

// const cat = new Cat()
// console.log(cat) // Cat { color: undefined, name: undefined }

