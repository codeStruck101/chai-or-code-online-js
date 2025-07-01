console.log("2" > 1); //true
console.log(null >= 0); // true
console.log(null == 0); // false 
console.log(null > 0); // false 

// this is because comparison works differently than equals ,
//comparison treats null as 0 and then processes about comparison

console.log(undefined >= 0); //all false 

//strict check (===)
console.log("2" === 2);
console.log("2" == 2);


