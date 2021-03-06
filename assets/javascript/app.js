//declaring variables to hold the score and values for the game
var counter = 0,
  score = 0;

// variable for quiz content

var content = [
  { "name": "Clark is the real captain.", "answer": "false" },
  { "name": "Clark in NOT the real captain Joe is.. may he rest in peace.", "answer": "true" },
  { "name": "Judd owns Avenue5.", "answer": "true" },
  { "name": "Clark loves Billie", "answer": "true" },
  { "name": "A baby made the ship beep.", "answer": "true" },
  { "name": "The ship was built by NASA", "answer": "false" },
  { "name": "Karen makes a great passenger liason.", "answer": "false" },
  { "name": "Fake Captain Clark saved Avenue3 from certain doom", "answer": "true" },
  { "name": "They will be up in space for three to six years after a missed trajectory", "answer": "false" },
  {"name": "The crew 'flying' the ship is real.", "answer": "false"},
]


//placing variables into HTML elements for display
var $name = $('.name'),
  $generate = $('.generate'),
  $result = $('.results'),
  $score = $('.score'),
  $thanks = $('.thanks'),
  $options = $('.options');

var aveApp = {};
//used audio theory from wordguessgame
// starts off by showing the "name" value in the first item in the object, hides the 'next' button, results, score and 'thanks for playing'
aveApp.init = function () {
  var selection = content[counter];
  type = selection["answer"];
  $name.html(selection["name"]);
  $generate.hide();
  $result.hide();
  $score.hide();
  $thanks.hide();
}
// the function for generating questions 
aveApp.generate = function () {
  // if there are still questions remaining, show the next one
  if (counter < content.length) {
    var selection = content[counter];
    $name.html(selection["name"]);
    type = selection["answer"];

    $result.hide();
    $score.hide();
    $name.show();
    $options.show();
    // if there are no more questions show thanks - still not working
  } else {
    $thanks.show();
  }
  $generate.hide();
}
// the event handler that determines whether the user's selection was right - e is random - not sure what i could use in place of fullAnswer but it works
$('.choice').click(function (e) {
  var chosenAnswer = e.target.id;
  $result.show();
  $score.show();
  $name.hide();
  $options.hide();
  // setting up "full sentence" values for each type 
  if (type == "true") {
    fullAnswer = "true";
  } else {
    fullAnswer = "false";
  }
  // tell the user whether they're right or wrong, and add a point to the score if they're right
  if (chosenAnswer == type) {
    $result.html("<span class='right'>Affirmative, my fake captain!</span>");
    score++;
  } else {
    $result.html("<span class='wrong'>INCORRECT!!! Judd will end you for this!</span>");
  }
  counter++;
  $score.html("You're " + score + " for " + counter + ".");
  $generate.show();

});

$(document).ready(function () {
  aveApp.init();
});

var intervalId;
var number = 60;

$generate.on('click', function () {
  aveApp.generate();
  //timer 
  function run(){
    $("#show-number").html("<h2>You have " + number + " seconds left!!!</h2>");
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  
  function decrement(){
    number--;
    $("#show-number").html("<h2>You have " + number + " seconds left!!!</h2>");
    if (number === 0) {
          //  Kill the clock
          clearInterval(intervalId);
          //say times up
        $("#show-number").html("<h2>TIMES UP!</h2>");
        //reset the number
          number = 5
        }
  }
  
  run();

});


