import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  // Customizing the species symbol to return the base Car class
  static get [Symbol.species]() {
    return Car;
  }

  // Clone method that returns a base Car instance
  cloneCar() {
    const BaseCar = this.constructor[Symbol.species];
    return new BaseCar(this._brand, this._motor, this._color);
  }
}
