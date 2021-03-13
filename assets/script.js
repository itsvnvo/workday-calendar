//Variables
var timeDisplayEl = $('#time-display');

var timeBlockEl = [
    {time: "9 AM "},
    {time: "10 AM"},
    {time: "11 AM"},
    {time: "12 PM"},
    {time: "1 PM "},
    {time: "2 PM "},
    {time: "3 PM "},
    {time: "4 PM "},
    {time: "5 PM "}
];

localStorage.getItem('textarea')

// Displays current day and time
function displayTime() {
    var timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(timeNow);
}

// Makes current day time tick by 1 second
setInterval(displayTime, 1000);



// Makes rows and the columns including the textarea and button at the end in timedisplay
timeBlockEl.forEach(function(timeRows, index) {
    var timeDisplay = '<div class="time-block"></div>' 
    var textRow = '<textarea <div class="col-6 justify-content-center"></textarea></div>'
    var btnEl = '<button class="btn saveBtn"</button>'
    timeDisplay+= timeRows.time + textRow + btnEl
    console.log(textRow);
    console.log(btnEl);
    $(".container").append(timeDisplay);
});

// Saves the local storage
$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var task = $(this).prev().val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, task);
        console.log(task);
        console.log(time);
     }
)});
