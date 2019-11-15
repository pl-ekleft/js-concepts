console.log('Request data...');

// проблема
// setTimeout(() => {
//   console.log('Preparing data...');
//
//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }
//
//
//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data recevied', backendData);
//   }, 2000)
// }, 2000)

/**
 * Promise
 * @param ms
 * @returns {Promise<any>}
 */
// const p = new Promise(function (resolve, reject) { // resolve, reject - эти параметры являются функциями
//   // resolve - вызывается когда закончена асинхронная операция - успешно, а reject - безуспешно
//   setTimeout(() => {
//     console.log('Preparing data...');
//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working'
//     }
//     resolve(backendData) // возврат данных (наже как data)
//   }, 2000)
// })
//
// p.then((data) => { // then - когда
//   // console.log('Promise resolved', data);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       // reject(data) // возврат ошибки (тест)
//       resolve(data)
//     }, 2000)
//   })
// })
//   .then(clientData => { // Chain/чейн - "цепь" вызовов then
//   console.log('Data recevied', clientData);
//   clientData.fromPromise = true
//   return clientData
// }).then(data => {
//   console.log('Modified', data);
// })
// .catch(err => console.log('Error: ', err)) // отработает при reject / error
// .finally(() => console.log('Finally')) // отрабатывает всегда при финальном выполнении промиса

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

sleep(2000).then(() => console.log('After 2 sec'))
sleep(3000).then(() => console.log('After 2 sec'))

Promise.all([sleep(2000), sleep(5000)]) // метод all - отработает после того как выполнятся все перечисленные промисы
  .then(() => {
    console.log('All promises');
  })

Promise.race([sleep(2000), sleep(5000)]) // метод race - отработает после того как выполнятся после выполнения самого "быстрого" промиса (первы, который выполнился)
  .then(() => {
    console.log('Race promises');
  })



