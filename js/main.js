//Laura Reseigh

$(document).ready(function(){
console.log("Ready");


  //set val to store user input
  var city = $('input:text').val();
  //not sure this is right?


  //on click...
  var submitButton = $("#submit-btn");
    submitButton.on("click",function(event){
    
    //prevent form submission
    event.preventDefault();

     //call val to get string value of user input
    //store user input with var city
    var city = $("#city-type").val();

    //trying to keep input text gray

    $("input:text").css({
        "color":"gray",
        "text-size": "18px",
      });

    // Note - test input with console.log(city);

    //if user submits "New York" or "New York City" or "NYC" 
    if (city == "New York" || city == "New York City" || city == "NYC"){
    //change the bkgd to nyc.jpg
    $("body").css("background-image", "url(images/nyc.jpg)")
    }

    //if user submits "San Francisco" or "SF" or "Bay Area" 
    else if (city == "San Francisco" || city == "SF" || city == "Bay Area"){
    //change the bkgd to sf.jpg
    $("body").css("background-image", "url(images/sf.jpg)")
    }

    //if user submits "Los Angeles" or "LA" or "LAX" 
    else if (city == "Los Angeles" || city == "LA" || city == "LAX"){
    //change the bkgd to la.jpg
    $("body").css("background-image", "url(images/la.jpg)")
    }

    //if user submits "Austin" or "ATX" 
    else if (city == "Austin" || city == "ATX"){
    //change the bkgd to austin.jpg
    $("body").css("background-image", "url(images/austin.jpg)")
    }

    //if user submits "Sydney" or "SYD" 
    else if (city == "Sydney" || city == "SYD"){
    //change the bkgd to sydney.jpg
    $("body").css("background-image", "url(images/sydney.jpg)")
    }

    //if user submits invalid entry return ornage notification text and generic image
    else {
      $("body").css("background-image", "url(images/citipix_skyline.jpg)"),

       $("input:text").css({
        "color":"orange",
        "text-size": "18px",
      });
  
      //How do I change the input text back to gray when user types new input?


      $("input:text").val("City not found, try another city.")
      console.log("invalid entry.")
      }

      //not sure what exactly "Get the first element from an attribute name using  $.attr()" means or does. Did not inclue this in my JS.


    //end of on click
    });

//end document ready
});