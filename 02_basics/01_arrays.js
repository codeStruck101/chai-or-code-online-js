//array

const myArr = [1,2,3,4,5,6];

const array2 = new Array(1,2,3,4)

//shallow copy who have same reference
//deep copy who doesnt share same references

console.log(myArr[0]);

//Array Methods
myArr.push(6);
myArr.push(16);
myArr.pop()
myArr.unshift(9) //inserts element at the side
console.log(myArr);

//.join(),.includes(),.indexOf()

//slice,splice
console.log("A ",myArr);

const marvel_heroes = ["thor","Ironman","Spiderman"]
const dc_heroes = ["Superman","Batman","Flash"]

//concat()

const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);

//.flat(Infinity) -> to flatten the nested array

console.log(Array.from("Hitesh"))//['H','i','t','e','s','h']
console.log(Array.from({name: "hitesh"})); // [] (for interview)

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));

 