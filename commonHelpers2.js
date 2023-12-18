import{A as b,i as u,a as v}from"./assets/modal-2877e4cb.js";import{i as m,P as M,g as L}from"./assets/vendor-5014e6d0.js";const Q=document.querySelector("#upbutton");Q.addEventListener("click",_);function _(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const H=new b,S=document.querySelector(".js-footer-form"),n=document.querySelector(".footer-form-btn"),p=document.querySelector('input[type="email"]');function y(e){return/^[^\s@]+(?:\.[^\s@]+)*@[^\s@]+\.[^\s@]+$/.test(e)}n&&(n.disabled=!0,p.addEventListener("input",()=>{const e=p.value;y(e)?(n.style.backgroundColor="#c6cdd1",n.disabled=!1):(n.style.backgroundColor="#f4f4f4",n.disabled=!0)}),n.addEventListener("mouseover",()=>{const e=p.value;y(e)?n.style.cursor="pointer":n.style.cursor="not-allowed"}),n.addEventListener("mouseout",()=>{n.style.cursor="default"}),S.addEventListener("submit",async e=>{var i,o;e.preventDefault();const t=p.value;if(!y(t)){m.warning({message:"Invalid email address was entered.",position:"topRight"});return}const a={email:t};try{const r=await H.subscription(a);if(console.log("resp",r),((i=r==null?void 0:r.response)==null?void 0:i.status)===409){m.warning({message:"Subscription already exists",position:"topRight"});return}if(((o=r==null?void 0:r.response)==null?void 0:o.status)===400){m.warning({message:"Bad request (invalid request body)",position:"topRight"});return}r!=null&&r.message&&m.success({message:r.message,position:"topRight"})}catch(r){console.log("error",r)}finally{S.reset()}}));const s={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh"),searchIcon:document.querySelector(".menu-search-icon"),closeIcon:document.querySelector(".menu-close-icon"),searchBtn:document.querySelector(".menu-search-btn"),searchInput:document.querySelector(".menu-search-input")};s.exerciseRefresh.addEventListener("click",A);function A(e){location.reload()}const C=(e,t)=>{const a=e.reduce((i,{filter:o,imgURL:r,name:c})=>(i+=`<li class="categories__card-item js-exercise"
      style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${r}), lightgray -56.383px -2px / 129.575% 103.719% no-repeat"
      data-exercise=${c}>
        <img
          src="${r}"
          alt="${c}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${c}</h2>
        <p class="categories__card-text">${o}</p>
      </li>`,i),"");t.innerHTML=a},B=(e,t)=>{const a=e.reduce((i,{rating:o,target:r,bodyPart:c,burnedCalories:d,name:j,_id:D,time:R})=>(i+=`<li class="card-item" id=${D}>
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
      <p class="card-title-text">${j}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value card-time">${d} / ${R} min</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value card-body">${c}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value card-target">${r}</div>
      </div>
    </div>
  </li>`,i),"");t.innerHTML=a};class F{constructor(){this.pagination}init(t,a,i){let o=3;const r={totalItems:a*i,itemsPerPage:i,visiblePages:o,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new M(s.paginationBox,r),this.pagination.on("afterMove",async({page:c})=>{if(console.log("service",t),t.type===v.FILTERS){t.setPage(c);const d=await t.getCategories();C(d.results,s.categoriesContainer)}if(t.type===v.EXEECISES){t.setPage(c);const d=await t.getExercises();B(d.results,s.categoriesContainer)}})}}const P=new F,f=new b(v.FILTERS),l=new b(v.EXEECISES);s.categoriesList.addEventListener("click",Y);s.search.addEventListener("submit",e=>X(e,g));s.searchInput.addEventListener("input",e=>O(e,g));s.searchInput.addEventListener("focus",W);s.searchInput.addEventListener("blur",q);const g={searchQuery:""};s.closeIcon&&s.closeIcon.addEventListener("click",T);document.addEventListener("click",function(e){e.target.closest("#menu-close-icon")&&T(e)});function O(e,t){const a=e.currentTarget.value.trim();t.searchQuery!==a&&(s.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="${u}#icon-search"></use>
      </svg>
    `)}function W(e){e.target.placeholder=""}function q(e){e.target.value.trim()||(e.target.placeholder="Search")}async function T(e){s.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="${u}#icon-search"></use>
      </svg>
    `,s.search.reset();const t=new FormData(s.search);g.searchQuery=t.get("search").trim();const a=l.getExercise();l.setSearch(g.searchQuery),g.searchQuery===void 0&&q(e),await E(a),s.categoryError.classList.add("visually-hidden")}async function X(e,t){e.preventDefault();const a=new FormData(e.currentTarget);t.searchQuery=a.get("search").trim(),t.searchQuery!==""&&(s.searchBtn.innerHTML=`
      <svg id="menu-close-icon" class="menu-close-icon" width="18" height="18">
        <use href="${u}#icon-close"></use>
      </svg>
    `),s.categoryError.classList.add("visually-hidden");const i=l.getExercise();return console.log(i),l.setSearch(t.searchQuery),await E(i),t.searchQuery}async function Y(e){if(e.target.nodeName!=="LI")return;s.exercise.textContent="",s.exerciseDecor.classList.add("visually-hidden"),s.categoryError.classList.add("visually-hidden"),s.search.classList.add("visually-hidden");const t=e.currentTarget.querySelector(".current");t&&t.classList.remove("current"),e.target.classList.add("current");const a=e.target.textContent;f.setCategory(a),l.setCategory(a),await $()}async function $(){const e=await f.getCategories();if(s.categorySceletonLoader.classList.add("visually-hidden"),C(e.results,s.categoriesContainer),e!=null&&e.totalPages||s.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){s.paginationBox.classList.add("visually-hidden");return}s.paginationBox.classList.remove("visually-hidden"),P.init(f,e.totalPages,e.perPage)}$();s.categoriesContainer.addEventListener("click",z);async function z(e){if(e.target.closest(".js-exercise")){const t=e.target.closest(".js-exercise").dataset.exercise;s.exercise.textContent=t,s.exerciseDecor.classList.remove("visually-hidden"),s.search.classList.remove("visually-hidden"),await E(t);return}}async function E(e){l.setExercise(e);const t=await l.getExercises();if(B(t.results,s.categoriesContainer),t!=null&&t.totalPages||s.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){s.paginationBox.classList.add("visually-hidden");return}s.paginationBox.classList.remove("visually-hidden"),P.init(l,t.totalPages,t.perPage)}const w=["#Sport","#Healthy","#Workout","#Diet"],I=100,J=document.querySelectorAll(".hero-item-text");let h=0;function k(){if(h<w.length){const e=w[h],t=J[h];let a=0;const i=setInterval(function(){a<e.length?(t.textContent+=e[a],a++):(clearInterval(i),h++,setTimeout(k,I))},I)}}k();const K={root:null,rootMargin:"0px",threshold:0},x=document.querySelector(".footer-title-span"),N=new IntersectionObserver(U,K);N.observe(x);function U(e,t){e.forEach(a=>{a.isIntersecting&&(L.set(x,{clearProps:"all"}),L.to(x,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}
//# sourceMappingURL=commonHelpers2.js.map
