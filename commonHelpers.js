import"./assets/modal-19babd55.js";import"./assets/vendor-5014e6d0.js";const g={trashFavoritesBtn:document.querySelector(".js-exercises-trash-btn"),StartFavoritesBtn:document.querySelector(".js-exercises-start-btn"),exerciseFavorites:document.querySelector(".js-exercise-favorites"),categoryErrorFavorites:document.querySelector(".js-favorites-error")},v=g.exerciseFavorites,f=g.categoryErrorFavorites;console.log(g.exerciseFavorites);const a="savedExercises";m();function m(){const e=JSON.parse(localStorage.getItem(a))??[];if(e.length===0){console.log("savedExercis"),f.classList.remove("visually-hidden");return}console.log(e),v.innerHTML=u(e);const t=document.getElementsByClassName("favorite-card-item");for(let s=0;s<t.length;s+=1)console.log(t[s]),t[s].addEventListener("click",n),t[s].addEventListener("click",l);function n(s){const c=s.target.closest(".js-exercises-trash-btn"),o=s.target.closest(".card-item");if(c){const d=o.id;let r=e.findIndex(i=>i._id===`${d}`);if(console.log(r),console.log(e[r]),r>=0){for(let i=0;i<t.length;i+=1)t[i].removeEventListener("click",n),t[i].removeEventListener("click",l);e.splice(r,1),localStorage.removeItem(a),localStorage.setItem(a,JSON.stringify(e))}v.innerHTML=u(e),m()}}function l(s){const c=s.target.closest(".js-exercises-start-btn"),o=s.target.closest(".card-item");if(console.log(window.location.href),c){const d=o.id;let r=e.findIndex(i=>i._id===`${d}`);console.log(r),console.log(e[r]),r>=0&&(console.log(r),localStorage.removeItem(a),localStorage.setItem(a,JSON.stringify(e))),v.innerHTML=u(e),m()}}}function u(e){return e.map(({_id:t,target:n,bodyPart:l,burnedCalories:s,time:c,name:o})=>`
            <li class="card-item favorite-card-item" id=${t}>
                <div class="card-menu">
                <div class="exercises-box">
                    <div class="card-menu-workout">WORKOUT</div>
                    <button class="exercises-trash-btn js-exercises-trash-btn" type="button">
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
                    <button class="exercises-start-btn js-exercises-start-btn" type="button">
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
                    <span class="card-info-about-value">${s} / ${c} min</span>
                    </p>
                </div>
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Body part: <span class="card-info-about-value">${l}</span>
                    </p>
                </div>
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Target: <span class="card-info-about-value">${n}</span>
                    </p>
                </div>
                </div>
            </li>
        `).join("")}
//# sourceMappingURL=commonHelpers.js.map
