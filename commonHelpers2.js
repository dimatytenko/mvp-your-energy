import{A as M,a as $}from"./assets/quote-9fd64270.js";import{i as L,P as X,g as j,a as z}from"./assets/vendor-5014e6d0.js";(()=>{const e=document.querySelector(".js-mobile-menu"),t=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".mobile-social-box"),d=document.querySelector("body"),o=()=>{const u=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!u),e.classList.toggle("is-open"),d.classList.toggle("disable-scroll")},c=u=>u.forEach(m=>{m.addEventListener("click",o)});t.addEventListener("click",o),a.addEventListener("click",o),c(r)})();const Y=document.querySelector("#upbutton");Y.addEventListener("click",K);function K(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const V=new M,D=document.querySelector(".js-footer-form"),g=document.querySelector(".footer-form-btn"),I=document.querySelector('input[type="email"]');function k(e){return/^[^\s@]+(?:\.[^\s@]+)*@[^\s@]+\.[^\s@]+$/.test(e)}g&&(g.disabled=!0,I.addEventListener("input",()=>{const e=I.value;k(e)?(g.style.backgroundColor="#c6cdd1",g.disabled=!1):(g.style.backgroundColor="#f4f4f4",g.disabled=!0)}),g.addEventListener("mouseover",()=>{const e=I.value;k(e)?g.style.cursor="pointer":g.style.cursor="not-allowed"}),g.addEventListener("mouseout",()=>{g.style.cursor="default"}),D.addEventListener("submit",async e=>{var r,d;e.preventDefault();const t=I.value;if(!k(t)){L.warning({message:"Invalid email address was entered.",position:"topRight"});return}const a={email:t};try{const o=await V.subscription(a);if(console.log("resp",o),((r=o==null?void 0:o.response)==null?void 0:r.status)===409){L.warning({message:"Subscription already exists",position:"topRight"});return}if(((d=o==null?void 0:o.response)==null?void 0:d.status)===400){L.warning({message:"Bad request (invalid request body)",position:"topRight"});return}o!=null&&o.message&&L.success({message:o.message,position:"topRight"})}catch(o){console.log("error",o)}finally{D.reset()}}));const s={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh"),searchIcon:document.querySelector(".menu-search-icon"),closeIcon:document.querySelector(".menu-close-icon"),searchBtn:document.querySelector(".menu-search-btn"),searchInput:document.querySelector(".menu-search-input")};s.exerciseRefresh.addEventListener("click",Z);function Z(e){location.reload()}const l="/mvp-your-energy/assets/sprite-c1fb1bf2.svg",Q=(e,t)=>{const a=e.reduce((r,{filter:d,imgURL:o,name:c})=>(r+=`<li class="categories__card-item js-exercise"
      style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${o}), lightgray -56.383px -2px / 129.575% 103.719% no-repeat"
      data-exercise=${c}>
        <img
          src="${o}"
          alt="${c}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${c}</h2>
        <p class="categories__card-text">${d}</p>
      </li>`,r),"");t.innerHTML=a},H=(e,t)=>{const a=e.reduce((r,{rating:d,target:o,bodyPart:c,burnedCalories:u,name:m,_id:q})=>(r+=`<li class="card-item" id=${q}>
    <div class="card-menu">
      <div class="card-menu-box">
        <div class="card-menu-workout">WORKOUT</div>
        <div class="card-menu-rating">
          <p class="card-menu-rating-text">${Math.round(d)}.0</p>
          <svg
            id="card-menu-rating-icon"
            class="card-menu-rating-icon"
            width="18"
            height="18"
          >
            <use href="${l}#icon-star"></use>
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
          <use href="${l}#icon-arrow-right"></use>
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
          <use href="${l}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${m}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value">${u} / ...</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value">${c}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value">${o}</div>
      </div>
    </div>
  </li>`,r),"");t.innerHTML=a};class ee{constructor(){this.pagination}init(t,a,r){let d=3;const o={totalItems:a*r,itemsPerPage:r,visiblePages:d,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new X(s.paginationBox,o),this.pagination.on("afterMove",async({page:c})=>{if(console.log("service",t),t.type===$.FILTERS){t.setPage(c);const u=await t.getCategories();Q(u.results,s.categoriesContainer)}if(t.type===$.EXEECISES){t.setPage(c);const u=await t.getExercises();H(u.results,s.categoriesContainer)}})}}const U=new ee,P=new M($.FILTERS),y=new M($.EXEECISES);s.categoriesList.addEventListener("click",ie);s.search.addEventListener("submit",e=>ae(e,w));s.searchInput.addEventListener("input",e=>te(e,w));s.searchInput.addEventListener("focus",se);s.searchInput.addEventListener("blur",F);const w={searchQuery:""};s.closeIcon&&s.closeIcon.addEventListener("click",N);document.addEventListener("click",function(e){e.target.closest("#menu-close-icon")&&N(e)});function te(e,t){const a=e.currentTarget.value.trim();t.searchQuery!==a&&(s.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="${l}#icon-search"></use>
      </svg>
    `)}function se(e){e.target.placeholder=""}function F(e){e.target.value.trim()||(e.target.placeholder="Search")}async function N(e){s.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="${l}#icon-search"></use>
      </svg>
    `,s.search.reset();const t=new FormData(s.search);w.searchQuery=t.get("search").trim();const a=y.getExercise();y.setSearch(w.searchQuery),w.searchQuery===void 0&&F(e),await A(a),s.categoryError.classList.add("visually-hidden")}async function ae(e,t){e.preventDefault();const a=new FormData(e.currentTarget);t.searchQuery=a.get("search").trim(),t.searchQuery!==""&&(s.searchBtn.innerHTML=`
      <svg id="menu-close-icon" class="menu-close-icon" width="18" height="18">
        <use href="${l}#icon-close"></use>
      </svg>
    `),s.categoryError.classList.add("visually-hidden");const r=y.getExercise();return console.log(r),y.setSearch(t.searchQuery),await A(r),t.searchQuery}async function ie(e){if(e.target.nodeName!=="LI")return;s.exercise.textContent="",s.exerciseDecor.classList.add("visually-hidden"),s.categoryError.classList.add("visually-hidden"),s.search.classList.add("visually-hidden");const t=e.currentTarget.querySelector(".current");t&&t.classList.remove("current"),e.target.classList.add("current");const a=e.target.textContent;P.setCategory(a),y.setCategory(a),await J()}async function J(){const e=await P.getCategories();if(s.categorySceletonLoader.classList.add("visually-hidden"),Q(e.results,s.categoriesContainer),e!=null&&e.totalPages||s.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){s.paginationBox.classList.add("visually-hidden");return}s.paginationBox.classList.remove("visually-hidden"),U.init(P,e.totalPages,e.perPage)}J();s.categoriesContainer.addEventListener("click",oe);async function oe(e){if(e.target.closest(".js-exercise")){const t=e.target.closest(".js-exercise").dataset.exercise;s.exercise.textContent=t,s.exerciseDecor.classList.remove("visually-hidden"),s.search.classList.remove("visually-hidden"),await A(t);return}}async function A(e){y.setExercise(e);const t=await y.getExercises();if(H(t.results,s.categoriesContainer),t!=null&&t.totalPages||s.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){s.paginationBox.classList.add("visually-hidden");return}s.paginationBox.classList.remove("visually-hidden"),U.init(y,t.totalPages,t.perPage)}const R=["#Sport","#Healthy","#Workout","#Diet"],O=100,re=document.querySelectorAll(".hero-item-text");let C=0;function G(){if(C<R.length){const e=R[C],t=re[C];let a=0;const r=setInterval(function(){a<e.length?(t.textContent+=e[a],a++):(clearInterval(r),C++,setTimeout(G,O))},O)}}G();const ne={root:null,rootMargin:"0px",threshold:0},T=document.querySelector(".footer-title-span"),ce=new IntersectionObserver(le,ne);ce.observe(T);function le(e,t){e.forEach(a=>{a.isIntersecting&&(j.set(T,{clearProps:"all"}),j.to(T,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}function de(){const e=document.getElementsByClassName("categories__cards-list"),t=document.getElementById("modal");let a=!1;function r(){document.body.style.overflow="hidden"}function d(){document.body.style.overflow=""}function o(){t.style.display="flex",r(),a=!0}function c(){t.style.display="none",d(),a=!1}document.querySelector(".modal-main");const u=document.getElementsByClassName("modal-close-btn")[0];let m=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];u&&(u.onclick=function(){c(),localStorage.removeItem("currentExercise")}),window.onclick=function(i){i.target==t&&(c(),localStorage.removeItem("currentExercise"))},document.addEventListener("keydown",function(i){i.key==="Escape"&&a&&(c(),localStorage.removeItem("currentExercise"))});for(let i=0;i<e.length;i+=1)e[i].addEventListener("click",function(p){const v=p.target.closest(".card-menu-start"),b=p.target.closest(".card-item");if(v){const x=b.id;o();const f=`https://your-energy.b.goit.study/api/exercises/${x}`;z.get(f).then(n=>{if(n)return localStorage.setItem("currentExercise",JSON.stringify(n.data)),n.data}).then(n=>{console.log(n),q(n);const h=document.getElementById("fav-btn");if(h){const _=m.some(S=>S._id===n._id);h.querySelector(".modal-heart-icon use").setAttribute("href",_?`${l}#icon-trash`:`${l}#icon-heart`),h.querySelector(".modal-btn-text").textContent=_?"Remove from favorites":"Add to favorites",h.addEventListener("click",function(){const S=m.some(B=>B._id===n._id);S?m=m.filter(B=>B._id!==n._id):m.push(n),localStorage.setItem("savedExercises",JSON.stringify(m)),h.querySelector(".modal-btn-text").textContent=S?"Add to favorites":"Remove from favorites",h.querySelector(".modal-heart-icon use").setAttribute("href",S?`${l}#icon-heart`:`${l}#icon-trash`)})}}).catch(n=>{console.error("There was a problem with the Axios request:",n)})}});function q(i){const E=document.getElementById("cardDetails");console.log("exerciseDetailsContainer",E);let p=null;i.gifUrl?p=`<div class="modal-gif-wrapper">
        <img class="gif" src="${i.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:p=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const v=`<p class='modal-card-title'>${i.name.charAt(0).toUpperCase()+i.name.slice(1)}</p>`,b=W(Math.round(i.rating*10)/10),x=`<div class='modal-rating-container'>
      <span class="modal-rating">${i.rating.toString().includes(".")?Math.round(i.rating*10)/10:i.rating+".0"}</span>
      ${b}
      </div>`,f=`<div class="modal-details-container">
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
      </div>`,n=`<div class="modal-description">${i.description}</div>`,h=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="${l}#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;E.innerHTML=`${p+`<div class="modal-content-wrapper">${v+x+f+n+h}</div>`}`}function W(i){const E=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="${l}#icon-star"></use>
      </svg></div>`,p=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="${l}#icon-star"></use>
      </svg></div>`;let v="",b=Math.floor(i),x=i-b;for(let f=0;f<5;f++)if(f<b)v+=E;else if(f===b&&x>0){const n=Math.round(x*100);v+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${n}%, rgba(244, 244, 244, 0.2) ${n}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${n}%, rgba(244, 244, 244, 0.2) ${n}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="${l}#icon-star"></use>
          </svg></div>`}else v+=p;return`${v}`}}window.onload=function(){document.querySelector(".home__container")&&de()};
//# sourceMappingURL=commonHelpers2.js.map
