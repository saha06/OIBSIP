document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById('convertBtn');
    convertBtn.addEventListener('click', convertTemperature);
});

function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultDisplay = document.getElementById('result');

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    let convertedTemperature;

    if (unit === 'celsius') {
        convertedTemperature = (temperature - 32) * 5/9;
        resultDisplay.innerHTML = `${temperature}°F is ${convertedTemperature.toFixed(2)}°C`;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperature * 9/5) + 32;
        resultDisplay.innerHTML = `${temperature}°C is ${convertedTemperature.toFixed(2)}°F`;
    } else {
        resultDisplay.innerHTML = 'Invalid unit. Please select Celsius or Fahrenheit.';
    }
}