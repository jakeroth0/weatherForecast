// Tying HTML elements to JS variables
var form = document.querySelector("#form");
var userInput = document.querySelector("#userInput");
var searchBtn = document.querySelector("#searchBtn");
var recentSearches = document.querySelector("#recentSearches");
var todaysWeather = document.querySelector("#todaysWeather");
var fiveDayForecastCardnput = document.querySelector(".fiveDayForecastCard");
// API key given by openweathermap
var apiKey = "&appid=890919f21758bd5b25e56343a417bb71";
var apiStart =
  "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&lat=";
var apiCurrentStart =
  "https://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=";
var lonKey = "&lon=";
var apiCoorStart = "https://api.openweathermap.org/geo/1.0/direct?q=";
var coorLimit = "&limit=";
var limit = "";
// using day.js to get current time
var currentDate = dayjs().format("MM/DD/YY");
// cityArray is used to create key/strings as an object in local storage
var cityArray = [];
// if someone visits the webapp for the first time, or has cleared their local
// storage then this sets the key in local storage
if (localStorage.getItem("cityList") === null) {
  localStorage.setItem("cityList", JSON.stringify(cityArray));
//   if the key exists then this gets the string from local storage and
// turns it into an object which is placed into an array
} else {
  console.log("not null");
  var cityArray = JSON.parse(localStorage.getItem("cityList"));
//   this reverses the array order so that the most recent search
// is stored at the top of the button list
  var reverseCityArray = cityArray.reverse();
//   this loops over each array item and creates a button
  for (let i = 0; i < cityArray.length; i++) {
    const element = cityArray[i];
    var oldSearchBtn = document.createElement("button");
// the old search buttons get the inner text and use that to define city
    oldSearchBtn.onclick = function () {
      btnInnerText = this.innerText;
      console.log(btnInnerText);
      // This section is for the buttons because city var is defined by the buttons
      var city = btnInnerText;
// this function takes a city name and defines coordinates for the current
// weather funciton and also for the five day forcast function
      var getCoor = function () {
        apiCoor = apiCoorStart + city + coorLimit + 1 + apiKey;
        fetch(apiCoor).then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              document.querySelector("#currentCity").textContent = data[0].name;
              if (!data[0]) {
                return alert("City could not be found: " + city);
              }
              var lat = data[0].lat;
              var lon = data[0].lon;
// this takes the lat and lon that have been defined and gets a five day forecast
              var apiUrl = apiStart + lat + lonKey + lon + apiKey;
              fetch(apiUrl).then(function (response) {
                if (response.ok) {
                  response.json().then(function (data) {
                    console.log(data);
                    document.querySelector("#currentDate").textContent =
                      "(" + currentDate + ")";
                    //   each of these days takes data and changes the text content of the html
                    // Day 1
                    document.querySelector("#date1").textContent = dayjs()
                      .add(1, "day")
                      .format("MM/DD/YY");
                    document.querySelector("#icon1").src =
                      "https://openweathermap.org/img/w/" +
                      data.list[1].weather[0].icon +
                      ".png";
                    document.querySelector("#temp1").textContent =
                      "Temp: " + data.list[1].main.temp + " ºF";
                    document.querySelector("#wind1").textContent =
                      "Wind: " + data.list[1].wind.speed + " MPH";
                    document.querySelector("#humidity1").textContent =
                      "Humidity: " + data.list[1].main.humidity + " %";
                    // Day 2
                    document.querySelector("#date2").textContent = dayjs()
                      .add(2, "day")
                      .format("MM/DD/YY");
                    document.querySelector("#icon2").src =
                      "https://openweathermap.org/img/w/" +
                      data.list[2].weather[0].icon +
                      ".png";
                    document.querySelector("#temp2").textContent =
                      "Temp: " + data.list[2].main.temp + " ºF";
                    document.querySelector("#wind2").textContent =
                      "Wind: " + data.list[2].wind.speed + " MPH";
                    document.querySelector("#humidity2").textContent =
                      "Humidity: " + data.list[2].main.humidity + " %";
                    // Day 3
                    document.querySelector("#date3").textContent = dayjs()
                      .add(3, "day")
                      .format("MM/DD/YY");
                    document.querySelector("#icon3").src =
                      "https://openweathermap.org/img/w/" +
                      data.list[3].weather[0].icon +
                      ".png";
                    document.querySelector("#temp3").textContent =
                      "Temp: " + data.list[3].main.temp + " ºF";
                    document.querySelector("#wind3").textContent =
                      "Wind: " + data.list[3].wind.speed + " MPH";
                    document.querySelector("#humidity3").textContent =
                      "Humidity: " + data.list[3].main.humidity + " %";
                    // Day 4
                    document.querySelector("#date4").textContent = dayjs()
                      .add(4, "day")
                      .format("MM/DD/YY");
                    document.querySelector("#icon4").src =
                      "https://openweathermap.org/img/w/" +
                      data.list[4].weather[0].icon +
                      ".png";
                    document.querySelector("#temp4").textContent =
                      "Temp: " + data.list[4].main.temp + " ºF";
                    document.querySelector("#wind4").textContent =
                      "Wind: " + data.list[4].wind.speed + " MPH";
                    document.querySelector("#humidity4").textContent =
                      "Humidity: " + data.list[4].main.humidity + " %";
                    // Day 5
                    document.querySelector("#date5").textContent = dayjs()
                      .add(5, "day")
                      .format("MM/DD/YY");
                    document.querySelector("#icon5").src =
                      "https://openweathermap.org/img/w/" +
                      data.list[5].weather[0].icon +
                      ".png";
                    document.querySelector("#temp5").textContent =
                      "Temp: " + data.list[5].main.temp + " ºF";
                    document.querySelector("#wind5").textContent =
                      "Wind: " + data.list[5].wind.speed + " MPH";
                    document.querySelector("#humidity5").textContent =
                      "Humidity: " + data.list[5].main.humidity + " %";
                  });
                //   this fetches the current weather
                  var apiCurrentUrl =
                    apiCurrentStart + lat + lonKey + lon + apiKey;
                  fetch(apiCurrentUrl).then(function (response) {
                    if (response.ok) {
                      response.json().then(function (data) {
                        console.log(data);
                        document.querySelector("#currentTemp").textContent =
                          "Temp: " + data.main.temp + " ºF";
                        document.querySelector("#currentHumidity").textContent =
                          "Humidity: " + data.main.humidity + " %";
                        document.querySelector("#currentWind").textContent =
                          "Wind: " + data.wind.speed + " MPH";
                        document.querySelector("#currentIcon").src =
                          "https://openweathermap.org/img/w/" +
                          data.weather[0].icon +
                          ".png";
                        console.log(data.weather[0].icon);
                      });
                    }
                  });
                }
              });
            });
          }
        });
      };
    //   calls the get coor function
      getCoor();
    //   clears the form for a new search
      form.reset();
    };
    // this defines the old search buttons and appends the element
    let textOldSearchBtn = document.createTextNode(cityArray[i]);
    oldSearchBtn.appendChild(textOldSearchBtn);
    document
      .querySelector("#recentSearches")
      .appendChild(oldSearchBtn)
      .classList.add("btnCity");
  }
}
// the function run when the form is submitted
// it's similar to the code above but city is defined by what
// the user types into the form
console.log(cityArray);
var formSubmitHandler = function (event) {
  if (userInput.value == "") {
    alert("Enter a city name");
  }
  var city = userInput.value.trim();
  var cityArray = JSON.parse(localStorage.getItem("cityList"));
  if (!userInput.value == "") {
    cityArray.push(userInput.value.trim());
    localStorage.setItem("cityList", JSON.stringify(cityArray));
  }
  event.preventDefault();
  console.log(city);
  var getCoor = function () {
    apiCoor = apiCoorStart + city + coorLimit + 1 + apiKey;
    fetch(apiCoor).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          document.querySelector("#currentCity").textContent = data[0].name;
          if (!data[0]) {
            return alert("City could not be found: " + city);
          }
          var lat = data[0].lat;
          var lon = data[0].lon;
          var apiUrl = apiStart + lat + lonKey + lon + apiKey;
          fetch(apiUrl).then(function (response) {
            if (response.ok) {
              response.json().then(function (data) {
                console.log(data);
                document.querySelector("#currentDate").textContent =
                  "(" + currentDate + ")";
                // Day 1
                document.querySelector("#date1").textContent = dayjs()
                  .add(1, "day")
                  .format("MM/DD/YY");
                document.querySelector("#icon1").src =
                  "https://openweathermap.org/img/w/" +
                  data.list[1].weather[0].icon +
                  ".png";
                document.querySelector("#temp1").textContent =
                  "Temp: " + data.list[1].main.temp + " ºF";
                document.querySelector("#wind1").textContent =
                  "Wind: " + data.list[1].wind.speed + " MPH";
                document.querySelector("#humidity1").textContent =
                  "Humidity: " + data.list[1].main.humidity + " %";
                // Day 2
                document.querySelector("#date2").textContent = dayjs()
                  .add(2, "day")
                  .format("MM/DD/YY");
                document.querySelector("#icon2").src =
                  "https://openweathermap.org/img/w/" +
                  data.list[2].weather[0].icon +
                  ".png";
                document.querySelector("#temp2").textContent =
                  "Temp: " + data.list[2].main.temp + " ºF";
                document.querySelector("#wind2").textContent =
                  "Wind: " + data.list[2].wind.speed + " MPH";
                document.querySelector("#humidity2").textContent =
                  "Humidity: " + data.list[2].main.humidity + " %";
                // Day 3
                document.querySelector("#date3").textContent = dayjs()
                  .add(3, "day")
                  .format("MM/DD/YY");
                document.querySelector("#icon3").src =
                  "https://openweathermap.org/img/w/" +
                  data.list[3].weather[0].icon +
                  ".png";
                document.querySelector("#temp3").textContent =
                  "Temp: " + data.list[3].main.temp + " ºF";
                document.querySelector("#wind3").textContent =
                  "Wind: " + data.list[3].wind.speed + " MPH";
                document.querySelector("#humidity3").textContent =
                  "Humidity: " + data.list[3].main.humidity + " %";
                // Day 4
                document.querySelector("#date4").textContent = dayjs()
                  .add(4, "day")
                  .format("MM/DD/YY");
                document.querySelector("#icon4").src =
                  "https://openweathermap.org/img/w/" +
                  data.list[4].weather[0].icon +
                  ".png";
                document.querySelector("#temp4").textContent =
                  "Temp: " + data.list[4].main.temp + " ºF";
                document.querySelector("#wind4").textContent =
                  "Wind: " + data.list[4].wind.speed + " MPH";
                document.querySelector("#humidity4").textContent =
                  "Humidity: " + data.list[4].main.humidity + " %";
                // Day 5
                document.querySelector("#date5").textContent = dayjs()
                  .add(5, "day")
                  .format("MM/DD/YY");
                document.querySelector("#icon5").src =
                  "https://openweathermap.org/img/w/" +
                  data.list[5].weather[0].icon +
                  ".png";
                document.querySelector("#temp5").textContent =
                  "Temp: " + data.list[5].main.temp + " ºF";
                document.querySelector("#wind5").textContent =
                  "Wind: " + data.list[5].wind.speed + " MPH";
                document.querySelector("#humidity5").textContent =
                  "Humidity: " + data.list[5].main.humidity + " %";
              });
              var apiCurrentUrl = apiCurrentStart + lat + lonKey + lon + apiKey;
              fetch(apiCurrentUrl).then(function (response) {
                if (response.ok) {
                  response.json().then(function (data) {
                    console.log(data);
                    document.querySelector("#currentTemp").textContent =
                      "Temp: " + data.main.temp + " ºF";
                    document.querySelector("#currentHumidity").textContent =
                      "Humidity: " + data.main.humidity + " %";
                    document.querySelector("#currentWind").textContent =
                      "Wind: " + data.wind.speed + " MPH";
                    document.querySelector("#currentIcon").src =
                      "https://openweathermap.org/img/w/" +
                      data.weather[0].icon +
                      ".png";
                    console.log(data.weather[0].icon);
                  });
                }
              });
            }
          });
        });
      }
    });
  };
  getCoor();
  form.reset();
};
// This listens for a submit and then runs a function
form.addEventListener("submit", formSubmitHandler);