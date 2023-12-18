import{A as m,r as t,i as v,g as k,a as B,C as D,b as S}from"./assets/modal-eceba8cc.js";import{i as l,g as L}from"./assets/vendor-5c458d1f.js";const Q=new m,x=document.querySelector(".js-footer-form"),a=document.querySelector(".footer-form-btn"),u=document.querySelector('input[type="email"]');function g(e){return/^[^\s@]+(?:\.[^\s@]+)*@[^\s@]+\.[^\s@]+$/.test(e)}a&&(a.disabled=!0,u.addEventListener("input",()=>{const e=u.value;g(e)?(a.style.backgroundColor="#c6cdd1",a.disabled=!1):(a.style.backgroundColor="#f4f4f4",a.disabled=!0)}),a.addEventListener("mouseover",()=>{const e=u.value;g(e)?a.style.cursor="pointer":a.style.cursor="not-allowed"}),a.addEventListener("mouseout",()=>{a.style.cursor="default"}),x.addEventListener("submit",async e=>{var o,p;e.preventDefault();const s=u.value;if(!g(s)){l.warning({message:"Invalid email address was entered.",position:"topRight"});return}const r={email:s};try{const n=await Q.subscription(r);if(console.log("resp",n),((o=n==null?void 0:n.response)==null?void 0:o.status)===409){l.warning({message:"Subscription already exists",position:"topRight"});return}if(((p=n==null?void 0:n.response)==null?void 0:p.status)===400){l.warning({message:"Bad request (invalid request body)",position:"topRight"});return}n!=null&&n.message&&l.success({message:n.message,position:"topRight"})}catch(n){console.log("error",n)}finally{x.reset()}}));t.exerciseRefresh.addEventListener("click",R);function R(e){location.reload()}const w=new D,h=new m(S.FILTERS),i=new m(S.EXEECISES);t.categoriesList.addEventListener("click",H);t.search.addEventListener("submit",e=>F(e,c));t.searchInput.addEventListener("input",e=>q(e,c));t.searchInput.addEventListener("focus",A);t.searchInput.addEventListener("blur",I);const c={searchQuery:""};t.closeIcon&&t.closeIcon.addEventListener("click",b);document.addEventListener("click",function(e){e.target.closest("#menu-close-icon")&&b(e)});function q(e,s){const r=e.currentTarget.value.trim();s.searchQuery!==r&&(t.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="${v}#icon-search"></use>
      </svg>
    `)}function A(e){e.target.placeholder=""}function I(e){e.target.value.trim()||(e.target.placeholder="Search")}async function b(e){t.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="${v}#icon-search"></use>
      </svg>
    `,t.search.reset();const s=new FormData(t.search);c.searchQuery=s.get("search").trim();const r=i.getExercise();i.setSearch(c.searchQuery),c.searchQuery===void 0&&I(e),await y(r),t.categoryError.classList.add("visually-hidden")}async function F(e,s){e.preventDefault();const r=new FormData(e.currentTarget);s.searchQuery=r.get("search").trim(),s.searchQuery!==""&&(t.searchBtn.innerHTML=`
      <svg id="menu-close-icon" class="menu-close-icon" width="18" height="18">
        <use href="${v}#icon-close"></use>
      </svg>
    `),t.categoryError.classList.add("visually-hidden");const o=i.getExercise();return console.log(o),i.setSearch(s.searchQuery),await y(o),s.searchQuery}async function H(e){if(e.target.nodeName!=="LI")return;t.exercise.textContent="",t.exerciseDecor.classList.add("visually-hidden"),t.categoryError.classList.add("visually-hidden"),t.search.classList.add("visually-hidden");const s=e.currentTarget.querySelector(".current");s&&s.classList.remove("current"),e.target.classList.add("current");const r=e.target.textContent;h.setCategory(r),i.setCategory(r),await P()}async function P(){const e=await h.getCategories();if(t.categorySceletonLoader.classList.add("visually-hidden"),k(e.results,t.categoriesContainer),e!=null&&e.totalPages||t.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){t.paginationBox.classList.add("visually-hidden");return}t.paginationBox.classList.remove("visually-hidden"),w.init(h,e.totalPages,e.perPage)}P();t.categoriesContainer.addEventListener("click",M);async function M(e){if(e.target.closest(".js-exercise")){const s=e.target.closest(".js-exercise").dataset.exercise;t.exercise.textContent=s,t.exerciseDecor.classList.remove("visually-hidden"),t.search.classList.remove("visually-hidden"),await y(s);return}}async function y(e){i.setExercise(e);const s=await i.getExercises();if(B(s.results,t.categoriesContainer),s!=null&&s.totalPages||t.categoryError.classList.remove("visually-hidden"),s.totalPages<=1){t.paginationBox.classList.add("visually-hidden");return}t.paginationBox.classList.remove("visually-hidden"),w.init(i,s.totalPages,s.perPage)}const E=["#Sport","#Healthy","#Workout","#Diet"],C=100,$=document.querySelectorAll(".hero-item-text");let d=0;function T(){if(d<E.length){const e=E[d],s=$[d];let r=0;const o=setInterval(function(){r<e.length?(s.textContent+=e[r],r++):(clearInterval(o),d++,setTimeout(T,C))},C)}}T();const j={root:null,rootMargin:"0px",threshold:0},f=document.querySelector(".footer-title-span"),W=new IntersectionObserver(X,j);W.observe(f);function X(e,s){e.forEach(r=>{r.isIntersecting&&(L.set(f,{clearProps:"all"}),L.to(f,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}
//# sourceMappingURL=commonHelpers2.js.map
