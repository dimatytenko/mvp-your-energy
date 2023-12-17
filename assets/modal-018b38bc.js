import{a as w,i as I,P as V,g as R}from"./vendor-5014e6d0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();(()=>{const t=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".mobile-social-box"),a=document.querySelector("body"),r=()=>{const d=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!d),t.classList.toggle("is-open"),a.classList.toggle("disable-scroll")},c=d=>d.forEach(m=>{m.addEventListener("click",r)});e.addEventListener("click",r),s.addEventListener("click",r),c(n)})();const Z=document.querySelector("#upbutton");Z.addEventListener("click",ee);function ee(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const $="https://your-energy.b.goit.study/api",P={FILTERS:"filters",EXEECISES:"exercises"},te={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class B{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1,this.search=""}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}getExercise(){return this.exercise}setSearch(e){this.search=e}async getCategories(){try{return(await w.get(`${$}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{const e=await w.get(`${$}/exercises?${te[this.category]}=${this.exercise}&keyword=${this.search}&page=${this.page}&perPage=12`);return console.log(e.data),e.data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await w.get(`${$}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await w.post(`${$}/subscription`,e)).data}catch(s){return s}}}class se{constructor(){}getData(e){try{const s=localStorage.getItem(e);return JSON.parse(s)}catch{console.error("Get error: ",err)}}setData(e,s){try{const n=JSON.stringify(s);localStorage.setItem(e,n)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const re=new B,j=new se,oe=document.querySelector(".quote-text-js"),ae=document.querySelector(".quote-author-js");async function ie(){const t=new Date,e=t.getDate(),s=t.getMonth()+1,n=t.getFullYear(),a=`${e}.${s}.${n}`,r=j.getData("quote");if(r&&r.date===a)Q(r.data);else try{const c=await re.getQuoteOfTheDay(),d={date:a,data:c};j.setData("quote",d),Q(c)}catch(c){console.error("Error fetching the quote:",c)}}function Q(t){oe.textContent=t.quote,ae.textContent=t.author}ie();const ne=new B,N=document.querySelector(".js-footer-form"),u=document.querySelector(".footer-form-btn"),C=document.querySelector('input[type="email"]');function M(t){return/^[^\s@]+(?:\.[^\s@]+)*@[^\s@]+\.[^\s@]+$/.test(t)}u&&(u.disabled=!0,C.addEventListener("input",()=>{const t=C.value;M(t)?(u.style.backgroundColor="#c6cdd1",u.disabled=!1):(u.style.backgroundColor="#f4f4f4",u.disabled=!0)}),u.addEventListener("mouseover",()=>{const t=C.value;M(t)?u.style.cursor="pointer":u.style.cursor="not-allowed"}),u.addEventListener("mouseout",()=>{u.style.cursor="default"}),N.addEventListener("submit",async t=>{var n,a;t.preventDefault();const e=C.value;if(!M(e)){I.warning({message:"Invalid email address was entered.",position:"topRight"});return}const s={email:e};try{const r=await ne.subscription(s);if(console.log("resp",r),((n=r==null?void 0:r.response)==null?void 0:n.status)===409){I.warning({message:"Subscription already exists",position:"topRight"});return}if(((a=r==null?void 0:r.response)==null?void 0:a.status)===400){I.warning({message:"Bad request (invalid request body)",position:"topRight"});return}r!=null&&r.message&&I.success({message:r.message,position:"topRight"})}catch(r){console.log("error",r)}finally{N.reset()}}));const o={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh"),searchIcon:document.querySelector(".menu-search-icon"),closeIcon:document.querySelector(".menu-close-icon"),searchBtn:document.querySelector(".menu-search-btn"),searchInput:document.querySelector(".menu-search-input")};o.exerciseRefresh.addEventListener("click",ce);function ce(t){location.reload()}const g="/mvp-your-energy/assets/sprite-c1fb1bf2.svg",H=(t,e)=>{const s=t.reduce((n,{filter:a,imgURL:r,name:c})=>(n+=`<li class="categories__card-item js-exercise" data-exercise=${c}>
        <img
          src="${r}"
          alt="${c}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${c}</h2>
        <p class="categories__card-text">${a}</p>
      </li>`,n),"");e.innerHTML=s},J=(t,e)=>{const s=t.reduce((n,{rating:a,target:r,bodyPart:c,burnedCalories:d,name:m,_id:k})=>(n+=`<li class="card-item" id=${k}>
    <div class="card-menu">
      <div class="card-menu-box">
        <div class="card-menu-workout">WORKOUT</div>
        <div class="card-menu-rating">
          <p class="card-menu-rating-text">${Math.round(a)}.0</p>
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
        <div class="card-info-about-value">${r}</div>
      </div>
    </div>
  </li>`,n),"");e.innerHTML=s};class le{constructor(){this.pagination}init(e,s,n){let a=3;const r={totalItems:s*n,itemsPerPage:n,visiblePages:a,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new V(o.paginationBox,r),this.pagination.on("afterMove",async({page:c})=>{if(console.log("service",e),e.type===P.FILTERS){e.setPage(c);const d=await e.getCategories();H(d.results,o.categoriesContainer)}if(e.type===P.EXEECISES){e.setPage(c);const d=await e.getExercises();J(d.results,o.categoriesContainer)}})}}const X=new le,D=new B(P.FILTERS),y=new B(P.EXEECISES);o.categoriesList.addEventListener("click",me);o.search.addEventListener("submit",t=>ge(t,L));o.searchInput.addEventListener("input",t=>de(t,L));o.searchInput.addEventListener("focus",ue);o.searchInput.addEventListener("blur",G);const L={searchQuery:""};o.closeIcon&&o.closeIcon.addEventListener("click",Y);document.addEventListener("click",function(t){t.target.closest("#menu-close-icon")&&Y(t)});function de(t,e){const s=t.currentTarget.value.trim();e.searchQuery!==s&&(o.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-search"></use>
      </svg>
    `)}function ue(t){t.target.value.trim()&&(t.target.placeholder="")}function G(t){t.target.value.trim()||(t.target.placeholder="Search")}async function Y(t){o.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-search"></use>
      </svg>
    `,o.search.reset();const e=new FormData(o.search);L.searchQuery=e.get("search").trim();const s=y.getExercise();y.setSearch(L.searchQuery),L.searchQuery===void 0&&G(t),await _(s)}async function ge(t,e){t.preventDefault();const s=new FormData(t.currentTarget);e.searchQuery=s.get("search").trim(),e.searchQuery!==""&&(o.searchBtn.innerHTML=`
      <svg id="menu-close-icon" class="menu-close-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-close"></use>
      </svg>
    `);const n=y.getExercise();return y.setSearch(e.searchQuery),await _(n),e.searchQuery}async function me(t){if(t.target.nodeName!=="LI")return;o.exercise.textContent="",o.exerciseDecor.classList.add("visually-hidden"),o.categoryError.classList.add("visually-hidden"),o.search.classList.add("visually-hidden");const e=t.currentTarget.querySelector(".current");e&&e.classList.remove("current"),t.target.classList.add("current");const s=t.target.textContent;D.setCategory(s),y.setCategory(s),await W()}async function W(){const t=await D.getCategories();if(o.categorySceletonLoader.classList.add("visually-hidden"),H(t.results,o.categoriesContainer),t!=null&&t.totalPages||o.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){o.paginationBox.classList.add("visually-hidden");return}o.paginationBox.classList.remove("visually-hidden"),X.init(D,t.totalPages,t.perPage)}W();o.categoriesContainer.addEventListener("click",pe);async function pe(t){if(t.target.closest(".js-exercise")){const e=t.target.closest(".js-exercise").dataset.exercise;o.exercise.textContent=e,o.exerciseDecor.classList.remove("visually-hidden"),o.search.classList.remove("visually-hidden"),await _(e);return}}async function _(t){y.setExercise(t);const e=await y.getExercises();if(J(e.results,o.categoriesContainer),e!=null&&e.totalPages||o.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){o.paginationBox.classList.add("visually-hidden");return}o.paginationBox.classList.remove("visually-hidden"),X.init(y,e.totalPages,e.perPage)}const U=["#Sport","#Healthy","#Workout","#Diet"],F=100,fe=document.querySelectorAll(".hero-item-text");let q=0;function z(){if(q<U.length){const t=U[q],e=fe[q];let s=0;const n=setInterval(function(){s<t.length?(e.textContent+=t[s],s++):(clearInterval(n),q++,setTimeout(z,F))},F)}}z();const he={root:null,rootMargin:"0px",threshold:0},A=document.querySelector(".footer-title-span"),ve=new IntersectionObserver(ye,he);ve.observe(A);function ye(t,e){t.forEach(s=>{s.isIntersecting&&(R.set(A,{clearProps:"all"}),R.to(A,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}function be(){const t=document.getElementsByClassName("categories__cards-list"),e=document.getElementById("modal");let s=!1;function n(){document.body.style.overflow="hidden"}function a(){document.body.style.overflow=""}function r(){e.style.display="flex",n(),s=!0}function c(){e.style.display="none",a(),s=!1}document.querySelector(".modal-main");const d=document.getElementsByClassName("modal-close-btn")[0];let m=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];d&&(d.onclick=function(){c(),localStorage.removeItem("currentExercise")}),window.onclick=function(i){i.target==e&&(c(),localStorage.removeItem("currentExercise"))},document.addEventListener("keydown",function(i){i.key==="Escape"&&s&&(c(),localStorage.removeItem("currentExercise"))});for(let i=0;i<t.length;i+=1)t[i].addEventListener("click",function(p){const f=p.target.closest(".card-menu-start"),b=p.target.closest(".card-item");if(f){const x=b.id;r();const h=`https://your-energy.b.goit.study/api/exercises/${x}`;w.get(h).then(l=>{if(l)return localStorage.setItem("currentExercise",JSON.stringify(l.data)),l.data}).then(l=>{console.log(l),k(l);const v=document.getElementById("fav-btn");if(v){const O=m.some(S=>S._id===l._id);v.querySelector(".modal-heart-icon use").setAttribute("href",O?`${g}#icon-trash`:`${g}#icon-heart`),v.querySelector(".modal-btn-text").textContent=O?"Remove from favorites":"Add to favorites",v.addEventListener("click",function(){const S=m.some(T=>T._id===l._id);S?m=m.filter(T=>T._id!==l._id):m.push(l),localStorage.setItem("savedExercises",JSON.stringify(m)),v.querySelector(".modal-btn-text").textContent=S?"Add to favorites":"Remove from favorites",v.querySelector(".modal-heart-icon use").setAttribute("href",S?`${g}#icon-heart`:`${g}#icon-trash`)})}}).catch(l=>{console.error("There was a problem with the Axios request:",l)})}});function k(i){const E=document.getElementById("cardDetails");console.log("exerciseDetailsContainer",E);let p=null;i.gifUrl?p=`<div class="modal-gif-wrapper">
        <img class="gif" src="${i.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:p=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const f=`<p class='modal-card-title'>${i.name.charAt(0).toUpperCase()+i.name.slice(1)}</p>`,b=K(Math.round(i.rating*10)/10),x=`<div class='modal-rating-container'>
      <span class="modal-rating">${i.rating.toString().includes(".")?Math.round(i.rating*10)/10:i.rating+".0"}</span>
      ${b}
      </div>`,h=`<div class="modal-details-container">
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
      <use href="${g}#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;E.innerHTML=`${p+`<div class="modal-content-wrapper">${f+x+h+l+v}</div>`}`}function K(i){const E=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="${g}#icon-star"></use>
      </svg></div>`,p=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="${g}#icon-star"></use>
      </svg></div>`;let f="",b=Math.floor(i),x=i-b;for(let h=0;h<5;h++)if(h<b)f+=E;else if(h===b&&x>0){const l=Math.round(x*100);f+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${l}%, rgba(244, 244, 244, 0.2) ${l}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${l}%, rgba(244, 244, 244, 0.2) ${l}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="${g}#icon-star"></use>
          </svg></div>`}else f+=p;return`${f}`}}window.onload=function(){document.querySelector(".home__container")&&be()};
//# sourceMappingURL=modal-018b38bc.js.map
