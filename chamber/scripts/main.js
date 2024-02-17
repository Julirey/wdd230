
// Get Elements
const ParagraphElement = document.querySelector("#copyrightYear");
const lastModifiedElement = document.querySelector("#lastModified");

// Get new values
let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

// Set new values
ParagraphElement.innerHTML = `©${currentYear} Maracaibo Chamber`;
lastModifiedElement.innerHTML = `Last Modification: ${lastModified}`;

// Hamburguer menu button
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

// Dark mode
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		changeCardColor("#020066");
		changeCardLinkColor("white");
		modeButton.textContent = "☀️";
	} else {
		body.style.background = "#fff";
		body.style.color = "#000";
		changeCardColor("rgb(231, 231, 231)");
		changeCardLinkColor("blue")
		modeButton.textContent = "🌙";
	}
});

function changeCardColor(color) {
	let cards = document.querySelectorAll(".card");
	for (let i = 0; i < cards.length; i++) {
		let card = cards[i];
		card.style.background = color;
	}
}

function changeCardLinkColor(color) {
	let cards = document.querySelectorAll(".card");
	for (let i = 0; i < cards.length; i++) {
		let card = cards [i];
		let links = card.querySelectorAll("a");
		for (let i = 0; i < links.length; i++) {
			link = links[i]
			link.style.color = color;
		}
	}
}