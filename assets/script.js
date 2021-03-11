var timeDisplayEl = $('#time-display');


function displayTime() {
    var timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(timeNow);
}

setInterval(displayTime, 1000);