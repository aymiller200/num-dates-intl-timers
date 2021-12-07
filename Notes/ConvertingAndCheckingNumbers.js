/* 
!Converting and checking numbers
  ? All numbers in JS are represented internally as floating point numbers (always as decimals)
  ? Numbers are always stored in a binary format (0s and 1s. 64 base 2)
      * Base 10 : 0 - 9
      * Binary Base 2: 0 - 1 (certain numbers are difficult to represent, like 0.1)
  
  !ParseInt: 
  ? parseInt (method on the Number object)
  ? only works if the first part of the string is a number.
  ? Accepts a second argument which is the radix.
      *Radix is the base of the numeral system we are using
      * Most of the time we are using base 10 numbers in the parseInt function, so we should always pass in a radix of 10 to avoid errors and bugs
      * If we were working with binary, we would pass in a 2
  
  !ParseFloat
    ? Gets the decimal from the argument we pass in
    ? Both parseInt and parseFloat are global, so we don't have to call them on the number object, but in modern JS it is best practice to do so.
    ? "Number" provides a namespace for all these different functions

  !isNaN
    ?Only use to check if value is NaN
    ? Check if almost any value is a number
    ? Will return false if the value is a number
    ? It is not a perfect way of checking is a value is a number, because of special use cases
  
  !isFinite
    ? Best way to check if a value is a number than isNaN.
    ? Has to be a REAL number to return true (not a string)
    ? Only finite values of the type number, result in true.
  
  !IsInteger
    ? Returns true if the value passed is an integer, false otherwise.
*/

console.log(23 === 23.0);// true
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false (should be true, but this is just an error in JS)

//! Converting strings to numbers: 
console.log(Number('23'));
console.log(+'23'); // <--- works the same as above. When JS sees the plus operator, it will do type coercion and automatically convert all the operands to numbers.


//! Parsing (parseInt)
console.log(Number.parseInt('30px', 10)); //30

//! Parsing (parseFloat)
console.log(Number.parseFloat('2.5rem')); //2.5

//!isNaN
console.log(Number.isNaN(20)); //false (is it not a number? false)
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //True
console.log('--->',Number.isNaN(23 / 0)); // false (Gives us special value of infinity)

//! isFinite
console.log(Number.isFinite(20)) //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(24 / 0)); //false
console.log(Number.isFinite(23.0)); //true

//! isInteger
console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false