import { api, endpoints } from "../api.js";

const detailsSection = document.querySelector('#movie-example');

function renderDetails() {
    detailsSection.style.display = 'block';
}

function getMovieById(id) {
    api.get(`${endpoints.movies}/${id}`)
        .then(movieData => {
            movieDetails(movieData);
        })
}

function movieDetails(movie) {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('container');

    movieContainer.innerHTML = `
    <div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>

        <div class="col-md-8">
          <img
            class="img-thumbnail"
            src="${movie.img}"
            alt="Movie"
          />
        </div>
        <div class="col-md-4 text-center">
          <h3 class="my-3">Movie Description</h3>
          <p>
           ${movie.description}
          </p>
          <a class="btn btn-danger" href="#">Delete</a>
          <a class="btn btn-warning" href="#">Edit</a>
          <a class="btn btn-primary" href="#">Like</a>
          <span class="enrolled-span">Liked 1</span>
        </div>
    </div>
    `
    
    detailsSection.replaceChildren(movieContainer);
}

export { getMovieById, renderDetails };