# weather-dashboard



still need search history using local storage to persist as button that can reload info

still need color to represent favorable, moderate, or severe uvi

need icon in weather container and each forecast day





1-3 favorable green
4-6 moderate yellow
7-9 severe 




//adds items to local storage and appends them to the button container
buttonContainer = document.querySelector(".button-container")
function localStorageData() {
    localStorage.setItem("city", userInput)
}
buttonContainer.textContent = localStorage.getItem("city") || []