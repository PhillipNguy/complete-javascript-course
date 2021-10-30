'use strict';

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

let jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
let marriedJessica = jessica;

let jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica);
console.log(jessicaCopy);

jessicaCopy.family.push('Mary', 'John');
console.log(jessicaCopy);
