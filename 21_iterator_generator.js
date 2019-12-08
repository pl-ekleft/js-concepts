/**
 * Итерируемые или, иными словами, «перебираемые» объекты – это те, содержимое которых можно перебрать в цикле.
 * Symbol.iterator при next() возвращает {value: value, done: Boolean}
 */
const arr = [2, 18, 42];

// console.log(arr); // [ 2, 18, 42 ]

const iter = arr[Symbol.iterator]();

console.log(iter);

// т.к. массив итерируемый, то можно его перебрать с помощью for ... of
for (let item of arr) {
  console.log(item);
}

// строки тоже являются итерируемыми

for (let t of 'my text') {
  console.log(t);
}

// синтаксис деструктуризации и спред оператор тоже использует итератор

const [a, b, ...rest] = 'my new text' // получаем первые два символа строки и spread оператор для получения остальных в виде массива
console.log(a, b, rest); // m y [ ' ', 'n', 'e', 'w', ' ', 't', 'e', 'x', 't' ]

/**
 * Пишем свой итератор в объекте
 */
const movies = {
  action: [
    'Тёмный рыцарь',
    'Мстители: Война бесконечности',
    'Начало',
    'Матрица'
  ],
  comedy: [
    'Жизнь прекрасна',
    'Огни большого города',
    'Тайна Коко'
  ],
  drama: [
    'Побег из Шоушенка',
    'Крёстный отец',
    'Криминальное чтиво',
    'Список Шиндлера'
  ],
  // Вариант с деструторизацией:
  // getAllMovies() {
  //   return [
  //     ...this.action,
  //     ...this.comedy,
  //     ...this.drama
  //   ]
  // },
  // Вариант с итератором:
  [Symbol.iterator]() {
    const genres = Object.values(this);

    let index = 0;
    let genreIndex = 0;

    return {
      next() {
        if (index === genres[genreIndex].length) { // если дошли до последнего элемента
          index = 0; // обнуляем индекс фильма
          genreIndex++; // увеличиваем индекс жанра
        }

        if (genreIndex === genres.length) { // если последний жанр
          return { value: undefined, done: true };
        }

        return { // иначе это не последний жанр
          value: genres[genreIndex][index++], // возвращаем элемент и увеличиваем индекс на единицу
          done: false
        };
      }
    };
  }
};

// const moviesList = movies.getAllMovies()
// console.log(moviesList); // получи один массив со всеми данными

for (let movie of movies) {
  console.log(movie);
}

/**
 * Генераторы – отличаются от обычных функций тем, что могут приостанавливать своё выполнение,
 * возвращать промежуточный результат и далее возобновлять его позже, в произвольный момент времени.
 */

function* generateSequence() { // является итерируемым объектом
  yield 1;
  yield 2;
  yield 3;
  // return 3; // проигнорируется при for of
}

// generator function создаёт generator
let generator = generateSequence();

// let one = generator.next(); // Если после next вызвать for of, то он начнется с того места на котором остановился (возобновление перебора)
// Повторный вызов generator.next() возобновит выполнение и вернёт результат следующего yield
// console.log(one); // { value: 1, done: false }

for(let value of generator) {
  console.log(value); // поочерёдно 1 2 3
}

/**
 * Композиция генераторов
 * Это когда один генератор может включать в себя другие.
 */
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Используем оператор … для преобразования итерируемого объекта в массив
let sequence = [...generateSequence(2,5)];

// console.log(sequence); // [ 2, 3, 4, 5 ]

// Пример композиции генераторов
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {
  // yield* применима только к другому генератору и делегирует ему выполнение
  // yield* интерпретатор переходит внутрь генератора-аргумента,
  // к примеру, generateSequence(48, 57), выполняет его, и все yield, которые он делает, выходят из внешнего генератора.
  // 0..9
  yield* generateSequence(48, 57); // аналог for (let i = 48; i <= 57; i++) yield i; (но переменные вложенного генератора не попадают во внешний генератор)
  // A..Z
  yield* generateSequence(65, 90); // аналог for (let i = 65; i <= 90; i++) yield i;
  // a..z
  yield* generateSequence(97, 122); // аналог for (let i = 97; i <= 122; i++) yield i;
}

let str = '';

for(let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

// console.log(str); // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

/**
 * Передача значений в генератор для yield
 * Примечание: yield - промис ( подробнее: https://learn.javascript.ru/generator#generator-throw )
 */
function* gen() { // Передать вопрос во внешний код и подождать ответа
  let result = yield "2 + 2?"; // yield примет передаваемый параметр на текущий шаг
  console.log(result); // покажет значение yield (первый шаг - вопрос, второй шаг - ответ)
}

let generator = gen();
// Первый вызов generator.next() – всегда без аргумента, он начинает выполнение и возвращает результат первого yield («2+2?»). На этой точке генератор приостанавливает выполнение.
let question = generator.next().value; // Результат yield переходит во внешний код (в question).
// Внешний код может выполнять любые асинхронные задачи, генератор стоит «на паузе».
// Когда асинхронные задачи готовы, внешний код вызывает generator.next(4) с аргументом.
// Выполнение генератора возобновляется, а 4 выходит из присваивания как результат let result = yield ...
setTimeout(() => {
  generator.next(4) // 4
}, 2000);
