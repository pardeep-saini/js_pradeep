var b=5
const userId = "123"
// userId = '33'  // not reasign
function userInfo(name){
    let a=6
    var userEmail = "pardee@google.com"
  console.log(name, b, userId,userEmail)
  a=7
  console.log(name, a)
}
console.log(b)
userInfo("Pradeep");

// Var -> var is use  or store in globle space
// Let and Const -> both are blocked scoped, but in case of let we can reasign the value
// but in case of const we can not do this
