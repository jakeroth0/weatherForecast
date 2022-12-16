var form = document.querySelector('#form');
var userInput = document.querySelector('#userInput');
var searchBtn = document.querySelector('#searchBtn');
var recentSearches = document.querySelector('#recentSearches');
var todaysWeather = document.querySelector('#todaysWeather');
var fiveDayForecastCardnput = document.querySelector('.fiveDayForecastCard');
// var city = userInput.value.trim();
var apiKey = '&appid=890919f21758bd5b25e56343a417bb71';
var apiStart = 'http://api.openweathermap.org/data/2.5/forecast?lat=';
// var lat ='37.5385087'
var lonKey = '&lon=';
// var lon = '-77.43428'
var apiCoorStart = 'http://api.openweathermap.org/geo/1.0/direct?q=';
var coorLimit = '&limit=';
var limit = '';
// var apiUrl = apiStart + lat + lonKey + lon + apiKey;
// var apiCoor = apiCoorStart + city + coorLimit + limit + apiKey;

// the function run when the form is submitted
var formSubmitHandler = function (event) {
    var city = userInput.value.trim();
    event.preventDefault();
    console.log(city);
    var getCoor = function() {
        apiCoor = apiCoorStart + city + coorLimit + 1 + apiKey;
        fetch(apiCoor)
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function(data) {
                        // dataProcessor(data);
                        console.log(apiCoor);
                        console.log(data[0]);
                        console.log(data[0].lat);
                        console.log(data[0].lon);
                        var lat = data[0].lat;
                        var lon = data[0].lon;
                });
                }
            })
    };
    getCoor();

    var getWeather = function() {
        var lat ='37.5385087'
        var lon = '-77.43428'
        apiUrl = apiStart + lat + lonKey + lon + apiKey;
        fetch(apiUrl)
            .then(function (response) {
                console.log(apiUrl);
                // console.log(apiUrl);
                return response.json();
            })
    }
    getWeather();
    // console.log(lat);
    // console.log(lon);
    // var getWeather = function() {
    //     apiUrl = apiStart + 
    // }
    // getWeather();
    form.reset();
};
// function dataProcessor(data){
//     console.log(data);
//     var lat = data[0].lat;
//     var lon = data[0].lon;
//     console.log(lat);
//     console.log(lon);
//     var apiUrl = apiStart + lat + lonKey + lon + apiKey;
//     fetch(apiUrl)
//         .then(function (response) {
//             if (response.ok) {
//                 response.json().then(function(data) {
//                 console.log(apiUrl);
//             });
//             }
// })}; 


// var getCityCoordinates = function () {
//     fetch(apiCoor)
//         .then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (data) {
//                     // Need parameters for displayWeather
//                     displayWeather(data.list, weather);
//                 });
//             } else {
//                 alert('Error: '+ response.statusText);
//             }
//         });
// };

// This listens for a submit and then runs a function
form.addEventListener('submit', formSubmitHandler);