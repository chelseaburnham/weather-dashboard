//variables to target and create elements
var date = moment().format("MMM Do, YYYY");

var weatherContainer = document.querySelector(".weather-container");
var weatherContent = document.createElement("p")
var cityName = document.createElement("h3");
var forecastContainer = document.querySelector(".forecast")
var forecastContent = document.createElement("h3")
var buttonContainer = document.querySelector(".button-container")
var searchButton = document.querySelector(".btn")
var userInput = document.querySelector(".form-control")

// creates and appends information to forecast container
cityName.textContent = "City Name:"
weatherContainer.append(cityName)
weatherContainer.append(date)
weatherContent.textContent = "icon, temperature, wind, humidity, UV index with color"
weatherContainer.append(weatherContent)
forecastContent.textContent = "5-Day Forecast:"
forecastContainer.append(forecastContent)

// adds on click event to search button and appends cities as buttons in the container
searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    var newCity = document.createElement("button")
    var userInput = document.querySelector(".form-control").value

    if (userInput == "") {
        var extraText = document.querySelector(".extra-text")
        extraText.textContent = "please enter a city"
        //how do I get this text to disappear once a new city is searched????????????????????????????????????????
    } else {
        newCity.textContent = userInput
        buttonContainer.append(newCity)
    } ClearFields();
    //how do I get this to persist on the page?????????????????????????????????????????????????????????????????????
    localStorage.setItem("city", userInput)
})

// clears the input field after search button is clicked
function ClearFields() {
    document.querySelector(".form-control").value = "";
}

//displays items in local storage
for (var i=0; i<localStorage.length; i++) {
    userInput = localStorage.getItem("city")
}