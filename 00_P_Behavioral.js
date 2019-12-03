/* Группа поведенческие шаблоны */
// Посредник
console.log('Посредник / Mediator');

class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName();
    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomersList(name);
  }

  addToCustomersList(name) {
    this.customers.push(name);
  }

  getCustomerList() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info)
  }
}


// Итератор
console.log('Итератор / Iterator');
class ArrayIterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

class ObjectIterator {
  constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el),
      this.elements = el;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

const collection1 = new ArrayIterator(['Audi', 'BMW', 'Tesla', 'Mersedes']);

while(collection1.hasNext()) {
  console.log(collection1.next());
}

const autos = {
  audi : { model: 'Audi', color: 'black', price: '20000'},
  bmw : { model: 'BMW', color: 'red', price: '30000'},
  tesla : { model: 'Tesla', color: 'gray', price: '50000'}
}

const collection2 = new ObjectIterator(autos);

while(collection2.hasNext()) {
  console.log(collection2.next());
}


// Цепочка обязанностей
console.log('Цепочка обязанностей / Chain of Responsibility');

class Account {
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
    } else if (this.incomer) {
      console.log(`Cannot pay using ${this.name}`);
      this.incomer.pay(orderPrice) // рекурсивно ищем следующую систему оплаты (приемник)
    } else {
      console.log('Unfortunately, not enough money');
    }
  }

  canPay(amount) {
    return this.balance >= amount; // проверка возможности оплаты, если баланс достаточен
  }

  setNext(account) {
    this.incomer = account; // наследование отвественности системы оплаты
  }

  show() {
    console.log(this)
  }
}

class Master extends Account {
  constructor(balance) {
    super();
    this.name = 'Master Card';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super();
    this.name = 'Qiwi';
    this.balance = balance;
  }
}

const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

master.setNext(paypal) // наследование
master.setNext(qiwi)

master.pay(438) // покупка
master.show() // отображение всей цепочки взаимосвязей


// Стратегия
console.log('Стратегия / Strategy');
// почему обычны функции, а не стрелочные?
// Они всплывают и могут быть вызваны на более высоких уровнях (т.е. до своего определения)
function baseStrategy(amount) {
  return amount;
}

function premiumStrategy(amount) {
  return amount * 0.85;
}

function platinumStrategy(amount) {
  return amount * 0.65;
}

class AutoCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() { // метод наследует передаваемую функцию
    return this.discount(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
}

const baseCustomer = new AutoCart(baseStrategy);
const premiumCustomer = new AutoCart(premiumStrategy);
const platinumCustomer = new AutoCart(platinumStrategy);

baseCustomer.setAmount(50000)
console.log(baseCustomer.checkout());

premiumCustomer.setAmount(50000)
console.log(premiumCustomer.checkout());

platinumCustomer.setAmount(50000)
console.log(platinumCustomer.checkout());


// Снимок / Хранитель
console.log('Снимок / Memento');
class Memento {
  constructor(value) {
    this.value = value;
  }
}

const creator = {
  save: val => new Memento(val), // текущее состояние, которое хотим сохранить
  restore: memento => memento.value, // передаем структуру данных, которая хранит прошлые данные
}

class Caretaker {
  constructor() {
    this.values = []; // наш тип данных array
  }

  addMemento(memento) {
    this.values.push(memento); // делаем снимок данных
  }

  getMemento(index) {
    return this.values[index]; // запрашиваем элемент массива
  }
}

const careTaker = new Caretaker();

careTaker.addMemento(creator.save('hello')) // index = 0
careTaker.addMemento(creator.save('hello world')) // index = 1
careTaker.addMemento(creator.save('hello pavel')) // index = 2

console.log(creator.restore(careTaker.getMemento(1))) // запрашиваем определенный индекс из снимка данных


// Шаблонный метод
console.log('Шаблонный метод / Template Method');
class Builder { // корневой / базовый класс (определяет порядок операций)
  build() { // шаблонный метод build
    this.addEngine();
    this.installChassis();
    this.addElectronic();
    this.collectAccessories();
  }
}

class TeslaBuilder extends Builder { // наследуемся от Builder (так потомки имеют доступ к шаблонному методу)
  addEngine() {
    console.log('Add Electronic Engine');
  }

  installChassis() {
    console.log('Install Tesla chassis');
  }

