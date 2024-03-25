// Display
const spotlight = document.querySelector("#member-spotlights");

// Fetch
const membersURL = "https://julirey.github.io/wdd230/chamber/data/members.json";

const getMembers = async () => {
    const response = await fetch(membersURL);
    if (response.ok) {
        let data = await response.json();
        
        // Get members with Silver and Gold memberships
        let spotlightMembers = data.members.filter(member => {
            return member.membership === "Silver" || member.membership === "Gold";
        });;

        // Shuffle them
        let shuffledSM = shuffle(spotlightMembers);

        // Get the first 3 Items
        let threeMembers = shuffledSM.slice(0, 3);

        displayMembers(threeMembers);
    };
};

/* async displayMembers Function */
const displayMembers = (members) => {
    members.forEach((member) => {
        let sectionItem = document.createElement("section");
        sectionItem.classList.add("card");
        sectionItem.classList.add("member");

        
        let h3 = document.createElement("h3");
        h3.textContent = member.name;

        let img = document.createElement("img");
        img.src = (member.logo);
        img.alt = (`Logo of ${member.name}`);

        let hr = document.createElement("hr");

        let p1 = document.createElement("p");
        p1.textContent = `~${member.membership} Membership`;

		let link = document.createElement("a");
		link.href = "#";
        link.target = "_blank"
		link.text = member.email;

		let link2 = document.createElement("a");
		link2.href = "#";
        link2.target = "_blank"
		link2.text = member.phone;

		let link3 = document.createElement("a");
		link3.href = "#";
        link3.target = "_blank"
		link3.text = member.url;

        sectionItem.appendChild(h3);
		sectionItem.appendChild(img);
		sectionItem.appendChild(hr);
		sectionItem.appendChild(p1);
		sectionItem.appendChild(link);
		sectionItem.appendChild(link2);
		sectionItem.appendChild(link3);
		
        spotlight.appendChild(sectionItem);
    });
};

function shuffle(array) {
    let m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
};

getMembers();