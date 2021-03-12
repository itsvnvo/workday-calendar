//Variables
var timeDisplayEl = $('#time-display');
var now = moment().format("H A");
// Displays current day and time
function displayTime() {
    var timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(timeNow);
}
// Makes current day time tick by 1 second
setInterval(displayTime, 1000);



var timeBlockEl = [
    {time: "9 AM", event: ""},
    {time: "10 AM", event: ""},
    {time: "11 AM", event: ""},
    {time: "12 PM", event: ""},
    {time: "1 PM", event: ""},
    {time: "2 PM", event: ""},
    {time: "3 PM", event: ""},
    {time: "4 PM", event: ""},
    {time: "5 PM", event: ""}
];

timeBlockEl.forEach(function(timeRows, index) {
    var timeDisplay = '<div class="row">' 
    var clickTime =  '<button type="button">'
    timeDisplay+= '</div>'
    clickTime+= timeRows.time;
    clickTime+= '</button>';
    console.log(timeDisplay)
    console.log(clickTime)
    $(".container").append(timeDisplay);
    $(".container").append(clickTime);

});

function colorBlocks() {
}
