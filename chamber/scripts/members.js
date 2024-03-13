// Display
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const articleElement = document.querySelector("article");

gridButton.addEventListener("click", showGrid);
listButton.addEventListener("click", showList); 

function showGrid() {
	articleElement.classList.add("grid");
	articleElement.classList.remove("list");    
}

function showList() {
	articleElement.classList.add("list");
	articleElement.classList.remove("grid");
}

// Fetch
const membersURL = "https://julirey.github.io/wdd230/chamber/data/members.json";

const getMembers = async () => {
    const response = await fetch(membersURL);
    if (response.ok) {
        let data = await response.json();
        displayMembers(data.members);
    }
}

/* async displayMembers Function */
const displayMembers = (members) => {
    members.forEach((member) => {
        let sectionItem = document.createElement("section");
        sectionItem.classList.add("card");
        
        let img = document.createElement("img");
        img.src = (member.logo);
        img.alt = (member.name);

        let h3 = document.createElement("h3");
        h3.textContent = member.name;

        let p1 = document.createElement("p");
        p1.textContent = member.address;

        let p2 = document.createElement("p");
        p2.textContent = member.phone;

		let link = document.createElement("a");
		link.href = member.url;
		link.text = member.url;

        let p3 = document.createElement("p");
        p3.textContent = member.membership;

		sectionItem.appendChild(img);
		sectionItem.appendChild(h3);
		sectionItem.appendChild(p1);
		sectionItem.appendChild(p2);
		sectionItem.appendChild(link);
		sectionItem.appendChild(p3);
		
        articleElement.appendChild(sectionItem);
    });
}

getMembers();