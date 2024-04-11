const path = location.pathname;
const page = path.split("/").pop();

// Get Elements
const ParagraphElement = document.querySelector("#copyrightYear");
const lastModifiedElement = document.querySelector("#lastModified");

// Get new values
let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

// Set new values
ParagraphElement.innerHTML = `©${currentYear} Scoots`;
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
		if (page === "join.html") {
			changeFormColor("#020066", "white", "white");
		};
		modeButton.textContent = "☀️";
	} else {
		// Discovered that leaving the values empty
		// defaults to the original css values
		body.style.background = "";
		body.style.color = "";
		changeCardColor("");
		changeCardLinkColor("")
		if (page === "join.html") {
			changeFormColor("", "", "");
		};
		modeButton.textContent = "🌙";
	}
});

function changeCardColor(color) {
	let cards = document.querySelectorAll(".card");
	for (const element of cards) {
		let card = element;
		card.style.background = color;
	}
}

function changeCardLinkColor(color) {
	let cards = document.querySelectorAll(".card");
	for (const element of cards) {
		let card = element
		let links = card.querySelectorAll("a");
		for (const element of links) {
			let link = element
			link.style.color = color;
		}
	}
}

function changeFormColor(color, color2, color3) {
	let form = document.querySelector("fieldset");
	form.style.background = color;

	let legend = form.querySelector("legend");
	legend.style.color = color2;

	let divs = form.querySelectorAll("div");
	for (const element of divs) {
		let div = element
		div.style.color = color2;
	}

	let labels = form.querySelectorAll("label");
	for (const element of labels) {
		let label = element
		label.style.color = color3;
	}
};

// ToggleBanner  
if (page === "index.html" || page === "") {
	const bannerEle = document.querySelector("#banner");
	const bannerButton = document.querySelector("#closeBanner")

	bannerButton.addEventListener("click", () => {
		bannerEle.style.display = "none";
	});

	function ToggleBanner() {
		const day = new Date();
		if (day.getDay() === 1 || day.getDay() === 2 || day.getDay() === 3) {
			bannerEle.style.display = "flex";
		}
	}

	ToggleBanner();
};