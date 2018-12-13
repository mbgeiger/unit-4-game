

    //global variables
    var randomCrystal;
    var win = 0;
    var loss = 0;
    var totalScore;
    var previous = 0;


    //function to start game

    var start = function () {
        
    
        //function to find a random number and diplay to user
    
       var randomStartNumber = Math.floor(Math.random() * 102) + 19;
       $("#rando").html(randomStartNumber);

       console.log(randomStartNumber)
    
    //function to assign random numbers to the crystal
    for(var i = 0; i < 4; i++){

        var randomCrystal = Math.floor(Math.random() * 12)+1;

        console.log(randomCrystal);

        var crystal = $("<div>");

            crystal.attr({
                        "class": 'crystal',
                        "random-number": randomCrystal
        });
       

        $(".crystals").append(crystal);


        console.log("hi!!");
    }
//add to score when crystal is clicked
$(".crystal").click( function () {

    var pickedCrystal = parseInt($(this).attr('random-number'));

    previous += pickedCrystal;

    if (previous > randomStartNumber){
        alert('You Lose');
        console.log('You Lose');
        $('#rando').html('You Lose');
        loss++;
        $('#Losses').html(`Losses: ${loss}`);
    } 
    else if (previous === randomStartNumber){
        alert('You Win!');
        console.log('You Win!');
        $('#rando').html('You Win!');
        win++;
        $('#Wins').html(`Wins: ${win}`);



    }

    console.log(previous);

});



    
    
    }

//pseudo code

//on page load a random number should be generated and displayed in the div 3.1 column with value  between 19-120

//4 crystals will be displayed in the 5th row in the 4 columns with value 1 - 12
//all crystals will have a random number
//after a win or loss every crystal will get a new random rumber

//function for player to click on one of the 4 crystals and it will add some points to the players total score counter which is the last row 6.1 div

//The player will win when the total score matches the random number first generated.  The player loses when score goes above the random number genrated

//Restart once player wins and loses setting score back to 0, record the win/loss and generate new random number
























