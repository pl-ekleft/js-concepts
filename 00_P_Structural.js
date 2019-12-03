// Декоратор
console.log('Декоратор / decorator');
class Car {
  constructor() {
    this.price = 10000;
    this.model = 'Car'
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model
  }
}

class Tesla extends Car { // базовый авто
  constructor() {
    super();
    this.price = 25000;
    this.model = 'Tesla';
  }
}

class Autopilot { // декоратор автопилот
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

class Parktronic { // декоратор парктроник
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}

let tesla = new Tesla(); // car1
tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);
console.log(tesla.getPrice(), tesla.getDescription());

tesla = new Tesla(); // car2
tesla = new Autopilot(tesla);
console.log(tesla.getPrice(), tesla.getDescription());

class Audi extends Car { // new car
  constructor(car) {
    super();
    this.price = 20000;
    this.model = 'Audi';
  }
}

let audi = new Audi();
audi = new Autopilot(audi); // old decorator
console.log(audi.getPrice(), audi.getDescription());

// Фасад
console.log('Фасад / facade');
class Сonveyor {
  setBody() {
    console.log('Body set!');
  }

  getEngine() {
    console.log('Dismantle Engine!');
  }

  setEngine() {
    console.log('Engine set!');
  }

  setInterior() {
    console.log('Exterior added!');
  }

  changeInterior() {
    console.log('Update interior!');
  }

  setExterior() {
    console.log('Added interior!');
  }

  setWheels() {
    console.log('Wheels!');
  }

  addElectronics() {
    console.log('Added electronics!');
  }

  paint() {
    console.log('Car painted!');
  }
}

class СonveyorFacade {
  constructor(car) {
    this.car = car;
  }

  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }

  // доп манипуляции с фасадом:
  changeEngine() {
    this.car.getEngine();
    this.car.setEngine();
  }

  changeInterior() {
    this.car.changeInterior();
    this.car.setInterior();
  }
}

const conveyor = new СonveyorFacade(new Сonveyor());

let car = conveyor.assembleCar();
// console.log(car);
car = conveyor.changeEngine();
car = conveyor.changeInterior();
console.log(car);

// Заместитель (пример: защищающий прокси)
console.log('Заместитель / proxy');
class CarAccess {
  open() {
    console.log('Opening car door')
  }

  close() {
    console.log('Closing the car door')
  }
}

class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('Access denied!');
    }
  }

  authenticate(password) {
    return password === 'Ilon';
  }

  close() {
    this.door.close()
  }
}

const door = new SecuritySystem(new CarAccess());
door.open('Jack');
door.open('Ilon');
door.close();

// Адаптер
console.log('Адаптер / adapter');
class Engine2 {
  simpleInterface() {
    console.log('Engine 2.0 - tr-tr-tr')
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log('Engine V8! - wroom wroom!')
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface()
  }
}

const myCar = new Auto();
const oldEngine = new Engine2();
myCar.startEngine(oldEngine);

const myCar2 = new Auto();
let engineAdapter = new EngineV8Adapter(new EngineV8());
myCar2.startEngine(engineAdapter);

/*
const myCar3 = new Auto();
engineAdapter = new EngineV8();
myCar3.startEngine(engineAdapter); // error (прямая замена запрещена)
*/

// Компоновщик
console.log('Компоновщик / composite');

class Equipment {
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }
}

class Engine extends Equipment {
  constructor() {
    super();
    this.setName('Engine');
    this.setPrice(800);
  }
}

class Body extends Equipment {
  constructor() {
    super();
    this.setName('Body');
    this.setPrice(3000);
  }
}

class Tools extends Equipment {
  constructor() {
    super();
    this.setName('Tools');
    this.setPrice(4000);
  }
}

class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments
      .map(equipment => equipment.getPrice())
      .reduce((a, b) => a + b);
  }
}

class Car2 extends Composite {
  constructor() {
    super();
    this.setName('Audi');
  }
}

// Мост
console.log('Мост / bridge');

class Model {
  constructor(color) {
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
}

class BlackColor extends Color {
  constructor() {
    super("dark-black");
  }
}

class SilbrigColor extends Color {
  constructor() {
    super("Silbermetallic");
  }
}

class Lada extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Lada, Color: ${this.color.get()}`;
  }
}

class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
}

const blackBmw = new Bmw(new BlackColor());
console.log(blackBmw.paint());


// Легковес / Приспособленец / Кэш
console.log('Легковес / Приспособленец / Кэш / fltweight');
class Auto3 { // класс легковеса, то что кэшируется
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor(name) {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) return model;
    console.log('model');
    this.models[name] = new Auto3(name);
    return this.models[name];
  }
  getModels() {
    console.table(this.models);
  }
};

const factory = new AutoFactory()
const bmw = factory.create('BMW')
const lada = factory.create('lada')
const ferarri = factory.create('ferarri')
const ferarriWhite = factory.create('ferarri') // double ferarri
console.log(factory.getModels());
