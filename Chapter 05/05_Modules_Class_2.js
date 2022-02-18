//Modules
import { log } from "./05_Modules_Class.js";
log("Load Modules.");

//Class
class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  getModelName() {
    return this.modelName;
  }
  getModelYear() {
    return this.modelYear;
  }
  getType() {
    return this.type;
  }
  getPrice() {
    return this.price;
  }
  setModelName(modelName) {
    this.modelName = modelName;
  }
  setModelYear(modelYear) {
    this.modelYear = modelYear;
  }
  setType(type) {
    this.type = type;
  }
  setPrice(price) {
    this.price = price;
  }
}

let sonata = new Car("소나타", "2019", "c", 3000);
let genesis = new Car("제네시스", "2021", "g", 7000);
sonata.setPrice(3300);
console.log(sonata.getPrice());

class ElectronicCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    super(modelName, modelYear, "e", price);
    this.chargeTime = chargeTime;
  }

  getChargeTime() {
    return this.chargeTime;
  }
  setChargeTime(time) {
    this.chargeTime = time;
  }
}

let ionic = new ElectronicCar("아이오닉", "2022", 3500, 5);

console.log(ionic.getChargeTime());
