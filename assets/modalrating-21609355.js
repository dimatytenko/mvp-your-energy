import{P as O,a as x}from"./vendor-5c458d1f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const w={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh"),searchIcon:document.querySelector(".menu-search-icon"),closeIcon:document.querySelector(".menu-close-icon"),searchBtn:document.querySelector(".menu-search-btn"),searchInput:document.querySelector(".menu-search-input"),exerciseFavorites:document.querySelector(".js-exercise-favorites")},u="/mvp-your-energy/assets/sprite-c1fb1bf2.svg",D=(c,e)=>{const r=c.reduce((a,{filter:t,imgURL:s,name:o})=>(a+=`<li class="categories__card-item js-exercise"
      style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${s}), lightgray -56.383px -2px / 129.575% 103.719% no-repeat"
      data-exercise=${o}>
        <img
          src="${s}"
          alt="${o}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${o}</h2>
        <p class="categories__card-text">${t}</p>
      </li>`,a),"");e.innerHTML=r},j=(c,e)=>{const r=c.reduce((a,{rating:t,target:s,bodyPart:o,burnedCalories:n,name:d,_id:y,time:q})=>(a+=`<li class="card-item" id=${y}>
    <div class="card-menu">
      <div class="card-menu-box">
        <div class="card-menu-workout">WORKOUT</div>
        <div class="card-menu-rating">
          <p class="card-menu-rating-text">${Math.round(t)}.0</p>
          <svg
            id="card-menu-rating-icon"
            class="card-menu-rating-icon"
            width="18"
            height="18"
          >
            <use href="${u}#icon-star"></use>
          </svg>
        </div>
      </div>
      <div class="card-menu-start">
        <p class="card-menu-start-text">Start</p>
        <svg
          id="card-menu-start-icon"
          class="card-menu-start-icon"
          width="16"
          height="16"
        >
          <use href="${u}#icon-arrow-right"></use>
        </svg>
      </div>
    </div>
    <div class="card-title">
      <div class="card-title-icon-box">
        <svg
          id="card-title-icon"
          class="card-title-icon"
          width="24"
          height="24"
        >
          <use href="${u}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${d}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value card-time">${n} / ${q} min</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value card-body">${o}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value card-target">${s}</div>
      </div>
    </div>
  </li>`,a),"");e.innerHTML=r};function _(c){return c.map(({_id:e,target:r,bodyPart:a,burnedCalories:t,time:s,name:o})=>`
            <li class="card-item favorite-card-item" id=${e}>
                <div class="card-menu">
                <div class="exercises-box">
                    <div class="card-menu-workout">WORKOUT</div>
                    <button class="exercises-trash-btn js-exercises-trash-btn" type="button">
                        <svg
                            class="card-menu-trash-icon"
                            width="16"
                            height="16"
                        >
                            <use href="${u}#icon-trash"></use>
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
                            <use href="${u}#icon-arrow-right"></use>
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
                    <use href="${u}#icon-run"></use>
                    </svg>
                </div>
                <p class="card-title-text">${o}</p>
                </div>

                <div class="card-info">
                <div class="gap-card">
                    <p class="card-info-about-name">
                    Burned calories:
                    <div class="card-info-about-value card-time">${t} / ${s} min</div>
                    </p>
                </div>
                <div class="gap-card">
                    <p class="card-info-about-name">
                    Body part:
                    <div class="card-info-about-value card-body">${a}</div>
                    </p>
                </div>
                <div class="gap-card">
                    <p class="card-info-about-name">
                    Target:
                    <div class="card-info-about-value card-target">${r}</div>
                    </p>
                </div>
                </div>
            </li>
        `).join("")}const I="https://your-energy.b.goit.study/api",C={FILTERS:"filters",EXEECISES:"exercises"},R={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},N="savedExercises";class Z{constructor(){this.pagination}init(e,r,a,t){let s=3;const o={totalItems:r*a,itemsPerPage:a,visiblePages:s,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new O(w.paginationBox,o),this.pagination.on("afterMove",async({page:n})=>{if(!e){const d=JSON.parse(localStorage.getItem(N))??[];w.exerciseFavorites.innerHTML=_(d.slice((n-1)*a,n*a)),t();return}if(e.type===C.FILTERS){e.setPage(n);const d=await e.getCategories();D(d.results,w.categoriesContainer)}if(e.type===C.EXEECISES){e.setPage(n);const d=await e.getExercises();j(d.results,w.categoriesContainer)}})}}(()=>{const c=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),a=document.querySelectorAll(".mobile-social-box"),t=document.querySelector("body"),s=()=>{const n=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!n),c.classList.toggle("is-open"),t.classList.toggle("disable-scroll")},o=n=>n.forEach(d=>{d.addEventListener("click",s)});e.addEventListener("click",s),r.addEventListener("click",s),o(a)})();const V=document.querySelector("#upbutton");V.addEventListener("click",U);function U(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};class F{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1,this.search="",this.perPage=12}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}getExercise(){return this.exercise}setSearch(e){this.search=e}setPerPage(e){this.perPage=e}async getCategories(){try{return(await x.get(`${I}/filters?filter=${this.category}&page=${this.page}&limit=${this.perPage}`)).data}catch(e){return console.log(e),e}}async getExercises(){try{return(await x.get(`${I}/exercises?${R[this.category]}=${this.exercise}&keyword=${this.search}&page=${this.page}&limit=${this.perPage}`)).data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await x.get(`${I}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await x.post(`${I}/subscription`,e)).data}catch(r){return r}}}class J{constructor(){}getData(e){try{const r=localStorage.getItem(e);return JSON.parse(r)}catch{console.error("Get error: ",err)}}setData(e,r){try{const a=JSON.stringify(r);localStorage.setItem(e,a)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const Y=new F,k=new J,G=document.querySelector(".quote-text-js"),H=document.querySelector(".quote-author-js");async function Q(){const c=new Date,e=c.getDate(),r=c.getMonth()+1,a=c.getFullYear(),t=`${e}.${r}.${a}`,s=k.getData("quote");if(s&&s.date===t)P(s.data);else try{const o=await Y.getQuoteOfTheDay(),n={date:t,data:o};k.setData("quote",n),P(o)}catch(o){console.error("Error fetching the quote:",o)}}function P(c){G.textContent=c.quote,H.textContent=c.author}Q();function K(){const c=document.getElementsByClassName("categories_favorites_cards"),e=document.getElementById("modal"),r=document.getElementById("myModal");let a=!1;function t(){document.body.style.overflowY=""}function s(){q.style.overflowY="auto"}function o(){document.body.style.overflow="hidden"}function n(){document.body.style.overflow=""}function d(){e.style.display="flex",o(),t(),a=!0}function y(){e.style.display="none",n(),s(),a=!1,console.log(window.location.pathname),window.location.pathname==="/mvp-your-energy/favorites.html"&&document.location.reload()}const q=document.querySelector(".modal-main"),L=document.getElementsByClassName("modal-close-btn")[0];let h=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];L&&(L.onclick=function(){y(),localStorage.removeItem("currentExercise")}),window.onclick=function(i){i.target==e&&(y(),localStorage.removeItem("currentExercise"))},document.addEventListener("keydown",function(i){i.key==="Escape"&&a&&(y(),localStorage.removeItem("currentExercise"))});for(let i=0;i<c.length;i+=1)c[i].addEventListener("click",function(m){const g=m.target.closest(".card-menu-start"),f=m.target.closest(".card-item");if(g){const b=f.id;d();const p=`https://your-energy.b.goit.study/api/exercises/${b}`;x.get(p).then(l=>{if(l)return localStorage.setItem("currentExercise",JSON.stringify(l.data)),l.data}).then(l=>{T(l);const v=document.getElementById("fav-btn"),M=document.querySelector(".js-rating-btn");if(M){let $=function(){y(),r.style.display="block"};M.addEventListener("click",$)}if(v){const $=h.some(E=>E._id===l._id);v.querySelector(".modal-heart-icon use").setAttribute("href",$?`${u}#icon-trash`:`${u}#icon-heart`),v.querySelector(".modal-btn-text").textContent=$?"Remove from favorites":"Add to favorites",v.addEventListener("click",function(){const E=h.some(B=>B._id===l._id);E?h=h.filter(B=>B._id!==l._id):h.push(l),localStorage.setItem("savedExercises",JSON.stringify(h)),v.querySelector(".modal-btn-text").textContent=E?"Add to favorites":"Remove from favorites",v.querySelector(".modal-heart-icon use").setAttribute("href",E?`${u}#icon-heart`:`${u}#icon-trash`)})}}).catch(l=>{console.error("There was a problem with the Axios request:",l)})}});function T(i){const S=document.getElementById("cardDetails");let m=null;i.gifUrl?m=`<div class="modal-gif-wrapper">
        <img class="gif" src="${i.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:m=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const g=`<p class='modal-card-title'>${i.name.charAt(0).toUpperCase()+i.name.slice(1)}</p>`,f=A(Math.round(i.rating*10)/10),b=`<div class='modal-rating-container'>
      <span class="modal-rating">${i.rating.toString().includes(".")?Math.round(i.rating*10)/10:i.rating+".0"}</span>
      ${f}
      </div>`,p=`<div class="modal-details-container">
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Target</p>
      <p class="modal-details-info">${i.target.charAt(0).toUpperCase()+i.target.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title body-part">Body Part</p>
      <p class="modal-details-info">${i.bodyPart.charAt(0).toUpperCase()+i.bodyPart.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Equipment</p>
      <p class="modal-details-info">${i.equipment.charAt(0).toUpperCase()+i.equipment.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Popular</p>
      <p class="modal-details-info">${i.popularity}</p>
      </div>
      </div>
      <div class="modal-details-wrapper modal-calories">
      <p class="modal-details-title">Burned Calories</p>
      <p class="modal-details-info">${i.burnedCalories}</p>
      </div>`,l=`<div class="modal-description">${i.description}</div>`,v=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="${u}#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn js-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;S.innerHTML=`${m+`<div class="modal-content-wrapper">${g+b+p+l+v}</div>`}`}function A(i){const S=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="${u}#icon-star"></use>
      </svg></div>`,m=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="${u}#icon-star"></use>
      </svg></div>`;let g="",f=Math.floor(i),b=i-f;for(let p=0;p<5;p++)if(p<f)g+=S;else if(p===f&&b>0){const l=Math.round(b*100);g+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${l}%, rgba(244, 244, 244, 0.2) ${l}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${l}%, rgba(244, 244, 244, 0.2) ${l}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="${u}#icon-star"></use>
          </svg></div>`}else g+=m;return`${g}`}}document.addEventListener("DOMContentLoaded",function(){K()});document.addEventListener("DOMContentLoaded",function(){document.getElementById("openModalBtn");const c=document.getElementById("myModal"),e=document.getElementById("closeModalBtn");document.getElementById("additionalButton");const r=document.getElementById("email"),a=document.getElementById("comment"),t=document.querySelectorAll(".star");e.addEventListener("click",function(){c.style.display="none"}),r.addEventListener("input",function(){const o=r.value;/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(o)?r.setCustomValidity(""):r.setCustomValidity("Enter a correct email")}),a.addEventListener("input",function(){a.value.trim().length>0?a.setCustomValidity(""):a.setCustomValidity("Enter your comment")}),t.forEach(function(o,n){o.addEventListener("click",function(){const d=n+1;s(d)})});function s(o){t.forEach(function(n,d){n.classList.toggle("active",d<o)}),ratingDisplay.textContent=o.toFixed(1)}});export{F as A,Z as C,N as L,j as a,C as b,_ as c,D as g,u as i,w as r};
//# sourceMappingURL=modalrating-21609355.js.map
