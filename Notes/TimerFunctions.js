/* 
!SetTimeout
  ? Runs just once after a defined time

!SetInterval: 
  ? Keeps running forever until we stop it. 
*/

//*SetTimeout:

//When JS hits this code for the first time, it will keep counting the time in the background, and register this callback function to be called after than time has elapsed: Asynchronous JS. 
setTimeout(() => console.log('Here is your pizza!'), 3000)

console.log('Waiting...');

//All the arguments we pass after the delay will be part of the function
setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 3000, 'olives', 'spinach')

//Cancel the timeout: 
const ingredients = ['olives', 'spinach']
const timer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 3000, ...ingredients)

if(ingredients.includes('spinach')) clearTimeout(timer)

//!SetInterval
setInterval(function() {
  const now = new Date();
  console.log(now);
}, 1000) //this callback function executes every second