var player1Name= localStorage.getItem("player1Name");
var player2Name= localStorage.getItem("player2Name");
console.log(player1Name + player2Name)

var player1Score= 0;
var player2Score= 0;

var questionTurn = "player1"
var answerTurn = "player2"

document.getElementById("playerQuestion").innerHTML= "Question Turn- " + player1Name
document.getElementById("playerAnswer").innerHTML="Answer Turn- " + player2Name

document.getElementById("player1Score").innerHTML= player1Score
document.getElementById("player2Score").innerHTML=player2Score

 document.getElementById("player1Name").innerHTML= player1Name + ":"
 document.getElementById("player2Name").innerHTML= player2Name + ":"



 function send() {
     number1= document.getElementById("number1").value
     number2= document.getElementById("number2").value
     var inputBox = " <br> Answer: <input id='inputBox' type='text'>" 
     var button= "<br> <button id='checkButton' onclick='check()' class='btn btn-info'> check </button>"
     var question = number1 + " x " + number2
     var row = question + inputBox + button
     document.getElementById("output").innerHTML= row
     document.getElementById("number1").value= " "
     document.getElementById("number2").value= " "
 }

function check() {
    var getAnswer = document.getElementById("inputBox").value;
    var answer = number1 * number2
      if (answer == getAnswer) {
         if(answerTurn == "player1"){
            player1Score = player1Score + 1
            document.getElementById("player1Score").innerHTML = player1Score
         }
         else{
            player2Score = player2Score + 1
            document.getElementById("player2Score").innerHTML = player2Score
         }
         if (answerTurn == "player1") {
            answerTurn = "player2"
            questionTurn = "player1"
            document.getElementById("playerQuestion").innerHTML= "Question Turn- " + player1Name
            document.getElementById("playerAnswer").innerHTML="Answer Turn- " + player2Name
         }
         else {
            answerTurn = "player1"
            questionTurn = "player2"
            document.getElementById("playerQuestion").innerHTML= "Question Turn- " + player2Name
            document.getElementById("playerAnswer").innerHTML="Answer Turn- " + player1Name
         }
         document.getElementById("output").innerHTML = " "
      }

}