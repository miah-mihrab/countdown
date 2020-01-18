let day = document.querySelector('.day-box');
let hour = document.querySelector('.hour-box');
let minute = document.querySelector('.minute-box');
let sec = document.querySelector('.second-box');

const target_time = new Date('Feb 18, 2020, 15:47:00').getTime(); //Time in millis (24hours)


const remaining_time = setInterval(function () {

    let time_now = new Date().getTime();

    let time_distance = target_time - time_now; //Find time distance



    //1min = 1000*60 milisec
    //60min/1hr = 1000*60*60 milisec
    //1440min/24hrs = 1000*60*60*24 milisec


    let days = Math.floor(time_distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((time_distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time_distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time_distance % (1000 * 60)) / (1000));


    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    sec.innerHTML = seconds;
    console.log(`${days}:${hours}:${minutes}:${seconds}`);

    if (time_distance < 0) {
        clearInterval(remaining_time);
        document.querySelector('.clock').style.gridTemplateColumns = "1fr";
        document.querySelector('.clock').innerHTML = "<h1 class='text-center'>Expired</h1>"
    }

})


let secs = 0;

function secBox() {
    secs++;
    console.log(secs)
    day.style.transition = "0.5s ease-in-out"
    hour.style.transition = "0.5s ease-in-out"
    minute.style.transition = "0.5s ease-in-out"
    sec.style.transition = "0.5s ease-in-out"
    if (secs % 2 === 0) {

        day.style.boxShadow = "0px 0px 30px rgb(85, 30, 50)";
        hour.style.boxShadow = "0px 0px 30px rgb(85, 30, 50)";
        minute.style.boxShadow = "0px 0px 30px rgb(85, 30, 50)";
        sec.style.boxShadow = "0px 0px 30px rgb(85, 30, 50)";

    } else {
        day.style.boxShadow = "0px 0px 15px rgb(85, 30, 50)";
        hour.style.boxShadow = "0px 0px 15px rgb(85, 30, 50)";
        minute.style.boxShadow = "0px 0px 15px rgb(85, 30, 50)";
        sec.style.boxShadow = "0px 0px 15px rgb(85, 30, 50)"
    }
}
setInterval(secBox, 250);