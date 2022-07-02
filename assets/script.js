//creates and appends city name, date, and information to container
var date = moment().format("MMM, Do, YYYY");
var weatherContainer = document.querySelector(".weather-container");
var cityName = document.createElement("h3");
cityName.textContent = "City Name:"
weatherContainer.append(cityName)
weatherContainer.append(date)
var weatherContent = document.createElement("p")
weatherContent.textContent = "icon, temperature, wind, humidity, UV index with color"
weatherContainer.append(weatherContent)

// next task
var forecastContainer = document.querySelector(".forecast")
var forecast = document.createElement("h3")
forecast.textContent = "5-Day Forecast:"
forecastContainer.append(forecast)