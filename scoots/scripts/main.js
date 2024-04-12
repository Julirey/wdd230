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
const modeButton = document.querySelector("#check");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
  if (modeButton.checked) {
    body.style.background = "#000";
    body.style.color = "#fff";
    changeCardColor("#2c2f33");
    changeCardLinkColor("white");
    changeTitleColor("orangered");
    if (page === "reservations.html" || page === "contact.html") {
      changeFormColor("#2c2f33", "white", "white");
    }
  } else {
    body.style.background = "";
    body.style.color = "";
    changeCardColor("");
    changeCardLinkColor("");
    changeTitleColor("");
    if (page === "reservations.html" || page === "contact.html") {
      changeFormColor("", "", "");
    }
  }
});

function changeTitleColor(color) {
  let titles = document.querySelectorAll("main h3");
  for (const element of titles) {
    let title = element;
    title.style.background = color;
  }
}

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
    let card = element;
    let links = card.querySelectorAll("a");
    for (const element of links) {
      let link = element;
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
    let div = element;
    div.style.color = color2;
  }

  let labels = form.querySelectorAll("label");
  for (const element of labels) {
    let label = element;
    label.style.color = color3;
  }
}

// ToggleBanner
if (page === "index.html" || page === "") {
  const bannerEle = document.querySelector("#banner");
  const bannerButton = document.querySelector("#closeBanner");

  bannerButton.addEventListener("click", () => {
    bannerEle.style.display = "none";
  });
}
