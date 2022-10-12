playButton = document.querySelector("#play");
refreshButton = document.querySelector("#refresh");
var face1 = document.querySelectorAll(".face-1");
var face2 = document.querySelectorAll(".face-2");

function gen() {
    var ran1 = Math.floor(Math.random() * 6) + 1;
    var ran2 = Math.floor(Math.random() * 6) + 1;
    var win;
    if (ran1 > ran2) {
        win = "Player-1 has won the match!";
    }
    if (ran1 < ran2){
        win = "Player-2 has won the match!";
    }
    if (ran1 === ran2) {
        win = "It's a draw!"        
    }
    return [win, ran1, ran2];
}

playButton.addEventListener('click', function () {
    refreshButton.classList.remove("block");
    playButton.classList.add("block");
    var arr = gen()
    var numberOnTheFirstDice = arr[1] - 1;
    var numberOnTheSecondDice = arr[2] - 1;
    var winner = arr[0];
    document.querySelector("h2").innerHTML = winner;
    face1[0].classList.add("block");
    face1[numberOnTheFirstDice].classList.remove("block");
    face2[0].classList.add("block");
    face2[numberOnTheSecondDice].classList.remove("block");
});

refreshButton.addEventListener('click', function () {
    location.reload();
});
