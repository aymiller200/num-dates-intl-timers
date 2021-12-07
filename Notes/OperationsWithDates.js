/* 
!Operations with strings: 
    ? In order to calculate how many days have passed between two dates, we can subtract one date fron another date.
        * This works because whenever we attempt to convert a date into a number then the result is going to be the timestamp in milliseconds, and with these milliseconds we can then perform calculations.
*/

const future = new Date(2037, 10, 19, 15, 23)
console.log(+future)
//                                                                   converts to days
const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)

const days1 = calcDaysPassed(
  new Date(2037, 3, 14),
  new Date(2037, 3, 24),
)
console.log(days1) //10 days
