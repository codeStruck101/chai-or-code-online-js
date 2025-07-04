const user = {
    username : "anjana",
    price : 999,

    welocmeMessage : function()
    {
        // console.log(`${this.username} , Welcome to the website!`);
        // console.log(this);      
        
    }

}

user.welocmeMessage();
user.username = "sam";
user.welocmeMessage();


////arrowFunctions

function chai(){
    console.log(this);
}
chai()

// const abc = () => {
//     console.log(this);
    
// }

// abc()

// const addTwo = (num1,num2) => {  //explicit return
//     return num1 + num2
// }

//const addTwo = (num1,num2) => (num1 + num2) //implicit return

const addTwo = (num1,num2) => ({username : "anjana"}) //object return

console.log(addTwo(3,4));
