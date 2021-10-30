/*
'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriunLicense - True;

*/

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirment;
    } else {
        return -1;
    }
}

console.log()
*/

/*
const calcAverage = (a, b, c) => { return (a + b + c) / 3 }
let dolphinsAvg = calcAverage(85, 54, 41)
let koalasAvg = calcAverage(23, 34, 27)
fun  ction checkWinner() {
    if ((dolphinsAvg) >= (koalasAvg * 2)) {
        console.log(`Dolphins win! Dolphins: ${dolphinsAvg} Koalas: ${koalasAvg}`)
    }
    else if ((koalasAvg) >= (dolphinsAvg * 2)) {
        console.log(`Koalas win! Koalas: ${koalasAvg} Dolphins: ${dolphinsAvg}`)
    } else { console.log(`It is a tie! Dolphins: ${dolphinsAvg} Koalas: ${koalasAvg}`) }
}

checkWinner()
*/

/*

function calcTips(bill) {
    if (bill > 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const bills = [125, 555, 44];

let tips = [];
let total = [];
for (let x = 0; x < bills.length; x++) {
    tips.push(calcTips(bills[x]))
    total.push(tips[x] + bills[x])
}


console.log(total)
console.log(tips)

*/

/*
Declare a function 'grab'.

'grab' takes two inputs: an array of arrays and an index

'grab' returns an array of the values stored at that index in each nested array.

() --> parentheses
{} --> curly braces/brackets
[] --> square braces/brackets
*/

// Your code here
/*

function grab(array, index) {
    let array1 = []
    for (let x = 0; x < array.length; x++) {
        array1.push(array[x][index])
    }
    return array1;
}
// Tests
// You should not need to change the tests

const myGrid = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
];

let actual = grab(myGrid, 1);
let expected = ["b", "e", "h"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay!");
} else {
    console.log("Try again!");
}

const anotherGrid = [
    ["duck", "goose"],
    ["cat", "dog"],
    ["horse", "donkey"],
    ["giraffe", "zebra"]
];

actual = grab(anotherGrid, 0);
expected = ["duck", "cat", "horse", "giraffe"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay!");
} else {
    console.log("Try again!");
}

const oneMoreGrid = [
    ["1", "2", "3", "4", "5"],
    ["6", "7", "8", "9", "10"],
];

actual = grab(oneMoreGrid, 3);
expected = ["4", "9"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay!");
} else {
    console.log("Try again!");
}
*/

/*
Declare a function 'add'.

'add' takes one number input: 'x'.

'add' returns a function that takes one number input 'y'.

This returned function returns the sum of 'x' and 'y' when run.

() --> parentheses
{} --> curly braces/brackets
[] --> square braces/brackets
*/

/*
// Your code here

function add(x) {
    return (y) => { return x + y }
}

// Tests
// You should not need to change the tests

const addTwo = add(2);

let actual = addTwo(3);
let expected = 5;

if (actual === expected) {
    console.log("Yay!");
} else {
    console.log("Try again!");
}

actual = addTwo(70);
expected = 72;

if (actual === expected) {
    console.log("Yay!");
} else {
    console.log("Try again!");
}

const addOneHundred = add(100);

actual = addOneHundred(3);
expected = 103;

if (actual === expected) {
    console.log("Yay!");
} else {
    console.log("Try again!");
}

*/

/* Declare a function 'addAndMultiply'.

addAndMultiply should take in a value 'x'.

It should return an object that has two methods:

These methods are called `add` and `multiply`. Both take in a value 'y'.
    -'add' should return the sum of x and y.
    -'multiply' should return the product of x and y. 

() --> parentheses
{} --> curly braces/brackets
[] --> square braces/brackets
*/

/*
function addAndMultiply(x) {
    return {
        add: function add(y) {
            return x + y
        },
        multiply: function multiply(y) {
            return x * y
        }
    }
}

// Tests
let actual = addAndMultiply(4);

let foo = actual.add(3);
let bar = actual.multiply(2);

let expectedFoo = 7;
let expectedBar = 8;

if (foo === expectedFoo && bar === expectedBar) {
    console.log("Success!")
} else {
    console.log("Try again.")
}

actual = addAndMultiply(10);

foo = actual.add(2);
bar = actual.multiply(2);

expectedFoo = 12;
expectedBar = 20;

if (foo === expectedFoo && bar === expectedBar) {
    console.log("Success!")
} else {
    console.log("Try again.")
}
*/

/*
Recursive Function for ADD EVEN

function addUntil(number) {
    if (number === 0) {
        return 0;
    } else if (number % 2 === 0) {
        return number + addUntil(number - 1)
    } else {
        return addUntil(number - 1)
    }
}

console.log(addUntil(20))
*/

/*
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach

// companies.forEach(function(company) {
//   console.log(company.name);
// });

// filter

// Get 21 and older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

const canDrink = ages.filter(age => age >= 21);

// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

const retailCompanies = companies.filter(company => company.category === 'Retail');

// Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// map

// Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);



// sort

// Sort companies by start year

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);


// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Combine Methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

function noReturn() {
    console.log('Print!');
}
let whatsMyReturn = noReturn();
console.log(whatsMyReturn);
*/

/*
Declare a function 'find'.

'find' takes two inputs:
  1. a collection (an object or an array) and
  2. a test function ('test') that returns either true or false.

'find' returns the first value in the collection that passes 'test'. 

If none are found, it should return undefined.

After the value is found, it should stop traversing the collection.
*/

// Your code here
// function find(objectArray, fun) {

//     if (Array.isArray(objectArray) === true) {
//         for (let x = 0; x < objectArray.length; x++) {
//             if (fun(objectArray[x]) === true) {
//                 return objectArray[x];
//             }
//         }
//     } else if (objectArray.constructor === Object) {
//         let arr = Object.values(objectArray)
//         for (const value of arr) {
//             if (fun(value) === true) {
//                 return value;
//             }
//         }
//     }
// }
// Tests
// You should not need to change the tests

/*
let counter = 0;

function isEven(number) {
    counter++;
    return number % 2 === 0;
}

let actual = find([1, 2, 3, 4], isEven);
let expected = 2;
let traversalCount = 2;

if (actual === expected) {
    console.log("Yay!");
} else {
    console.log("Please try again.");
}

if (traversalCount === counter) {
    console.log("Yay!");
} else {
    console.log("Please try again.");
}

counter = 0;

function isOdd(number) {
    counter++;
    return number % 2 !== 0;
}

actual = find({ "c": 62, "b": 70, "d": 45, "a": 7 }, isOdd);
expected = 45;
traversalCount = 3;

if (actual === expected) {
    console.log("Yay!");
} else {
    console.log("Please try again.");
}

if (traversalCount === counter) {
    console.log("Yay!");
} else {
    console.log("Please try again.");
}

array4 = [1, 2, 3, 4, 5]
array1 = { key: 'hello', key2: "world" }
let array2 = Object.values(array1)
console.log(array1.constructor === Object)
*/
// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         return this.bmi = (this.mass / this.height ** 2).toFixed(2);
//     }
// }


// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         return this.bmi = (this.mass / this.height ** 2).toFixed(2);
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi)

// if (mark.bmi === john.bmi) {
//     console.log(`Both of their BMI's are ${john.bmi}`)
// } else if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)
// } else {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
// }



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

function calcAverage(arr) {
    let sum = 0
    for (let x = 0; x < arr.length; x++) {
        sum += arr[x];
    }
    return sum / arr.length
}