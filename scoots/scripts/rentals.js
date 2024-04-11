// Display
const rentalsContainer = document.querySelector("#rentals");
const tableContainer = document.querySelector("table");

// Fetch
const rentalsURL = "https://julirey.github.io/wdd230/scoots/data/rentals.json";

const getRentals = async () => {
    const response = await fetch(rentalsURL);
    if (response.ok) {
        let data = await response.json();
        displayRentals(data.rentals);
        displayPrices(data.rentals);
    }
}

/* async displayRentals Function */
const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        let sectionItem = document.createElement("section");
        sectionItem.classList.add("card");
        sectionItem.classList.add("rental");
        
        let img = document.createElement("img");
        img.src = (rental.image);
        img.alt = (`Picture of ${rental.name}`);
        img.loading = "lazy";

        let h3 = document.createElement("h3");
        h3.textContent = rental.name;

        let p = document.createElement("p");
        p.textContent = rental.description;

		sectionItem.appendChild(img);
		sectionItem.appendChild(h3);
		sectionItem.appendChild(p);
		
        rentalsContainer.appendChild(sectionItem);
    });
}

/* async displayRentals Function */
const displayPrices = (rentals) => {
    rentals.forEach((rental) => {
        let tr = document.createElement("tr");

        let cell1 = document.createElement("td");
        cell1.textContent = rental.name;

        let cell2 = document.createElement("td");
        cell2.textContent = rental.capacity;

        let cell3 = document.createElement("td");
        cell3.textContent = `$${rental.prices.reservation[0]}`;

        let cell4 = document.createElement("td");
        cell4.textContent = rental.capacity;
        cell4.textContent = `$${rental.prices.reservation[1]}`;


        let cell5 = document.createElement("td");
        cell5.textContent = rental.capacity;
        cell5.textContent = `$${rental.prices.walkin[0]}`;

        let cell6 = document.createElement("td");
        cell6.textContent = rental.capacity;
        cell6.textContent = `$${rental.prices.walkin[1]}`;

		tr.appendChild(cell1);  
        tr.appendChild(cell2);
        tr.appendChild(cell3);
        tr.appendChild(cell4);
        tr.appendChild(cell5);
        tr.appendChild(cell6);

        tableContainer.appendChild(tr);
    });
}

getRentals();