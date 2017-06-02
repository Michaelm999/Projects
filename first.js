var correctAnswerOne = $('.correct1');
var score = $('#score');
var nextLevel = $('.nextLevel');
var buttonOne = $('.buttons1');

//choose the correct answer
buttonOne.click(function() {
  if (buttonOne.child === correctAnswerOne) {
    alert("Congrats! Lets go to the next level")
    score = score+2
    $('#score').text("score: "+score)
  } else {
    alert("Sorry! Incorrect. Hint: What is in front of you right now!")
    score = score-2
    $('#score').text("score: "+score)
  }
});
