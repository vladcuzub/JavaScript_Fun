const startAddMovieButton = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
const backdropBackgorund = document.getElementById('backdrop');
const cancelMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelMovieButton.nextElementSibling;
const userInput = addMovieModal.querySelectorAll('input');

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

const addMovieHandler = () => {
    const titleValue = userInput[0].value;
    const imageUrlValue = userInput[1].value;
    const ratingValue = userInput[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
        alert('Please enter valid value betweeb 1 and 5')
    }
}


startAddMovieButton.addEventListener('click', toggleMovieModal);
backdropBackgorund.addEventListener('click', backDropHandler);
cancelMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);

