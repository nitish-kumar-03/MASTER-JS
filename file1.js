console.log("Hello JavaScript !!");

const accountId = 1;
let accountEmail = "nitish@gmail.com";
var accountPassword = "123456";
accountCity = "Ghaziabad";
let accountState;

// accountId = 2; - not allowed
accountEmail = "nitishkumar@gmail.com";
accountPassword = "654321";
accountCity = "Noida";

// console.log(accountId); - for single value

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*
Prefer not to use 'var' due to issue of functional scope and all.
*/