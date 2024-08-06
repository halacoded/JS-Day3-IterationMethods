//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
let numbersGraterThan24 = numbers.filter((number) => {
  if (number > 24) {
    return true;
  } else {
    return false;
  }
});

console.log(numbersGraterThan24);

let numbers_Divisible_By5 = numbers.filter((number) => {
  if (number % 5 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(numbers_Divisible_By5);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
let numbers_Squared = numbers.map((number) => {
  return number * number;
});
console.log(numbers_Squared);

let numbers_MultipliedBy2 = numbers.map((number) => {
  return number * 2;
});
console.log(numbers_MultipliedBy2);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
let numbersGraterThan19 = numbers.filter((number) => {
  if (number > 19) {
    return true;
  } else {
    return false;
  }
});
let numbers_Squared2 = numbersGraterThan19.map((number) => {
  return number * number;
});
console.log(numbers_Squared2);
