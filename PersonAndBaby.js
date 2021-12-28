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

const person1 = new Person('Mary', 50);
person1.eat('fish', 'sushi', 'burger', 'fries', 'pizza', 'salade');
console.log(person1.stomach);
person1.poop();
console.log(person1.stomach);
console.log(person1.toString());
