//  Interval Demonstration
//  Set our number counter to 100.
var number = 30;
//  Variable that will hold our interval ID
var intervalId;
//  When the stop button gets clicked, run the stop function.
$("stop").on("click", stop);
$("resume").on("click", run);
//  The run function sets an interval
//  that runs the decrement function once a second.
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2> You have " + number + " seconds left! </h2>");
    //  Once number hits zero...
    if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Times Up!");
    }
}
//  The stop function
function stop() {
    clearInterval(intervalId);
}
//  Execute the run function.
run();

function populateQuestion() {
    

}


