setInterval(displayTime, 1000);


function displayTime() {
    setColor();
    
    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let dateOfMonth = timeNow.getDate();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", {
        month: "long"
    });
    let year = timeNow.getFullYear();
    let period = " AM";

    if (hoursOfDay > 12) {
        hoursOfDay-= 12;
        period = " PM";
    }

    if (hoursOfDay === 0) {
        hoursOfDay = 12;
        period = " AM";
    }

    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds + period;

    document.getElementById('Clock').innerHTML = time + "<br> " + today + " " + dateOfMonth +". " + months + " " + year;

}

function setColor(){
let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
document.getElementById('Clock').style.color = randomColor;
document.getElementById('text').style.color = randomColor;
}