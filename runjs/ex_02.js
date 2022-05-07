
class Car {
  static #list = [
    { name: 'car1', alias: 'carch' },
    { name: 'car2', alias: 'carD' },
    { name: 'car3', alias: 'benzo' },
  ];

  constructor(obj) {
    Object.assign(this, obj);
    Car.#list.push(obj);
  }
  static getCars() {
    return this.#list;
  }
  setProperty(prop, value) {
    this[prop] = valuie;
  }
  static getCarsOrderedBy(prop, direction) {
    if (direction === 'desc')
      return this.getCars().sort((a, b) => (a[prop] < b[prop] ? 1 : -1));
    else return this.getCars().sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
  }
}

// console.log(Car.getCars())
// console.log(new Car({name: "car4"}));
// console.log(Car.getCars())
// console.log(Car.getCarsOrderedBy('name', "desc"))

//iterating through cars using 3 different ways
//way 1
Car.getCarsOrderedBy('name').forEach((value, key) =>
  console.log(JSON.stringify(value) + ` is assigned to key ${key}`)
);
//way 2
for (key in Car.getCars()[0]) {
  console.log(`for in test - key: ${key}`);
}
//way 3
console.log('Object.keys() test - ', Object.keys(Car.getCars()[0]));
