var game = {
        player1: {},
        player2: {},
        questions: [
          {
            text: "When I am unknown, I am something. But when I am known, I become nothing. What am I?",
            answer1: "A: A Riddle",
            answer2: "B: A Secret",
            answer3: "C: A Punchline",
            answer4: "D: A Surprise",
          },
          {
            text: "A Man builds a house where all four sides face North. A bear walks by the house. What color is the bear?",
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
            answer1: "A: Hand",
            answer2: "B: Mind",
            answer3: "C: Tounge",
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
        ],
//hints
        hint: [
        "What are you solving right now?",
        "Polar bears only live at the North Pole?",
        "How do you traditionally make a hole?",
        "It's in your head?",
        "Where does the smoke from a diesel come from?",
        "It's what you'll have if you fail to answer?",
        ]
      }
var score = 0
var next = $('.next')
var riddle = $('.riddle')
var begin = $('.intro')
var start = $('#start')
//Answer Key
var answers = [game.questions[0].answer1, game.questions[1].answer4, game.questions[2].answer1,
game.questions[3].answer3, game.questions[4].answer2, game.questions[5].answer3]

      // game.questions[0].correctAnswer = game.questions[0].answer1
      // game.questions[1].correctAnswer = game.questions[1].answer4
      // game.questions[2].correctAnswer = game.questions[2].answer1
      // game.questions[3].correctAnswer = game.questions[3].answer3
      // game.questions[4].correctAnswer = game.questions[4].answer2
      // game.questions[5].correctAnswer = game.questions[5].answer3

// Player Start: the game will always start with player1:
      game.currentPlayer = game.player1
//initial riddle question
      function displayQuestion(index) {
        console.log($('#question').val());
        $('#question').text(game.questions[index].text)
        $('#answer1').text(game.questions[index].answer1)
        $('#answer2').text(game.questions[index].answer2)
        $('#answer3').text(game.questions[index].answer3)
        $('#answer4').text(game.questions[index].answer4)
      }

//Put up a start page, which would appear and explain the premise:
//a challenge to see if anyone is clever enough to beat my challenge.
//after clikcing the screen, this fades away, and up comes the first question

start.on('click',function() {
  $('.intro').fadeOut()
  riddle.css({'visibility': 'visible'})
  next.css({'visibility': 'visible'})
  // document.css({background: cyan})
  displayQuestion(0)
});

//ANSWERS
//response to answers: tells them if they're right or not.
//If they guess wrong, give them a hint to help them out from the hint array.

// riddle.on('click', function() {
//   for (var i = 0; i < questions.length; i+1)
//   if(game.questions.answer[i] = answers[i]) {
//   alert("Congrats, lets move on to the next level")
//   score +=2
//  }  else {
//     alert("Sorry. Incorrect: Hint: "+hint[i])
//    score-=1
//  }
// });

//contingency?
// riddle.on('click', function() {
//   if ($('#answer1')= game.questions[0].answer1 || game.questions[2].answer1) {
//   alert("Congrats, lets move on to the next level")
//   score +=2
//  }  else {
//     alert("Sorry. Incorrect")
//    score-=1
//  }
// });
//
// riddle.on('click', function() {
//   if ($('#answer2')= game.questions[4].answer2) {
//   alert("Congrats, lets move on to the next level")
//   score +=2
//  }  else {
//     alert("Sorry. Incorrect")
//    score-=1
//  }
// });
//
// riddle.on('click', function() {
//   if ($('#answer3')= game.questions[3].answer3 || game.questions[5].answer3) {
//   alert("Congrats, lets move on to the next level")
//   score +=2
//  }  else {
//     alert("Sorry. Incorrect")
//    score-=1
//  }
// });
//
// riddle.on('click', function() {
//   if ($('#answer4')= game.questions[1].answer4) {
//   alert("Congrats, lets move on to the next level")
//   score +=2
//  }  else {
//     alert("Sorry. Incorrect")
//    score-=1
//  }
// });
//
//
// //HINTS
// //Possibly include a hint button, and link the hints into the questions array,
// //so that they may appear at the same time as the Q&A.
//
//
// //Function for GOING ON TO THE NEXT LEVEL.
// //pushing the next level button makes the next question text and answers appear.
// //
// next.on('click', function() {
// nextQuestion()})
// function nextQuestion() {
//   for(i=0; i < game.questions.length; i++)
//   displayQuestion(i+1)
// };

//GAME OVER
//Give a congratlations message. Showcase the player's score.
//If both players playthrough, show player1 and player2's scores next to one another.

//Switch players when reaching the end of the questions
//Also, resets the board for the next player
//
//
//
//
//function nextPlayer() {
//   if(game.currentPlayer == game.player1) {
//     game.currentPlayer = game.player2
//   } else {
//     game.currentPlayer = game.player1
//   }
// }

//REACH GOALS

//Put in a question or two that involve a prompt, rather than multiple choice.
//randomize the order the questions appear in.
//animations
