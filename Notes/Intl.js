/* 
!Internationalization API: 
  ? Allows to format numbers and strings according different languages

*/

const now = new Date()
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      //weekday: 'short',
    }
    //const locale = navigator.language
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)


const num = 5577789.23
const options = {
  style: 'currency', 
  currency: 'EUR', 
  useGrouping: false //numbers printed without the separators
}
console.log("US ---> ", new Intl.NumberFormat('en-US', options).format(num));
console.log("Germany --->", new Intl.NumberFormat('de-DE', options).format(num))
console.log("Syria --->", new Intl.NumberFormat('ar-SY', options).format(num))
// console.log("Browser --->", new Intl.NumberFormat(navigator.language, options).format(num))


