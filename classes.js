// 1. To extend a class: class Child extends Parent:
    // That means Child.prototype.__proto__ will be Parent.prototype, so methods are inherited.
// 2. When overriding a constructor:
    // We must call parent constructor as super() in Child constructor before using this.
// 3. When overriding another method:
    // We can use super.method() in a Child method to call Parent method.

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
}
  
let rabbit = new Rabbit("White Rabbit");
  
rabbit.run(5);
rabbit.hide();