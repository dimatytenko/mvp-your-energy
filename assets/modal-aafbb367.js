import{a as w,i as L,P as W,g as R}from"./vendor-5014e6d0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();(()=>{const t=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".mobile-social-box"),r=document.querySelector("body"),s=()=>{const d=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!d),t.classList.toggle("is-open"),r.classList.toggle("disable-scroll")},c=d=>d.forEach(m=>{m.addEventListener("click",s)});e.addEventListener("click",s),o.addEventListener("click",s),c(i)})();const z=document.querySelector("#upbutton");z.addEventListener("click",K);function K(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const $="https://your-energy.b.goit.study/api",q={FILTERS:"filters",EXEECISES:"exercises"},V={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class P{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1,this.search=""}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}getExercise(){return this.exercise}setSearch(e){this.search=e}async getCategories(){try{return(await w.get(`${$}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{const e=await w.get(`${$}/exercises?${V[this.category]}=${this.exercise}&keyword=${this.search}&page=${this.page}&perPage=12`);return console.log(e.data),e.data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await w.get(`${$}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await w.post(`${$}/subscription`,e)).data}catch(o){return o}}}class Z{constructor(){}getData(e){try{const o=localStorage.getItem(e);return JSON.parse(o)}catch{console.error("Get error: ",err)}}setData(e,o){try{const i=JSON.stringify(o);localStorage.setItem(e,i)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const ee=new P,_=new Z,te=document.querySelector(".quote-text-js"),se=document.querySelector(".quote-author-js");async function oe(){const t=new Date,e=t.getDate(),o=t.getMonth()+1,i=t.getFullYear(),r=`${e}.${o}.${i}`,s=_.getData("quote");if(s&&s.date===r)O(s.data);else try{const c=await ee.getQuoteOfTheDay(),d={date:r,data:c};_.setData("quote",d),O(c)}catch(c){console.error("Error fetching the quote:",c)}}function O(t){te.textContent=t.quote,se.textContent=t.author}oe();const re=new P,j=document.querySelector(".js-footer-form"),u=document.querySelector(".footer-form-btn"),C=document.querySelector('input[type="email"]');function D(t){return/^[^\s@]+(?:\.[^\s@]+)*@[^\s@]+\.[^\s@]+$/.test(t)}u&&(u.disabled=!0,C.addEventListener("input",()=>{const t=C.value;D(t)?(u.style.backgroundColor="#c6cdd1",u.disabled=!1):(u.style.backgroundColor="#f4f4f4",u.disabled=!0)}),u.addEventListener("mouseover",()=>{const t=C.value;D(t)?u.style.cursor="pointer":u.style.cursor="not-allowed"}),u.addEventListener("mouseout",()=>{u.style.cursor="default"}),j.addEventListener("submit",async t=>{var i,r;t.preventDefault();const e=C.value;if(!D(e)){L.warning({message:"Invalid email address was entered.",position:"topRight"});return}const o={email:e};try{const s=await re.subscription(o);if(console.log("resp",s),((i=s==null?void 0:s.response)==null?void 0:i.status)===409){L.warning({message:"Subscription already exists",position:"topRight"});return}if(((r=s==null?void 0:s.response)==null?void 0:r.status)===400){L.warning({message:"Bad request (invalid request body)",position:"topRight"});return}s!=null&&s.message&&L.success({message:s.message,position:"topRight"})}catch(s){console.log("error",s)}finally{j.reset()}}));const n={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh")};console.log(n.exerciseRefresh);n.exerciseRefresh.addEventListener("click",ae);function ae(t){location.reload()}const g="/mvp-your-energy/assets/sprite-2566d563.svg",F=(t,e)=>{const o=t.reduce((i,{filter:r,imgURL:s,name:c})=>(i+=`<li class="categories__card-item js-exercise" data-exercise=${c}>
        <img
          src="${s}"
          alt="${c}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${c}</h2>
        <p class="categories__card-text">${r}</p>
      </li>`,i),"");e.innerHTML=o},J=(t,e)=>{const o=t.reduce((i,{rating:r,target:s,bodyPart:c,burnedCalories:d,name:m,_id:B})=>(i+=`<li class="card-item" id=${B}>
    <div class="card-menu">
      <div class="card-menu-box">
        <div class="card-menu-workout">WORKOUT</div>
        <div class="card-menu-rating">
          <p class="card-menu-rating-text">${Math.round(r)}.0</p>
          <svg
            id="card-menu-rating-icon"
            class="card-menu-rating-icon"
            width="18"
            height="18"
          >
            <use href="${g}#icon-star"></use>
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
          <use href="${g}#icon-arrow-right"></use>
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
          <use href="${g}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${m}</p>
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
        <div class="card-info-about-value">${s}</div>
      </div>
    </div>
  </li>`,i),"");e.innerHTML=o};class ie{constructor(){this.pagination}init(e,o,i){let r=3;const s={totalItems:o*i,itemsPerPage:i,visiblePages:r,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new W(n.paginationBox,s),this.pagination.on("afterMove",async({page:c})=>{if(console.log("service",e),e.type===q.FILTERS){e.setPage(c);const d=await e.getCategories();F(d.results,n.categoriesContainer)}if(e.type===q.EXEECISES){e.setPage(c);const d=await e.getExercises();J(d.results,n.categoriesContainer)}})}}const Q=new ie,M=new P(q.FILTERS),x=new P(q.EXEECISES);n.categoriesList.addEventListener("click",ce);n.search.addEventListener("submit",ne);async function ne(t){t.preventDefault();const o=new FormData(t.currentTarget).get("search").trim(),i=x.getExercise();return x.setSearch(o),await X(i),o}async function ce(t){if(t.target.nodeName!=="LI")return;n.exercise.textContent="",n.exerciseDecor.classList.add("visually-hidden"),n.categoryError.classList.add("visually-hidden"),n.search.classList.add("visually-hidden");const e=t.currentTarget.querySelector(".current");e&&e.classList.remove("current"),t.target.classList.add("current");const o=t.target.textContent;M.setCategory(o),x.setCategory(o),await H()}async function H(){const t=await M.getCategories();if(n.categorySceletonLoader.classList.add("visually-hidden"),F(t.results,n.categoriesContainer),t!=null&&t.totalPages||n.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){n.paginationBox.classList.add("visually-hidden");return}n.paginationBox.classList.remove("visually-hidden"),Q.init(M,t.totalPages,t.perPage)}H();n.categoriesContainer.addEventListener("click",le);async function le(t){if(console.log(t.target),t.target.closest(".js-exercise")){const e=t.target.closest(".js-exercise").dataset.exercise;n.exercise.textContent=e,n.exerciseDecor.classList.remove("visually-hidden"),n.search.classList.remove("visually-hidden"),await X(e);return}}async function X(t){x.setExercise(t);const e=await x.getExercises();if(J(e.results,n.categoriesContainer),e!=null&&e.totalPages||n.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){n.paginationBox.classList.add("visually-hidden");return}n.paginationBox.classList.remove("visually-hidden"),Q.init(x,e.totalPages,e.perPage)}const N=["#Sport","#Healthy","#Workout","#Diet"],U=100,de=document.querySelectorAll(".hero-item-text");let I=0;function G(){if(I<N.length){const t=N[I],e=de[I];let o=0;const i=setInterval(function(){o<t.length?(e.textContent+=t[o],o++):(clearInterval(i),I++,setTimeout(G,U))},U)}}G();const ue={root:null,rootMargin:"0px",threshold:0},T=document.querySelector(".footer-title-span"),ge=new IntersectionObserver(me,ue);ge.observe(T);function me(t,e){t.forEach(o=>{o.isIntersecting&&(R.set(T,{clearProps:"all"}),R.to(T,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}function pe(){const t=document.getElementsByClassName("categories__cards-list"),e=document.getElementById("modal");let o=!1;function i(){document.body.style.overflow="hidden"}function r(){document.body.style.overflow=""}function s(){e.style.display="flex",i(),o=!0}function c(){e.style.display="none",r(),o=!1}document.querySelector(".modal-main");const d=document.getElementsByClassName("modal-close-btn")[0];let m=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];d&&(d.onclick=function(){c(),localStorage.removeItem("currentExercise")}),window.onclick=function(a){a.target==e&&(c(),localStorage.removeItem("currentExercise"))},document.addEventListener("keydown",function(a){a.key==="Escape"&&o&&(c(),localStorage.removeItem("currentExercise"))});for(let a=0;a<t.length;a+=1)t[a].addEventListener("click",function(p){const f=p.target.closest(".card-menu-start"),h=p.target.closest(".card-item");if(f){const b=h.id;s();const v=`https://your-energy.b.goit.study/api/exercises/${b}`;w.get(v).then(l=>{if(l)return localStorage.setItem("currentExercise",JSON.stringify(l.data)),l.data}).then(l=>{console.log(l),B(l);const y=document.getElementById("fav-btn");if(y){const A=m.some(S=>S._id===l._id);y.querySelector(".modal-heart-icon use").setAttribute("href",A?`${g}#icon-trash`:`${g}#icon-heart`),y.querySelector(".modal-btn-text").textContent=A?"Remove from favorites":"Add to favorites",y.addEventListener("click",function(){const S=m.some(k=>k._id===l._id);S?m=m.filter(k=>k._id!==l._id):m.push(l),localStorage.setItem("savedExercises",JSON.stringify(m)),y.querySelector(".modal-btn-text").textContent=S?"Add to favorites":"Remove from favorites",y.querySelector(".modal-heart-icon use").setAttribute("href",S?`${g}#icon-heart`:`${g}#icon-trash`)})}}).catch(l=>{console.error("There was a problem with the Axios request:",l)})}});function B(a){const E=document.getElementById("cardDetails");console.log("exerciseDetailsContainer",E);let p=null;a.gifUrl?p=`<div class="modal-gif-wrapper">
        <img class="gif" src="${a.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:p=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const f=`<p class='modal-card-title'>${a.name.charAt(0).toUpperCase()+a.name.slice(1)}</p>`,h=Y(Math.round(a.rating*10)/10),b=`<div class='modal-rating-container'>
      <span class="modal-rating">${a.rating.toString().includes(".")?Math.round(a.rating*10)/10:a.rating+".0"}</span>
      ${h}
      </div>`,v=`<div class="modal-details-container">
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
      </div>`,l=`<div class="modal-description">${a.description}</div>`,y=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="${g}#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;E.innerHTML=`${p+`<div class="modal-content-wrapper">${f+b+v+l+y}</div>`}`}function Y(a){const E=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="${g}#icon-star"></use>
      </svg></div>`,p=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="${g}#icon-star"></use>
      </svg></div>`;let f="",h=Math.floor(a),b=a-h;for(let v=0;v<5;v++)if(v<h)f+=E;else if(v===h&&b>0){const l=Math.round(b*100);f+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${l}%, rgba(244, 244, 244, 0.2) ${l}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${l}%, rgba(244, 244, 244, 0.2) ${l}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="${g}#icon-star"></use>
          </svg></div>`}else f+=p;return`${f}`}}window.onload=function(){document.querySelector(".home__container")&&pe()};
//# sourceMappingURL=modal-aafbb367.js.map
