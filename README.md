# weather-dashboard

Column 1
    Row 1: input form (should include autocomplete city information) with search button
    Row 2: empty div that will append cities as they are searched using local storage

Column 2
    Row 1:  empty div that will append the name of the city, date, icon that represents the weather condition; temperature, humidity, wind speed, UV index (should have a color that indicates if the weather is favorable, moderate, or sever)
    Row 2: empty div that will append a 5 day forecast and includes the date, icon that represents the weather condition, temperature, wind speed, humidity 


//adds items to local storage and appends them to the button container
buttonContainer = document.querySelector(".button-container")
function localStorageData() {
    localStorage.setItem("city", userInput)
}
buttonContainer.textContent = localStorage.getItem("city") || []