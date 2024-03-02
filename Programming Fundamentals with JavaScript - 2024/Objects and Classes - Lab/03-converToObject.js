function convertToObject(jsonData) {

    let obj = JSON.parse(jsonData);
    let entries = Object.entries(obj);

    for(let [key, value] of entries) {
        console.log(`${key}: ${value}`);

    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');