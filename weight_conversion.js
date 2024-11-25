document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", function () {
        convertWeight();
    });

    function convertWeight() {
        const quantityInput = parseFloat(document.getElementById("weightInput").value) || 0;
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;
        let convertedWeight = 0;

        // Conversion logic
        switch (fromUnit) {
            case "g":
                convertedWeight = convertFromGrams(quantityInput, toUnit);
                break;
            case "kg":
                convertedWeight = convertFromKilograms(quantityInput, toUnit);
                break;
            case "tonne":
                convertedWeight = convertFromTonnes(quantityInput, toUnit);
                break;
            case "mg":
                convertedWeight = convertFromMilligrams(quantityInput, toUnit);
                break;
            case "µg":
                convertedWeight = convertFromMicrograms(quantityInput, toUnit);
                break;
            case "ng":
                convertedWeight = convertFromNanograms(quantityInput, toUnit);
                break;
            case "pg":
                convertedWeight = convertFromPicograms(quantityInput, toUnit);
                break;
            case "lb":
                convertedWeight = convertFromPounds(quantityInput, toUnit);
                break;
            case "oz":
                convertedWeight = convertFromOunces(quantityInput, toUnit);
                break;
            default:
                break;
        }

        // Display the result in the output box
        document.getElementById("weightOutput").value = convertedWeight.toFixed(2);
    }

    // Conversion functions
    function convertFromGrams(quantity, toUnit) {
        switch (toUnit) {
            case "kg":
                return quantity / 1000;
            case "tonne":
                return quantity / 1e6;
            case "mg":
                return quantity * 1000;
            case "µg":
                return quantity * 1e6;
            case "ng":
                return quantity * 1e9;
            case "pg":
                return quantity * 1e12;
            default:
                return quantity;
        }
    }

    function convertFromKilograms(quantity, toUnit) {
        switch (toUnit) {
            case "g":
                return quantity * 1000;
            case "tonne":
                return quantity / 1000;
            case "mg":
                return quantity * 1e6;
            case "µg":
                return quantity * 1e9;
            case "ng":
                return quantity * 1e12;
            case "pg":
                return quantity * 1e15;
            default:
                return quantity;
        }
    }

    function convertFromTonnes(quantity, toUnit) {
        switch (toUnit) {
            case "g":
                return quantity * 1e6;
            case "kg":
                return quantity * 1000;
            case "mg":
                return quantity * 1e9;
            case "µg":
                return quantity * 1e12;
            case "ng":
                return quantity * 1e15;
            case "pg":
                return quantity * 1e18;
            default:
                return quantity;
        }
    }

    function convertFromMilligrams(quantity, toUnit) {
        switch (toUnit) {
            case "g":
                return quantity / 1000;
            case "kg":
                return quantity / 1e6;
            case "tonne":
                return quantity / 1e9;
            case "µg":
                return quantity * 1000;
            case "ng":
                return quantity * 1e6;
            case "pg":
                return quantity * 1e9;
            default:
                return quantity;
        }
    }

    function convertFromMicrograms(quantity, toUnit) {
        switch (toUnit) {
            case "g":
                return quantity / 1e6;
            case "kg":
                return quantity / 1e9;
            case "tonne":
                return quantity / 1e12;
            case "mg":
                return quantity / 1000;
            case "ng":
                return quantity * 1000;
            case "pg":
                return quantity * 1e6;
            default:
                return quantity;
        }
    }

    function convertFromNanograms(quantity, toUnit) {
        switch (toUnit) {
            case "g":
                return quantity / 1e9;
            case "kg":
                return quantity / 1e12;
            case "tonne":
                return quantity / 1e15;
            case "mg":
                return quantity / 1e6;
            case "µg":
                return quantity / 1000;
            case "pg":
                return quantity * 1000;
            default:
                return quantity;
        }
    }

    function convertFromPicograms(quantity, toUnit) {
        switch (toUnit) {
            case "g":
                return quantity / 1e12;
            case "kg":
                return quantity / 1e15;
            case "tonne":
                return quantity / 1e18;
            case "mg":
                return quantity / 1e9;
            case "µg":
                return quantity / 1e6;
            case "ng":
                return quantity / 1000;
            default:
                return quantity;
        }
    }

    function convertFromPounds(quantity, toUnit) {
        switch (toUnit) {
            case "kg":
                return quantity * 0.45359;
            case "tonne":
                return quantity * 0.00045359;
            default:
                return quantity;
        }
    }

    function convertFromOunces(quantity, toUnit) {
        switch (toUnit) {
            case "g":
                return quantity * 28.35;
            default:
                return quantity;
        }
    }
});
