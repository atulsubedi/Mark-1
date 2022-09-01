var readlinesync = require("readline-sync");
var userName = readlinesync.question("What is your name? ");
console.log("Welcome " + userName + " to this quiz let's see how well do you know me! ");
console.log("-----------------")






var readlinesync = require("readline-sync");
var userQuestion = readlinesync.question("Where do I live? ");
var userAnswer = ("nepal");
var score = 0;
if (userQuestion === userAnswer) {
  console.log("you are right");


} else {
  console.log("you are wrong");

}


console.log("-----------------")



var userTwo = readlinesync.question("How old am I? ");
var userAnswerTwo = ("15");
var score = 0;
if (userTwo === userAnswerTwo) {
  console.log("you are right");


} else {
  console.log("you are wrong");

}


console.log("-----------------");


var userQuestionThree = readlinesync.question("What is my favorite food? ");
var userAnswerThree = ("goat meat");
var score = 0;
if (userQuestionThree === userAnswerThree) {
  console.log("you are right");


} else {
  console.log("you are wrong");

}


console.log("-----------------")





var userQuestionFour = readlinesync.question("What is my favorite place? ");
var userAnswerFour = ("jomson");
var score = 0;
if (userQuestionFour === userAnswerFour) {
  console.log("you are right");


} else {
  console.log("you are wrong");

}


console.log("-----------------")





var userQuestionFive = readlinesync.question("What is my favorite coffe? ");
var userAnswerFive = ("ice coffe");
var score = 0;
if (userQuestionFive === userAnswerFive) {
  console.log("you are right");


} else {
  console.log("you are wrong");

}


console.log("-----------------")
console.log("---Quiz Ended---")