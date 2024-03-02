function songs(data) {

    let result = [];
    let numOfSongs = data.shift();
    let songType = data.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    
    for (let i = 0; i < numOfSongs; i++) {
        let [type, name, time] = data[i].split('_');
        let song = new Song(type, name, time);
        
        result.push(song);
    }

    if (songType === 'all') {
        result.forEach((i) => console.log(i.name))

    } else {
        let filteredSongs = result.filter((i) => i.type === songType);
        filteredSongs.forEach((i) => console.log(i.name))

    }
}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);