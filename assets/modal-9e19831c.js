import{a as S,i as w,P as Y,g as _}from"./vendor-5014e6d0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();(()=>{const t=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".mobile-social-box"),o=document.querySelector("body"),r=()=>{const d=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!d),t.classList.toggle("is-open"),o.classList.toggle("disable-scroll")},c=d=>d.forEach(g=>{g.addEventListener("click",r)});e.addEventListener("click",r),s.addEventListener("click",r),c(i)})();const W=document.querySelector("#upbutton");W.addEventListener("click",K);function K(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const L="https://your-energy.b.goit.study/api",$={FILTERS:"filters",EXEECISES:"exercises"},Z={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class q{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1,this.search=""}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}getExercise(){return this.exercise}setSearch(e){this.search=e}async getCategories(){try{return(await S.get(`${L}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{const e=await S.get(`${L}/exercises?${Z[this.category]}=${this.exercise}&keyword=${this.search}&page=${this.page}&perPage=12`);return console.log(e.data),e.data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await S.get(`${L}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await S.post(`${L}/subscription`,e)).data}catch(s){return s}}}class V{constructor(){}getData(e){try{const s=localStorage.getItem(e);return JSON.parse(s)}catch{console.error("Get error: ",err)}}setData(e,s){try{const i=JSON.stringify(s);localStorage.setItem(e,i)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const ee=new q,R=new V,te=document.querySelector(".quote-text-js"),se=document.querySelector(".quote-author-js");async function re(){const t=new Date,e=t.getDate(),s=t.getMonth()+1,i=t.getFullYear(),o=`${e}.${s}.${i}`,r=R.getData("quote");if(r&&r.date===o)O(r.data);else try{const c=await ee.getQuoteOfTheDay(),d={date:o,data:c};R.setData("quote",d),O(c)}catch(c){console.error("Error fetching the quote:",c)}}function O(t){te.textContent=t.quote,se.textContent=t.author}re();const oe=new q,j=document.querySelector(".js-footer-form"),u=document.querySelector(".footer-form-btn"),C=document.querySelector('input[type="email"]');function k(t){return/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}u&&(u.disabled=!0,C.addEventListener("input",()=>{const t=C.value;k(t)?(u.style.backgroundColor="#c6cdd1",u.disabled=!1):(u.style.backgroundColor="#f4f4f4",u.disabled=!0)}),u.addEventListener("mouseover",()=>{const t=C.value;k(t)?u.style.cursor="pointer":u.style.cursor="not-allowed"}),u.addEventListener("mouseout",()=>{u.style.cursor="default"}),j.addEventListener("submit",async t=>{var i,o;t.preventDefault();const e=C.value;if(!k(e)){w.warning({message:"Invalid email address was entered.",position:"topRight"});return}const s={email:e};try{const r=await oe.subscription(s);if(console.log("resp",r),((i=r==null?void 0:r.response)==null?void 0:i.status)===409){w.warning({message:"Subscription already exists",position:"topRight"});return}if(((o=r==null?void 0:r.response)==null?void 0:o.status)===400){w.warning({message:"Bad request (invalid request body)",position:"topRight"});return}w.success({message:r.message,position:"topRight"})}catch(r){console.log("error",r)}finally{j.reset()}}));const n={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh")};console.log(n.exerciseRefresh);n.exerciseRefresh.addEventListener("click",ae);function ae(t){location.reload()}const D="/mvp-your-energy/assets/sprite-2566d563.svg",F=(t,e)=>{const s=t.reduce((i,{filter:o,imgURL:r,name:c})=>(i+=`<li class="categories__card-item js-exercise" data-exercise=${c}>
        <img
          src="${r}"
          alt="${c}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${c}</h2>
        <p class="categories__card-text">${o}</p>
      </li>`,i),"");e.innerHTML=s},J=(t,e)=>{const s=t.reduce((i,{rating:o,target:r,bodyPart:c,burnedCalories:d,name:g,_id:P})=>(i+=`<li class="card-item" id=${P}>
    <div class="card-menu">
      <div class="card-menu-box">
        <div class="card-menu-workout">WORKOUT</div>
        <div class="card-menu-rating">
          <p class="card-menu-rating-text">${Math.round(o)}.0</p>
          <svg
            id="card-menu-rating-icon"
            class="card-menu-rating-icon"
            width="18"
            height="18"
          >
            <use href="${D}#icon-star"></use>
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
          <use href="${D}#icon-arrow-right"></use>
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
          <use href="${D}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${g}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value">${d} / ...</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value">${c}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value">${r}</div>
      </div>
    </div>
  </li>`,i),"");e.innerHTML=s};class ie{constructor(){this.pagination}init(e,s,i){let o=3;const r={totalItems:s*i,itemsPerPage:i,visiblePages:o,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new Y(n.paginationBox,r),this.pagination.on("afterMove",async({page:c})=>{if(console.log("service",e),e.type===$.FILTERS){e.setPage(c);const d=await e.getCategories();F(d.results,n.categoriesContainer)}if(e.type===$.EXEECISES){e.setPage(c);const d=await e.getExercises();J(d.results,n.categoriesContainer)}})}}const Q=new ie,M=new q($.FILTERS),b=new q($.EXEECISES);n.categoriesList.addEventListener("click",ce);n.search.addEventListener("submit",ne);async function ne(t){t.preventDefault();const s=new FormData(t.currentTarget).get("search").trim(),i=b.getExercise();return b.setSearch(s),await X(i),s}async function ce(t){if(t.target.nodeName!=="LI")return;n.exercise.textContent="",n.exerciseDecor.classList.add("visually-hidden"),n.categoryError.classList.add("visually-hidden"),n.search.classList.add("visually-hidden");const e=t.currentTarget.querySelector(".current");e&&e.classList.remove("current"),t.target.classList.add("current");const s=t.target.textContent;M.setCategory(s),b.setCategory(s),await H()}async function H(){const t=await M.getCategories();if(n.categorySceletonLoader.classList.add("visually-hidden"),F(t.results,n.categoriesContainer),t!=null&&t.totalPages||n.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){n.paginationBox.classList.add("visually-hidden");return}n.paginationBox.classList.remove("visually-hidden"),Q.init(M,t.totalPages,t.perPage)}H();n.categoriesContainer.addEventListener("click",le);async function le(t){if(console.log(t.target),t.target.closest(".js-exercise")){const e=t.target.closest(".js-exercise").dataset.exercise;n.exercise.textContent=e,n.exerciseDecor.classList.remove("visually-hidden"),n.search.classList.remove("visually-hidden"),await X(e);return}}async function X(t){b.setExercise(t);const e=await b.getExercises();if(J(e.results,n.categoriesContainer),e!=null&&e.totalPages||n.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){n.paginationBox.classList.add("visually-hidden");return}n.paginationBox.classList.remove("visually-hidden"),Q.init(b,e.totalPages,e.perPage)}const N=["#Sport","#Healthy","#Workout","#Diet"],U=100,de=document.querySelectorAll(".hero-item-text");let I=0;function z(){if(I<N.length){const t=N[I],e=de[I];let s=0;const i=setInterval(function(){s<t.length?(e.textContent+=t[s],s++):(clearInterval(i),I++,setTimeout(z,U))},U)}}z();const ue={root:null,rootMargin:"0px",threshold:0},T=document.querySelector(".footer-title-span"),ge=new IntersectionObserver(me,ue);ge.observe(T);function me(t,e){t.forEach(s=>{s.isIntersecting&&(_.set(T,{clearProps:"all"}),_.to(T,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}function pe(){const t=document.getElementsByClassName("categories__cards-list"),e=document.getElementById("modal");let s=!1;function i(){document.body.style.overflow="hidden"}function o(){document.body.style.overflow=""}function r(){e.style.display="flex",i(),s=!0}function c(){e.style.display="none",o(),s=!1}document.querySelector(".modal-main");const d=document.getElementsByClassName("modal-close-btn")[0];let g=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];d&&(d.onclick=function(){c(),localStorage.removeItem("currentExercise")}),window.onclick=function(a){a.target==e&&(c(),localStorage.removeItem("currentExercise"))},document.addEventListener("keydown",function(a){a.key==="Escape"&&s&&(c(),localStorage.removeItem("currentExercise"))});for(let a=0;a<t.length;a+=1)t[a].addEventListener("click",function(m){const p=m.target.closest(".card-menu-start"),y=m.target.closest(".card-item");if(p){const h=y.id;r();const f=`https://your-energy.b.goit.study/api/exercises/${h}`;S.get(f).then(l=>{if(l)return localStorage.setItem("currentExercise",JSON.stringify(l.data)),l.data}).then(l=>{console.log(l),P(l);const v=document.getElementById("fav-btn");if(v){const A=g.some(E=>E._id===l._id);v.querySelector(".modal-heart-icon use").setAttribute("href",A?"./img/sprite.svg#icon-trash":"./img/sprite.svg#icon-heart"),v.querySelector(".modal-btn-text").textContent=A?"Remove from favorites":"Add to favorites",v.addEventListener("click",function(){const E=g.some(B=>B._id===l._id);E?g=g.filter(B=>B._id!==l._id):g.push(l),localStorage.setItem("savedExercises",JSON.stringify(g)),v.querySelector(".modal-btn-text").textContent=E?"Add to favorites":"Remove from favorites",v.querySelector(".modal-heart-icon use").setAttribute("href",E?"./img/sprite.svg#icon-heart":"./img/sprite.svg#icon-trash")})}}).catch(l=>{console.error("There was a problem with the Axios request:",l)})}});function P(a){const x=document.getElementById("cardDetails");console.log("exerciseDetailsContainer",x);let m=null;a.gifUrl?m=`<div class="modal-gif-wrapper">
        <img class="gif" src="${a.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:m=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const p=`<p class='modal-card-title'>${a.name.charAt(0).toUpperCase()+a.name.slice(1)}</p>`,y=G(Math.round(a.rating*10)/10),h=`<div class='modal-rating-container'>
      <span class="modal-rating">${a.rating.toString().includes(".")?Math.round(a.rating*10)/10:a.rating+".0"}</span>
      ${y}
      </div>`,f=`<div class="modal-details-container">
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
      </div>`,l=`<div class="modal-description">${a.description}</div>`,v=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="./img/sprite.svg#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;x.innerHTML=`${m+`<div class="modal-content-wrapper">${p+h+f+l+v}</div>`}`}function G(a){const x=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="./img/sprite.svg#icon-star"></use>
      </svg></div>`,m=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="./img/sprite.svg#icon-star"></use>
      </svg></div>`;let p="",y=Math.floor(a),h=a-y;for(let f=0;f<5;f++)if(f<y)p+=x;else if(f===y&&h>0){const l=Math.round(h*100);p+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${l}%, rgba(244, 244, 244, 0.2) ${l}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${l}%, rgba(244, 244, 244, 0.2) ${l}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="./img/sprite.svg#icon-star"></use>
          </svg></div>`}else p+=m;return`${p}`}}window.onload=function(){document.querySelector(".home__container")&&pe()};
//# sourceMappingURL=modal-9e19831c.js.map
