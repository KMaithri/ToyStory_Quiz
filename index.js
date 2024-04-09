var readlineSync = require("readline-sync");

console.log("The Toy Story Quiz");
console.log("----------------------")

var Username = readlineSync.question("What is your name? ");
console.log("")
console.log("Welcome " + Username + " how well do you know toy story? ");
console.log("")
console.log("Shall we begin??")
console.log("")

var highScore = {
  Name : "dummy",
  Score: 0
}
var questions = [
  {
    question: "How many toy story films are there? a) 2 b) 4 c) 6 ",
    answer: "b"
  },
  {
    question: "What's the name of Andy's evil, toy-torturing neighbor? a) Biff b) Joe c) Sid ",
    answer: "c"
  },
  {
    question: "Which of Andy's toys doesn't realize that he's a toy in the first movie? a) Woody b) Buzz c) Mr. Potato head ",
    answer: "b"
  },
  {
    question: "What's the name of Andy's piggy bank? a)Proky b) Hamm c) Mr. Bacon ",
    answer: "b"
  },
  {
    question: "This toy was supposed to be featured in the original Toy Story, but the studio couldn't get the rights. a) Snoopy b) Cabbage Patch kid c) Barbie",
    answer: "c"
  },
  
];
score = 0;
function play(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns.toLowerCase() === answer.toLowerCase()){
    console.log("You are correct!");
    score = score + 1;
    
  }else{
    console.log("You are wrong!");
    score = score - 1;
    
  }
  console.log("")
  console.log("Current Score = " + score);
  console.log("")
}

for(var i = 0; i < questions.length;i++){
  play(questions[i].question, questions[i].answer);
}

console.log("Your final score is " +score + " out of " + questions.length);

if(score > highScore.Score){
  highScore.Name = Username;
  highScore.Score = score;
}
console.log("")
console.log("High Score till now is by " + highScore.Name + " Score is " + highScore.Score);