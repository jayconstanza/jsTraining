interface Vehicle {
  name: string;
  alias: string;
  cv: number;
  dateCreated: number;
}
type CarInfo = {
  name: string;
  cv: number;
  alias: string;
};
export class Car implements Vehicle {
  static #list = [
    { name: 'car1', alias: 'carch' },
    { name: 'car2', alias: 'carDd' },
    { name: 'car3', alias: 'benzo' },
  ];
	name: string;
	alias: string;
	cv: number;
  dateCreated: number;
  constructor (obj: CarInfo) {
    this.name = obj.name;
    this.alias =  obj.alias;
    this.cv = obj.cv;
    this.dateCreated = Date.now()
    Car.#list.push(obj);
  }
  static getCars() {
    return this.#list;
  }

}