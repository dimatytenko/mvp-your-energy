import{i as v}from"./assets/modal-cb0e4fa2.js";import"./assets/vendor-5014e6d0.js";const f={trashFavoritesBtn:document.querySelector(".js-exercises-trash-btn"),StartFavoritesBtn:document.querySelector(".js-exercises-start-btn"),exerciseFavorites:document.querySelector(".js-exercise-favorites"),categoryErrorFavorites:document.querySelector(".js-favorites-error")},u=f.exerciseFavorites,h=f.categoryErrorFavorites,c="savedExercises";g();function g(){const t=JSON.parse(localStorage.getItem(c))??[];if(t.length===0){h.classList.remove("visually-hidden");return}u.innerHTML=m(t);const s=document.getElementsByClassName("favorite-card-item");for(let e=0;e<s.length;e+=1)s[e].addEventListener("click",o),s[e].addEventListener("click",n);function o(e){const i=e.target.closest(".js-exercises-trash-btn"),a=e.target.closest(".card-item");if(i){const d=a.id;let l=t.findIndex(r=>r._id===`${d}`);if(l>=0){for(let r=0;r<s.length;r+=1)s[r].removeEventListener("click",o),s[r].removeEventListener("click",n);t.splice(l,1),localStorage.removeItem(c),localStorage.setItem(c,JSON.stringify(t))}u.innerHTML=m(t),g()}}function n(e){const i=e.target.closest(".js-exercises-start-btn"),a=e.target.closest(".card-item");if(i){const d=a.id;t.findIndex(r=>r._id===`${d}`)>=0&&(localStorage.removeItem(c),localStorage.setItem(c,JSON.stringify(t))),u.innerHTML=m(t),g()}}}function m(t){return t.map(({_id:s,target:o,bodyPart:n,burnedCalories:e,time:i,name:a})=>`
            <li class="card-item favorite-card-item" id=${s}>
                <div class="card-menu">
                <div class="exercises-box">
                    <div class="card-menu-workout">WORKOUT</div>
                    <button class="exercises-trash-btn js-exercises-trash-btn" type="button">
                        <svg
                            class="card-menu-trash-icon"
                            width="16"
                            height="16"
                        >
                            <use href="${v}#icon-trash"></use>
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
                            <use href="${v}#icon-arrow-right"></use>
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
                     <use href="${v}#icon-run"></use>
                    </svg>
                </div>
                <p class="card-title-text">${a}</p>
                </div>

                <div class="card-info">
                <div class="gap-card">
                    <p class="card-info-about-name">
                    Burned calories:
                    <div class="card-info-about-value card-time">${e} / ${i} min</div>
                    </p>
                </div>
                <div class="gap-card">
                    <p class="card-info-about-name">
                    Body part:
                    <div class="card-info-about-value card-body">${n}</div>
                    </p>
                </div>
                <div class="gap-card">
                    <p class="card-info-about-name">
                    Target:
                    <div class="card-info-about-value card-target">${o}</div>
                    </p>
                </div>
                </div>
            </li>
        `).join("")}
//# sourceMappingURL=commonHelpers.js.map
