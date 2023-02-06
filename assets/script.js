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
  