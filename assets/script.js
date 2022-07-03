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


//how can I use submit instead of click to use the enter key as well?******************************************
// adds on click event to search button and appends cities as buttons in the container
searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    var newCity = document.createElement("button")
    var userInput = document.querySelector(".form-control").value

    if (userInput == "") {
        var blankInput = document.querySelector(".blank-input")
        blankInput.textContent = "please enter a city"
        //how do I get this text to disappear once a new city is searched?*************************************
    } else {
        newCity.textContent = userInput
        buttonContainer.append(newCity)
    } ClearFields();
    //how do I get this to persist on the page?*****************************************************************
    localStorage.setItem("city", JSON.stringify(userInput))
})

// clears the input field after search button is clicked
function ClearFields() {
    document.querySelector(".form-control").value = "";
}

//displays items in local storage
buttonContainer.textContent = JSON.parse(localStorage.getItem("city"))


  





// fetch('https://api.openweathermap.org/data/2.5/weather?q=London&{YOUR_API_KEY}&appid=7acb10b31a225ce5f6e678b28717604c')
//   .then(response => response.json())
//   .then(data => console.log(data));

//   api.openweathermap.org/data/2.5/weather?q=London&{YOUR_API_KEY}
//   7acb10b31a225ce5f6e678b28717604c