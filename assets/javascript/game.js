$(document).ready(function() {

    var random = Math.floor(Math.random()*101+19);

    $("#randomNumber").text(random);

    var gem1 = Math.floor(Math.random()*11+1);
    var gem2 = Math.floor(Math.random()*11+1);
    var gem3 = Math.floor(Math.random()*11+1);
    var gem4 = Math.floor(Math.random()*11+1);

    var tally = 0;
    var win = 0;
    var loss = 0;

    $("#win").text(win);
    $("#loss").text(loss);

    function reset() {
    random = Math.floor(Math.random()*101+19);
    console.log(random);

    $("#randomnNmber").text(random);
    
    var gem1 = Math.floor(Math.random()*11+1);
    var gem2 = Math.floor(Math.random()*11+1);
    var gem3 = Math.floor(Math.random()*11+1);
    var gem4 = Math.floor(Math.random()*11+1);

    tally = 0;
    $("#tally").text(tally);
}

function win() {
    alert("You Win!");
    win++;
    $("#win").text(win);
    reset();
}

function loss() {
    alert("You Lost!");
    loss++;
    $("#loss").text(loss);
    reset();
}

$("#gem1").on ("click", function() {
    tally = tally + gem1;
    console.log("New Tally " + tally);
    $("#tally").text(tally);

    if (tally == randomNumber) {
        win()
    }
    
    else if (tally > randomNumber) {
        loss()
    }

})

$("#gem2").on ("click", function() {
    tally = tally + gem2;
    console.log("New Tally" + tally);
    $("#tally").text(tally);

    if (tally == randomNumber) {
        win()
    }
    
    else if (tally > randomNumber) {
        loss()
    }
    
})

$("#gem3").on("click", function() {
    tally = tally + gem3;
    console.log("New Tally" + tally);
    $("#tally").text(tally);

    if (tally == randomNumber) {
        win()
    }
    
    else if (tally > randomNumber) {
        loss()
    }
})

$("#gem4").on("click", function() {
    tally = tally + gem4;
    console.log("New Tally" + tally);
    $("#tally").text(tally);

    if (tally == randomNumber) {
        win()
    }
    
    else if (tally > randomNumber) {
        loss()
    }

    });
});


    //Player guesses an answer with numbers instead of letters 

// Four crystals lined up in a row and serve as buttons, each crystal has a random, hidden value between 1-12

// Player receieves a random number, randomNumber, between 19-120 

//When player clicks a crystal, it adds a specific amount of points to the player's total score
    //hide point amount until player clicks a gem
    // upon click, update player score tally

// Player wins if tally matches computer guess from beginning of game

// Player loses if tally goes above the random number

// Game restarts when player wins or loses

// When game restarts, player should be given a new random number 

// When game restarts the gems should have new, hidden values 

// When the game restarts the users score and score counter should reset to zero

// Game should show the number of games the player wins and loses; refresh is not needed to restart the game //