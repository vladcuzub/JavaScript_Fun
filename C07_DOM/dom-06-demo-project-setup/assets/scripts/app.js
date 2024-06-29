const startAddMovieButton = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
const backdropBackgorund = document.getElementById('backdrop');
const cancelMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelMovieButton.nextElementSibling;
const userInput = addMovieModal.querySelectorAll('input');
const entrySection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const movies = [];


const toggleBackDrop = () => {
    backdropBackgorund.classList.toggle('visible')
};

const updateUI = () => {
    if (movies.length === 0) {
        entrySection.style.display = 'block';
    } else {
        entrySection.style.display = 'none';
    }
};

const closeMovieDeletionModal = () => {
    toggleBackDrop();
    deleteMovieModal.classList.remove('visible');
}

const deleteMovieHandler = movieId => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const movieList = document.getElementById('movie-list');
    movieList.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUI();
};

const startDeleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackDrop();

    const cancelDeletingButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletingbutton = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletingbutton.replaceWith(confirmDeletingbutton.cloneNode(true));

    confirmDeletingbutton = deleteMovieModal.querySelector('.btn--danger');


    cancelDeletingButton.removeEventListener('click', closeMovieDeletionModal);
    cancelDeletingButton.addEventListener('click', closeMovieDeletionModal);

    confirmDeletingbutton.addEventListener('click', deleteMovieHandler.bind(null, movieId))
}


const renderNewMovie = (id, title, image, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${image}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
    const movieList = document.getElementById('movie-list');
    movieList.append(newMovieElement);

};

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackDrop();

};

const backDropHandler = () => {
    toggleBackDrop();
    closeMovieModal();
    closeMovieDeletionModal();
};


const cancelAddMovieHandler = () => {
    closeMovieModal();
};

const clearMovieInputs = () => {
    for (const usrInputs of userInput) {
        usrInputs.value = '';
    }
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
    toggleBackDrop();
}

const addMovieHandler = () => {
    const titleValue = userInput[0].value;
    const imageUrlValue = userInput[1].value;
    const ratingValue = userInput[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || + ratingValue < 1 || +ratingValue > 5) {
        alert('Please enter valid value betweeb 1 and 5')
    }
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }
    movies.push(newMovie);
    console.log(movies);
    showMovieModal();
    clearMovieInputs();
    renderNewMovie(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
    cancelAddMovieHandler();
    backDropHandler();

};


startAddMovieButton.addEventListener('click', showMovieModal);
backdropBackgorund.addEventListener('click', backDropHandler);
cancelMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);

