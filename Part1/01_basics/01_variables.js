 const accountId = 123;
let accountEmail = "ac@g.com";
var accountPassword = "123456";
accountcity = "jaipur";
let accountstate; //this gives an output undefinite

//accountId = 2 This is  not allowed due to const

accountEmail = "ac.gm.com";
accountPassword = "1212";
accountcity = "Bengaluru";

console.log(accountId);

/*
perfer not to use Var as it create issues in block scope and functional scope
*/
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountcity,
  accountstate,
]);