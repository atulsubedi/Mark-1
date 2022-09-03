var readlinesync = require("readline-sync");
var userName = readlinesync.question("What is your name? ");


console.log("Welcome " + userName + " to this quiz let's see how well do you know me! ");
console.log("-----------------")

var score = 0;





var userQuestion = readlinesync.question("Where do I live? ");
var userAnswer = ("nepal");
if (userQuestion === userAnswer) {
  console.log("you are right");
  score = score + 1;


} else {
  console.log("you are wrong");
  score = score + 0;
}


console.log("-----------------")



var userTwo = readlinesync.question("How old am I? ");
var userAnswerTwo = ("15");

if (userTwo === userAnswerTwo) {
  console.log("you are right");
  score = score + 1;

} else {
  console.log("you are wrong");
  score = score + 0;
}


console.log("-----------------");


var userQuestionThree = readlinesync.question("What is my favorite food? ");
var userAnswerThree = ("goat meat");

if (userQuestionThree === userAnswerThree) {
  console.log("you are right");
  score = score + 1;

} else {
  console.log("you are wrong");
  score = score + 0;
}


console.log("-----------------")





var userQuestionFour = readlinesync.question("What is my favorite place? ");
var userAnswerFour = ("jomson");

if (userQuestionFour === userAnswerFour) {
  console.log("you are right");
  score = score + 1;

} else {
  console.log("you are wrong");
  score = score + 0;
}


console.log("-----------------")





var userQuestionFive = readlinesync.question("What is my favorite coffe? ");
var userAnswerFive = ("ice coffe");

if (userQuestionFive === userAnswerFive) {
  console.log("you are right");
  score = score + 1;

} else {
  console.log("you are wrong");
  score = score + 0;
}


console.log("-----------------")



var userQuestionSix = readlinesync.question("Which series i like the most? ");
var userAnswerSix = ("never have i ever");

if (userQuestionSix === userAnswerSix) {
  console.log("you are right");
  score = score + 1;

} else {
  console.log("you are wrong");
  score = score + 0;
}


console.log("-----------------")



var userQuestionSeven = readlinesync.question("Which fruit i like the most? ");
var userAnswerSeven = ("apple");

if (userQuestionSeven === userAnswerSeven) {
  console.log("you are right");
  score = score + 1;

} else {
  console.log("you are wrong");
  score = score + 0;
}


console.log("-----------------")




var userQuestionEight = readlinesync.question("Is rainny day my favourite day? ");
var userAnswerEight = ("yes");

if (userQuestionEight === userAnswerEight) {
  console.log("you are right");
  score = score + 1;

} else {
  console.log("you are wrong");
  score = score + 0;
}


console.log("-----------------")

var userQuestionNine = readlinesync.question("Which is my favourite season? ");
var userAnswerNine = ("winter");

if (userQuestionNine === userAnswerNine) {
  console.log("you are right");
  score = score + 1;

} else {
  console.log("you are wrong");
  score = score + 0;
}


console.log("-----------------")






var userQuestionTen = readlinesync.question("Which is my favourite team in fifa world cup? ");
var userAnswerTen = ("france");

if (userQuestionTen === userAnswerTen) {
  console.log("you are right");

  score = score + 1;
} else {
  console.log("you are wrong");
  score = score + 0;
}


console.log("-----------------")
console.log("Your score is:" + score);
console.log("---Quiz Ended---")