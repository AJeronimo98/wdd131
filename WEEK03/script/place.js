
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

const windChillDisplay = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillDisplay.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
    windChillDisplay.textContent = "N/A";
}