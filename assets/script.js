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
        uvIndex(data)
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
    temperatureData.textContent = "Temperature: " + data.main.temp + "\u00B0" + "F"
}

//appends wind inside weather container
function appendWind(data) {
    windData = document.getElementById("wind-data")
    windData.textContent = "Wind: " + data.wind.speed + " mph"
}

//appends humidity inside weather container
function appendHumidity(data) {
    humidityData = document.getElementById("humidity-data")
    humidityData.textContent = "Humidity: " + data.main.humidity + "%"
}

//appends UVI inside weather container
function appendUVI(data) {
    uviData = document.getElementById("uvi-data")
    uviData.textContent = "UV Index: " + data.current.uvi
}

function appendDay1(data) {
    tomorrow = moment().add(1, 'days').format("MM-DD");
    day1Date = document.getElementById("day1Date")
    day1Date.textContent = tomorrow
    day1Temp = document.getElementById("day1Temp")
    day1Temp.textContent = "Temperature: " + data.daily[0].temp.max + "\u00B0" + "F"
    day1Wind = document.getElementById("day1Wind")
    day1Wind.textContent = "Wind Speed: " + data.daily[0].wind_speed + " mph"
    day1Humidity = document.getElementById("day1Humidity")
    day1Humidity.textContent = "Humidity: " + data.daily[0].humidity + "%"
}

function appendDay2(data) {
    day2Moment = moment().add(2, 'days').format("MM-DD");
    day2Date = document.getElementById("day2Date")
    day2Date.textContent = day2Moment
    day2Temp = document.getElementById("day2Temp")
    day2Temp.textContent = "Temperature: " + data.daily[1].temp.max + "\u00B0" + "F"
    day2Wind = document.getElementById("day2Wind")
    day2Wind.textContent = "Wind Speed: " + data.daily[1].wind_speed + " mph"
    day2Humidity = document.getElementById("day2Humidity")
    day2Humidity.textContent = "Humidity: " + data.daily[1].humidity + "%"
}

function appendDay3(data) {
    day3Moment = moment().add(3, 'days').format("MM-DD");
    day3Date = document.getElementById("day3Date")
    day3Date.textContent = day3Moment
    day3Temp = document.getElementById("day3Temp")
    day3Temp.textContent = "Temperature: " + data.daily[2].temp.max + "\u00B0" + "F"
    day3Wind = document.getElementById("day3Wind")
    day3Wind.textContent = "Wind Speed: " + data.daily[2].wind_speed + " mph"
    day3Humidity = document.getElementById("day3Humidity")
    day3Humidity.textContent = "Humidity: " + data.daily[2].humidity + "%"
}

function appendDay4(data) {
    day4Moment = moment().add(4, 'days').format("MM-DD");
    day4Date = document.getElementById("day4Date")
    day4Date.textContent = day4Moment
    day4Temp = document.getElementById("day4Temp")
    day4Temp.textContent = "Temperature: " + data.daily[3].temp.max + "\u00B0" + "F"
    day4Wind = document.getElementById("day4Wind")
    day4Wind.textContent = "Wind Speed: " + data.daily[3].wind_speed + " mph"
    day4Humidity = document.getElementById("day4Humidity")
    day4Humidity.textContent = "Humidity: " + data.daily[3].humidity + "%"
}

function appendDay5(data) {
    day5Moment = moment().add(5, 'days').format("MM-DD");
    day5Date = document.getElementById("day5Date")
    day5Date.textContent = day5Moment
    day5Temp = document.getElementById("day5Temp")
    day5Temp.textContent = "Temperature: " + data.daily[4].temp.max + "\u00B0" + "F"
    day5Wind = document.getElementById("day5Wind")
    day5Wind.textContent = "Wind Speed: " + data.daily[4].wind_speed + " mph"
    day5Humidity = document.getElementById("day5Humidity")
    day5Humidity.textContent = "Humidity: " + data.daily[4].humidity + "%"
}

function uvIndex(data) {
    if (data.current.uvi >= 0 && data.current.uvi <= 3) {
        uviData = document.getElementById("uvi-data")
        uviData.style.backgroundColor = "green"
    } else if(data.current.uvi > 3 && data.current.uvi <= 6) {
        uviData = document.getElementById("uvi-data")
        uviData.style.backgroundColor = "yellow"
    } else {
        uviData = document.getElementById("uvi-data")
        uviData.style.backgroundColor = "red"
    }
}




// clears the input field after search button is clicked
function clearFields() {
    document.querySelector(".form-control").value = "";
}

