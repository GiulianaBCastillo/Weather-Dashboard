function fetchCurrentWeather(lat,lon){
  console.log("fetching current weather")
  console.log(lat)
  console.log(lon)
}

// This .on("click") function will trigger the AJAX Call
$("#search-button").on("click", function(event) {

    event.preventDefault();
  
    // Here we grab the text from the input box
    var city = $("#search-input").val();
  
    // Here we construct our URL
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=b8c9669d86917b59973649a1b979c9e4"
    console.log(queryURL)
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log("APi response here")
      console.log(response)

      const lat = response.city.coord.lat;
      const lon = response.city.coord.lon;
      
      fetchCurrentWeather(lat,lon) 
        .then (function (response) {
          console.log(response);
          return response.JSON();
        });

       console.log(response.list[0].weather[0].description)
       var fiveDays = []
      for(let i=0; i < response.list.length;i+=8){
        fiveDays.push(response.list[i])
        console.log(fiveDays)
      }
      console.log("Final fiveDays Array")
      console.log(fiveDays)
      makeFiveDayForecast(fiveDays)
      //$(".input-group-append").text(JSON.stringify(response));
    }).catch(function(error){
      console.log(error)
    });
  
  });

function makeFiveDayForecast(data){
  console.log(data)

}

  // Initial array of cities
let cities = ["London", "New York", "Madrid", "Birmingham"];

// Function for displaying cities data
function renderButtons() {

  $("#history").empty();

  // Looping through the array of cities
  for (var i = 0; i < cities.length; i++) {

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

  