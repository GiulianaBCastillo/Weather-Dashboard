//const city = "London";
//const queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901" + city + "&appid=b8c9669d86917b59973649a1b979c9e4"

//$.ajax({
  //  url: queryURL,
   // method: "GET"
//})
//console.log(queryURL).then(function(response) {
//var tRow = $("<tr>");
//var temperature = $("<td>").text(response.temperature);
//var humidity = $("<td>").text(response.humidity);
//var windSpeed = $("<td>").text(response.windSpeed);

//tRow.append(temperature, humidity, windSpeed);
//$("tbody").append(tRow);
//})

// This .on("click") function will trigger the AJAX Call
$("#search-button").on("click", function(event) {

    event.preventDefault();
  
    // Here we grab the text from the input box
    var city = $("#search-input").val();
  
    // Here we construct our URL
    var queryURL = api.openweathermap.org/data/2.5/forecast?q= + city + "&appid=b8c9669d86917b59973649a1b979c9e4":
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $(".input-group-append").text(JSON.stringify(response));
    });
  
  });

  // Initial array of cities
var cities = ["London", "New York", "Madrid", "Birmingham"];

// Function for displaying cities data
function renderButtons() {

  // Deleting the cities buttons prior to adding new buttons
  // (this is necessary otherwise we will have repeat buttons)
  $("#history").empty();

  // Looping through the array of cities
  for (var i = 0; i < cities.length; i++) {

    // Then dynamicaly generating buttons for each city in the array.
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class
    a.addClass("city");
    // Adding a data-attribute with a value of the city at index i
    a.attr("data-name", cities[i]);
    // Providing the button's text with a value of the city at index i
    a.text(cities[i]);
    // Adding the button to the HTML
    $("#history").append(a);
  }
}

// This function handles events where one button is clicked
$("#search-button").on("click", function(event) {
  
  event.preventDefault();

  // This line will grab the text from the input box
  var city = $("#search-input").val().trim();
  // The city from the textbox is then added to our array
  cities.push(city);

  // calling renderButtons which handles the processing of our cities array
  renderButtons();
});

// Calling the renderButtons function at least once to display the initial list of cities
renderButtons();

  