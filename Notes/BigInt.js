/* 
!BigInt 
  ? Special type of integer introduced in ES2020
  ? Numbers are represented internally as 64 bits. That means that there are 64 1s or 0s used to represent any given number 
      * Of these 64 bits only 53 of them are used to store the digits themselves. The rest are used to store the position of the decimal point and the sign. This means there is a limit of how big a number can be.
  ? Used to store numbers larger than the largest safe JS number
  ? It is not possible to mix BigInts with regular numbers when using operators, except with the comparison operaton and the equality (==) operator, and with concatination.
  ? Math operations also do not work with BigInt
  ? With division, it will return the closest BigInt (cuts the decimal)
*/

//Calculating the biggest number JS can savely represent: 
console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9,007,199,254,740,991

console.log(1347293742987987293749107239741908732947928719723497n);// <- the n transforms a regular number into a bigInt number
console.log(BigInt(1347293742987987293749107239741908732947928719723497)); //Out put is slighty different with this method because JS first has to represent this number internally before it can then trasform it into a bigInt. This constructor function should be used with smalled numbers

//! Opterations with bigInt
console.log(10000n + 10000n); //20,000
console.log(43524532452345234534532452345n * 1334534534543n);

const huge = 2345234543523453452345n
const num = 23
//console.log(huge * num); //Cannot mix BigInt and other types
console.log(huge * BigInt(num)); 

console.log(20n > 15); //true
console.log(20n === 20); //false because bigInt and number are different types.
console.log(20n == 20); //true because of type coercion 

console.log(huge + ' is really big');

//Division
console.log(10n / 3n); //3n