'use strict';

function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  this.add = () => this.num1 + this.num2;
  this.subtract = () => this.num1 - this.num2;
  this.multiply = () => this.num1 * this.num2;
  this.divide = () => this.num1 / this.num2;
}
const myCalculator = new Calculator(10, 5);
console.log(myCalculator.add());
console.log(myCalculator.subtract());
console.log(myCalculator.multiply());
console.log(myCalculator.divide());
