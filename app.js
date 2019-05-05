document.getElementById("rock").onclick = function() {
    // alert("you choose rock")
    var choice = ["rock", "paper", "scissors"];
    var rand = Math.random();
    rand *= choice.length;
    rand = Math.floor(rand)

    if (rand == 2) {
        document.getElementById("computerAnswer").innerHTML = "Scissors"
        document.getElementById("result").innerHTML = "You Win!"
    }

    if (rand == 0) {
        document.getElementById("computerAnswer").innerHTML = "Rock"
        document.getElementById("result").innerHTML = "it's a draw!"
    }

    if (rand == 1) {
        document.getElementById("computerAnswer").innerHTML = "Paper"
        document.getElementById("result").innerHTML = "You Lose!"
    }
}

document.getElementById("paper").onclick = function() {
    // alert("you choose paper")
    
    var choice = ["rock", "paper", "scissors"];
    var rand = Math.random();
    rand *= choice.length;
    rand = Math.floor(rand)


    if (rand == 0) {
        document.getElementById("computerAnswer").innerHTML = "Rock"
        document.getElementById("result").innerHTML = "You Win!"
    }

    if (rand == 1) {
        document.getElementById("computerAnswer").innerHTML = "paper"
        document.getElementById("result").innerHTML = "It's a draw!"
    }

    if (rand == 2) {
        document.getElementById("computerAnswer").innerHTML = "Scissors"
        document.getElementById("result").innerHTML = "You Lose!"
    }
}

document.getElementById("scissors").onclick = function() {
    // alert("you choose scissors")
    var choice = ["rock", "paper", "scissors"];
    var rand = Math.random();
    rand *= choice.length;
    rand = Math.floor(rand)

    if (rand == 1) {
        document.getElementById("computerAnswer").innerHTML = "Paper"
        document.getElementById("result").innerHTML = "You Win!"
    }

    if (rand == 2) {
        document.getElementById("computerAnswer").innerHTML = "Scissors"
        document.getElementById("result").innerHTML = "It's a draw!"
    }

    if (rand == 0) {
        document.getElementById("computerAnswer").innerHTML = "Rock"
        document.getElementById("result").innerHTML = "You Lose!"
    }
}
