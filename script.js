$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
  
    //call function for the new action button
    $('.learn-trick-button').click(clickedDisciplineButton);

  
    
  })
  
  // Add a variable "pet_info" equal to a object with the name (string), 
 // weight (number), and happiness (number) of your pet
  
  //set initial values for the keys and set this equal to variable "pet_info"

  //create objects using an object initializer (sytntax below:)
      //var obj = { property_1:   value_1,   // property_# may be an identifier...
     //             property_2:   value_2
    //             }; 
    //trying to fix display of name and discipline attribute
    var pet_info = {
      name: "Stryker", 
      weight: "12", 
      happiness: "5",
      discipline: 3,  //added the new behavior and set initial value
    };
  


   // When your pet receives a treat, add to its happiness 
  //  and weight
    function clickedTreatButton() {
      
      // Increase pet weight
      
      //for some reason, it was not adding correctly: 101 instead of 11
      //on console, I did typeof pet_info.weight and it was a string
      // pet_info.happiness was also a string
      
      //to convert a string to a number is to use the unary + operator  (MDN)
      pet_info.weight = +pet_info.weight +1;
      
      // Increase pet happiness
      //to convert a string to a number is to use the unary + operator  (MDN)
      pet_info.happiness = +pet_info.happiness + 2;
      
      //Add a notification after each button press with a comment from your pet.
      //alert("I love treats!!! It's all I think about!");
      
      checkAndUpdatePetInfoInHtml(); 
    }
    


   // When your pet plays, add to its happiness 
  //  and reduce its weight
    function clickedPlayButton() {
      
      // Increase pet happiness
      //to convert a string to a number is to use the unary + operator (MDN)
      pet_info.happiness = +pet_info.happiness + 2;
      
      // Decrease pet weight
      //for some reason, this worked without conerting the string to a number
      pet_info.weight = pet_info.weight - 2;
      //Add a notification after each button press with a comment from your pet.
      //alert("I love playing with you! Give me more attention!!!");
      
      checkAndUpdatePetInfoInHtml();
    }
    

    // When your pet exercises, reduce it's happiness 
   //  and weight
    function clickedExerciseButton() {
      
      // Decrease pet happiness
      //for some reason, this worked without conerting the string to a number
        pet_info.happiness = pet_info.happiness - 2;
      
      // Decrease pet weight
      //for some reason, this worked without conerting the string to a number
      pet_info.weight = pet_info.weight - 1;
      
      //Add a notification after each button press with a comment from your pet.
     // alert("I don't like this! Playing is better. Let's take a nap.");
    
      checkAndUpdatePetInfoInHtml();
    }


  //Add a new action button
  //Add a new behavior that correlates with the new button you added. 
 //You can add it below the happiness text in the html

// when shinx is disciplined, his happiness and discipline increase by 1
    function clickedDisciplineButton() {
      
      // Increase pet happiness
      //to convert a string to a number is to use the unary + operator (MDN)
      pet_info.happiness = +pet_info.happiness + 1;
      
      // Increase pet discipline
      //to convert a string to a number is to use the unary + operator (MDN)
      pet_info.discipline = +pet_info.discipline + 1;
      
      //Add a notification after each button press with a comment from your pet.
      //alert("I like learning new tricks to do!!");
      
      checkAndUpdatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      
      // Add conditional so if weight is lower than zero, set it back to zero
      //Fix key bug to make sure keys can't go below zero (can use conditional)
      if (pet_info.weight < 0) {
        pet_info.weight  = 0;
      }
      
      if (pet_info.happiness< 0) {
        pet_info.happiness = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info dictionary
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      //update the current value of the new action/behavior
      $('.discipline').text(pet_info['discipline']);
    }











//functions for displaying the messages/notifications each time the button in clicked
//looks for the elementbyid and displays the message for 3 seconds

//the variable x in each function grabs the notifications/statements 
// for each function/button by the id name
function treatFunction() {
   // className property of the element interface gets and sets the 
    //value of the class attribute of the specified element.
    //"show" is a string variable representing the class or 
    //space-separated classes of the current element.
    var x = document.getElementById("treats");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
  }


  function playFunction() {
    var x = document.getElementById("play");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
  }



  function exerciseFunction() {
    var x = document.getElementById("exercise");
    x.className = "show";
    
    //Calls a function or executes a code snippet after specified delay.
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
  }



  function disciplineFunction() {
    var x = document.getElementById("discipline");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
  }
  
