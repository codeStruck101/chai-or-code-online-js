//singleton


//object literals
Object.create
const JsUser = {
    name : "Hitesh",
    age : 18,
    location : "Jaipur",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

JsUser.age = 24;
//Object.freeze(JsUser)
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`) //String Interpolation
}

// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());

///Singleton

const tinderUser = new Object() //Singleton Object
const tinderUser1 = {} //non-singleton Object

tinderUser.id = "123abc";
tinderUser.name = "anjana";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email : "anjana.neelayath@gmail.com",
    fullname :{
        userfullname:{
            firstname : "hitesh",
            lastname : "choudhary"
        }
        
    }
}

console.log(regularUser.fullname.userfullname.firstname);


//Combining Objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = Object.assign({},obj1,obj2); //less used

const obj4 = {...obj1,...obj2}
console.log(obj3);
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

const course ={
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// object de-structuring

const {price : cost} = course;
console.log(cost);

//JSON

// {
//     name : "hitesh",
    
// }