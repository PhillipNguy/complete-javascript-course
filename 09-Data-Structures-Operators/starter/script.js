'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hourss
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  openingHours,
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:20',
    address,
  }) {
    console.log(
      this.mainMenu[mainIndex],
      this.starterMenu[starterIndex],
      address,
      time
    );
  },
};

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.toLowerCase())
console.log(airline.toUpperCase())

const passenger = 'jOnAs' 
const passengerLower = passenger.toLowerCase()
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect) 

const email = 'hello@jonas.io'
const loginEmail = '   Hello@Jonas.Io \n'
const lowerEmail =  loginEmail.toLowerCase()
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail) 

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)
console.log(email === normalizedEmail)

const priceGB = '288,97'
const priceUS = priceGB.replace(",", ".") 
console.log(priceUS)

const announcement = "All passengers come to boarding door 23. Boarding door 23!"

console.log(announcement.replace('door', 'gate'))
console.log(announcement.replace(/door/g, 'gate'))


// console.log(plane[0]);
// console.log('B320'[0]);
// console.log(airline.length);
// console.log('B373'[2]);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(1, -1));



// const checkMiddleSeat = function(seat) {
//   //B and E are middle Seats
//   const s = seat.slice(-1)
//   s === "E" || s === 'B' ? console.log(true) : console.log(false)
// }

// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')
// const question = new Map([
//   ['question', 'What is the best programing language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Incorrect'],
// ]);
// console.log(question);

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// answer === question.get('correct')
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

// console.log(question.get(question.get('correct') === answer));

// console.log(question);
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
// const rest = new Map();
// rest.set('name', 'Classico italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 10;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// rest.set([1, 2], 'Test');
// rest.set(document.querySelector('h1', 'Heading'));
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get([1, 2]));

// rest.clear()

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Pizza',
//   'Pasta',
//   'Pasta',
// ]);
// console.log(orderSet);

// console.log(new Set('Phillip'));
// console.log(orderSet.size);
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);
// for (const order of orderSet) console.log(order);

// const staff = [
//   'Waiter',
//   'Chef',
//   'Waiter',
//   'Manager',
//   'Chef',
//   'Dish Washer',
//   'Waiter',
//   'Owner',
// ];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);
// const properties = Object.keys(openingHours);
// console.log(properties);

// let str = `We are opening on ${properties.length} days: `;
// for (const day of properties) {
//   str += `${day}, `;
// }
// console.log(str);

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const x of entries) {
//   let key = x[0];
//   let open = x[1].open;
//   let close = x[1].close;
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// console.log(restaurant.openingHours.fri.open);
// console.log(restaurant.openingHours?.mon?.open);

// for (const day of weekdays) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(open);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exit');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exit');

// let user = [{ name: 'Jonas', email: 'hello@phillip' }];
// user = [];
// console.log(user[0]?.name ?? 'User array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item[0] + 1, item[1]);
// }

// for (const [i, food] of menu.entries()) {
//   console.log(i, food);
// }

// console.log([...menu.entries()]);
// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 1;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...otherDays } = restaurant.openingHours;
// console.log(otherDays);

// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   numbers.forEach((x, i) => (sum += x));
//   console.log(sum);
// };
// add(2, 3);
// add(1, 4, 12, 4, 51);
// add(41, 4, 14, 1, 5, 63, 673, 1, 3, 1, 5, 15);

// const x = [24, 1, 47];
// add(...x);
// add(x);

// restaurant.orderPizza('mushrooms', 'pepporni', 'sasausges', 'spinach');

// restaurant.orderDelivery({
//   time: '22:30',
//   address: '4705 E Louisiana',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '4705 E Louisiana Ave',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// //console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// //console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// // console.log(menu, starter);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// // console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [first, , third] = restaurant.categories;
// console.log(first, third);

// // const temp = first;
// // first = third;
// // third = temp;

// [first, third] = [third, first];
// console.log(first, third);

// console.log(restaurant.order(2, 0));

// const nested = [1, 2, 3, [4, 5]];
// const [i, , , [j, k]] = nested;
// console.log(i, j, k);

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...arr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// const menu1 = [...mainMenuCopy, ...restaurant.starterMenu];
// console.log(menu1);

// const str = 'Phillip';
// const letters = [...str, '', '!'];
// console.log(letters);

// const ingredients = [
//   // prompt('Lets make pasta! Ing1?'),
//   // prompt('Ing2'),
//   // prompt('Ing3'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// const newRestaraunt = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaraunt);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
