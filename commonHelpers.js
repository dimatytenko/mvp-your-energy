import{i as v}from"./assets/modal-2877e4cb.js";import"./assets/vendor-5014e6d0.js";const f={trashFavoritesBtn:document.querySelector(".js-exercises-trash-btn"),StartFavoritesBtn:document.querySelector(".js-exercises-start-btn"),exerciseFavorites:document.querySelector(".js-exercise-favorites"),categoryErrorFavorites:document.querySelector(".js-favorites-error")},u=f.exerciseFavorites,x=f.categoryErrorFavorites;console.log(f.exerciseFavorites);const o="savedExercises";g();function g(){const e=JSON.parse(localStorage.getItem(o))??[];if(e.length===0){console.log("savedExercis"),x.classList.remove("visually-hidden");return}console.log(e),u.innerHTML=m(e);const s=document.getElementsByClassName("favorite-card-item");for(let t=0;t<s.length;t+=1)console.log(s[t]),s[t].addEventListener("click",n),s[t].addEventListener("click",l);function n(t){const i=t.target.closest(".js-exercises-trash-btn"),a=t.target.closest(".card-item");if(i){const d=a.id;let r=e.findIndex(c=>c._id===`${d}`);if(console.log(r),console.log(e[r]),r>=0){for(let c=0;c<s.length;c+=1)s[c].removeEventListener("click",n),s[c].removeEventListener("click",l);e.splice(r,1),localStorage.removeItem(o),localStorage.setItem(o,JSON.stringify(e))}u.innerHTML=m(e),g()}}function l(t){const i=t.target.closest(".js-exercises-start-btn"),a=t.target.closest(".card-item");if(console.log(window.location.href),i){const d=a.id;let r=e.findIndex(c=>c._id===`${d}`);console.log(r),console.log(e[r]),r>=0&&(console.log(r),localStorage.removeItem(o),localStorage.setItem(o,JSON.stringify(e))),u.innerHTML=m(e),g()}}}function m(e){return e.map(({_id:s,target:n,bodyPart:l,burnedCalories:t,time:i,name:a})=>`
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
                    <div class="card-info-about-value card-time">${t} / ${i} min</div>
                    </p>
                </div>
                <div class="gap-card">
                    <p class="card-info-about-name">
                    Body part:
                    <div class="card-info-about-value card-body">${l}</div>
                    </p>
                </div>
                <div class="gap-card">
                    <p class="card-info-about-name">
                    Target:
                    <div class="card-info-about-value card-target">${n}</div>
                    </p>
                </div>
                </div>
            </li>
        `).join("")}
//# sourceMappingURL=commonHelpers.js.map
