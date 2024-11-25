function favoriteMovie(input) {

    let movieTitle = input.shift();
    let bestMovie = 0;
    let moviesCounter = 0;

    while (movieTitle !== 'STOP') {
        let currMoviePoints = 0;
        moviesCounter++;

        for (let i = 0; i < movieTitle.length; i++) {
            let curLetterPts = movieTitle[i].charCodeAt();

            if (curLetterPts >= 65 && curLetterPts <= 90) {
                curLetterPts -= movieTitle.length;

            } else if (curLetterPts >= 97 && curLetterPts <= 122) {
                curLetterPts -= movieTitle.length * 2;

            }
            currMoviePoints += curLetterPts;
        }

        if (moviesCounter === 7) {
            console.log('The limit is reached.');
            break;

        }

        if (currMoviePoints > bestMovie) {
            bestMovie = currMoviePoints;
            bestName = movieTitle;

        }
        movieTitle = input.shift();
    }
    console.log(`The best movie for you is ${bestName} with ${bestMovie} ASCII sum.`);
}
favoriteMovie(["Matrix",
    "Breaking bad",
    "Legend",
    "STOP"]);