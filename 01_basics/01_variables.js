const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
//accountId = 2 not allowed

accountEmail = "abc@gmail.com";
accountPassword = "1234";
accountCity = "Delhi";

let accountState;

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);

/*
Prefer not to use var because of 
issue of block and scope
*/

//console.log(accountId);
