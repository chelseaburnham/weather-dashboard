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
        return;
    } else {
        newCity.textContent = userInput
        buttonContainer.append(newCity)
    } ClearFields()
})

// clears the input field after search button is clicked
function ClearFields() {
    document.querySelector(".form-control").value = "";
}

function localStorage() {

}