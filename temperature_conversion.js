document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", function () {
        convertTemperature();
    });

    function convertTemperature() {
        const temperatureInput = parseFloat(document.getElementById("temperatureInput").value) || 0;
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;

        const { convertedTemperature, resultUnit } = calculateTemperature(temperatureInput, fromUnit, toUnit);

        document.getElementById("temperatureOutput").value = `${convertedTemperature.toFixed(2)} ${resultUnit}`;
    }

    function calculateTemperature(temperature, fromUnit, toUnit) {
        let convertedTemperature = temperature;
        let resultUnit = fromUnit;

        if (fromUnit !== toUnit) {
            switch (fromUnit) {
                case 'celsius':
                    convertedTemperature = convertCelsius(temperature, toUnit);
                    break;
                case 'fahrenheit':
                    convertedTemperature = convertFahrenheit(temperature, toUnit);
                    break;
                case 'kelvin':
                    convertedTemperature = convertKelvin(temperature, toUnit);
                    break;
            }

            resultUnit = toUnit;
        }

        return { convertedTemperature, resultUnit };
    }

    function convertCelsius(temperature, toUnit) {
        switch (toUnit) {
            case 'fahrenheit':
                return (temperature * 9/5) + 32;
            case 'kelvin':
                return temperature + 273.15;
            default:
                return temperature;
        }
    }

    function convertFahrenheit(temperature, toUnit) {
        switch (toUnit) {
            case 'celsius':
                return (temperature - 32) * 5/9;
            case 'kelvin':
                return (temperature - 32) * 5/9 + 273.15;
            default:
                return temperature;
        }
    }

    function convertKelvin(temperature, toUnit) {
        switch (toUnit) {
            case 'celsius':
                return temperature - 273.15;
            case 'fahrenheit':
                return (temperature - 273.15) * 9/5 + 32;
            default:
                return temperature;
        }
    }
});
