const startAddMovieButton = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
const backdropBackgorund = document.getElementById('backdrop');
const cancelMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelMovieButton.nextElementSibling;
const userInput = addMovieModal.querySelectorAll('input');
const entrySection = document.getElementById('entry-text');


const movies = [];

const updateUI = () => {

    if (movies.length === 0) {
        entrySection.style.display = 'block';
    } else {
        entrySection.style.display = 'none';
    }
}

const renderNewMovie = (title, image, rating) => {
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
    const movieList = document.getElementById('movie-list');
    movieList.append(newMovieElement);

}

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackDrop();
}

const toggleBackDrop = () => {
    backdropBackgorund.classList.toggle('visible')
}

const backDropHandler = () => {
    toggleBackDrop();
}

const cancelAddMovieHandler = () => {
    toggleMovieModal();
}

const clearMovieInputs = () => {
    for (const usrInputs of userInput) {
        usrInputs.value = '';
    }
}

const addMovieHandler = () => {
    const titleValue = userInput[0].value;
    const imageUrlValue = userInput[1].value;
    const ratingValue = userInput[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
        alert('Please enter valid value betweeb 1 and 5')
    }
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInputs();
    renderNewMovie(newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
}


startAddMovieButton.addEventListener('click', toggleMovieModal);
backdropBackgorund.addEventListener('click', backDropHandler);
cancelMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);

