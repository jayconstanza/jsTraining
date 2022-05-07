/* interface Vehicle {
  name: string;
  alias: number;
  cv: number;
}
class Car implements Vehicle {
  static #list = [
    { name: 'car1', alias: 'carch' },
    { name: 'car2', alias: 'carD' },
    { name: 'car3', alias: 'benzo' },
  ];
  name: string;
  alias: number;
  cv: number;
  constructor(obj: any) {
    this.name = obj.name;
    this.alias = obj.alias;
    this.cv = obj.cv;
    Car.#list.push(obj);
  }
  static getCars() {
    return this.#list;
  }
  setProperty(prop, value) {
    this[prop] = value;
  }
  static getCarsOrderedBy(prop, direction) {
    if (direction === 'desc')
      return this.getCars().sort((a, b) => (a[prop] < b[prop] ? 1 : -1));
    else return this.getCars().sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
  }
}

// console.log(Car.getCars())
console.log(new Car({ name: 'car4', alias: 'sads' }));
// console.log(Car.getCars())
// console.log(Car.getCarsOrderedBy('name', "desc"))

//iterating through cars using 3 different ways
//way 1
Car.getCarsOrderedBy('name', 'desc').forEach((value, key) =>
  console.log(JSON.stringify(value) + ` is assigned to key ${key}`)
);
//way 2
for (let key in Car.getCars()[0]) {
  console.log(`for in test - key: ${key}`);
}
//way 3
console.log('Object.keys() test - ', Object.keys(Car.getCars()[0]));
 */