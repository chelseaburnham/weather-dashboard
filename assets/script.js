//creates and appends city name, date, and information to weather container
var date = moment().format("MMM, Do, YYYY");
var weatherContainer = document.querySelector(".weather-container");
var cityName = document.createElement("h3");
cityName.textContent = "City Name:"
weatherContainer.append(cityName)
weatherContainer.append(date)
var weatherContent = document.createElement("p")
weatherContent.textContent = "icon, temperature, wind, humidity, UV index with color"
weatherContainer.append(weatherContent)

// creates and appends information to forecast container
var forecastContainer = document.querySelector(".forecast")
var forecast = document.createElement("h3")
forecast.textContent = "5-Day Forecast:"
forecastContainer.append(forecast)

// adds on click event to search button and appends cities as buttons in the container
var searchButton = document.querySelector(".btn")
searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    var buttonContainer = document.querySelector(".button-container")
    var newCity = document.createElement("button")
    var userInput = document.querySelector(".form-control").value

    if (userInput == "") {
        userInput = document.getElementsByName('city')[0].placeholder = 'Please enter a city';
    } else {
        newCity.textContent = userInput
        buttonContainer.append(newCity)
    } ClearFields();
    localStorage.setItem("city", userInput)
})

// clears the input field after search button is clicked
function ClearFields() {
    document.querySelector(".form-control").value = "";
}

//displays info from local storage to the page
function displayStorage() {
    var userInput = document.querySelector(".form-control").value
    var buttonContainer = document.querySelector(".button-container")
    // userInput = localStorage.getItem("city")
    for (var i=0; i < userInput.length; i++) {
        userInput = localStorage.getItem("city")
    }

}

displayStorage()
