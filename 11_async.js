const first = () => console.log('First')
const second = () => console.log('Second')
const third = () => console.log('Third')

first() // First

setTimeout(second, 0) // Second - синхронный вызов, вызывается последним т.к. обрабатывается сторонним API, добавляется в очередь концепта event callback последним, далее попадает в call stack и после уже event loop его обработает

third() // Third

// в консольке:
// First
// Third
// Second



/**
 Стек вызовов(call stack) - это механизм для интерпретаторов (таких как интерпретатор JavaScript в веб-браузере) для отслеживания текущего местонахождения интерпретатора в скрипте, который вызывает  несколько функций типа functions, — какая из функций выполняется на данный момент, какие функции вызываются изнутри этой (выполняемой) функции, какая будет вызвана следующей и т. д.

 * Когда скрипт вызывает функцию, интерпретатор добавляет ее в стек вызовов и потом начинает ее обработку.
 * Любые функции, вызванные этой функцией, добавляются в  стек вызовов и выполняются, как только происходит их вызов.
 * Когда выполнение основной функции завершено, интрепретатор снимает ее со стека вызовов и возобновляет выполнение кода в списке основного кода с той точки, где остановился до этого.
 * Если стек занимает больше места, чем ему было присвоено, это приводит к ошибке переполнения стека ("stack overflow" error).
**/