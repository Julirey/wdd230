/* Declare and initialize  variables */
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");
let prophetList = [];



/* async getProphetData Function using fetch()*/
const getProphetData = async () => {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        console.table(data.prophets);
        displayProphets(data.prophets);
    }
}

/* async displayProphets Function */
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
       
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let birthDate = document.createElement("p");
    let birthPlace = document.createElement("p");
    let portrait = document.createElement("img");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    cards.appendChild(card);
    });
}

getProphetData();