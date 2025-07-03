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
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`) //String Interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

///Singleton

const tinderUser = new Object() //Singleton Object
const tinderUser1 = {} //non-singleton Object

console.log(tinderUser)