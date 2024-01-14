
// Get Elements
const ParagraphElement = document.querySelector("footer p");
const lastModifiedElement = document.querySelector("#lastModified");

// Get new values
let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

// Set new values
ParagraphElement.innerHTML = `©${currentYear}<br>Julio Cesar Reyes Coronel<br>Venezuela`;
lastModifiedElement.innerHTML = `Last Modification: ${lastModified}`;