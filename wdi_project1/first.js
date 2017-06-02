      var game = {
        player1: {},
        player2: {},
        score=0
        questions: [
          {
            text: "When I am unknown, I am something.<br> But when I am known, I become nothing<br>What am I?",
            answer1: "A: A Riddle",
            answer2: "B: A Secret",
            answer3: "C: A Punchline",
            answer4: "D: A Surprise",
          },
          {
            text: "A Man builds a house where all four sides face North.<br>A bear walks by the house<br>What color is the bear?",
            answer1: "A: brown",
            answer2: "B: white",
            answer3: "C: black",
            answer4: "D: Not Applicable",
          },
          {
            text: "How much dirt is in a hole 6 and a half feet wide, 8 feet deep, and 5 feet long?",
            answer1: "A: 240 cubic feet",
            answer2: "B: 320 cubic feet",
            answer3: "C: 0 cubic feet",
            answer4: "D: 480 cubic feet",
          },
          {
            text: "I’m rarely touched but often held and if you’re wise you’ll use me well. What am I?",
            answer1: "A: Tounge",
            answer2: "B: Mind",
            answer3: "C: Hand",
            answer4: "D: Heart",
          },
          {
            text: "An diesel train is heading North at 100mph, while a 40mph wind blows East. What direction does the smoke blow?",
            answer1: "A: South",
            answer2: "B: No Direction",
            answer3: "C: East",
            answer4: "D: West",
          },
          {
            text: "It's more powerful than God. It's more evil than the devil. The poor have it. The rich need it. If you eat it, you'll die. What am I?",
            answer1: "A: Love",
            answer2: "B: Lonliness",
            answer3: "C: Nothing",
            answer4: "D: Friendship",
          },
        ]
//hints
    var hints[
        "What are you solving right now",
        "Polar bears only live at the North Pole",
        "Its in your head",
        "Where does the smoke from a diesel come from",
        "It's what you'll have if you fail to answer",
      ]
      }
var next = $('.next')
var riddle = $('.riddle')

//answer key
      game.questions[0].correctAnswer = game.questions[0].answer1
      game.questions[1].correctAnswer = game.questions[1].answer4
      game.questions[2].correctAnswer = game.questions[2].answer1
      game.questions[3].correctAnswer = game.questions[3].answer1
      game.questions[4].correctAnswer = game.questions[4].answer2
      game.questions[5].correctAnswer = game.questions[5].answer3

    // player start: the game will always start with player1:
      game.currentPlayer = game.player1
//initial riddle question
      function displayQuestion(index) {
        $('#question').text(game.questions[index].text)
        $('#answer1').text(game.questions[index].answer1)
        $('#answer2').text(game.questions[index].answer2)
        $('#answer3').text(game.questions[index].answer3)
        $('#answer4').text(game.questions[index].answer4)
      }

//response to answers
// if $('click', game.questions[i].correctAnswer) {
//   return true
//    score +=2
//   alert("Congrats, lets move on to the next level")
// }  else {
//     return false
//     alert("Sorry. Incorrect: Hint: "+game.hint[i].text)
//    score-=1
// }
// }

//fucntion for on to next level
//next.addEventListener("click", nextQuestion);
function nextQuestion() {
  for(i=0; i < game.questions.length; i++)
  $('riddle')replaceWith(game.questions[i+1])
}

//switch players when reaching end.
if(riddle.text == game.questions[4]) {
  next.on('click', nextPlayer)
  $('game.questions')[0].reset();
} else {
next.on('click', nextQuestion)}


function nextPlayer() {
  if(game.currentPlayer == game.player1) {
    game.currentPlayer = game.player2
  } else {
    game.currentPlayer = game.player1
  }
}
