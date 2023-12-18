import{a as S}from"./vendor-5014e6d0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const f="/mvp-your-energy/assets/sprite-c1fb1bf2.svg";(()=>{const c=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".mobile-social-box"),s=document.querySelector("body"),o=()=>{const l=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!l),c.classList.toggle("is-open"),s.classList.toggle("disable-scroll")},i=l=>l.forEach(d=>{d.addEventListener("click",o)});e.addEventListener("click",o),a.addEventListener("click",o),i(n)})();const E="https://your-energy.b.goit.study/api",U={FILTERS:"filters",EXEECISES:"exercises"},C={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class M{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1,this.search=""}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}getExercise(){return this.exercise}setSearch(e){this.search=e}async getCategories(){try{return(await S.get(`${E}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{const e=await S.get(`${E}/exercises?${C[this.category]}=${this.exercise}&keyword=${this.search}&page=${this.page}&perPage=12`);return console.log(e.data),e.data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await S.get(`${E}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await S.post(`${E}/subscription`,e)).data}catch(a){return a}}}class A{constructor(){}getData(e){try{const a=localStorage.getItem(e);return JSON.parse(a)}catch{console.error("Get error: ",err)}}setData(e,a){try{const n=JSON.stringify(a);localStorage.setItem(e,n)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const D=new M,w=new A,k=document.querySelector(".quote-text-js"),P=document.querySelector(".quote-author-js");async function B(){const c=new Date,e=c.getDate(),a=c.getMonth()+1,n=c.getFullYear(),s=`${e}.${a}.${n}`,o=w.getData("quote");if(o&&o.date===s)I(o.data);else try{const i=await D.getQuoteOfTheDay(),l={date:s,data:i};w.setData("quote",l),I(i)}catch(i){console.error("Error fetching the quote:",i)}}function I(c){k.textContent=c.quote,P.textContent=c.author}B();function O(){const c=document.getElementsByClassName("categories_favorites_cards"),e=document.getElementById("modal");let a=!1;function n(){document.body.style.overflow="hidden"}function s(){document.body.style.overflow=""}function o(){e.style.display="flex",n(),a=!0}function i(){e.style.display="none",s(),a=!1}document.querySelector(".modal-main");const l=document.getElementsByClassName("modal-close-btn")[0];let d=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];l&&(l.onclick=function(){i(),localStorage.removeItem("currentExercise")}),window.onclick=function(t){t.target==e&&(i(),localStorage.removeItem("currentExercise"))},document.addEventListener("keydown",function(t){t.key==="Escape"&&a&&(i(),localStorage.removeItem("currentExercise"))});for(let t=0;t<c.length;t+=1)c[t].addEventListener("click",function(u){const m=u.target.closest(".card-menu-start"),y=u.target.closest(".card-item");if(m){const v=y.id;o();const g=`https://your-energy.b.goit.study/api/exercises/${v}`;S.get(g).then(r=>{if(r)return localStorage.setItem("currentExercise",JSON.stringify(r.data)),r.data}).then(r=>{console.log(r),q(r);const p=document.getElementById("fav-btn");if(p){const $=d.some(b=>b._id===r._id);p.querySelector(".modal-heart-icon use").setAttribute("href",$?`${f}#icon-trash`:`${f}#icon-heart`),p.querySelector(".modal-btn-text").textContent=$?"Remove from favorites":"Add to favorites",p.addEventListener("click",function(){const b=d.some(x=>x._id===r._id);b?d=d.filter(x=>x._id!==r._id):d.push(r),localStorage.setItem("savedExercises",JSON.stringify(d)),p.querySelector(".modal-btn-text").textContent=b?"Add to favorites":"Remove from favorites",p.querySelector(".modal-heart-icon use").setAttribute("href",b?`${f}#icon-heart`:`${f}#icon-trash`)})}}).catch(r=>{console.error("There was a problem with the Axios request:",r)})}});function q(t){const h=document.getElementById("cardDetails");console.log("exerciseDetailsContainer",h);let u=null;t.gifUrl?u=`<div class="modal-gif-wrapper">
        <img class="gif" src="${t.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:u=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const m=`<p class='modal-card-title'>${t.name.charAt(0).toUpperCase()+t.name.slice(1)}</p>`,y=L(Math.round(t.rating*10)/10),v=`<div class='modal-rating-container'>
      <span class="modal-rating">${t.rating.toString().includes(".")?Math.round(t.rating*10)/10:t.rating+".0"}</span>
      ${y}
      </div>`,g=`<div class="modal-details-container">
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Target</p>
      <p class="modal-details-info">${t.target.charAt(0).toUpperCase()+t.target.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title body-part">Body Part</p>
      <p class="modal-details-info">${t.bodyPart.charAt(0).toUpperCase()+t.bodyPart.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Equipment</p>
      <p class="modal-details-info">${t.equipment.charAt(0).toUpperCase()+t.equipment.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Popular</p>
      <p class="modal-details-info">${t.popularity}</p>
      </div>
      </div>
      <div class="modal-details-wrapper modal-calories">
      <p class="modal-details-title">Burned Calories</p>
      <p class="modal-details-info">${t.burnedCalories}</p>
      </div>`,r=`<div class="modal-description">${t.description}</div>`,p=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="${f}#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;h.innerHTML=`${u+`<div class="modal-content-wrapper">${m+v+g+r+p}</div>`}`}function L(t){const h=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="${f}#icon-star"></use>
      </svg></div>`,u=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="${f}#icon-star"></use>
      </svg></div>`;let m="",y=Math.floor(t),v=t-y;for(let g=0;g<5;g++)if(g<y)m+=h;else if(g===y&&v>0){const r=Math.round(v*100);m+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${r}%, rgba(244, 244, 244, 0.2) ${r}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${r}%, rgba(244, 244, 244, 0.2) ${r}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="${f}#icon-star"></use>
          </svg></div>`}else m+=u;return`${m}`}}document.addEventListener("DOMContentLoaded",function(){O()});export{M as A,U as a,f as i};
//# sourceMappingURL=modal-2877e4cb.js.map
