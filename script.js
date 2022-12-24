var form = document.querySelector('#form');
var userInput = document.querySelector('#userInput');
var searchBtn = document.querySelector('#searchBtn');
var recentSearches = document.querySelector('#recentSearches');
var todaysWeather = document.querySelector('#todaysWeather');
var fiveDayForecastCardnput = document.querySelector('.fiveDayForecastCard');
// var city = userInput.value.trim();
var apiKey = '&appid=890919f21758bd5b25e56343a417bb71';
var apiStart = 'http://api.openweathermap.org/data/2.5/forecast?&units=imperial&lat=';
var apiCurrentStart = 'https://api.openweathermap.org/data/2.5/weather?&units=imperial&lat='
// var lat ='37.5385087'
var lonKey = '&lon=';
// var lon = '-77.43428'
var apiCoorStart = 'http://api.openweathermap.org/geo/1.0/direct?q=';
var coorLimit = '&limit=';
var limit = '';
var currentDate = dayjs().format('MM/DD/YY')
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
                        console.log(data[0].name);
                        document.querySelector('#currentCity').textContent = data[0].name;
                        console.log(data[0]);
                        if (!data[0]) {
                            return alert('City could not be found: ' + city)
                        }
                        console.log(data[0].lat);
                        console.log(data[0].lon);
                        var lat = data[0].lat;
                        var lon = data[0].lon;
                        // console.log(lat);
                        // console.log(lon);
                        var apiUrl = apiStart + lat + lonKey + lon + apiKey;
                        fetch(apiUrl)
                            .then(function (response) {
                                if (response.ok) {
                                    response.json().then(function(data) {
                                    console.log(data);
                                    document.querySelector('#currentDate').textContent = "(" + currentDate + ")";
                                    // Day 1
                                    document.querySelector('#date1').textContent = dayjs().add(1,'day').format('MM/DD/YY');
                                    document.querySelector('#icon1').src = "http://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png";
                                    document.querySelector('#temp1').textContent = "Temp: " + data.list[1].main.temp + " ºF";
                                    document.querySelector('#wind1').textContent = "Wind: " + data.list[1].wind.speed + " MPH";
                                    document.querySelector('#humidity1').textContent = "Humidity: " + data.list[1].main.humidity + " %";
                                    // Day 2
                                    document.querySelector('#date2').textContent = dayjs().add(2,'day').format('MM/DD/YY');
                                    document.querySelector('#icon2').src = "http://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png";
                                    document.querySelector('#temp2').textContent = "Temp: " + data.list[2].main.temp + " ºF";
                                    document.querySelector('#wind2').textContent = "Wind: " + data.list[2].wind.speed + " MPH";
                                    document.querySelector('#humidity2').textContent = "Humidity: " + data.list[2].main.humidity + " %";
                                    // Day 3
                                    document.querySelector('#date3').textContent = dayjs().add(3,'day').format('MM/DD/YY');
                                    document.querySelector('#icon3').src = "http://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png";
                                    document.querySelector('#temp3').textContent = "Temp: " + data.list[3].main.temp + " ºF";
                                    document.querySelector('#wind3').textContent = "Wind: " + data.list[3].wind.speed + " MPH";
                                    document.querySelector('#humidity3').textContent = "Humidity: " + data.list[3].main.humidity + " %";
                                    // Day 4
                                    document.querySelector('#date4').textContent = dayjs().add(4,'day').format('MM/DD/YY');
                                    document.querySelector('#icon4').src = "http://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png";
                                    document.querySelector('#temp4').textContent = "Temp: " + data.list[4].main.temp + " ºF";
                                    document.querySelector('#wind4').textContent = "Wind: " + data.list[4].wind.speed + " MPH";
                                    document.querySelector('#humidity4').textContent = "Humidity: " + data.list[4].main.humidity + " %";
                                    // Day 5
                                    document.querySelector('#date5').textContent = dayjs().add(5,'day').format('MM/DD/YY');
                                    document.querySelector('#icon5').src = "http://openweathermap.org/img/w/" + data.list[5].weather[0].icon + ".png";
                                    document.querySelector('#temp5').textContent = "Temp: " + data.list[5].main.temp + " ºF";
                                    document.querySelector('#wind5').textContent = "Wind: " + data.list[5].wind.speed + " MPH";
                                    document.querySelector('#humidity5').textContent = "Humidity: " + data.list[5].main.humidity + " %";
                                });
                                var apiCurrentUrl = apiCurrentStart + lat + lonKey + lon + apiKey;
                                fetch(apiCurrentUrl)
                                    .then(function (response) {
                                        if (response.ok) {
                                            
                                            response.json().then(function(data) {
                                                console.log(data);
                                                document.querySelector('#currentTemp').textContent = "Temp: " + data.main.temp + " ºF";
                                                document.querySelector('#currentHumidity').textContent = "Humidity: " + data.main.humidity + " %";
                                                document.querySelector('#currentWind').textContent = "Wind: " + data.wind.speed + " MPH";
                                                document.querySelector('#currentIcon').src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                                                console.log(data.weather[0].icon);
                                            });
                                        }
                                    })
                                }
                        })

                });
                }
            })
    };
    getCoor();
    

    
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