function abc()
{
    console.log("anjana");    
}
abc();

function addTwoNumbers(number1,number2)
{
    return number1 + number2;
}

const result = addTwoNumbers(2,5)
console.log(result);

//functions with objects and array

function calculateCartPrice(...num)
{
    return num
}

console.log(calculateCartPrice(200,300,400))

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([10,20,30,40]));
