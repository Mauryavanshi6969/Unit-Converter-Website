document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", function () {
        convertStorage();
    });

    function convertStorage() {
        const storageInput = parseFloat(document.getElementById("storageInput").value) || 0;
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;

        const convertedStorage = calculateStorage(storageInput, fromUnit, toUnit);

        document.getElementById("storageOutput").value = `${convertedStorage.toFixed(2)} ${toUnit}`;
    }

    function calculateStorage(value, fromUnit, toUnit) {
        if (fromUnit === toUnit) {
            return value;
        }

        const unitsInBytes = {
            bit: 1 / 8,
            byte: 1,
            kilobyte: 1024,
            megabyte: 1024 * 1024,
            gigabyte: 1024 * 1024 * 1024,
            terabyte: 1024 * 1024 * 1024 * 1024,
            petabyte: 1024 * 1024 * 1024 * 1024 * 1024,
            exabyte: 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
            zettabyte: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
            yottabyte: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
            brontobyte: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
            geopbyte: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
            satabyte: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
            zotabyte: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
        };

        const valueInBytes = value * unitsInBytes[fromUnit];
        return valueInBytes / unitsInBytes[toUnit];
    }
});
