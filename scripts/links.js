/* Declare and initialize  variables */
const baseURL = "https://julirey.github.io/wdd230/";
const linksURL = "https://julirey.github.io/wdd230/data/links.json";
const listElement = document.querySelector("#links");

/* async getLinks Function using fetch()*/
const getLinks = async () => {
    const response = await fetch(linksURL);
    if (response.ok) {
        let data = await response.json();
        displayLinks(data.lessons);
    }
}

/* async displayLinks Function */
const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let listItem = document.createElement("li");
        listItem.textContent = `Week ${week.lesson}: `;
        
        let activityCounter = 0;

        week.links.forEach((activity) => {
            if (activityCounter != 0) {
                let separator = document.createTextNode(" | ");
                listItem.appendChild(separator);
            }

            let link = document.createElement("a");
        
            link.href = activity.url;
            link.text = activity.title;
        
            listItem.appendChild(link);
            
            activityCounter++;
        });

        listElement.appendChild(listItem);
    });
}

getLinks();