//ont he basis of how the data is kept and fetched the data types are
//of 2 kinds 
//primitive and non-primitive

//Primitive(call by reference)

// 7 -> String, Number,Boolean,null,undefined,Symbol,BigInt

// Reference Type (Non Primitive)

//array,Objects,Functions

//is javaScript dynamically typed or static typed?
//-> dynamically typed

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name :  "hitesh",
    age : 22,
}

const foo = function()
{
    console.log("Hello World!");
}

console.log(typeof anotherId); //symbol