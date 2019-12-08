/**
 * Любая переменная объявленная внутри модуля недоступна за его пределами если она явно не экспортирована из модуля
 * Если модуль экспортирует одно значение, то можно использовать экспорт по умолчанию
 */

// export default function () { ... }
// export default class () { ... }
// export default 5 * 7;

/**
 * Можно экспортировать несколько значений
 */

// export const pi = Math.PI;
// export function sum(x, y) {
//   return x + y;
// }
// export function multiply(x, y) {
//   return x * y;
// }

/**
 * или перечислить всё, что хочите экспортировать в конце модуля
 */

// export const pi = Math.PI;
// export function sum(x, y) {
//   return x + y;
// }
// export { pi, sum };


/**
 * Также можно импортировать сущности из модуля разными способами
 * 1. Значение по умолчанию
 */

// import localName from 'utils';

/**
 * 2. Несколько значений
 */

// import { sum, multiply } from 'utils'

/**
 * 3. Весь модуль целиком
 */

// import * as utils from 'utils'

/**
 * 4. Выполнение кода инициализации модуля
 */

// import 'utils'

/**
 * export и import должны находиться на верхнем уровне файла
 * их нельзя использовать в функции или в блоке
 */

/**
 * Для использования модуля в браузере, требуется добавить type="module" к тегу script
 * Такие скрипты не блокируют парсинг html, выполняются отложенно и имеют свою область видимости
 * Код модуля всегда выполняется в строгом режиме
 */
// <script type="module">
//   import $ from 'lib/jquery';
//   var x = 123;
//
//   // Модуль имеет свою область видимости
//   console.log('$' in window); // false
//   console.log('x' in window); // false
//
//   // this ссылается на глобальный объект
//   console.log(this === window); // true
// </script>

/**
 * можно подключать модуль из внешнего файла
 */

// <script type="module" import="main.js" />
