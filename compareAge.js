'use strict';

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.compareAge = obj => {
    if (this.age < obj.age) {
      return `${obj.name} olden than me`;
    } else if (this.age > obj.age) {
      return `${obj.name} younger than me`;
    } else {
      return `${obj.name} as the same age as me`;
    }
  };
}

const p1 = new Person('Samuel', 24);
const p2 = new Person('Joel', 36);
const p3 = new Person('Lily', 24);
console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));
