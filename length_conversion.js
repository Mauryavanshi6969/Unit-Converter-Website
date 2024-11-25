document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", function () {
        convertLength();
    });

    function convertLength() {
        const lengthInput = parseFloat(document.getElementById("lengthInput").value) || 0;
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;

        const convertedLength = calculateLength(lengthInput, fromUnit, toUnit);

        document.getElementById("lengthOutput").value = `${convertedLength.toFixed(2)} ${toUnit}`;
    }

    function calculateLength(value, fromUnit, toUnit) {
        if (fromUnit === toUnit) {
            return value;
        }

        const unitsInMeters = {
            millimeter: 0.001,
            centimeter: 0.01,
            decimeter: 0.1,
            meter: 1,
            dekameter: 10,
            hectometer: 100,
            kilometer: 1000,
            mile: 1609.34,
            yard: 0.9144,
            foot: 0.3048,
            inch: 0.0254,
            nauticalMile: 1852,
        };

        const valueInMeters = value * unitsInMeters[fromUnit];
        return valueInMeters / unitsInMeters[toUnit];
    }
});
