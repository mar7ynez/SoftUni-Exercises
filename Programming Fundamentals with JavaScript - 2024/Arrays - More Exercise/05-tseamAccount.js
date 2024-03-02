function tseamAccount(arr) {

    let gamesAccount = arr.shift().split(' ');

    while (arr.length > 0) {
        let curCommand = arr.shift().split(' ');
        let command = curCommand.shift();
        let game = curCommand.shift();

        let isExisting = gamesAccount.includes(game) ? true : false;

        if (command === 'Install') {
            if (!isExisting) {
                gamesAccount.push(game);

            }

        } else if (command === 'Uninstall') {
            if (isExisting) {
                gamesAccount.splice(gamesAccount.indexOf(game), 1);

            }

        } else if (command === 'Update') {
            if (isExisting) {
                gamesAccount.splice(gamesAccount.indexOf(game), 1);
                gamesAccount.push(game);

            }

        } else if (command === 'Expansion') {
            let gameAndExpansion = game.split('-');
            let theGame = gameAndExpansion.shift();
            let expansion = gameAndExpansion.shift();

            if (gamesAccount.includes(theGame)) {
                gamesAccount.splice(gamesAccount.indexOf(theGame) + 1, 0, `${theGame}:${expansion}`);

            }

        } else {
            console.log(gamesAccount.join(' '));

        }
    }
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);