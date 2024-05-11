function attachEventsListeners() {
    let [inputDistanceElement, outputDistanceElement] = document.querySelectorAll('input[type="text"]');
    let inputUnitElement = document.getElementById('inputUnits');
    let outputUnitElement = document.getElementById('outputUnits');
    let buttonElement = document.getElementById('convert');

    buttonElement.addEventListener('click', onClick);

    function onClick(e) {
        let convertValue = inputDistanceElement.value;
        let convertedRes = 0;

        switch (inputUnitElement.value) {
            case 'km': convertValue *= 1000; break;
            case 'm': convertValue = 1000; break;
            case 'cm': convertValue *= 0.01; break;
            case 'mm': convertValue *= 0.001; break;
            case 'mi': convertValue *= 1609.34; break;
            case 'yrd': convertValue *= 0.9144; break;
            case 'ft': convertValue *= 0.3048; break;
            case 'in': convertValue *= 0.0254; break;
        }
        switch (outputUnitElement.value) {
            case 'km': convertedRes = convertValue / 1000; break;
            case 'm': convertedRes = convertValue; break;
            case 'cm': convertedRes = convertValue / 0.01; break;
            case 'mm': convertedRes = convertValue / 0.001; break;
            case 'mi': convertedRes = convertValue / 1609.34; break;
            case 'yrd': convertedRes = convertValue / 0.9144; break;
            case 'ft': convertedRes = convertValue / 0.3048; break;
            case 'in': convertedRes = convertValue / 0.0254; break;
        }
        outputDistanceElement.value = convertedRes;
    }
}