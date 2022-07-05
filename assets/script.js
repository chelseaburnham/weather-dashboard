//appends date
var date = moment().format("MMM Do, YYYY");
var dateContainer = document.getElementById("date-heading")
dateContainer.append(date)

var userInput = document.querySelector(".form-control").value
var searchButton = document.querySelector(".btn")

//appends city name
function cityNameAppend() {
    searchButton.addEventListener("click", function() {
        cityNameContainer = document.getElementById("city-name-heading")
        userInput = document.querySelector(".form-control").value
        cityNameContainer.textContent = userInput
        clearFields()
        localStorageData()
        currentWeatherData()
        // showData()
    })
}
cityNameAppend()

// clears the input field after search button is clicked
function clearFields() {
    document.querySelector(".form-control").value = "";
}

//adds items to local storage and appends them to the button container
buttonContainer = document.querySelector(".button-container")
function localStorageData() {
    localStorage.setItem("city", userInput)
}
buttonContainer.textContent = localStorage.getItem("city") || []

// //api fetch by city
function currentWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=7acb10b31a225ce5f6e678b28717604c`)
      .then(response => response.json())
      .then(data => {console.log(data);
        lat = data.coord.lat
        lon = data.coord.lon
        latLonData(lat, lon)
    })
}

//api fetch by lat and lon
function latLonData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=7acb10b31a225ce5f6e678b28717604c`)
    .then(response => response.json())
    .then(data => {console.log(data)
    })
}


