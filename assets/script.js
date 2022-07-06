//appends date
var date = moment().format("MMM Do, YYYY");
var dateContainer = document.getElementById("date-heading")
dateContainer.append(date)

var searchButton = document.querySelector(".btn")
searchButton.addEventListener("click", currentWeatherData)

// //api fetch by city
var userInput = document.querySelector(".form-control")
function currentWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&units=imperial&appid=7acb10b31a225ce5f6e678b28717604c`)
      .then(response => response.json())
      .then(data => {console.log(data);
        lat = data.coord.lat
        lon = data.coord.lon
        latLonData(lat, lon)
        appendCityName(data)
        appendTemperature(data)
        appendWind(data)
        appendHumidity(data)
    })
}

//api fetch by lat and lon
function latLonData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=7acb10b31a225ce5f6e678b28717604c`)
    .then(response => response.json())
    .then(data => {console.log(data)
        appendUVI(data)
    })
}

//appends city name to top of weather container
function appendCityName(data) {
    cityNameData = document.getElementById("city-name-heading")
    cityNameData.textContent = data.name
}

function appendTemperature(data) {
    temperatureData = document.getElementById("temperature-data")
    temperatureData.textContent = data.main.temp
}

function appendWind(data) {
    windData = document.getElementById("wind-data")
    windData.textContent = data.wind.speed
}

function appendHumidity(data) {
    humidityData = document.getElementById("humidity-data")
    humidityData.textContent = data.main.humidity
}

function appendUVI(data) {
    uviData = document.getElementById("uvi-data")
    uviData.textContent = data.current.uvi
}







//appends city name
// var searchButton = document.querySelector(".btn")
// function cityNameAppend() {
//     searchButton.addEventListener("click", function() {
//         userInput = document.querySelector(".form-control").value
//         cityNameContainer = document.getElementById("city-name-heading")
//         userInput = document.querySelector(".form-control").value
//         cityNameContainer.textContent = userInput //change this to data info once captured
//         clearFields()
//         currentWeatherData()
//     })
// }
// cityNameAppend()

// // clears the input field after search button is clicked
// function clearFields() {
//     document.querySelector(".form-control").value = "";
// }