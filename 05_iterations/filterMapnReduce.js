const coding = ["js","ruby","py","java","cpp"];

const nums = [1,2,3,4,5,6,7,8,9,10];

// const newnums = nums.filter((num) => 
//     { return num > 5})
//console.log(newNums);
 //callback function is passed as a argument to other function
 // and then called back in the body of the function

 const addTwo = (num1,num2) => ({username : "hitesh"})
 console.log(addTwo(3,4));

const newNums = []

myNums.forEach((num) => {
    if(num > 4)
    {
       newNums.push(num) 
    }
})

const books = [
    {title : 'Book One',genre : 'History',publish : 1986,edition : 1999},
    {title : 'Book Two',genre : 'Geography',publish : 1989,edition : 1989},
    {title : 'Book Three',genre : 'Science',publish : 1678,edition : 2000},
    {title : 'Book Four',genre : 'History',publish : 1767,edition : 2003},
    {title : 'Book Five',genre : 'Horror',publish : 1655,edition : 2004},
    {title : 'Book Six',genre : 'Sci-Fi',publish : 1998,edition : 2009}
];

const myNumbers = [1,2,3,4,5,6,7,8,9,0];
const newNums1 = myNumbers.map( (num) => {num + 10})
console.log(newNums);

 
const myNums = [1,2,3]
 const myTotal = myNums.reduce(function (acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
 },0)

 console.log(myTotal);
 
 //i.e
 const myFinal = myNums.reducs((acc,curr) => acc+curr,0)

 // const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)