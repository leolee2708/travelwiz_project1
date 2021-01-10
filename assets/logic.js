
$(document).ready(function () {

  let lng;
  let lat;
  let map;
  let beach = ["21.8733° N, 159.4542° W", "20.7370° N, 86.9688° W", "50.2246° N, 3.7846° W", "25.5070° N, 76.6321° W", "16.5414° S, 151.7376° W", "22.9871° S, 43.2048° W", "16.7705° S, 145.6717° E", "43.4832° N, 1.5586° W", "4.3715° S, 55.8272° E", "43.2677° N, 6.6407° E"];
  let mountain = ["50.1163° N, 122.9574° W", "47.0502° N, 8.3093° E", "39.1911° N, 106.8175° W", "42.6287° N, 0.1127° W", "1.6650° S, 78.6589° W", "47.5622° N, 13.6493° E", "46.6406° N, 11.6849° E", "44.2795° N, 73.9799° W", "36.2710° N, 136.8986° E", "61.8350° N, 6.8066° E"];
  let city = ["48.8566° N, 2.3522° E", "41.9028° N, 12.4964° E", "51.5074° N, 0.1278° W", "40.7128° N, 74.0060° W", "13.7563° N, 100.5018° E", "22.3193° N, 114.1694° E", "25.2048° N, 55.2708° E", "1.3521° N, 103.8198°", "55.7558° N, 37.6173° E", "52.3676° N, 4.9041° E"];
  let countyside = ["44.4654° N, 72.6874° W", "56.6228° N, 6.0723° W", "8.5069° S, 115.2625° E", "54.0469° N, 6.1902° W", "", "", "", "", "", ""];
  let cBeach = ["50.2246° N, 3.7846° W", "43.4832° N, 1.5586° W", "43.2677° N, 6.6407° E"];
  //let wBeach = ["43.4832° N, 1.5586° W", "43.2677° N, 6.6407° E"];
  let hBeach = ["21.8733° N, 159.4542° W", "20.7370° N, 86.9688° W", "25.5070° N, 76.6321° W", "16.5414° S, 151.7376° W", "22.9871° S, 43.2048° W", "16.7705° S, 145.6717° E", "4.3715° S, 55.8272° E"];
  let cMountain = ["50.1163° N, 122.9574° W", "47.0502° N, 8.3093° E", "39.1911° N, 106.8175° W", "42.6287° N, 0.1127° W",];
  //let wMountain = ["39.1911° N, 106.8175° W",];
  let hMountain = ["21.8733° N, 159.4542° W", "16.5414° S, 151.7376° W", "22.9871° S, 43.2048° W", "4.3715° S, 55.8272° E"];
  let cCity = ["43.4832° N, 1.5586° W", "43.2677° N, 6.6407° E", "47.0502° N, 8.3093° E", "51.5074° N, 0.1278° W", "42.6287° N, 0.1127° W"];
  //let wCity = ["43.4832° N, 1.5586° W", "43.2677° N, 6.6407° E", "51.5074° N, 0.1278° W"];
  let hCity = ["22.9871° S, 43.2048° W"];
  let cCountry = ["50.2246° N, 3.7846° W"];
  //let wCountrry = ["43.2677° N, 6.6407° E"];
  let hCountry = ["4.3715° S, 55.8272° E"];

  

 
  
    let lng = "-34.397";

    let beach = ["21.8733° N, 159.4542° W", "20.7370° N, 86.9688° W", "50.2246° N, 3.7846° W", "25.5070° N, 76.6321° W", "16.5414° S, 151.7376° W", "22.9871° S, 43.2048° W", "16.7705° S, 145.6717° E", "43.4832° N, 1.5586° W", "4.3715° S, 55.8272° E", "43.2677° N, 6.6407° E"];
    let mountain = ["50.1163° N, 122.9574° W", "47.0502° N, 8.3093° E", "39.1911° N, 106.8175° W", "42.6287° N, 0.1127° W", "1.6650° S, 78.6589° W", "47.5622° N, 13.6493° E", "46.6406° N, 11.6849° E", "44.2795° N, 73.9799° W", "36.2710° N, 136.8986° E", "61.8350° N, 6.8066° E"];
    let city = ["48.8566° N, 2.3522° E", "41.9028° N, 12.4964° E", "51.5074° N, 0.1278° W", "40.7128° N, 74.0060° W", "13.7563° N, 100.5018° E", "22.3193° N, 114.1694° E", "25.2048° N, 55.2708° E", "1.3521° N, 103.8198°", "55.7558° N, 37.6173° E", "52.3676° N, 4.9041° E"];
    let countyside = ["44.4654° N, 72.6874° W", "56.6228° N, 6.0723° W", "8.5069° S, 115.2625° E", "54.0469° N, 6.1902° W", "", "", "", "", "", ""];





  
    

  

// 	// When users click or enter the search button app will start to browse the cities
//   $(".search-button").on("click", loadCityFromSearch);
  
//   function loadCityFromSearch(e) {
//     e.preventDefault();
    
//     let city = "";
//     city = $("#searchId").val();
//    //remove white space from both front and ends of cities

//     var cityTrim = city.trim();
    
//     if (
//       cityTrim !== "" &&
//       typeof cityTrim === "string" &&
//       cityTrim.toLowerCase().match(/^[a-z ]+$/)
//     ) {
//       // call function to display all city data
//       loadCityData(city);
//       $("#searchId").val("");
//     } else {
//       //remove the invalid input entered by user
//       $("#searchId").val("");
//       // send an error message through the placeholder attr
//       $("#searchId").removeAttr("placeholder");
//       //message through the modal
//       showModal("Invalid city", "Please enter a valid city name");
//       //	And class to change the placeholder color
//       $("#searchId").addClass("placeColor");
//     }
//   }
// })
// function loadCityWeather(activeCityData) {
// 	$("#icon").empty();
// 	//API key
// 	var key = "";
//   //HOW many Days forecast user wants? 2? 5?
  
// 	var days = 2;
	
// 	var queryUrl = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${activeCityData.place_name}&days=${days}`;

// 	$.getJSON(queryUrl, function (json) {
// 		var cityName = json.location.name;
// 		var date = new Date(json.location.localtime).toDateString();
// 		var iconUrl = "https:" + json.forecast.forecastday[0].day.condition.icon;
// 		var uv = json.current.uv;

// 		//display the json data on the page
// 		$("#icon").append(`<img src="${iconUrl}">`);
// 		$("#current-city").html(`${cityName}`);
// 		$("#current-date").text(`${date}`);
// 		$("#temp").text(" " + json.current.temp_f + " °F");
// 		$("#humidity").text(" " + json.current.humidity + " %");
// 		$("#uv-index").text("  " + uv);
// 	});
// }

