function tellTime(){
    var date = new Date();
    var hr = date.getHours();
    var mn = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM"
    if (hr == 0){
        hr = 12;
    }
    if (hr > 12){
        hr = hr - 12;
        session = "PM";
    }

    if (hr < 10){
        hr = "0" + hr; 
    }

    if (mn < 10){
        mn = "0" + mn; 
    }

    if (s < 10){
        s = "0" + s; 
    }

    var time = hr + ":" + mn + ":" + s + " " + session;

    document.getElementById("dankClock").innerHTML = time;
    document.getElementById("dankClock").textContent = time;
    setTimeout(tellTime, 1000);
}

tellTime();

var p = document.getElementById("urmom");
    var audio = new Audio('allstar.mp3');
function memeClick(){
    audio.play();
}