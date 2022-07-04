//variables to target and create elements
var date = moment().format("MMM Do, YYYY");

var weatherContainer = document.querySelector(".weather-container");
var weatherContent = document.createElement("p")
var cityName = document.createElement("h3");
var forecastContainer = document.querySelector(".forecast")
var forecastContent = document.createElement("h3")
var buttonContainer = document.querySelector(".button-container")
var searchButton = document.querySelector("#searchCity")
var userInput = document.querySelector(".form-control")

// creates and appends information to forecast container
cityName.textContent = "City Name:"
weatherContainer.append(cityName)
weatherContainer.append(date)
weatherContent.textContent = "icon, temperature, wind, humidity, UV index with color"
weatherContainer.append(weatherContent)
forecastContent.textContent = "5-Day Forecast:"
forecastContainer.append(forecastContent)


//adds on click event to search button and appends cities as buttons in the container
searchButton.addEventListener("submit", function(event) {
    event.preventDefault();
    var newCity = document.createElement("button")
    var userInput = document.querySelector(".form-control").value
    currentWeatherData(userInput)
    if (userInput == "") {
        var blankInput = document.querySelector(".blank-input")
        blankInput.textContent = "please enter a city"
    } else {
        newCity.textContent = userInput
        buttonContainer.append(newCity)
    } ClearFields();
    localStorage.setItem("city", JSON.stringify(userInput))
})

// clears the input field after search button is clicked
function ClearFields() {
    document.querySelector(".form-control").value = "";
}

//displays items in local storage
buttonContainer.textContent = JSON.parse(localStorage.getItem("city")) || []

//api fetch by city
function currentWeatherData(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7acb10b31a225ce5f6e678b28717604c`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        var lat = data.coord.lat
        var lon = data.coord.lon
        latLonData(lat, lon, cityName)
      })
    }

//api fetch by lat and lon
function latLonData(lat, lon, cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=7acb10b31a225ce5f6e678b28717604c`)
    .then(response => response.json())
    .then(data => console.log(data))
}