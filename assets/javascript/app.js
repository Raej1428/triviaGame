//timer 
var number = 60;
var intervalId;
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
    number--;
    $("#show-number").html("<h2> You have " + number + " seconds left! </h2>");
    if (number === 0) {
        stop();
        alert("Times Up!");
    }
}
//  The stop function
function stop() {
    clearInterval(intervalId);
}
run();

//game code 
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

var counter = 0,
    score = 0;

// assigning elements

var $name = $(".name"),
    $generate = $(".generate"),
    $result = $(".results"),
    $score = $(".score"),
    $thanks = $(".thanks"),
    $options = $(".options");

var aveFiveApp = {};

// starts off by showing the "name" value in the first item in the object
aveFiveApp.init = function() {
  var selection = qContent[counter];
  type = selection["answer"];
  $name.html(selection["name"]);
  $generate.hide();
  $result.hide();
  $score.hide();
  $thanks.hide();
}

// the function for generating questions and moving quiz along

aveFiveApp.generate = function() {

  // if there are still questions remaining, show next one
  
  if (counter < qContent.length) {
    var selection = qContent[counter];
    $name.html(selection["name"]);
    type = selection["answer"];  

    $result.hide();
    $score.hide();
    $name.show();
    $options.show();

  // if there are no more questions...
  
  } else {
    $thanks.show()
  }

  $generate.hide();
}

// determines whether selection was right

$(".choice").click(function(e) {
  var chosenAnswer = e.target.id;  
  $result.show();
  $score.show();
  $name.hide();
  $options.hide();

  // setting up "full sentence" values for each type -- add else if statements if you have more than two possibilities
  
  if (type == "True") {
    fullAnswer = "True";
  } else {
    fullAnswer = "False";
  }
   
  // tell the user whether they're right or wrong, and add a point to the score if they're right

  if (chosenAnswer == type) {
    $result.html("<span class='right'>By the power of Judd you did it, I mean Judd did it!</span> It's: " + fullAnswer + ".");
    score++;
  } else {
    $result.html("<span class='wrong'>I knew you were a fraud CLARK!</span> That's incorrect, it's: " + fullAnswer + ".");
  }
  counter++;
  $score.html("You're " + score + " for " + counter + ".");
  $generate.show();
  
});

$(document).ready(function() {
    aveFiveApp.init();
});

$generate.on("click", function() {
    aveFiveApp.generate();
});



