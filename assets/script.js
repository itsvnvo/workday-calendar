//Variables
var timeDisplayEl = $('#time-display');
var counter = 0
var timeBlockEl = [
    { time: "9 AM " },
    { time: "10 AM" },
    { time: "11 AM" },
    { time: "12 PM" },
    { time: "1 PM " },
    { time: "2 PM " },
    { time: "3 PM " },
    { time: "4 PM " },
    { time: "5 PM " }
];
var timeEl = moment().format('h A');

// Displays current day and time
function displayTime() {
    var timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(timeNow);
}

// Makes current day time tick by 1 second
setInterval(displayTime, 1000);


// Makes rows and the columns including the textarea and button at the end in timedisplay
timeBlockEl.forEach(function (timeRows) {
    var timeDisplay = '<div class="time-block">'
    var textRow = '<div id="ppf' + counter + '" ><textarea class="row col-10" id="id' + counter + '"></textarea>'
    var btnEl = '<button id=btnSave' + counter + ' ><div class="col-1 btn saveBtn"><i class="fas fa-save"></i></button></div></div></div>'
    timeDisplay += timeRows.time + textRow + btnEl
    var getStorage = JSON.parse(localStorage.getItem("btnSave" + counter));
    $(".container").append(timeDisplay);
    var parent = document.getElementById("ppf" + counter);
    if (getStorage) {
        parent.querySelector("#" + "id" + counter).value = getStorage
    }
    if (timeRows.time < timeEl) {
        document.getElementById("ppf" + counter).className += "past";
    } else if (timeRows.time == timeEl) {
        document.getElementById("ppf" + counter).className += "present";
    } else {
        document.getElementById("ppf" + counter).className+= "future";
    }
    // console.log(localStorage)
    counter++
});

console.log($("div"))
// Saves the local storage
$(document).ready(function () {
    $("#btnSave0, #btnSave1, #btnSave2, #btnSave3, #btnSave4, #btnSave5, #btnSave6, #btnSave7, #btnSave8").on("click", function () {
        var task = $("#ppf").children("textarea").val();
        localStorage.setItem($(this).attr("#" + "id" + counter), JSON.stringify(task));
        console.log($("#ppf").children("textarea"))
        console.log(task);
    }
    )
});