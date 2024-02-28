// Set variables 
const msToDays = 84600000;
const today = Date.now();

// Get display elements
const welcomeDisplay = document.querySelector("#welcome");

// Fetch localStorage values
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls"));

// Check if this is the first visit
if (numVisits === 0) {
    welcomeDisplay.textContent = "Welcome! Let us know if you have any questions";

} else if ((today - lastVisit) / msToDays < 1) {
    welcomeDisplay.textContent = "Back so soon! Awesome!";

} else {
    welcomeDisplay.textContent = `Your last visit was ${((today - lastVisit) / msToDays).toFixed(0)} days ago`;
}

// Set localStorage
numVisits++;
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("lastVisit-ls", today);