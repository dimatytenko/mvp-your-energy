import{P as M,a as b}from"./vendor-5c458d1f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const d="/mvp-your-energy/assets/sprite-c1fb1bf2.svg",S={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh"),searchIcon:document.querySelector(".menu-search-icon"),closeIcon:document.querySelector(".menu-close-icon"),searchBtn:document.querySelector(".menu-search-btn"),searchInput:document.querySelector(".menu-search-input"),exerciseFavorites:document.querySelector(".js-exercise-favorites")},k=(c,e)=>{const o=c.reduce((i,{filter:t,imgURL:s,name:r})=>(i+=`<li class="categories__card-item js-exercise"
      style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${s}), lightgray -56.383px -2px / 129.575% 103.719% no-repeat"
      data-exercise=${r}>
        <img
          src="${s}"
          alt="${r}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${r}</h2>
        <p class="categories__card-text">${t}</p>
      </li>`,i),"");e.innerHTML=o},T=(c,e)=>{const o=c.reduce((i,{rating:t,target:s,bodyPart:r,burnedCalories:l,name:u,_id:$,time:w})=>(i+=`<li class="card-item" id=${$}>
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
            <use href="${d}#icon-star"></use>
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
          <use href="${d}#icon-arrow-right"></use>
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
          <use href="${d}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${u}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value card-time">${l} / ${w} min</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value card-body">${r}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value card-target">${s}</div>
      </div>
    </div>
  </li>`,i),"");e.innerHTML=o};function P(c){return c.map(({_id:e,target:o,bodyPart:i,burnedCalories:t,time:s,name:r})=>`
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
                            <use href="${d}#icon-trash"></use>
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
                            <use href="${d}#icon-arrow-right"></use>
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
                    <use href="${d}#icon-run"></use>
                    </svg>
                </div>
                <p class="card-title-text">${r}</p>
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
                    <div class="card-info-about-value card-body">${i}</div>
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
        `).join("")}const E="https://your-energy.b.goit.study/api",L={FILTERS:"filters",EXEECISES:"exercises"},O={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},A="savedExercises";class K{constructor(){this.pagination}init(e,o,i){let t=3;const s={totalItems:o*i,itemsPerPage:i,visiblePages:t,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new M(S.paginationBox,s),this.pagination.on("afterMove",async({page:r})=>{if(!e){const l=JSON.parse(localStorage.getItem(A))??[];S.exerciseFavorites.innerHTML=P(l.slice((r-1)*i,r*i));return}if(e.type===L.FILTERS){e.setPage(r);const l=await e.getCategories();k(l.results,S.categoriesContainer)}if(e.type===L.EXEECISES){e.setPage(r);const l=await e.getExercises();T(l.results,S.categoriesContainer)}})}}(()=>{const c=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".mobile-social-box"),t=document.querySelector("body"),s=()=>{const l=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!l),c.classList.toggle("is-open"),t.classList.toggle("disable-scroll")},r=l=>l.forEach(u=>{u.addEventListener("click",s)});e.addEventListener("click",s),o.addEventListener("click",s),r(i)})();const D=document.querySelector("#upbutton");D.addEventListener("click",_);function _(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};class j{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1,this.search=""}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}getExercise(){return this.exercise}setSearch(e){this.search=e}async getCategories(){try{return(await b.get(`${E}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{const e=await b.get(`${E}/exercises?${O[this.category]}=${this.exercise}&keyword=${this.search}&page=${this.page}&perPage=12`);return console.log(e.data),e.data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await b.get(`${E}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await b.post(`${E}/subscription`,e)).data}catch(o){return o}}}class R{constructor(){}getData(e){try{const o=localStorage.getItem(e);return JSON.parse(o)}catch{console.error("Get error: ",err)}}setData(e,o){try{const i=JSON.stringify(o);localStorage.setItem(e,i)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const N=new j,B=new R,U=document.querySelector(".quote-text-js"),F=document.querySelector(".quote-author-js");async function J(){const c=new Date,e=c.getDate(),o=c.getMonth()+1,i=c.getFullYear(),t=`${e}.${o}.${i}`,s=B.getData("quote");if(s&&s.date===t)C(s.data);else try{const r=await N.getQuoteOfTheDay(),l={date:t,data:r};B.setData("quote",l),C(r)}catch(r){console.error("Error fetching the quote:",r)}}function C(c){U.textContent=c.quote,F.textContent=c.author}J();function H(){const c=document.getElementsByClassName("categories_favorites_cards"),e=document.getElementById("modal");let o=!1;function i(){document.body.style.overflow="hidden"}function t(){document.body.style.overflow=""}function s(){e.style.display="flex",i(),o=!0}function r(){e.style.display="none",t(),o=!1,console.log(window.location.pathname),window.location.pathname==="/favorites.html"&&document.location.reload()}document.querySelector(".modal-main");const l=document.getElementsByClassName("modal-close-btn")[0];let u=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];l&&(l.onclick=function(){r(),localStorage.removeItem("currentExercise")}),window.onclick=function(a){a.target==e&&(r(),localStorage.removeItem("currentExercise"))},document.addEventListener("keydown",function(a){a.key==="Escape"&&o&&(r(),localStorage.removeItem("currentExercise"))});for(let a=0;a<c.length;a+=1)c[a].addEventListener("click",function(m){const g=m.target.closest(".card-menu-start"),f=m.target.closest(".card-item");if(g){const h=f.id;s();const p=`https://your-energy.b.goit.study/api/exercises/${h}`;b.get(p).then(n=>{if(n)return localStorage.setItem("currentExercise",JSON.stringify(n.data)),n.data}).then(n=>{$(n);const v=document.getElementById("fav-btn");if(v){const I=u.some(y=>y._id===n._id);v.querySelector(".modal-heart-icon use").setAttribute("href",I?`${d}#icon-trash`:`${d}#icon-heart`),v.querySelector(".modal-btn-text").textContent=I?"Remove from favorites":"Add to favorites",v.addEventListener("click",function(){const y=u.some(q=>q._id===n._id);y?u=u.filter(q=>q._id!==n._id):u.push(n),localStorage.setItem("savedExercises",JSON.stringify(u)),v.querySelector(".modal-btn-text").textContent=y?"Add to favorites":"Remove from favorites",v.querySelector(".modal-heart-icon use").setAttribute("href",y?`${d}#icon-heart`:`${d}#icon-trash`)})}}).catch(n=>{console.error("There was a problem with the Axios request:",n)})}});function $(a){const x=document.getElementById("cardDetails");let m=null;a.gifUrl?m=`<div class="modal-gif-wrapper">
        <img class="gif" src="${a.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:m=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const g=`<p class='modal-card-title'>${a.name.charAt(0).toUpperCase()+a.name.slice(1)}</p>`,f=w(Math.round(a.rating*10)/10),h=`<div class='modal-rating-container'>
      <span class="modal-rating">${a.rating.toString().includes(".")?Math.round(a.rating*10)/10:a.rating+".0"}</span>
      ${f}
      </div>`,p=`<div class="modal-details-container">
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Target</p>
      <p class="modal-details-info">${a.target.charAt(0).toUpperCase()+a.target.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title body-part">Body Part</p>
      <p class="modal-details-info">${a.bodyPart.charAt(0).toUpperCase()+a.bodyPart.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Equipment</p>
      <p class="modal-details-info">${a.equipment.charAt(0).toUpperCase()+a.equipment.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Popular</p>
      <p class="modal-details-info">${a.popularity}</p>
      </div>
      </div>
      <div class="modal-details-wrapper modal-calories">
      <p class="modal-details-title">Burned Calories</p>
      <p class="modal-details-info">${a.burnedCalories}</p>
      </div>`,n=`<div class="modal-description">${a.description}</div>`,v=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="${d}#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;x.innerHTML=`${m+`<div class="modal-content-wrapper">${g+h+p+n+v}</div>`}`}function w(a){const x=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="${d}#icon-star"></use>
      </svg></div>`,m=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="${d}#icon-star"></use>
      </svg></div>`;let g="",f=Math.floor(a),h=a-f;for(let p=0;p<5;p++)if(p<f)g+=x;else if(p===f&&h>0){const n=Math.round(h*100);g+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${n}%, rgba(244, 244, 244, 0.2) ${n}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${n}%, rgba(244, 244, 244, 0.2) ${n}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="${d}#icon-star"></use>
          </svg></div>`}else g+=m;return`${g}`}}document.addEventListener("DOMContentLoaded",function(){H()});export{j as A,K as C,A as L,T as a,L as b,P as c,k as g,d as i,S as r};
//# sourceMappingURL=modal-cf8b3d63.js.map
