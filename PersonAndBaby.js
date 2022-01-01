'use strict';

function Person(name, age) {
  this.stomach = [];
  this.name = name;
  this.age = age;
  this.toString = function () {
    return `${this.name},${this.age}`;
  };
  this.eat = function (...food) {
    if (
      food.every(el => typeof el === 'string') &&
      this.stomach.length + food.length <= 10
    ) {
      this.stomach = [...this.stomach, ...food];
    } else {
      throw new Error('stop eat');
    }
  };
  this.poop = () => {
    this.stomach = [];
  };
}
function Baby(name, age, favoriteToy) {
  Person.call(this);
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
  this.play = function () {
    return `PLaying with ${this.favoriteToy}`;
  };
}

const Mary = new Person('Mary', 50);
Mary.eat('fish', 'sushi', 'burger', 'fries', 'pizza', 'salade');
console.log(Mary.stomach);
Mary.poop();
console.log(Mary.stomach);
console.log(Mary.toString());
const Davit = new Baby('Davit', 8, 'chess');
console.log(Davit.toString());
Davit.eat('soupe');
console.log(Davit.stomach);
console.log(Davit.play());
