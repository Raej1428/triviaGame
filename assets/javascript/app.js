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
  { "name": "Karen makes a great passenger liason.", "answer": "false" },]


//placing variables into HTML elements for display

var $name = $('.name'),
  $generate = $('.generate'),
  $result = $('.results'),
  $score = $('.score'),
  $thanks = $('.thanks'),
  $options = $('.options');

var aveApp = {};

// the initial state of the quiz:
// starts off by showing the "name" value in the first item in the data object
// hides the 'next' button, results, score and 'thanks for playing' html as a default

aveApp.init = function () {
  var selection = content[counter];
  type = selection["answer"];
  $name.html(selection["name"]);
  $generate.hide();
  $result.hide();
  $score.hide();
  $thanks.hide();
}

// the function for moving through the quiz

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
    // if there are no more questions, thank the user for playing and give the option to tweet the score
  } else {
    $thanks.show();
  }
  $generate.hide();
}
// the event handler that determines whether the user's selection was right
$('.choice').click(function (e) {
  var chosenAnswer = e.target.id;
  $result.show();
  $score.show();
  $name.hide();
  $options.hide();
  // setting up "full sentence" values for each type -- add else if statements if you have more than two possibilities
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

$generate.on('click', function () {
  aveApp.generate();
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
      clearInterval(intervalId);
      alert("Times Up!");
    }
  }
  //  The stop function
  function stop() {
    clearInterval(intervalId);
  }
  run();
});


