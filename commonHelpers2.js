import{A as M,i as c,a as C}from"./assets/quote-17daa152.js";import{i as I,P as X,g as D,a as z}from"./assets/vendor-5014e6d0.js";const Y=document.querySelector("#upbutton");Y.addEventListener("click",K);function K(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const V=new M,R=document.querySelector(".js-footer-form"),d=document.querySelector(".footer-form-btn"),L=document.querySelector('input[type="email"]');function q(e){return/^[^\s@]+(?:\.[^\s@]+)*@[^\s@]+\.[^\s@]+$/.test(e)}d&&(d.disabled=!0,L.addEventListener("input",()=>{const e=L.value;q(e)?(d.style.backgroundColor="#c6cdd1",d.disabled=!1):(d.style.backgroundColor="#f4f4f4",d.disabled=!0)}),d.addEventListener("mouseover",()=>{const e=L.value;q(e)?d.style.cursor="pointer":d.style.cursor="not-allowed"}),d.addEventListener("mouseout",()=>{d.style.cursor="default"}),R.addEventListener("submit",async e=>{var n,u;e.preventDefault();const t=L.value;if(!q(t)){I.warning({message:"Invalid email address was entered.",position:"topRight"});return}const i={email:t};try{const r=await V.subscription(i);if(console.log("resp",r),((n=r==null?void 0:r.response)==null?void 0:n.status)===409){I.warning({message:"Subscription already exists",position:"topRight"});return}if(((u=r==null?void 0:r.response)==null?void 0:u.status)===400){I.warning({message:"Bad request (invalid request body)",position:"topRight"});return}r!=null&&r.message&&I.success({message:r.message,position:"topRight"})}catch(r){console.log("error",r)}finally{R.reset()}}));const s={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh"),searchIcon:document.querySelector(".menu-search-icon"),closeIcon:document.querySelector(".menu-close-icon"),searchBtn:document.querySelector(".menu-search-btn"),searchInput:document.querySelector(".menu-search-input")};s.exerciseRefresh.addEventListener("click",Z);function Z(e){location.reload()}const Q=(e,t)=>{const i=e.reduce((n,{filter:u,imgURL:r,name:l})=>(n+=`<li class="categories__card-item js-exercise"
      style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${r}), lightgray -56.383px -2px / 129.575% 103.719% no-repeat"
      data-exercise=${l}>
        <img
          src="${r}"
          alt="${l}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${l}</h2>
        <p class="categories__card-text">${u}</p>
      </li>`,n),"");t.innerHTML=i},H=(e,t)=>{const i=e.reduce((n,{rating:u,target:r,bodyPart:l,burnedCalories:g,name:m,_id:B})=>(n+=`<li class="card-item" id=${B}>
    <div class="card-menu">
      <div class="card-menu-box">
        <div class="card-menu-workout">WORKOUT</div>
        <div class="card-menu-rating">
          <p class="card-menu-rating-text">${Math.round(u)}.0</p>
          <svg
            id="card-menu-rating-icon"
            class="card-menu-rating-icon"
            width="18"
            height="18"
          >
            <use href="${c}#icon-star"></use>
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
          <use href="${c}#icon-arrow-right"></use>
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
          <use href="${c}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${m}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value card-time">${g} / ...</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value card-body">${l}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value card-target">${r}</div>
      </div>
    </div>
  </li>`,n),"");t.innerHTML=i};class ee{constructor(){this.pagination}init(t,i,n){let u=3;const r={totalItems:i*n,itemsPerPage:n,visiblePages:u,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new X(s.paginationBox,r),this.pagination.on("afterMove",async({page:l})=>{if(console.log("service",t),t.type===C.FILTERS){t.setPage(l);const g=await t.getCategories();Q(g.results,s.categoriesContainer)}if(t.type===C.EXEECISES){t.setPage(l);const g=await t.getExercises();H(g.results,s.categoriesContainer)}})}}const U=new ee,k=new M(C.FILTERS),y=new M(C.EXEECISES);s.categoriesList.addEventListener("click",ie);s.search.addEventListener("submit",e=>ae(e,w));s.searchInput.addEventListener("input",e=>te(e,w));s.searchInput.addEventListener("focus",se);s.searchInput.addEventListener("blur",F);const w={searchQuery:""};s.closeIcon&&s.closeIcon.addEventListener("click",N);document.addEventListener("click",function(e){e.target.closest("#menu-close-icon")&&N(e)});function te(e,t){const i=e.currentTarget.value.trim();t.searchQuery!==i&&(s.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="${c}#icon-search"></use>
      </svg>
    `)}function se(e){e.target.placeholder=""}function F(e){e.target.value.trim()||(e.target.placeholder="Search")}async function N(e){s.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="${c}#icon-search"></use>
      </svg>
    `,s.search.reset();const t=new FormData(s.search);w.searchQuery=t.get("search").trim();const i=y.getExercise();y.setSearch(w.searchQuery),w.searchQuery===void 0&&F(e),await _(i),s.categoryError.classList.add("visually-hidden")}async function ae(e,t){e.preventDefault();const i=new FormData(e.currentTarget);t.searchQuery=i.get("search").trim(),t.searchQuery!==""&&(s.searchBtn.innerHTML=`
      <svg id="menu-close-icon" class="menu-close-icon" width="18" height="18">
        <use href="${c}#icon-close"></use>
      </svg>
    `),s.categoryError.classList.add("visually-hidden");const n=y.getExercise();return console.log(n),y.setSearch(t.searchQuery),await _(n),t.searchQuery}async function ie(e){if(e.target.nodeName!=="LI")return;s.exercise.textContent="",s.exerciseDecor.classList.add("visually-hidden"),s.categoryError.classList.add("visually-hidden"),s.search.classList.add("visually-hidden");const t=e.currentTarget.querySelector(".current");t&&t.classList.remove("current"),e.target.classList.add("current");const i=e.target.textContent;k.setCategory(i),y.setCategory(i),await J()}async function J(){const e=await k.getCategories();if(s.categorySceletonLoader.classList.add("visually-hidden"),Q(e.results,s.categoriesContainer),e!=null&&e.totalPages||s.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){s.paginationBox.classList.add("visually-hidden");return}s.paginationBox.classList.remove("visually-hidden"),U.init(k,e.totalPages,e.perPage)}J();s.categoriesContainer.addEventListener("click",re);async function re(e){if(e.target.closest(".js-exercise")){const t=e.target.closest(".js-exercise").dataset.exercise;s.exercise.textContent=t,s.exerciseDecor.classList.remove("visually-hidden"),s.search.classList.remove("visually-hidden"),await _(t);return}}async function _(e){y.setExercise(e);const t=await y.getExercises();if(H(t.results,s.categoriesContainer),t!=null&&t.totalPages||s.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){s.paginationBox.classList.add("visually-hidden");return}s.paginationBox.classList.remove("visually-hidden"),U.init(y,t.totalPages,t.perPage)}const j=["#Sport","#Healthy","#Workout","#Diet"],O=100,oe=document.querySelectorAll(".hero-item-text");let $=0;function G(){if($<j.length){const e=j[$],t=oe[$];let i=0;const n=setInterval(function(){i<e.length?(t.textContent+=e[i],i++):(clearInterval(n),$++,setTimeout(G,O))},O)}}G();const ne={root:null,rootMargin:"0px",threshold:0},T=document.querySelector(".footer-title-span"),ce=new IntersectionObserver(le,ne);ce.observe(T);function le(e,t){e.forEach(i=>{i.isIntersecting&&(D.set(T,{clearProps:"all"}),D.to(T,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}function de(){const e=document.getElementsByClassName("categories__cards-list"),t=document.getElementById("modal");let i=!1;function n(){document.body.style.overflow="hidden"}function u(){document.body.style.overflow=""}function r(){t.style.display="flex",n(),i=!0}function l(){t.style.display="none",u(),i=!1}document.querySelector(".modal-main");const g=document.getElementsByClassName("modal-close-btn")[0];let m=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];g&&(g.onclick=function(){l(),localStorage.removeItem("currentExercise")}),window.onclick=function(a){a.target==t&&(l(),localStorage.removeItem("currentExercise"))},document.addEventListener("keydown",function(a){a.key==="Escape"&&i&&(l(),localStorage.removeItem("currentExercise"))});for(let a=0;a<e.length;a+=1)e[a].addEventListener("click",function(p){const v=p.target.closest(".card-menu-start"),b=p.target.closest(".card-item");if(v){const x=b.id;r();const f=`https://your-energy.b.goit.study/api/exercises/${x}`;z.get(f).then(o=>{if(o)return localStorage.setItem("currentExercise",JSON.stringify(o.data)),o.data}).then(o=>{console.log(o),B(o);const h=document.getElementById("fav-btn");if(h){const A=m.some(S=>S._id===o._id);h.querySelector(".modal-heart-icon use").setAttribute("href",A?`${c}#icon-trash`:`${c}#icon-heart`),h.querySelector(".modal-btn-text").textContent=A?"Remove from favorites":"Add to favorites",h.addEventListener("click",function(){const S=m.some(P=>P._id===o._id);S?m=m.filter(P=>P._id!==o._id):m.push(o),localStorage.setItem("savedExercises",JSON.stringify(m)),h.querySelector(".modal-btn-text").textContent=S?"Add to favorites":"Remove from favorites",h.querySelector(".modal-heart-icon use").setAttribute("href",S?`${c}#icon-heart`:`${c}#icon-trash`)})}}).catch(o=>{console.error("There was a problem with the Axios request:",o)})}});function B(a){const E=document.getElementById("cardDetails");console.log("exerciseDetailsContainer",E);let p=null;a.gifUrl?p=`<div class="modal-gif-wrapper">
        <img class="gif" src="${a.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:p=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const v=`<p class='modal-card-title'>${a.name.charAt(0).toUpperCase()+a.name.slice(1)}</p>`,b=W(Math.round(a.rating*10)/10),x=`<div class='modal-rating-container'>
      <span class="modal-rating">${a.rating.toString().includes(".")?Math.round(a.rating*10)/10:a.rating+".0"}</span>
      ${b}
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
      </div>`,o=`<div class="modal-description">${a.description}</div>`,h=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="${c}#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;E.innerHTML=`${p+`<div class="modal-content-wrapper">${v+x+f+o+h}</div>`}`}function W(a){const E=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="${c}#icon-star"></use>
      </svg></div>`,p=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="${c}#icon-star"></use>
      </svg></div>`;let v="",b=Math.floor(a),x=a-b;for(let f=0;f<5;f++)if(f<b)v+=E;else if(f===b&&x>0){const o=Math.round(x*100);v+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${o}%, rgba(244, 244, 244, 0.2) ${o}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${o}%, rgba(244, 244, 244, 0.2) ${o}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="${c}#icon-star"></use>
          </svg></div>`}else v+=p;return`${v}`}}window.onload=function(){document.querySelector(".home__container")&&de()};
//# sourceMappingURL=commonHelpers2.js.map
