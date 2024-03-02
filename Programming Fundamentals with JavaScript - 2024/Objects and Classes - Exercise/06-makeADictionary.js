function makeDictionary(data) {

    let dictionaryObj = {};

    for (let info of data) {
        let curInfo = JSON.parse(info);
        let keys = Object.keys(curInfo);
        let term = keys[0];

        dictionaryObj[term] = curInfo[term];
    }
    let sortedTerms = Object.keys(dictionaryObj).sort((a, b) => a.localeCompare(b));

    for (let term of sortedTerms) {
        console.log(`Term: ${term} => Definition: ${dictionaryObj[term]}`);

    }
}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);