document.getElementById("currentyear").textContent = new Date ().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

const temperature = 2;
const windspeed =10;

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6125 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

const wcDisplay = document.getElementById("windchill");
if (temperature <= 10 && windspeed > 4.8) {
    wcDisplay.textContent = calculateWindChill(temperature, windspeed) + "°C";
} else {
    wcDisplay.textContent = "N/A";
}