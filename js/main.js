//Laura Reseigh

// Fantastic job on this homework assignment, Laura! I love that you added an else statement that covered any other inputs that didn't meet the original requirements. Your code works smoothly and also has the added benefit of giving feedback with colors on the input field to indicate whether or not the input was registered correctly. Way to go! See my inline notes for a few thoughts.

$(document).ready(function(){
console.log("Ready");
// Good job getting the document.ready function working! I would remove the console logs once you've confirmed that it's working, though; typically it is more of a testing tool and you want to get rid of them when it's in production

  //set val to store user input
  var city = $('input:text').val();
  //not sure this is right?
  // You don't seem to be using this at all; you are redefining city lower down in your code which is overwriting this entirely. The way you would write it is $('input[type='text']').val(), but you don't need it since you've found another way to do it.

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
        "color":"blue",
        "text-size": "18px"
      });
    // Typically we would write this as $("input[type='text']") but this seems to work!
    // Also, you want to remove that trailing comma after the 18px; it seems to work anyways, but that is the way you structure the .css({ }) inputs

    // Note - test input with console.log(city)
    // I love that you used console.log(city) to confirm! That is the best way to code; always check while you go along.

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

      // I LOVE that you used an else statement to catch the inputs that do not meet any of your previous requirements. This is an error handling method that is used constantly in the real world; and you did a great job!

      //How do I change the input text back to gray when user types new input?
        // You would need another event listener that fires when someone types inside the input field; you can use the jQuery method .keypress(). See my example below!


      $("input:text").val("City not found, try another city.")
      console.log("invalid entry.")
      }

      //not sure what exactly "Get the first element from an attribute name using  $.attr()" means or does. Did not inclue this in my JS.


    //end of on click
    });

    // This is the example code for changing the text back to grey when a user types a new input

    $( "input[type='text']" ).keypress(function() {
      $( "input[type='text']").css({
        "color":"grey"
      });
    });

//end document ready
});
