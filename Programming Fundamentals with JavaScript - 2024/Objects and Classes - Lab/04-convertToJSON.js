function convertToJSON(name, lastName, hairColor) {

    let obj = {

        name,
        lastName,
        hairColor

    };
    let jsonFormat = JSON.stringify(obj);

    console.log(jsonFormat);
}
convertToJSON('George', 'Jones', 'Brown');