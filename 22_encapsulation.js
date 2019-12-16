/**
 * Инкапсуляция
 * Важно: Это не синтаксис, а соглашение об использовании "_" в названии приватного метода или свойства
 */

/**
 * Защищённое свойство "waterAmount"
 */
class CoffeeMachine {
  waterAmount = 0; // количество воды внутри
  constructor(power) {
    this.power = power;
    console.log( `Создана кофеварка, мощность: ${power}` );
  }
}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);
// добавляем воды
coffeeMachine.waterAmount = 200;

/**
 * Свойство только для чтения "power"
 */
class CoffeeMachine {
  // ...
  constructor(power) {
    this._power = power;
  }
  get power() {
    return this._power;
  }
}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);
console.log(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W
coffeeMachine.power = 25; // Error (no setter)


/**
 * Приватное свойство "#waterLimit"
 * Эта возможность была добавлена в язык недавно. В движках JavaScript пока не поддерживается или поддерживается частично, нужен полифил.
 * Примечание: В node v10.16.0 - не работает
 *
 * Например, в классе ниже есть приватное свойство #waterLimit и приватный метод #checkWater для проверки количества воды:
 */
/*
class CoffeeMachine {
  #waterLimit = 200; // Приватные свойства и методы должны начинаться с #. Они доступны только внутри класса.
  #checkWater(value) {
    if (value < 0) throw new Error("Отрицательный уровень воды");
    if (value > this.#waterLimit) throw new Error("Слишком много воды");
  }
}

let coffeeMachine = new CoffeeMachine();

// снаружи  нет доступа к приватным методам класса
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error
*/

/*
class CoffeeMachine {
  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }
  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательный уровень воды");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
console.log(machine.#waterAmount); // Error


class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    alert( this.#waterAmount ); // Error: can only access from CoffeeMachine
  }
}
*/
