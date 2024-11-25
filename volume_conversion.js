document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", function () {
        convertVolume();
    });

    function convertVolume() {
        const volumeInput = parseFloat(document.getElementById("volumeInput").value) || 0;
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;

        const convertedVolume = calculateVolume(volumeInput, fromUnit, toUnit);

        document.getElementById("volumeOutput").value = `${convertedVolume.toFixed(2)} ${toUnit}`;
    }

    function calculateVolume(value, fromUnit, toUnit) {
        if (fromUnit === toUnit) {
            return value;
        }

        const unitsInLiters = {
            cubicMillimeter: 0.000001,
            cubicCentimeter: 0.001,
            milliliter: 0.001,
            cubicMeter: 1000,
            liter: 1,
            cubicInch: 0.0163871,
            cubicFoot: 28.3168,
            gallon: 4.54609,
            quart: 1.13652,
            pint: 0.568261,
            cup: 0.284131,
            fluidOunce: 0.0284131,
        };

        const valueInLiters = value * unitsInLiters[fromUnit];
        return valueInLiters / unitsInLiters[toUnit];
    }
});
