import { api, endpoints } from "../api.js";
import { getUserData, hideContent } from "../utils.js";
import { setFormData } from "./editMovie.js";

const detailsSection = document.querySelector('#movie-example');

let ownerId = '';

function renderDetails(id) {
  hideContent();

  api.get(`${endpoints.movies}/${id}`)
    .then(movieData => {
      ownerId = movieData._ownerId
      detailsSection.style.display = 'block';

      movieDetails(movieData);
      setFormData(movieData);
    })
}

function movieDetails(movie) {
  const movieContainer = document.createElement('div');
  movieContainer.classList.add('container');

  const userData = getUserData();
  const isOwner = ownerId === userData?._id;

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
        <div data-id=${movie._id} class="col-md-4 text-center">
          <h3 class="my-3">Movie Description</h3>
          <p>
           ${movie.description}
          </p>
          ${isOwner ? '<a class="btn btn-danger" href="/delete">Delete</a>' : ''}
          ${isOwner ? '<a class="btn btn-warning" href="/edit">Edit</a>' : ''}
          ${!isOwner && userData ? '<a class="btn btn-primary" href="#">Like</a>' : ''}
          </div >
          </div >
          `
  //TODO ${!isOwner && userData ? '<span class="enrolled-span">Liked 1</span>' : ''}

  detailsSection.replaceChildren(movieContainer);
}

export { renderDetails };