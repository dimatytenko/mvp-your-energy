import { refs } from './refs';

const elements = {
    trashFavoritesBtn: document.querySelector(".exercises-trash-btn"),
    exerciseFavorites: document.querySelector('.js-exercise-favorites'),
    categoryErrorFavorites: document.querySelector('.js-favorites-error'),
};

const element = refs.exercise;
// const element = elements.exerciseFavorites;
const errorFavorites = refs.categoryError;
// const errorFavorites = elements.categoryErrorFavorites;


const LS_KEY = "savedExercises";

createExerciseList();

function createExerciseList() {
    const favoritesExerciseList = document.getElementsByClassName('favorite-card-item');

    const savedExercis = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];

    if (savedExercis.length === 0) {
        console.log('savedExercis');
        errorFavorites.classList.remove('visually-hidden');
        return;
    }

    console.log(savedExercis);

    element.innerHTML = createMarkup(savedExercis);    
    for (let i = 0; i < favoritesExerciseList.length; i += 1) {
        favoritesExerciseList[i].addEventListener('click', onClickTrashBtn);
    }

    function onClickTrashBtn(event) {
        const clickedTrashItem = event.target.closest('.exercises-trash-btn');
        const exerciseItem = event.target.closest('.card-item');
        if (clickedTrashItem) {
            const exerciseId = exerciseItem.id;

            let indexTrashItem = savedExercis.findIndex(element => element._id === `${exerciseId}`);  
            console.log(indexTrashItem);  
            console.log(savedExercis[indexTrashItem]); 
            if (indexTrashItem >= 0) {
                savedExercis.splice(indexTrashItem, 1)
                // console.log(savedExercis);  

                localStorage.removeItem(LS_KEY);
                localStorage.setItem(LS_KEY, JSON.stringify(savedExercis));
            }
            
            element.innerHTML = createMarkup(savedExercis);
            createExerciseList();
        }
    }       
}


function createMarkup(arr) {
  return arr
    .map(
      ({ _id, target, bodyPart, burnedCalories, time, name }) => `
            <li class="card-item favorite-card-item" id=${_id}>
                <div class="card-menu">
                <div class="exercises-box">
                    <div class="card-menu-workout">WORKOUT</div>
                    <button class="exercises-trash-btn" type="button">
                        <svg
                            class="card-menu-trash-icon"
                            width="16"
                            height="16"
                        >
                            <use href="./img/sprite.svg#icon-trash"></use>
                        </svg>
                    </button>
                </div>

                <div class="card-menu-start">
                    <button class="exercises-start-btn" type="button">
                        <p class="card-menu-start-text">Start</p>
                        <svg
                            class="card-menu-start-icon"
                            width="16"
                            height="16"
                        >
                            <use href="./img/sprite.svg#icon-arrow-right"></use>
                        </svg>
                    </button>
                </div>
                </div>

                <div class="card-title">
                <div class="card-title-icon-box">
                    <svg
                    class="card-title-icon"
                    width="24"
                    height="24"
                    >
                     <use href="./img/sprite.svg#icon-run"></use>
                    </svg>
                </div>
                <p class="card-title-text">${name}</p>
                </div>

                <div class="card-info">
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Burned calories:
                    <span class="card-info-about-value">${burnedCalories} / ${time} min</span>
                    </p>
                </div>
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Body part: <span class="card-info-about-value">${bodyPart}</span>
                    </p>
                </div>
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Target: <span class="card-info-about-value">${target}</span>
                    </p>
                </div>
                </div>
            </li>
        `) .join("");
}
