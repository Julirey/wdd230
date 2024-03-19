// Select HTML elements in the document
const currentTemp = document.querySelector("#temperature");
const weatherDesc = document.querySelector("#weather-desc");
const weatherIcon = document.querySelector("#weather-icon");

const wSpeedEle = document.querySelector("#windspeed");
const wChillEle = document.querySelector("#windchill");

const url = "https:///api.openweathermap.org/data/2.5/weather?lat=10.64&lon=-71.62&units=imperial&appid=3bf678e6bdd1c1720ca9fc7f3fd188a9"

// Fetch current weather
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
  let temp = data.main.temp;
  let wSpeed = data.wind.speed;
  
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", toTitleCase(desc));
  weatherDesc.innerHTML = `<strong>${toTitleCase(desc)}</strong>`;
  currentTemp.innerHTML = `${Math.round(temp)}&deg;F`;
  wSpeedEle.innerHTML = `${wSpeed} mph`;
  
  if (temp <= 50 && wSpeed > 3) {
    let wChill = windChillCelsius(temp, wSpeed);
    console.log(wChill);
    wChillEle.innerHTML = wChill.toFixed(2);
  } else {
    wChillEle.innerHTML = "N/a"; 
  }
}

// Select elements for forecast 
const forecastElements = Array.from(
  document.getElementsByClassName("tempforecast")
);

const urlForecast = "https:///api.openweathermap.org/data/2.5/forecast?lat=10.64&lon=-71.62&units=imperial&appid=3bf678e6bdd1c1720ca9fc7f3fd188a9"

// Fetch forecast
async function apiFetchForecast() {
  try {
    const response = await fetch(urlForecast);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
      console.table(data)
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// Display forecast
function displayForecast(data) {
  for (let i = 0; i < forecastElements.length; i++) {
    forecastElements[i].innerHTML = `Temperature: ${data.list[i].main.temp}&deg;F`;
  } 
}

// Windchill
function windChillCelsius(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
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
apiFetchForecast();



