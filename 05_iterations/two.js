let index = 0;
while(index <= 10)
{
   // console.log(`Value of index is ${index}`);
    index += 1;
}

 //Maps

 const map = new Map();
 map.set('IN',"India");
 map.set('USA',"United States of America");

 //console.log(map);
 
 for(const [key,value] of map)
 {
    console.log(key, ":-",value);
    
 }

 const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
 }

 //for of loop wont work for object instead use for..in loop

 //map is not iterable
 
 