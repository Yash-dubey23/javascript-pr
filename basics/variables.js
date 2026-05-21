const accountId=145553
let accountEmail="yash@gmail.com"
var accountPassword="12345"
accountcity="mumbai"
let accountState;
// accountId=451542  // not allowed because accountId is a constant variable
console.log(accountId)
accountEmail="ha@hc.com"
accountPassword="99999"
accountcity="pune"
console.table([accountId,accountEmail,accountPassword,accountcity,accountState])
/*
prefer not to use var because of its function scope and hoisting issues, let and const are block scoped and do not have hoisting issues.
use const for variables that should not be reassigned, and use let for variables that can be reassigned.
*/