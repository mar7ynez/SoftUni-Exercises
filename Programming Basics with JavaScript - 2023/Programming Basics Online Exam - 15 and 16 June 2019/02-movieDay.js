function movieDay(input) {

    let timeForPhotos = Number(input[0]);
    let scenesCounter = Number(input[1]);
    let sceneLength = Number(input[2]);

    let prepare = timeForPhotos * 0.15;
    let totalPhotoTime = (scenesCounter * sceneLength) + prepare;

    if (timeForPhotos < totalPhotoTime) {
        console.log(`Time is up! To complete the movie you need ${Math.round(totalPhotoTime - timeForPhotos)} minutes.`);

    } else {
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeForPhotos - totalPhotoTime)} minutes left!`);

    }
}
movieDay(["120",
    "10",
    "11"]);