// Select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");

const url = "https:///api.openweathermap.org/data/2.5/weather?lat=10.39&lon=-71.47&units=imperial&appid=3bf678e6bdd1c1720ca9fc7f3fd188a9"

// Fetch
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// Display 
function displayResults(data) {
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;

  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F - ${toTitleCase(desc)}`;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", toTitleCase(desc));
}

// Titlecase converter 
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

apiFetch();

