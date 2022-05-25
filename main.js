
function addUsers() {
    player1Name = document.getElementById("player1NameInput").value;
    localStorage.setItem("player1Name", player1Name);
    player2Name = document.getElementById("player2NameInput").value;
    localStorage.setItem("player2Name", player2Name);
    window.location= ("gamePage.html");
}