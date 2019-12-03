// Фабрика
console.log('Фабрика / factory');
class Bmw {

  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmwFactory {
  create(type) {
    if (type === 'X5')
      return new Bmw(type, 108000, 300);
    if (type === 'X6')
      return new Bmw(type, 111000, 320);
  }
}

// Абстрактная фабрика
console.log('Абстрактная фабрика / abstract factory');
function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

function sportCarFactory() {
  return new Z4();
}

function familyCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return "Z4 is a Sport car!";
  }
}

class I3 {
  info() {
    return "i3 is a Family car!";
  }
}

const produce = bmwProducer('sport');

const myCar = new produce();

console.log(myCar.info());

// Прототип
console.log('Прототип / prototype');
class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

const prototypeCar = new TeslaCar('S', 80000, 'black', false)

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car1.interior = 'white'
car1.autopilot = true

console.log(car1);
console.log(car2);
console.log(car3);

// Строитель
console.log('Строитель / builder');
class Car {
  constructor() {
    this.autoPilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }

  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

const myNewCar = new CarBuilder().addAutoPilot(true).addParktronic(true).addSignaling('V8').build();

console.log(new Car, myNewCar);
