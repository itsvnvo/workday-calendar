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


// Displays current day and time
function displayTime() {
    var timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(timeNow);
}

// Makes current day time tick by 1 second
setInterval(displayTime, 1000);


// Makes rows and the columns including the textarea and button at the end in timedisplay
timeBlockEl.forEach(function (timeRows) {
    var timeDisplay = '<div class="row time-block col-1"></div>'
    var getStorage = JSON.parse(localStorage.getItem("btnSave" + counter))
    var textRow = '<textarea id=id' + counter + ' <div class="col-8 justify-content-center time-block" ></textarea></div>'
    var btnEl = '<button id=btnSave' + counter + ' <div class="btn saveBtn col-1"><i class="fas fa-save"></i></button></div>'
    timeDisplay += timeRows.time + textRow + btnEl
    $(".container").append(timeDisplay);
    if (getStorage) {
        document.getElementById("id" + counter).value = getStorage
    }
    counter++
});


// Saves the local storage
$(document).ready(function () {
    $("#btnSave0, #btnSave1, #btnSave2, #btnSave3, #btnSave4, #btnSave5, #btnSave6, #btnSave7, #btnSave8").on("click", function () {
        var task = $(this).prev().val();
        localStorage.setItem($(this).attr('id'), JSON.stringify(task));
        console.log(task);

    }
    )
});
