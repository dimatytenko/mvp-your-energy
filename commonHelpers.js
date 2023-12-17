import{i as v}from"./assets/quote-aa32f0bd.js";import"./assets/vendor-5014e6d0.js";const f={trashFavoritesBtn:document.querySelector(".js-exercises-trash-btn"),StartFavoritesBtn:document.querySelector(".js-exercises-start-btn"),exerciseFavorites:document.querySelector(".js-exercise-favorites"),categoryErrorFavorites:document.querySelector(".js-favorites-error")},u=f.exerciseFavorites,x=f.categoryErrorFavorites;console.log(f.exerciseFavorites);const a="savedExercises";g();function g(){const e=JSON.parse(localStorage.getItem(a))??[];if(e.length===0){console.log("savedExercis"),x.classList.remove("visually-hidden");return}console.log(e),u.innerHTML=m(e);const t=document.getElementsByClassName("favorite-card-item");for(let s=0;s<t.length;s+=1)console.log(t[s]),t[s].addEventListener("click",n),t[s].addEventListener("click",l);function n(s){const i=s.target.closest(".js-exercises-trash-btn"),o=s.target.closest(".card-item");if(i){const d=o.id;let r=e.findIndex(c=>c._id===`${d}`);if(console.log(r),console.log(e[r]),r>=0){for(let c=0;c<t.length;c+=1)t[c].removeEventListener("click",n),t[c].removeEventListener("click",l);e.splice(r,1),localStorage.removeItem(a),localStorage.setItem(a,JSON.stringify(e))}u.innerHTML=m(e),g()}}function l(s){const i=s.target.closest(".js-exercises-start-btn"),o=s.target.closest(".card-item");if(console.log(window.location.href),i){const d=o.id;let r=e.findIndex(c=>c._id===`${d}`);console.log(r),console.log(e[r]),r>=0&&(console.log(r),localStorage.removeItem(a),localStorage.setItem(a,JSON.stringify(e))),u.innerHTML=m(e),g()}}}function m(e){return e.map(({_id:t,target:n,bodyPart:l,burnedCalories:s,time:i,name:o})=>`
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
                <p class="card-title-text">${o}</p>
                </div>

                <div class="card-info">
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Burned calories:
                    <span class="card-info-about-value">${s} / ${i} min</span>
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
