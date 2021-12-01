const DaysEl = document.getElementById("Days");
const HoursEl = document.getElementById("Hours");
const MinutesEl = document.getElementById("Minutes");
const SecondsEl = document.getElementById("Seconds");


function countDown(){
    const newYearEve = new Date('01/01/2022')
    const currentDate = new Date()
    const timeLeft = newYearEve - currentDate;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const seconds = Math.floor(timeLeft % day % hour % minute / second);
    const minutes = Math.floor(timeLeft % day % hour / minute);
    const hours = Math.floor(timeLeft % day / hour);
    const days = Math.floor(timeLeft /day);

    DaysEl.innerHTML = days;
    HoursEl.innerHTML = hours;
    MinutesEl.innerHTML = minutes;
    SecondsEl.innerHTML = seconds;

    console.log(days, hours, minutes, seconds)
}

setInterval(countDown,1000)