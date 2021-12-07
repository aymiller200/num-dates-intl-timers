const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};


/* 
! Creating Dates
  ? 4 ways of creating dates in JS (all use "new Date", but accept different parameters)
  ? The month in JS is zero based
  ? Dates are a special kind of object, so they have their own methods
*/

//! 1st
const now = new Date()
console.log(now); //2021-11-11T18:23:17.819Z

//! 2nd
console.log(new Date('Nov 11, 2020')); //give a string, and it will parse the date based on the string
console.log(new Date('December 24, 2015')); //2015-12-24T05:00:00.000Z
console.log(new Date(account1.movementsDates[2]));

console.log(new Date(2017, 10, 19, 15, 23, 50)); //2017-11-19T20:23:50.000Z
console.log(new Date(2017, 10, 31)); //Nov only has 30 days, but JS autocorrects so that this date is actually Dec 1st : 2017-12-01T05:00:00.000Z

//How we convert from days to miliseconds
//3 days * 24 hours * 60 min * 60 sec * 1000
console.log(new Date( 3 * 24 * 60 * 60 * 1000)); //1970-01-04T00:00:00.000Z

//! Dates Methods
const future = new Date(2037, 10, 19, 15, 23)
console.log(future.getFullYear()); //2037
console.log(future.getMonth() + 1); // 11
console.log(future.getDate()); //19 (day of the month)
console.log(future.getDay()); //4 (day of the week, not month)
console.log(future.getHours()) //15
console.log(future.getMinutes()) //23
console.log(future.getSeconds()) //0

console.log(future.toISOString()) //2037-11-19T20:23:00.000Z

console.log(future.getTime()); //time stamp of how many milliseconds have passed since Jan 1st 1970 2142274980000

//can use time stamp to get the date
console.log(new Date(2142274980000)); //2037-11-19T20:23:00.000Z 

//create new timestamp for this very moment
console.log(Date.now()); //1636656346661

//Can set on dates
future.setFullYear(2040)
console.log(future); //2040-11-19T20:23:00.000Z