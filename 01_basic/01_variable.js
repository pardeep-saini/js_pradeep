const userId = 6852;
let userName = "Pradeep";
var userPassword = "12345";
userCity = "Ghaziabad";

// userId = 222 // we can not modify.

userName = "Jai Saini"
userPassword = "1111";
userCity = "Noida"
let newUser;

console.log(userId)
console.table([userId, userName, userPassword, userCity, newUser])
/* 
   Prefer not to use var 
   beacuse of issue in block scope and function scope.
*/