const clock = document.getElementById('clock')
//document.querySelector('#clock')


setInterval(function(){
    let date = new date();
    //console.log(date.toLocaleTimeString());
    clock.innerHtml = date.toLocaleTimeString();
},1000)
