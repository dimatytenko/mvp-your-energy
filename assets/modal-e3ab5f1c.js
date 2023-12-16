import{a as x,i as b,P as Q,g as D}from"./vendor-5014e6d0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();(()=>{const t=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),o=document.querySelectorAll(".mobile-social-box"),i=document.querySelector("body"),r=()=>{const l=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!l),t.classList.toggle("is-open"),i.classList.toggle("disable-scroll")},s=l=>l.forEach(d=>{d.addEventListener("click",r)});e.addEventListener("click",r),a.addEventListener("click",r),s(o)})();const H=document.querySelector("#upbutton");H.addEventListener("click",X);function X(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const E="https://your-energy.b.goit.study/api",L={FILTERS:"filters",EXEECISES:"exercises"},z={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class C{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1,this.search=""}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}getExercise(){return this.exercise}setSearch(e){this.search=e}async getCategories(){try{return(await x.get(`${E}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{const e=await x.get(`${E}/exercises?${z[this.category]}=${this.exercise}&keyword=${this.search}&page=${this.page}&perPage=12`);return console.log(e.data),e.data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await x.get(`${E}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await x.post(`${E}/subscription`,e)).data}catch(a){return a}}}class G{constructor(){}getData(e){try{const a=localStorage.getItem(e);return JSON.parse(a)}catch{console.error("Get error: ",err)}}setData(e,a){try{const o=JSON.stringify(a);localStorage.setItem(e,o)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const Y=new C,T=new G,W=document.querySelector(".quote-text-js"),K=document.querySelector(".quote-author-js");async function Z(){const t=new Date,e=t.getDate(),a=t.getMonth()+1,o=t.getFullYear(),i=`${e}.${a}.${o}`,r=T.getData("quote");if(r&&r.date===i)A(r.data);else try{const s=await Y.getQuoteOfTheDay(),l={date:i,data:s};T.setData("quote",l),A(s)}catch(s){console.error("Error fetching the quote:",s)}}function A(t){W.textContent=t.quote,K.textContent=t.author}Z();const V=new C,M=document.querySelector(".js-footer-form"),u=document.querySelector(".footer-form-btn"),S=document.querySelector('input[type="email"]');function $(t){return/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}u&&(u.disabled=!0,S.addEventListener("input",()=>{const t=S.value;$(t)?(u.style.backgroundColor="#c6cdd1",u.disabled=!1):(u.style.backgroundColor="#f4f4f4",u.disabled=!0)}),u.addEventListener("mouseover",()=>{const t=S.value;$(t)?u.style.cursor="pointer":u.style.cursor="not-allowed"}),u.addEventListener("mouseout",()=>{u.style.cursor="default"}),M.addEventListener("submit",async t=>{var o,i;t.preventDefault();const e=S.value;if(!$(e)){b.warning({message:"Invalid email address was entered.",position:"topRight"});return}const a={email:e};try{const r=await V.subscription(a);if(console.log("resp",r),((o=r==null?void 0:r.response)==null?void 0:o.status)===409){b.warning({message:"Subscription already exists",position:"topRight"});return}if(((i=r==null?void 0:r.response)==null?void 0:i.status)===400){b.warning({message:"Bad request (invalid request body)",position:"topRight"});return}b.success({message:r.message,position:"topRight"})}catch(r){console.log("error",r)}finally{M.reset()}}));const n={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh")};console.log(n.exerciseRefresh);n.exerciseRefresh.addEventListener("click",ee);function ee(t){location.reload()}const q="/mvp-your-energy/assets/sprite-2566d563.svg",R=(t,e)=>{const a=t.reduce((o,{filter:i,imgURL:r,name:s})=>(o+=`<li class="categories__card-item js-exercise" data-exercise=${s}>
        <img
          src="${r}"
          alt="${s}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${s}</h2>
        <p class="categories__card-text">${i}</p>
      </li>`,o),"");e.innerHTML=a},j=(t,e)=>{const a=t.reduce((o,{rating:i,target:r,bodyPart:s,burnedCalories:l,name:d})=>(o+=`<li class="card-item">
    <div class="card-menu">
      <div class="card-menu-box">
        <div class="card-menu-workout">WORKOUT</div>
        <div class="card-menu-rating">
          <p class="card-menu-rating-text">${Math.round(i)}.0</p>
          <svg
            id="card-menu-rating-icon"
            class="card-menu-rating-icon"
            width="18"
            height="18"
          >
            <use href="${q}#icon-star"></use>
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
          <use href="${q}#icon-arrow-right"></use>
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
          <use href="${q}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${d}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value">${l} / ...</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value">${s}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value">${r}</div>
      </div>
    </div>
  </li>`,o),"");e.innerHTML=a};class te{constructor(){this.pagination}init(e,a,o){let i=3;const r={totalItems:a*o,itemsPerPage:o,visiblePages:i,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new Q(n.paginationBox,r),this.pagination.on("afterMove",async({page:s})=>{if(console.log("service",e),e.type===L.FILTERS){e.setPage(s);const l=await e.getCategories();R(l.results,n.categoriesContainer)}if(e.type===L.EXEECISES){e.setPage(s);const l=await e.getExercises();j(l.results,n.categoriesContainer)}})}}const U=new te,P=new C(L.FILTERS),y=new C(L.EXEECISES);n.categoriesList.addEventListener("click",re);n.search.addEventListener("submit",se);async function se(t){t.preventDefault();const a=new FormData(t.currentTarget).get("search").trim(),o=y.getExercise();return y.setSearch(a),await F(o),a}async function re(t){if(t.target.nodeName!=="LI")return;n.exercise.textContent="",n.exerciseDecor.classList.add("visually-hidden"),n.categoryError.classList.add("visually-hidden"),n.search.classList.add("visually-hidden");const e=t.currentTarget.querySelector(".current");e&&e.classList.remove("current"),t.target.classList.add("current");const a=t.target.textContent;P.setCategory(a),y.setCategory(a),await N()}async function N(){const t=await P.getCategories();if(n.categorySceletonLoader.classList.add("visually-hidden"),R(t.results,n.categoriesContainer),t!=null&&t.totalPages||n.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){n.paginationBox.classList.add("visually-hidden");return}n.paginationBox.classList.remove("visually-hidden"),U.init(P,t.totalPages,t.perPage)}N();n.categoriesContainer.addEventListener("click",ae);async function ae(t){if(console.log(t.target),t.target.closest(".js-exercise")){const e=t.target.closest(".js-exercise").dataset.exercise;n.exercise.textContent=e,n.exerciseDecor.classList.remove("visually-hidden"),n.search.classList.remove("visually-hidden"),await F(e);return}}async function F(t){y.setExercise(t);const e=await y.getExercises();if(j(e.results,n.categoriesContainer),e!=null&&e.totalPages||n.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){n.paginationBox.classList.add("visually-hidden");return}n.paginationBox.classList.remove("visually-hidden"),U.init(y,e.totalPages,e.perPage)}const _=["#Sport","#Healthy","#Workout","#Diet"],O=100,oe=document.querySelectorAll(".hero-item-text");let w=0;function J(){if(w<_.length){const t=_[w],e=oe[w];let a=0;const o=setInterval(function(){a<t.length?(e.textContent+=t[a],a++):(clearInterval(o),w++,setTimeout(J,O))},O)}}J();const ie={root:null,rootMargin:"0px",threshold:0},B=document.querySelector(".footer-title-span"),ne=new IntersectionObserver(ce,ie);ne.observe(B);function ce(t,e){t.forEach(a=>{a.isIntersecting&&(D.set(B,{clearProps:"all"}),D.to(B,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}function le(){const t=document.getElementsByClassName("categories__cards-list"),e=document.getElementById("modal"),a=document.getElementsByClassName("modal-close-btn")[0];let o=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];a&&(a.onclick=function(){e.style.display="none",localStorage.removeItem("currentExercise")}),window.onclick=function(s){s.target==e&&(e.style.display="none",localStorage.removeItem("currentExercise"))};for(let s=0;s<t.length;s+=1)t[s].addEventListener("click",function(d){const g=d.target.closest(".card-menu-start"),f=d.target.closest(".card-item");if(g){const v=f.dataset.id;e.style.display="flex";const m=`https://your-energy.b.goit.study/api/exercises/${v}`;x.get(m).then(c=>{if(c)return localStorage.setItem("currentExercise",JSON.stringify(c.data)),c.data}).then(c=>{i(c);const p=document.getElementById("fav-btn");if(p){const k=o.some(h=>h._id===c._id);p.querySelector(".modal-heart-icon use").setAttribute("href",k?"./img/sprite.svg#icon-trash":"./img/sprite.svg#icon-heart"),p.querySelector(".modal-btn-text").textContent=k?"Unfavorite":"Add to favorites",p.addEventListener("click",function(){const h=o.some(I=>I._id===c._id);h?o=o.filter(I=>I._id!==c._id):o.push(c),localStorage.setItem("savedExercises",JSON.stringify(o)),p.querySelector(".modal-btn-text").textContent=h?"Add to favorites":"Unfavorite",p.querySelector(".modal-heart-icon use").setAttribute("href",h?"./img/sprite.svg#icon-heart":"./img/sprite.svg#icon-trash")})}}).catch(c=>{console.error("There was a problem with the Axios request:",c)})}});function i(s){const l=document.getElementById("exerciseDetails");let d=null;s.gifUrl?d=`<div class="modal-gif-wrapper">
        <img class="gif" src="${s.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:d=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const g=`<p class='modal-card-title'>${s.name.charAt(0).toUpperCase()+s.name.slice(1)}</p>`,f=r(Math.round(s.rating*10)/10),v=`<div class='modal-rating-container'>
      <span class="modal-rating">${s.rating.toString().includes(".")?Math.round(s.rating*10)/10:s.rating+".0"}</span>
      ${f}
      </div>`,m=`<div class="modal-details-container">
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Target</p>
      <p class="modal-details-info">${s.target.charAt(0).toUpperCase()+s.target.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title body-part">Body Part</p>
      <p class="modal-details-info">${s.bodyPart.charAt(0).toUpperCase()+s.bodyPart.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Equipment</p>
      <p class="modal-details-info">${s.equipment.charAt(0).toUpperCase()+s.equipment.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Popular</p>
      <p class="modal-details-info">${s.popularity}</p>
      </div>
      </div>
      <div class="modal-details-wrapper modal-calories">
      <p class="modal-details-title">Burned Calories</p>
      <p class="modal-details-info">${s.burnedCalories}</p>
      </div>`,c=`<div class="modal-description">${s.description}</div>`,p=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="./img/sprite.svg#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;l.innerHTML=`${d+`<div class="modal-content-wrapper">${g+v+m+c+p}</div>`}`}function r(s){const l=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="./img/sprite.svg#icon-star"></use>
      </svg></div>`,d=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="./img/sprite.svg#icon-star"></use>
      </svg></div>`;let g="",f=Math.floor(s),v=s-f;for(let m=0;m<5;m++)if(m<f)g+=l;else if(m===f&&v>0){const c=Math.round(v*100);g+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${c}%, rgba(244, 244, 244, 0.2) ${c}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${c}%, rgba(244, 244, 244, 0.2) ${c}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="./img/sprite.svg#icon-star"></use>
          </svg></div>`}else g+=d;return`${g}`}}window.onload=function(){document.querySelector(".home__container")&&le()};
//# sourceMappingURL=modal-e3ab5f1c.js.map
