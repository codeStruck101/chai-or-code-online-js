let score = undefined;
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1;false => 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=> true;0=> false
//"" => false
//" " => true
//"hitesh" => true

let str1 = "anjana";
let str2 = " neelayath";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");

let str = "hello";
let str4 = "hitesh";
console.log(str + " " + str4);

console.log(1 + 2 + "3");

console.log(+"");

let num1,num2,num3;

num1 = num2 = num3 = 2+2;
let num4 = ++num1;
console.log(num4);
//(num1++);

