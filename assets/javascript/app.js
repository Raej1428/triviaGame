//  Interval Demonstration
//  Set our number counter to 100.
var number = 30;
//  Variable that will hold our interval ID
var intervalId;
//  When the stop button gets clicked, run the stop function.
// $("stop").on("click", stop);
// $("resume").on("click", run);
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

//create variable for the content of the questions
var qContent = [
    {
        "question": "Judd owns Avenue5.",
        "answer": "True",
        "fullAnswer": "He is the Owner. Billionaire. Genius."
    },
    {
        "question": "Clark is not the real captain, Joe is!",
        "answer": "True",
        "fullAnswer": "Joe, may he rest in peace... orbiting the ship."
    },
    {
        "question": "Captain Clark is THE real captain.",
        "answer": "False",
        "fullAnswer": "Phhhhh.. captain of the ss boozey maybe!"
    },
    {
        "question": "Clark loves Billie!",
        "answer": "True",
        "fullAnswer": "Oh you know he does."
    },
    {
        "question": "Clark saved the ship when it was leaking feces",
        "answer": "False",
        "fullAnswer": "BILLIE saved the ship okay it was not a joint effort!!"
    },
]

function populateQuestion() {
    var selection = qContent[Math.floor(Math.random()*24)];
    type = selection ["answer"];
    fullAnswer = selection["fullAnswer"];
    $("name").html(selection["name"]);
    $("generate").hide();
    $("result").hide();
}

$(".choice").click(function(e) {
    var chooseAnswer =e.target.id;

    $("#result").show();
    $("#name").hide();
    $("options").hide()

    if (chooseAnswer == type) {
        $("#result").html("<span class='right'>By the power of Judd you've done it!</span>" + fullAnswer + ".");
    }else {
        $("#result").html("<span class='wrong'>You were never my captain anyway! The correct answer was </span>" + fullAnswer + ".");
    }

    $("generate").show();
});





