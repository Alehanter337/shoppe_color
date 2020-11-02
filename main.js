let intervalId_color = setInterval(function(){
        let div = document.getElementsByClassName("card-sm__bot")
        let rand = Math.floor(Math.random()*div.length);
        div[rand].style.backgroundColor=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    }
    , 2000);
let intervalId_clear = setInterval(function () {
    let div = document.getElementsByClassName("card-sm__bot")
    let rand = Math.floor(Math.random()*div.length);
    div[rand].style.backgroundColor = "";
}, 2000);
