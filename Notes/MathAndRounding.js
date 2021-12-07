/* 
!Math and Rounding
    ? Math object: An intrinsic object that provides basic mathematics functionality and constants.
! Math.sqrt
    ? Returns the square root of a number.

! Math.max 
    ? Returns maximum value
    ? Does type coercion
    ? Does not parse

! Math.min
    ? Returns minimum value
    ? Does type coercion
    ? Does not parse

! Math.random
    ? Generate a random number between 0 and 1

! Math.truc
    ? Removes the decimal of any number

! Math.round
    ? Rounds to the nearest integer

! Math.ceil
    ? Always rounds up

! Math.floor
    ? Always rounds down
    ? Floor and trunc always cut off the decimal part for positive numbers. However, for negative numbers floor rounds down and trunc just removes the decimal

! .toFixed
    ? Always returns a string and not a number
    ? Takes in Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
*/

//! Math.sqrt
console.log(Math.sqrt(25)) //5
console.log(25 ** (1 / 2)) //5
//calculate a cubic root
console.log(8 ** (1 / 3)) //2 (only way to calculate cubic root)

//! Math.max
console.log(Math.max(5, 18, 23, 50, 1, 2)) //50
console.log(Math.max(5, 18, 23, '50', 1, 2)) //50

//! Math.min
console.log(Math.min(5, 18, 23, 50, 1, 2)) //1
console.log(Math.min(5, 18, 23, 50, '1', 2)) //1

//! Math.PI
//Calculate area of circle with certain radius
console.log(Math.PI * Number.parseFloat('10px') ** 2) //314.1592653589793

//! Math.random
console.log(Math.random() * 6)
//remove decimal
console.log(Math.trunc(Math.random() * 6)) //highext number could be 5
console.log(Math.trunc(Math.random() * 6) + 1) //add 1 to get it to 6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min 
  // 0...1 -> 0 ... (max - min) -> min ... max
  //a function that will always give us a number that stays between min and max
console.log(randomInt(10, 20))


//Rounding Integers
// ! Math.trunc
console.log(Math.trunc('23.8')); //23

//!Math.round
console.log(Math.round(23.4)); //23
console.log(Math.round('23.9')); //24

//! Math.ceil
console.log(Math.ceil(23.4)) //24
console.log(Math.ceil('23.9')) //24

//! Math.floor
console.log(Math.floor(23.4)) //23
console.log(Math.floor('23.9')) //23

console.log(Math.floor(-23.6)); //24
console.log(Math.trunc(-23.6)); //23

//! Rounding decimals
//! toFixed
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(2)); //2.70
console.log(+(2.345).toFixed(2)); //2.35

