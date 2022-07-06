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
        clearFields()
    })
}

//api fetch by lat and lon
function latLonData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=7acb10b31a225ce5f6e678b28717604c`)
    .then(response => response.json())
    .then(data => {console.log(data)
        appendUVI(data)
        appendDay1(data)
        appendDay2(data)
        appendDay3(data)
        appendDay4(data)
        appendDay5(data)
    })
}

//appends city name to top of weather container
function appendCityName(data) {
    cityNameData = document.getElementById("city-name-heading")
    cityNameData.textContent = data.name
}

//appends temperature inside weather container
function appendTemperature(data) {
    temperatureData = document.getElementById("temperature-data")
    temperatureData.textContent = data.main.temp
}

//appends wind inside weather container
function appendWind(data) {
    windData = document.getElementById("wind-data")
    windData.textContent = data.wind.speed
}

//appends humidity inside weather container
function appendHumidity(data) {
    humidityData = document.getElementById("humidity-data")
    humidityData.textContent = data.main.humidity
}

//appends UVI inside weather container
function appendUVI(data) {
    uviData = document.getElementById("uvi-data")
    uviData.textContent = data.current.uvi
}

function appendDay1(data) {
    day1 = document.getElementById("day-one")
    day1.textContent = data.daily[0].temp.day
}

function appendDay2(data) {
    day2 = document.getElementById("day-two")
    day2.textContent = data.daily[1].temp.day
}

function appendDay3(data) {
    day3 = document.getElementById("day-three")
    day3.textContent = data.daily[2].temp.day
}

function appendDay4(data) {
    day4 = document.getElementById("day-four")
    day4.textContent = data.daily[3].temp.day
}

function appendDay5(data) {
    day5 = document.getElementById("day-five")
    day5.textContent = data.daily[4].temp.day
}




// clears the input field after search button is clicked
function clearFields() {
    document.querySelector(".form-control").value = "";
}