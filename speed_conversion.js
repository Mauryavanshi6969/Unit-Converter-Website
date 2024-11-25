document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", function () {
        convertSpeed();
    });

    function convertSpeed() {
        const speedInput = parseFloat(document.getElementById("speedInput").value) || 0;
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;

        const convertedSpeed = calculateSpeed(speedInput, fromUnit, toUnit);

        document.getElementById("speedOutput").value = `${convertedSpeed.toFixed(2)} ${toUnit}`;
    }

    function calculateSpeed(value, fromUnit, toUnit) {
        if (fromUnit === toUnit) {
            return value;
        }

        const unitsInMetersPerSecond = {
            metersPerSecond: 1,
            kilometersPerHour: 0.277778,
            milesPerHour: 0.44704,
            knot: 0.514444,
        };

        const valueInMetersPerSecond = value * unitsInMetersPerSecond[fromUnit];
        return valueInMetersPerSecond / unitsInMetersPerSecond[toUnit];
    }
});
