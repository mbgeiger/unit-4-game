

    //global variables
    var randomCrystal;
    var win;
    var loss;
    var totalScore;
    
    for(var i = 0; i < 4; i++){

        var crystal = $("<div>");

            crystal.attr("class", 'crystal');
       

        $(".crystals").append(crystal);


        console.log("hi!!");
    }

    //function to find a random number and diplay to user
    
        Math.floor(Math.random() * 120) + 19;
    


//pseudo code

//on page load a random number should be generated and displayed in the div 3.1 column with value  between 19-120

//4 crystals will be displayed in the 5th row in the 4 columns with value 1 - 12
//all crystals will have a random number
//after a win or loss every crystal will get a new random rumber

//function for player to click on one of the 4 crystals and it will add some points to the players total score counter which is the last row 6.1 div

//The player will win when the total score matches the random number first generated.  The player loses when score goes above the random number genrated

//Restart once player wins and loses setting score back to 0, record the win/loss and generate new random number
























