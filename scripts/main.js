
// Get Elements
const ParagraphElement = document.querySelector("#copyrightYear");
const lastModifiedElement = document.querySelector("#lastModified");

// Get new values
let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

// Set new values
ParagraphElement.innerHTML = `©${currentYear}`;
lastModifiedElement.innerHTML = `Last Modification: ${lastModified}`;

// Hamburguer menu button
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

// Number of page visits
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Welcome! This is your first visit.`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);