//Variables
var timeDisplayEl = $('#time-display');
var counter = 0
var timeBlockEl = [
    { time: "9 AM" },
    { time: "10 AM" },
    { time: "11 AM" },
    { time: "12 PM" },
    { time: "1 PM" },
    { time: "2 PM" },
    { time: "3 PM" },
    { time: "4 PM" },
    { time: "5 PM" }
];
var blockArray = document.getElementsByTagName("textarea");
var hourNow = moment().format('h A');

// Displays current day and time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}


setInterval(displayTime, 1000);

timeBlockEl.forEach(function (timeRows) {
    var timeDisplay = '<div class="hour col"></div>'
    var getStorage = JSON.parse(localStorage.getItem("btnSave" + counter));
    var textRow = '<textarea id=id' + counter + ' <div class="col-10" ></textarea>'
    var btnEl = '<button id=btnSave' + counter + ' <div class="btn saveBtn col-1"><i class="fas fa-save"></i></button></div></div></div>'
    timeDisplay += timeRows.time + textRow + btnEl
    $(".container").append(timeDisplay);
    if (getStorage) {
        document.getElementById("id" + counter).value = getStorage
    }
    counter++
});


$(document).ready(function () {
    $("#btnSave0, #btnSave1, #btnSave2, #btnSave3, #btnSave4, #btnSave5, #btnSave6, #btnSave7, #btnSave8").on("click", function () {
        var task = $(this).prev().val();
        localStorage.setItem($(this).attr('id'), JSON.stringify(task));
        console.log(task);
    }
    )
});


for (var i = 0; i < blockArray.length; i++) {

    blockArray[i].textContent = localStorage.getItem(i);

    if ((timeBlockEl[i].time) < hourNow) {
        blockArray[i].classList.add("past");
    } else if ((timeBlockEl[i].time) == hourNow) {
        blockArray[i].classList.add("present");
    } else if ((timeBlockEl[i].time) > hourNow) {
        blockArray[i].classList.add("future");
    }
}
console.log(timeBlockEl)