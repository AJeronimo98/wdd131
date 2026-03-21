
window.addEventListener('DOMContentLoaded', () => {
    
    const currentYearElement = document.getElementById("currentyear");
    const lastModifiedElement = document.getElementById("lastModified");

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const windChillDisplay = document.getElementById("windchill");

    if (tempElement && windElement && windChillDisplay) {
        const temperature = parseFloat(tempElement.textContent);
        const windSpeed = parseFloat(windElement.textContent);

        function calculateWindChill(temp, wind) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
        }
        if (temperature <= 10 && windSpeed > 4.8) {
            windChillDisplay.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
        } else {
            windChillDisplay.textContent = "N/A";
        }
    }
});