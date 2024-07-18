// animal.js
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Export the classes if using a module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Animal, Cat, Dog };
} else {
  window.Animal = Animal;
  window.Cat = Cat;
  window.Dog = Dog;
}
