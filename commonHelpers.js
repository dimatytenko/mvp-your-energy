import"./assets/modal-19babd55.js";import"./assets/vendor-5014e6d0.js";const l={trashFavoritesBtn:document.querySelector(".exercises-trash-btn"),exerciseFavorites:document.querySelector(".js-exercise-favorites"),categoryErrorFavorites:document.querySelector(".js-favorites-error")},d=l.exerciseFavorites,g=l.categoryErrorFavorites;console.log(l.exerciseFavorites);const n="savedExercises";u();function u(){const t=document.getElementsByClassName("favorite-card-item"),e=JSON.parse(localStorage.getItem(n))??[];if(e.length===0){console.log("savedExercis"),g.classList.remove("visually-hidden");return}console.log(e),d.innerHTML=v(e);for(let s=0;s<t.length;s+=1)t[s].addEventListener("click",a);function a(s){const i=s.target.closest(".exercises-trash-btn"),c=s.target.closest(".card-item");if(i){const o=c.id;let r=e.findIndex(m=>m._id===`${o}`);console.log(r),console.log(e[r]),r>=0&&(e.splice(r,1),localStorage.removeItem(n),localStorage.setItem(n,JSON.stringify(e))),d.innerHTML=v(e),u()}}}function v(t){return t.map(({_id:e,target:a,bodyPart:s,burnedCalories:i,time:c,name:o})=>`
            <li class="card-item favorite-card-item" id=${e}>
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
                <p class="card-title-text">${o}</p>
                </div>

                <div class="card-info">
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Burned calories:
                    <span class="card-info-about-value">${i} / ${c} min</span>
                    </p>
                </div>
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Body part: <span class="card-info-about-value">${s}</span>
                    </p>
                </div>
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Target: <span class="card-info-about-value">${a}</span>
                    </p>
                </div>
                </div>
            </li>
        `).join("")}
//# sourceMappingURL=commonHelpers.js.map
