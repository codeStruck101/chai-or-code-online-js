

if(true){
 let a = 10;
 const b = 20;
 var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

//var is having global scope

function one ()
{
    const userName = "anjana"

    function two()
    {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
    
     two();
}

one();

const addTwo = function(num){
    return num + 2;
}

