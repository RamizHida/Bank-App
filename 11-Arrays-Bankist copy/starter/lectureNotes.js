/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////

/* Array methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('-'));

*/

// At Method
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log('ramiz'.at(0));
console.log('ramiz'.at(-1));
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
// forEach method and for of loop

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...
*/

/* forEach Method for Map and Set
//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

//  Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] §
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// Challenge
/*
const dogsJuila = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (arr1, arr2) {
  const juliaCopy = [...dogsJuila];
  juliaCopy.splice(0, 1);
  juliaCopy.splice(-2);
  const newData = juliaCopy.concat(dogsKate);
  console.log(newData);
  newData.forEach(function (val, i) {
    if (val >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${val} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is a puppy, and is ${val} years old.`);
    }
  });
};
checkDogs(dogsJuila, dogsKate); 
*/

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

/*
// Map Method

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
*/

/*
// Filter method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);

const withdrawals = movements.filter(function (m) {
  return m < 0;
});
console.log(withdrawals);

const withdrawalsFor = [];
for (const m of movements) {
  if (m < 0) withdrawalsFor.push(m);
}

console.log(withdrawalsFor);
*/

/*
// Reduce Method
console.log(movements);

// accumalator is like a SNOWBALL
// const balance = movements.reduce(function (accumalator, cur, i, arr) {
//   console.log(`Iteration number ${i} : ${accumalator}`);
//   return accumalator + cur;
// }, 0);
const balance = movements.reduce((accumalator, cur) => accumalator + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

/*
// Challenge 2
*/

/* 
// Challenge 2
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// My attempt

// const calAverageHumanAge = Data1.map(function (el) {
//   if (el <= 2) {
//     return el * 2;
//   } else {
//     return (16 + el) * 4;
//   }
// }).filter(el => el >= 18);
// // .reduce(function (acc, el, i, arr) {});

// console.log(calAverageHumanAge);

// Jonas' answer
const calAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges, adults);
  // const avg = adults.reduce((acc, age) => acc + age, 0) / adults.length; // is same result as bottom

  const avg = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return avg;
};
const avg1 = calAverageHumanAge(data1);
const avg2 = calAverageHumanAge(data2);

console.log(avg1, avg2);
*/

/*  
// Chaining
const eurToUSD = 1.1;
console.log(movements);
// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUSD;
  })
  // .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/

// const calAverageHumanAge = function (ages) {
// const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
// const adults = humanAges.filter(age => age >= 18);
// console.log(humanAges, adults);
// // const avg = adults.reduce((acc, age) => acc + age, 0) / adults.length; // is same result as bottom

// const avg = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// return avg;
// };
// ----------------
/*
// Challenge 3
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
const avg1 = calcAverageHumanAge(data1);
const avg2 = calcAverageHumanAge(data2);
console.log(avg1, avg2);
*/

/* 
// Find method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

/* 
/*
// some method, every and includes method
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);
*/

// Every
// console.log(movements);
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));
/*

/*
//  Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
// Flat method and flatMap method (for nested arrays)
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat method
const overAllBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance);

// flatMap method
const overAllBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance2);
*/

/* 
// Sorting with strings
const owners = ['Ramiz', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Sorting with numbers
// return < 0, a before b (keep order)
// return > 0, b before a (switch order)
console.log(movements);
// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);
// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/
