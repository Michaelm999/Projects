var game = {
        player1: {score: 0},
        player2: {score: 0},
        questions: [
          {
            text: "When I am unknown, I am something. But when I am known, I become nothing. What am I?",
            answer1: "A: A Riddle",
            answer2: "B: A Secret",
            answer3: "C: A Punchline",
            answer4: "D: A Surprise",
            correctAnswer: "A: A Riddle",
            hint: "What are you solving right now?",
            image: "images/riddleimg-1.jpg",
          },
          {
            text: "I’m rarely touched but often held and if you’re wise you’ll use me well. What am I?",
            answer1: "A: Hand",
            answer2: "B: Mind",
            answer3: "C: Tounge",
            answer4: "D: Heart",
            correctAnswer: "C: Tounge",
            hint: "It's in your head?",
            image: "images/riddleimg-2.png",
          },
          {
            text: "A Man builds a house where all four sides face North. A bear walks by the house. What color is the bear?",
            answer1: "A: Brown",
            answer2: "B: White",
            answer3: "C: Black",
            answer4: "D: Not Applicable",
            correctAnswer: "D: Not Applicable",
            hint: "Polar bears only live at the North Pole?",
            image: "images/riddleimg-3.jpg",
          },
          {
            text: "An electric train is heading North at 100mph, while a 40mph wind blows East. What direction does the smoke blow?",
            answer1: "A: Southeast",
            answer2: "B: No Direction",
            answer3: "C: East",
            answer4: "D: South",
            correctAnswer: "B: No Direction",
            hint: "Where does the smoke from an electric come from?",
            image: "images/riddleimg-4.jpg",
          },
          {
            text: "There are 10 fish in a tank. 2 of them drowned, 4 swim away and 3 Died. How many fish are still left in the tank?",
            answer1: "A: 5 fish",
            answer2: "B: 6 fish",
            answer3: "C: 1 fish",
            answer4: "D: 10 fish",
            correctAnswer: "D: 10 fish",
            hint: "What has not happened to the fish?",
            image: "images/riddleimg-5.jpg",
          },
          {
            text: "How much dirt is in a hole 6 and a half feet wide, 8 feet deep, and 5 feet long?",
            answer1: "A: 0 cubic feet",
            answer2: "B: 320 cubic feet",
            answer3: "C: 240 cubic feet",
            answer4: "D: 480 cubic feet",
            correctAnswer: "A: 0 cubic feet",
            hint: "How do you traditionally make a hole?",
            image: "images/riddleimg-6.jpg",
          },
          {
            text: "I'm long when I'm young. I'm short when I'm old. and when there's no light, people think I'm gold. What am I?",
            answer1: "A: Money",
            answer2: "B: A Candle",
            answer3: "C: Friends",
            answer4: "D: The Sun",
            correctAnswer: "B: A Candle",
            hint: "I am a source of light and warmth.",
            image: "images/riddleimg-7.png",
          },
          {
            text: "It's more powerful than God. It's more evil than the devil. The poor have it. The rich need it. If you eat it, you'll die. What am I?",
            answer1: "A: Love",
            answer2: "B: Loneliness",
            answer3: "C: Nothing",
            answer4: "D: Friendship",
            correctAnswer: "C: Nothing",
            hint: "It's what you'll have if you fail to answer?",
            image: "images/riddleimg-8.jpg",
          },
        ],
      }
// Player Start: the game will always start with player1:
var player = game.player1;
var riddle = $('.riddle');
var begin = $('.intro');
var start = $('#start');
var scores = $('.scores');
var i = 0;
var currentQuestion;
var clonedGame = jQuery.extend(true, {}, game);

function colorChange() {
  $('#question').css({background: 'rgb(' + (Math.floor(Math.random() * 256/2)+256/2) + ',' + (Math.floor(Math.random() * 256/2)+256/2) + ',' + (Math.floor(Math.random() * 256/2)+256/2) + ')'})
  $('body').css({background: 'rgb(' + (Math.floor(Math.random() * 256/2)+256/2) + ',' + (Math.floor(Math.random() * 256/2)+256/2) + ',' + (Math.floor(Math.random() * 256/2)+256/2) + ')'})
  }

//Scores the correct player
function updateScore(player, points) {
if(player === game.player1) {
game.player1.score += points
} else if(player === game.player2) {
game.player2.score += points
  }
}

//initial riddle question
      function displayQuestion(index) {
        currentQuestion = game.questions[index];
        document.querySelector('#status').innerHTML = [i+1]+" out of 8 questions"
        console.log($('#question'))
        $('#question').text(game.questions[index].text)
        $('#answer1').text(game.questions[index].answer1)
        $('#answer2').text(game.questions[index].answer2)
        $('#answer3').text(game.questions[index].answer3)
        $('#answer4').text(game.questions[index].answer4)
        $('#image').attr('src', game.questions[index].image)
      }

