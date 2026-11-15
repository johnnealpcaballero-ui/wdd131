const today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear()

document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A"
    }
}

const temperature = 30;
const windSpeed = 10;
const windchill = document.querySelector('#windchill');

if ( temperature <= 10 && windSpeed > 4.8) {
    windchill.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C"
} else {
    windchill.textContent = "N/A";
}

