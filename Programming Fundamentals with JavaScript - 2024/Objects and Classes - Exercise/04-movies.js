function movies(data) {

    let moviesInfo = [];

    for (let command of data) {

        if (command.includes('addMovie')) {
            command = command.split('addMovie ');
            let movieName = command[1];

            let movieObj = {name: movieName};
            moviesInfo.push(movieObj);

        } else if (command.includes('directedBy')) {
            command = command.split(' directedBy ');
            let movieName = command[0];
            let movieDirector = command[1];

            let movieFound = moviesInfo.find(m => m.name === movieName);

            if (movieFound) {
                movieFound.director = movieDirector;

            }

        } else if (command.includes('onDate')) {
            command = command.split(' onDate ');
            let movieName = command[0];
            let movieDate = command[1];

            let movieFound = moviesInfo.find(m => m.name === movieName);

            if (movieFound) {
                movieFound.date = movieDate;

            }
        }
    }
    let fullInfoMovies = moviesInfo.filter(m => m.name && m.director && m.date);

    fullInfoMovies.forEach(movie => console.log(JSON.stringify(movie)))
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);