//Randomizing the order
function getCurrentQuestion() {
  return currentQuestion;
}

function getRandomQuestion() {
  currentQuestion = game.questions[Math.floor(Math.random() * game.questions.length)];
  return currentQuestion;
}

function removeQuestion(index) {
  for (var i = 0; i < game.questions.length; i++) {
    var question = game.questions[i];
    if (question.text == index.text) {
      game.questions.splice(i, 1);
    }
  }
}


//Put up a start page, which would appear and explain the premise:
start.on('click',function() {
  $('.intro').css({'display': 'none'});
  riddle.css({'visibility': 'visible'});
  var random = Math.floor(Math.random() * game.questions.length);
  displayQuestion(random);
  colorChange();
});

//ANSWERS
//response to answers: tells them if they're right or not.
//If they guess wrong, give them a hint to help them out from the hint array.
//
$('#answer1').on('click', function() {
  if ($('#answer1').text() === currentQuestion.correctAnswer) {
  alert("Correct! Good job")
  var cq = getCurrentQuestion();
  removeQuestion(cq);
  updateScore(player, 2)
  nextQuestion();
  colorChange();
 } else {
    alert("Sorry. Incorrect. Hint: "+currentQuestion.hint)
   updateScore(player, -1)
 }
});

$('#answer2').on('click', function() {
  if ($('#answer2').text() === currentQuestion.correctAnswer) {
  alert("Congratulations! You're pretty good at this!");
  var cq = getCurrentQuestion();
  removeQuestion(cq);
  updateScore(player, 2)
  nextQuestion()
  colorChange();
 } else {
    alert("Sorry. Incorrect. Hint: "+currentQuestion.hint)
   updateScore(player, -1)
 }
});

$('#answer3').on('click', function() {
  if ($('#answer3').text() === currentQuestion.correctAnswer) {
  alert("Excellent! You got it right!")
  var cq = getCurrentQuestion();
  removeQuestion(cq);
  updateScore(player, 2)
  nextQuestion()
  colorChange();
 } else {
    alert("Sorry. Incorrect. Hint: "+currentQuestion.hint)
   updateScore(player, -1)
 }
});

$('#answer4').on('click', function() {
  if ($('#answer4').text() === currentQuestion.correctAnswer) {
  alert("That's Correct! Well Done!")
  var cq = getCurrentQuestion();
  removeQuestion(cq);
  updateScore(player, 2)
  nextQuestion()
  colorChange();
 } else {
    alert("Sorry. Incorrect. Hint: "+currentQuestion.hint)
   updateScore(player, -1)
 }
});

//Function for GOING ON TO THE NEXT LEVEL.
//pushing the next level button makes the next question text and answers appear.

function nextQuestion() {
  if (i === 7) {
    gameOver()
  } else {
  i++;
  var _rand = Math.floor(Math.random() * game.questions.length);
  displayQuestion(_rand);
  }
}
//GAME OVER
//Give a congratlation message & showcase the player's score.
function gameOver() {
    riddle.fadeOut("fast")
    scores.css({'visibility': 'visible'})
    playerScore()
    document.getElementById('fanfare').play()
}

//Resets the board for the next player
$('.newGame').on('click', function() {
  resetBoard()
  switchPlayer()
  scores.css({'visibility': 'hidden'})
  riddle.fadeIn("fast")
  i = 0;
  game.questions = clonedGame.questions;
  var _rand = Math.floor(Math.random() * game.questions.length);
  displayQuestion(_rand);
  colorChange();
})

$('.NextGame').on('click', function() {
  window.location.reload()
})

//Switch from player one to player two
function switchPlayer() {
  if(player === game.player1) {
    player = game.player2
  } else {
    player = game.player1
  }
}

function resetBoard() {
  if (player === game.player2) {
    game.player1.score = 0
    game.player2.score = 0
  }
}

//If both players playthrough, show player1 and player2's scores next to one another.
function playerScore() {
  if(player === game.player1){
      document.querySelector('#p1score').innerHTML = "Player 1 Score: "+game.player1.score
      document.querySelector('#p2score').innerHTML = ""
      document.querySelector('.newGame').innerHTML= "Next Player"
    } else {
  document.querySelector('#p1score').innerHTML = "Player 1 Score: "+game.player1.score
  document.querySelector('#p2score').innerHTML = "Player 2 Score: "+game.player2.score
  $('.newGame').css({'display': 'none'})
  $('.NextGame').css({'visibility': 'visible'})
  whoWon()
  }
}

//Announces which player wins
function whoWon() {
  if (game.player1.score < game.player2.score) {
    document.querySelector('#whoWon').innerHTML = "Player 2 Wins!"
  } else if (game.player1.score > game.player2.score) {
    document.querySelector('#whoWon').innerHTML = "Player 1 Wins!"
  } else {
    document.querySelector('#whoWon').innerHTML = "Both Players Tie!"
  }
}
