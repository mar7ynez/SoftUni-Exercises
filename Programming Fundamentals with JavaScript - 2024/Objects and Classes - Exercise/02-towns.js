function towns(data) {

    data.forEach(table => {
        let curTable = table.split(' | ');
        let townName = curTable.shift();
        let townLatitude = Number(curTable.shift()).toFixed(2);
        let townLongitude = Number(curTable.shift()).toFixed(2);

        let townObj = { town: townName, latitude: townLatitude, longitude: townLongitude };

        console.log(townObj);
    })
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);