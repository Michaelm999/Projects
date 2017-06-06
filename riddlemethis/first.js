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
          },
          {
            text: "A Man builds a house where all four sides face North. A bear walks by the house. What color is the bear?",
            answer1: "A: brown",
            answer2: "B: white",
            answer3: "C: black",
            answer4: "D: Not Applicable",
            correctAnswer: "D: Not Applicable",
            hint: "Polar bears only live at the North Pole?",
          },
          {
            text: "How much dirt is in a hole 6 and a half feet wide, 8 feet deep, and 5 feet long?",
            answer1: "A: 0 cubic feet",
            answer2: "B: 320 cubic feet",
            answer3: "C: 240 cubic",
            answer4: "D: 480 cubic feet",
            correctAnswer: "A: 0 cubic feet",
            hint: "How do you traditionally make a hole?",
          },
          {
            text: "There are 10 fishes in a tank. 2 of them drowned, 4 swim away and 3 Died. How many fishes are still left in the tank?",
            answer1: "A: 5 fish",
            answer2: "B: 6 fish",
            answer3: "C: 1 fish",
            answer4: "D: 10 fish",
            correctAnswer: "D: 10 fish",
            hint: "What has not happened to the fish?",
          },
          {
            text: "I’m rarely touched but often held and if you’re wise you’ll use me well. What am I?",
            answer1: "A: Hand",
            answer2: "B: Mind",
            answer3: "C: Tounge",
            answer4: "D: Heart",
            correctAnswer: "C: Tounge",
            hint: "It's in your head?",
          },
          {
            text: "An electric train is heading North at 100mph, while a 40mph wind blows East. What direction does the smoke blow?",
            answer1: "A: South",
            answer2: "B: No Direction",
            answer3: "C: East",
            answer4: "D: West",
            correctAnswer: "B: No Direction",
            hint: "Where does the smoke from an electric come from?",
          },
          {
            text: "I'm long when I'm young. I'm short when I'm old. and when there's no light, people think I'm gold. What am I?",
            answer1: "A: Money",
            answer2: "B: A Candle",
            answer3: "C: Friends",
            answer4: "D: The Sun",
            correctAnswer: "B: A Candle",
            hint: "I am a source of light and warmth.",
          },
          {
            text: "It's more powerful than God. It's more evil than the devil. The poor have it. The rich need it. If you eat it, you'll die. What am I?",
            answer1: "A: Love",
            answer2: "B: Lonliness",
            answer3: "C: Nothing",
            answer4: "D: Friendship",
            correctAnswer: "C: Nothing",
            hint: "It's what you'll have if you fail to answer?",
          },
        ],
      }
// Player Start: the game will always start with player1:
var player = game.player1
var riddle = $('.riddle')
var begin = $('.intro')
var start = $('#start')
var scores = $('.scores')
var i = 0

//Scores the correct player
function updateScore(player, points) {
if(player === game.player1) {
game.player1.score += points
} else if(player === game.player2) {
game.player2.score += points
  }
}

//Answer Key
answers = [game.questions[0].answer1, game.questions[1].answer4, game.questions[2].answer1,
game.questions[3].answer4, game.questions[4].answer3, game.questions[5].answer2,
game.questions[6].answer2, game.questions[7].answer3]

//initial riddle question
      function displayQuestion(index) {
        $('#question').text(game.questions[index].text)
        $('#answer1').text(game.questions[index].answer1)
        $('#answer2').text(game.questions[index].answer2)
        $('#answer3').text(game.questions[index].answer3)
        $('#answer4').text(game.questions[index].answer4)
      }

//Put up a start page, which would appear and explain the premise:

start.on('click',function() {
  $('.intro').fadeOut()
  riddle.css({'visibility': 'visible'})
  displayQuestion(i)
});

//ANSWERS
//response to answers: tells them if they're right or not.
//If they guess wrong, give them a hint to help them out from the hint array.

$('#answer1').on('click', function() {
  if ($('#answer1').text() === game.questions[0].answer1 || $('#answer1').text() === game.questions[2].answer1) {
  alert("Correct. Lets move on to the next level")
  updateScore(player, 2)
  nextQuestion()
  $('#question').css({background: 'orange'})
 } else {
    alert("Sorry. Incorrect. Hint: "+game.questions[i].hint)
   updateScore(player, -1)
 }
});

$('#answer2').on('click', function() {
  if ($('#answer2').text() === game.questions[5].answer2 || $('#answer2').text() === game.questions[6].answer2) {
  alert("Congrats, You're pretty good at this. Lets move on to the next level")
  updateScore(player, 2)
  nextQuestion()
  $('#question').css({background: 'olivedrab'})
 } else {
    alert("Sorry. Incorrect. Hint: "+game.questions[i].hint)
   updateScore(player, -1)
 }
});

$('#answer3').on('click', function() {
  if ($('#answer3').text() === game.questions[4].answer3 || $('#answer3').text() === game.questions[7].answer3) {
  alert("Congrats! Lets move on to the next level")
  updateScore(player, 2)
  nextQuestion()
  $('#question').css({background: 'greenyellow'})
 } else {
    alert("Sorry. Incorrect. Hint: "+game.questions[i].hint)
   updateScore(player, -1)
 }
});

$('#answer4').on('click', function() {
  if ($('#answer4').text() === game.questions[1].answer4|| $('#answer4').text() === game.questions[3].answer4) {
  alert("Congrats, Lets move on to the next level")
  updateScore(player, 2)
  nextQuestion()
  $('#question').css({background: 'white'})
 } else {
    alert("Sorry. Incorrect. Hint: "+game.questions[i].hint)
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
  displayQuestion(i)
}
}
//GAME OVER
//Give a congratlations message. Showcase the player's score.

function gameOver() {
    riddle.css({'visibility': 'hidden'})
    scores.css({'visibility': 'visible'})
    playerScore()
}

//Also, resets the board for the next player
$('.newGame').on('click', function() {
  resetBoard()
  nextPlayer()
  scores.css({'visibility': 'hidden'})
  riddle.css({'visibility': 'visible'})
  i = 0
  displayQuestion(i)
})

//Switch players when reaching the end of the questions
function nextPlayer() {
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
  document.querySelector('.newGame').innerHTML= "Play Again"
  }
}

//REACH GOALS

//Put in a question or two that involve a prompt, rather than multiple choice.
//randomize the order the questions appear in.
//animations
//Lock the next level button until they reach
