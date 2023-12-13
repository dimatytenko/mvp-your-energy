import axios from 'axios';

// Retrieve the element representing the modal.
var modal = document.getElementById('Modal');

// Retrieve the <span> element responsible for closing the modal.
var span = document.getElementsByClassName('main-modal-close')[0];

// Close the modal when the user clicks on the (x) button.
span.onclick = function () {
  modal.style.display = 'none';
};

// Close the modal if the user clicks anywhere outside of it.
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Retrieve the HTMLCollection containing elements with the class 'exercises-tiles-list'.
const exercisesTilesList = document.getElementsByClassName(
  'exercises-tiles-list'
);

// Iterate over the HTMLCollection (in case there are multiple elements with this class).
for (let i = 0; i < exercisesTilesList.length; i++) {
  const currentList = exercisesTilesList[i];

  // Attach an event listener to every element within the HTMLCollection.
  currentList.addEventListener('click', function (event) {
    const clickedListItem = event.target.closest(
      '.exercises-category-tile-item'
    );
    if (clickedListItem) {
      const exerciseId = clickedListItem.dataset.id;
      modal.style.display = 'flex';

      const apiUrl = `https://your-energy.b.goit.study/api/exercises/${exerciseId}`;

      axios
        .get(apiUrl)
        .then(response => {
          if (response) {
            return response.data;
          }
        })
        .then(data => {
          displayExerciseDetails(data);
        })
        .catch(error => {
          console.error('There was a problem with the Axios request:', error);
        });
    }
  });
}

function displayExerciseDetails(data) {
  const exerciseDetailsContainer = document.getElementById('exerciseDetails');

  let gifImage = null;

  if (data.gifUrl) {
    gifImage = `<div class="main-modal-gif-wrapper">
      <img class="gif" src="${data.gifUrl}" alt="Exercise GIF">
      <div class="gif-overlay"></div>
      </div>`;
  } else {
    gifImage = `<div class="main-modal-gif-wrapper">
      <img class="main-modal-gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
      <div class="main-modal-gif-overlay"></div>
      </div>`;
  }

  const title = `<p class='main-modal-card-title'>${data.name}</p>`;
  const stars = generateStarRating(Math.round(data.rating));

  const rating = `<div class='main-modal-rating-container'>
    <span class="main-modal-rating">${
      data.rating % 1 >= 0.5
        ? Math.ceil(data.rating) + '.0'
        : Math.floor(data.rating) + '.0'
    }</span>
    ${stars}
    </div>`;

  const details = `<div class="main-modal-details-container">
    <div class="main-modal-details-wrapper">
    <p class="main-modal-details-title">Target</p>
    <p class="main-modal-details-info">${data.target}</p>
    </div>
    <div class="main-modal-details-wrapper">
    <p class="main-modal-details-title">Body Part</p>
    <p class="main-modal-details-info">${data.bodyPart}</p>
    </div>
    <div class="main-modal-details-wrapper">
    <p class="main-modal-details-title">Equipment</p>
    <p class="main-modal-details-info">${data.equipment}</p>
    </div>
    <div class="main-modal-details-wrapper">
    <p class="main-modal-details-title">Popular</p>
    <p class="main-modal-details-info">${data.popularity}</p>
    </div>
    </div>
    <div class="main-modal-details-wrapper calories">
    <p class="main-modal-details-title">Burned Calories</p>
    <p class="main-modal-details-info">${data.burnedCalories}</p>
    </div>`;

  const description = `<div class="main-modal-description">${data.description}</div>`;

  exerciseDetailsContainer.innerHTML = `${
    gifImage +
    `<div class="main-modal-content-wrapper">${
      title + rating + details + description
    }</div>`
  }`;
}

// A function for creating star icons depending on the given rating.
function generateStarRating(rating) {
  const starIcon = `<div class="main-modal-star-wrapper"><svg class="main-modal-star-icon main-modal-colored-star" aria-label="logo icon">
    <use href="./img/sprite.svg#icon-star"></use>
    </svg></div>`;

  const emptyStar = `<div class="main-modal-star-wrapper"><svg class="main-modal-star-icon " aria-label="logo icon">
    <use href="./img/sprite.svg#icon-star"></use>
    </svg></div>`;
  let starsHTML = '';
  let integerPart = Math.floor(rating);
  let decimalPart = rating - integerPart;

  // Assign stars according to the whole number part.
  for (let i = 0; i < 5; i++) {
    if (i < integerPart) {
      starsHTML += starIcon;
    } else {
      if (i === integerPart && decimalPart >= 0.5) {
        starsHTML += starIcon;
      } else {
        starsHTML += emptyStar;
      }
    }
  }

  return `${starsHTML}`;
}
