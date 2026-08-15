// Get elements from HTML

const form = document.getElementById("converterForm");

const temperatureInput =
    document.getElementById("temperature");

const unitSelect =
    document.getElementById("unit");

const errorMessage =
    document.getElementById("errorMessage");

const celsiusResult =
    document.getElementById("celsiusResult");

const fahrenheitResult =
    document.getElementById("fahrenheitResult");

const kelvinResult =
    document.getElementById("kelvinResult");


// Run when user clicks Convert

form.addEventListener("submit", function (event) {

    // Stop page from refreshing
    event.preventDefault();


    // Get input value
    const temperature =
        parseFloat(temperatureInput.value);


    // Get selected unit
    const unit =
        unitSelect.value;


    // Clear previous error
    errorMessage.textContent = "";


    // VALIDATE INPUT

    if (temperatureInput.value.trim() === "") {

        showError("Please enter a temperature.");

        return;
    }


    if (isNaN(temperature)) {

        showError("Please enter a valid number.");

        return;
    }


    // CONVERT TO CELSIUS

    let celsius;


    if (unit === "celsius") {

        celsius = temperature;

    } else if (unit === "fahrenheit") {

        celsius =
            (temperature - 32) * 5 / 9;

    } else if (unit === "kelvin") {

        celsius =
            temperature - 273.15;
    }


    // ABSOLUTE ZERO CHECK

    if (celsius < -273.15) {

        showError(
            "Temperature cannot be below absolute zero (-273.15°C)."
        );

        clearResults();

        return;
    }


    // CONVERT TO OTHER UNITS

    const fahrenheit =
        (celsius * 9 / 5) + 32;


    const kelvin =
        celsius + 273.15;


    // DISPLAY RESULTS

    celsiusResult.textContent =
        `${formatNumber(celsius)} °C`;

    fahrenheitResult.textContent =
        `${formatNumber(fahrenheit)} °F`;

    kelvinResult.textContent =
        `${formatNumber(kelvin)} K`;

});


// SHOW ERROR

function showError(message) {

    errorMessage.textContent = message;
}


// CLEAR RESULTS

function clearResults() {

    celsiusResult.textContent = "--";

    fahrenheitResult.textContent = "--";

    kelvinResult.textContent = "--";
}


// FORMAT DECIMAL VALUES

function formatNumber(number) {

    return number.toFixed(2);
}