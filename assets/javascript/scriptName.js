$(document).ready(function() {

      //Variables

      var counter = 0
      var wins = 0
      var losses = 0

        //set variable for computer guess from 19-120

      function updateWins() {
          document.querySelector("#wins").html="Wins: " + wins;
        }

      function updateLosses() {
        document.querySelector("#losses").html="Losses: " + losses;
      }

      function computerGuess() {
        return Math.floor(Math.random() * 101 + 19);
        $("#computerGuess").html(targetNumber);
      }
      var computerGuessResult = computerGuess();

      // diamond 1 random formular with  result
      function diamond1() {
        return Math.floor(Math.random() * 11 + 1);
      }
      var diamond1Result = diamond1();

      // diamond2 random formula with result
      function diamond2() {
        return Math.floor(Math.random() * 11 + 1);
      }
      var diamond2Result = diamond2();
      // diamond 3 random formula with result
      function diamond3() {
        return Math.floor(Math.random() * 11 + 1);
      }
      var diamond3Result = diamond3();
      // diamond 4 random formula with result
      function diamond4() {
        return Math.floor(Math.random() * 11 + 1);
      }
      var diamond4Result = diamond4();

      function reset() {

      }

      var computerGuessResult = computerGuess();
      var diamonds = [diamond1Result, diamond2Result, diamond3Result, diamond4Result];
      // diamond random guess

      // should create gems to click on, this is the length of the new array that i created

      //activate processes we need for game resolution
      computerGuess();
      updateWins();
      updateLosses();

      //create a loop to get the render all the diamonds
      for (var i = 0; i < diamonds.length; i++) {

        // creates the space for the pictures
        var imageCrystal = $("<img>");
        //adds the class crystal image to the new img
        imageCrystal.addClass("crystal-image");
        // grabs the picture
        imageCrystal.attr("src", "assets/images/diamond"+ i +".png")
        //puts the image into the document
        imageCrystal.attr("data-crystalValue", JSON.stringify(diamonds[i]));
        $("#crystals").append(imageCrystal);
      }
      //activates click feature of crystal
      $("#crystals").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalValue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue
      });

      // Resolution (What happens if you win/lose)
      if (counter === computerGuess) {
          alert("You win!");
          win++;
          updateWins();
        }
        else if (counter >= computerGuess) {
          alert("You lose!!");
          lose++;
          updateLosses();
          reset();

        }
        // reset


      });
