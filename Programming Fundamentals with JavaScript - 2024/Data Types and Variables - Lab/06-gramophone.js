function gramophone(bandName, albumName, songName) {

    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let plateRotations = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${plateRotations} times.`);
}

gramophone('Rammstein', 'Sehnsucht', 'Engel');