  addElectronic() {
    console.log('Add special electronic');
  }

  collectAccessories() {
    console.log('Collect Accessories');
  }
}

class BmwBuilder extends Builder {
  addEngine() {
    console.log('Add BMW Engine');
  }

  installChassis() {
    console.log('Install BMW chassis');
  }

  addElectronic() {
    console.log('Add electronic');
  }

  collectAccessories() {
    console.log('Collect Accessories');
  }
}

const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BmwBuilder();

teslaBuilder.build() // выведет все свои console.log
bmwBuilder.build() // выведет все свои console.log


// Посетитель
console.log('Посетитель / Visitor');
// Он добавит нужную нам функциональность не изменяя классов
class Auto {
  accept(visitor) { // посетитель, к которому будут передавать контекст данного класса
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return 'It is a Tesla car!';
  }
}

class Bmw extends Auto {
  info() {
    return 'It is a BMW car!';
  }
}

class Audi extends Auto {
  info() {
    return 'It is an Audi car!';
  }
}

function exportVisitor(auto) { // посетитель, на основании контекста задает в объекте метод экспорт
  console.log(auto)
  if (auto instanceof Tesla)
    auto.export = console.log(`Exported data: ${auto.info()}`);
  if (auto instanceof Bmw)
    auto.export = console.log(`Exported data: ${auto.info()}`);
  if (auto instanceof Audi)
    auto.export = console.log(`Exported data: ${auto.info()}`);
}

const tesla = new Tesla();
const bmw = new Bmw();

console.log(tesla.accept(exportVisitor));
console.log(bmw.accept(exportVisitor)); // важно: передаем функцию без её вызова


// Команда (сложный паттерн, который разделяет бизнес логику и функционал)
console.log('Команда / Command');

class Driver { // водитель
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
}

class Engine { // двигатель
  constructor() {
    this.state = false;
  }

  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }
}

class OnStartCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.on();
  }
}

class onSwitchOffCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.off();
  }
}

const engine = new Engine();

const onStartCommand = new OnStartCommand(engine);
const driver = new Driver(onStartCommand);
driver.execute();

console.log(engine)


// Наблюдатель (механизм подписки, который следит за изменениями других объектов)
console.log('Наблюдатель / Observer');

class AutoNews {

  constructor() {
    this.news = '';
    this.actions = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll(); // метод оповещения
  }

  notifyAll() {
    return this.actions.forEach(subs => subs.inform(this)); // передаваемый this нужен для доступка к свойству news
  }

  register(observer) { // подписка наблюдателя
    this.actions.push(observer); // добавляет новый элемент в массив
  }

  unregister(observer) { // отписка наблюдателя
    this.actions = this.actions.filter(el => !(el instanceof observer)); // убирает элемент из массива
  }
}

class Jack {
  inform(message) {
    console.log(`Jack has been informed about: ${message.news}`);
  }
}

class Max {
  inform(message) {
    console.log(`Max has been informed about: ${message.news}`);
  }
}

const autoNews = new AutoNews(); // создаем новостную ленту

autoNews.register(new Jack()) // подписываем
autoNews.register(new Max())

autoNews.setNews('New Tesla price is 40 000') // как результат убеждаемся, что оба подписчика уведомлены


// Состояние (пример: этапы чекаута в магазине)
console.log('Состояние / State');

class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus; // следующий шаг
  }

  next() { // переход на следующий шаг
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus { // оплата
  constructor() {
    super('waitingForPayment', Shipping);
  }
}

class Shipping extends OrderStatus { // нахождение заказа в пути
  constructor() {
    super('shipping', Delivered);
  }
}

class Delivered extends OrderStatus { // доставка заказчику (факт)
  constructor() {
    super('delivered', Delivered);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment(); // состояниешага
  }

  nextState() { // метод который меняет наше состояние
    this.state = this.state.next();
  }

  cancelOrder() { // новый метод отмены заказа
    this.state.name === 'waitingForPayment' ?
      console.log('Order is canceled!') :
      console.log('Order can not be canceled!');
  }
}

const myOrder = new Order();

console.log(myOrder.state.name) // waitingForPayment

myOrder.nextState();
console.log(myOrder.state.name) // shipping

myOrder.nextState();
console.log(myOrder.state.name) // delivered

myOrder.cancelOrder(); // Order can not be canceled!
