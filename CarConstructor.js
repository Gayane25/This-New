'use strict';

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
  this.distanceCanGo = 0;
}

Car.prototype.fill = function (gallon) {
  this.tank += gallon;
  this.distanceCanGo = this.milesPerGallon * this.tank;
};

Car.prototype.drive = function (distance) {
  if (this.distanceCanGo < distance) {
    this.odometer += this.distanceCanGo;
    this.distanceCanGo = 0;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles`;
  } else {
    this.odometer += distance;
    this.tank = (this.distanceCanGo - distance) / this.milesPerGallon;
    this.distanceCanGo -= distance;
    return `I can go  ${this.distanceCanGo} miles`;
  }
};

let Jeep = new Car('Wrangler', 20);
Jeep.fill(50);
console.log(Jeep.drive(50));
