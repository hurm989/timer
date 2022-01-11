var hours;
var minutes;
var seconds;
var startBtn = document.getElementById("startBtn");
var displayHours = document.getElementById("displayHours");
var displayMinutes = document.getElementById("displayMinutes");
var displaySec = document.getElementById("displaySec");
var pauseBtn = document.getElementById("pauseBtn");
var resetBtn = document.getElementById("resetBtn");
var tim = document.getElementById("tim");
var timerValue = document.getElementById("timerValue");
var recordBtn = document.getElementById("recordBtn");
var listLab = document.getElementById("listLab");
var interval = 0

function getTime() {
    startBtn.disabled = false
    resetBtn.disabled = true;
    pauseBtn.disabled = true;
    recordBtn.disabled = false
    hours = tim.value;
    hours = hours.slice(0, 2);
    //if we want to neglect am pm 
    if (hours == 0) {
        displayHours.innerHTML = 00
        hours=0
    }
    //
    if (hours > 12) {
        hours=hours-12
    }
    // console.log(hours)
    minutes = tim.value;
    minutes = minutes.slice(3, 6)
    if (minutes == 0) {
        displayMinutes.innerHTML = 00
        minutes=0
    }
    else {
        // console.log(minutes)
        displayHours.innerHTML = hours
        displayMinutes.innerHTML = minutes
    }
    seconds = prompt("enter sec", parseInt("60"))
    if (seconds >= 0 && seconds <= 60) {
        displaySec.innerHTML = seconds
    }
    else {
        alert("incorrect time");
        location.reload()
    }
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);
}
function start() {
    recordBtn.disabled = false
    timerValue.disabled = true
    startBtn.disabled = true
    pauseBtn.disabled = false
    resetBtn.disabled = false
    console.log(hours)
    interval = setInterval(function () {
        if (seconds == 0 && minutes > 0) {
            minutes--;
            seconds = 60;
        }
        if (seconds > 0 || hours > 0 || minutes > 0) {
            seconds--;
        }
        if (seconds == 0 && minutes != 0) {
            minutes--;
            seconds = 60
        }
        if (minutes == 0 && hours > 0) {
            hours--;
            minutes = 60;
            seconds = 60;
        }
        displayHours.innerHTML = hours
        displayMinutes.innerHTML = minutes;
        displaySec.innerHTML = seconds;
    }, 1000)
}

function pause() {
    pauseBtn.disabled = true
    startBtn.disabled = false
    clearInterval(interval)
}
function reset() {
    clearInterval(interval)
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayHours.innerHTML = hours
    displayMinutes.innerHTML = minutes;
    displaySec.innerHTML = seconds;
    location.reload()
}
var labTime = [];
function record() {
    // console.log(hours, minutes, seconds);
    var lab = new Record(hours, minutes, seconds);
    labTime.push(lab);
    // console.log(lab)
    console.log(labTime)
    listLab.innerHTML += `<li>
    <ul id="" class="bg-light rounded text-center ms-5 text-dark fs-4">${lab.hours + ' hours ' + lab.minutes + ' minutes ' + lab.seconds + ' seconds '}</ul>
    </li>`
}
labTime.pop();
function Record() {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
}
