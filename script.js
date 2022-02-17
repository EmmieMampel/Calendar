let person = prompt("Are you ready to take responsibility for your life?", "Yes");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "I hope you're ready" + person
}

function displayTime(){
    var datetTime = new Date();
    var hrs = datetTime.getHours();
    var min = datetTime.getMinutes();
    var sec = datetTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);