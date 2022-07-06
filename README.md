# weather-dashboard



still need search history using local storage to persist as button that can reload info


need icon in weather container and each forecast day






//adds items to local storage and appends them to the button container
buttonContainer = document.querySelector(".button-container")
function localStorageData() {
    localStorage.setItem("city", userInput)
}
buttonContainer.textContent = localStorage.getItem("city") || []