function thePianist(data) {

    data.shift();
    let command = data.shift();

    let piecesRegister = {};

    while (command !== 'Stop') {

        if (!command.includes('Add') && !command.includes('Remove') && !command.includes('ChangeKey')) {
            let [pieceName, composer, key] = command.split('|');
            if (!piecesRegister.hasOwnProperty(pieceName)) {
                piecesRegister[pieceName] = [];

            }
            piecesRegister[pieceName].push(composer, key);

        } else if (command.includes('Add')) {
            let [, pieceName, composer, key] = command.split('|');
            if (!piecesRegister.hasOwnProperty(pieceName)) {
                piecesRegister[pieceName] = [composer, key];
                console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);

            } else {
                console.log(`${pieceName} is already in the collection!`);

            }

        } else if (command.includes('ChangeKey')) {
            let [, pieceName, newKey] = command.split('|');
            if (piecesRegister.hasOwnProperty(pieceName)) {
                piecesRegister[pieceName].splice(1, 1, newKey);
                console.log(`Changed the key of ${pieceName} to ${newKey}!`);

            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);

            }

        } else {
            let [, pieceName] = command.split('|');
            if (piecesRegister.hasOwnProperty(pieceName)) {
                delete piecesRegister[pieceName];
                console.log(`Successfully removed ${pieceName}!`);

            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);

            }
        }
        command = data.shift();
    }

    for (let piece in piecesRegister) {
        console.log(`${piece} -> Composer: ${piecesRegister[piece][0]}, Key: ${piecesRegister[piece][1]}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);