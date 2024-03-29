// Windchill

const temp = document.querySelector("#temperature").innerHTML;
const wSpeed = document.querySelector("#windspeed").innerHTML;
const wChillEle = document.querySelector("#windchill");

const windChillCelsius = (temperature, windSpeed) =>
  13.12 +
  0.6215 * temperature -
  11.37 * windSpeed ** 0.16 +
  0.3965 * temperature * windSpeed ** 0.16;

if (temp <= 50 && wSpeed > 3) {
    let wChill = windChillCelsius(temp, wSpeed);
    windchill.innerHTML = wChill.toFixed(2);
} else {
    windchill.innerHTML = "N/a"; 
}
