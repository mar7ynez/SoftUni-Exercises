function movieRatings(input) {

    let numberOfMovies = Number(input.shift());
    let lowestRating = Number.MAX_SAFE_INTEGER;
    let highestRating = Number.MIN_SAFE_INTEGER;
    let totalRating = 0;
    let highestName = '';
    let lowestName = '';

    for (let i = 0; i < numberOfMovies; i++) {
        let movieName = input.shift();
        let rating = Number(input.shift());

        totalRating += rating;

        if (rating > highestRating) {
            highestName = movieName;
            highestRating = rating;

        } else if (rating < lowestRating) {
            lowestName = movieName;
            lowestRating = rating;

        }
    }
    let avgRatingAllMovies = totalRating / numberOfMovies;

    console.log(`${highestName} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestName} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${avgRatingAllMovies.toFixed(1)}`);
}
movieRatings(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"]);