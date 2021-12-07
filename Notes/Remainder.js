/* 
!Remainder Operator: %
    ? Returns thre ramainder of a division
    ? Whenever the result of the remainer operator is 0, it means that number is compleely divisible by the other number
*/

console.log(5 % 2); //1 5= 2 * 2 + 1
console.log(8 % 3); // 2

//check for even numbers
console.log(6 % 2); //0

const isEven = n => n % 2 === 0 
console.log(isEven(8));
console.log(isEven(12));
console.log(isEven(1));
console.log(isEven(15));
