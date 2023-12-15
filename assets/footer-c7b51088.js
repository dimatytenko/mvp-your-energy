import{a as u,i as d,P as M,g as w}from"./vendor-5014e6d0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();(()=>{const t=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),a=document.querySelectorAll(".mobile-social-box"),r=document.querySelector("body"),s=()=>{const c=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!c),t.classList.toggle("is-open"),r.classList.toggle("disable-scroll")},n=c=>c.forEach(v=>{v.addEventListener("click",s)});e.addEventListener("click",s),o.addEventListener("click",s),n(a)})();const O=document.querySelector("#upbutton");O.addEventListener("click",j);function j(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const g="https://your-energy.b.goit.study/api",y={FILTERS:"filters",EXEECISES:"exercises"},R={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class h{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}async getCategories(){try{return(await u.get(`${g}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{return(await u.get(`${g}/exercises?${R[this.category]}=${this.exercise}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await u.get(`${g}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await u.post(`${g}/subscription`,e)).data}catch(o){return o}}}class A{constructor(){}getData(e){try{const o=localStorage.getItem(e);return JSON.parse(o)}catch{console.error("Get error: ",err)}}setData(e,o){try{const a=JSON.stringify(o);localStorage.setItem(e,a)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const _=new h,L=new A,N=document.querySelector(".quote-text-js"),F=document.querySelector(".quote-author-js");async function Q(){const t=new Date,e=t.getDate(),o=t.getMonth()+1,a=t.getFullYear(),r=`${e}.${o}.${a}`,s=L.getData("quote");if(s&&s.date===r)C(s.data);else try{const n=await _.getQuoteOfTheDay(),c={date:r,data:n};L.setData("quote",c),C(n)}catch(n){console.error("Error fetching the quote:",n)}}function C(t){N.textContent=t.quote,F.textContent=t.author}Q();const X=new h,q=document.querySelector(".js-footer-form"),l=document.querySelector(".footer-form-btn"),f=document.querySelector('input[type="email"]');function S(t){return/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(t)}l.disabled=!0;f.addEventListener("input",()=>{const t=f.value;S(t)?(l.style.backgroundColor="#c6cdd1",l.disabled=!1):(l.style.backgroundColor="#f4f4f4",l.disabled=!0)});l.addEventListener("mouseover",()=>{const t=f.value;S(t)?l.style.cursor="pointer":l.style.cursor="not-allowed"});l.addEventListener("mouseout",()=>{l.style.cursor="default"});q.addEventListener("submit",async t=>{var a,r;t.preventDefault();const e=f.value;if(!S(e)){d.warning({message:"Invalid email address was entered.",position:"topRight"});return}const o={email:e};try{const s=await X.subscription(o);if(console.log("resp",s),((a=s==null?void 0:s.response)==null?void 0:a.status)===409){d.warning({message:"Subscription already exists",position:"topRight"});return}if(((r=s==null?void 0:s.response)==null?void 0:r.status)===400){d.warning({message:"Bad request (invalid request body)",position:"topRight"});return}d.success({message:s.message,position:"topRight"})}catch(s){console.log("error",s)}q.reset()});const i={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error")},b="/mvp-your-energy/assets/sprite-2566d563.svg",I=(t,e)=>{const o=t.reduce((a,{filter:r,imgURL:s,name:n})=>(a+=`<li class="categories__card-item js-exercise" data-exercise=${n}>
        <img
          src="${s}"
          alt="${n}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${n}</h2>
        <p class="categories__card-text">${r}</p>
      </li>`,a),"");e.innerHTML=o},B=(t,e)=>{const o=t.reduce((a,{rating:r,target:s,bodyPart:n,burnedCalories:c,name:v})=>(a+=`<li class="card-item">
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
            <use href="${b}#icon-star"></use>
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
          <use href="${b}#icon-arrow-right"></use>
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
          <use href="${b}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${v}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value">${c} / ...</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value">${n}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value">${s}</div>
      </div>
    </div>
  </li>`,a),"");e.innerHTML=o};class Y{constructor(){this.pagination}init(e,o,a){let r=3;const s={totalItems:o*a,itemsPerPage:a,visiblePages:r,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new M(i.paginationBox,s),this.pagination.on("afterMove",async({page:n})=>{if(console.log("service",e),e.type===y.FILTERS){e.setPage(n);const c=await e.getCategories();I(c.results,i.categoriesContainer)}if(e.type===y.EXEECISES){e.setPage(n);const c=await e.getExercises();B(c.results,i.categoriesContainer)}})}}const T=new Y,x=new h(y.FILTERS),m=new h(y.EXEECISES);i.categoriesList.addEventListener("click",z);async function z(t){if(t.target.nodeName!=="LI")return;i.exercise.textContent="",i.exerciseDecor.classList.add("visually-hidden"),i.categoryError.classList.add("visually-hidden");const e=t.currentTarget.querySelector(".current");e&&e.classList.remove("current"),t.target.classList.add("current");const o=t.target.textContent;x.setCategory(o),m.setCategory(o),await D()}async function D(){const t=await x.getCategories();if(I(t.results,i.categoriesContainer),console.log("categories.totalPages <= 1",t.totalPages<=1),t!=null&&t.totalPages||i.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){console.log("categories.totalPages <= 1",t.totalPages<=1),i.paginationBox.classList.add("visually-hidden");return}i.paginationBox.classList.remove("visually-hidden"),T.init(x,t.totalPages,t.perPage)}D();i.categoriesContainer.addEventListener("click",H);async function H(t){if(console.log(t.target),t.target.closest(".js-exercise")){const e=t.target.closest(".js-exercise").dataset.exercise;i.exercise.textContent=e,i.exerciseDecor.classList.remove("visually-hidden"),await J(e);return}}async function J(t){m.setExercise(t);const e=await m.getExercises();if(console.log(e),B(e.results,i.categoriesContainer),e!=null&&e.totalPages||i.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){i.paginationBox.classList.add("visually-hidden");return}i.paginationBox.classList.remove("visually-hidden"),T.init(m,e.totalPages,e.perPage)}const P=["#Sport","#Healthy","#Workout","#Diet"],$=100,U=document.querySelectorAll(".hero-item-text");let p=0;function k(){if(p<P.length){const t=P[p],e=U[p];let o=0;const a=setInterval(function(){o<t.length?(e.textContent+=t[o],o++):(clearInterval(a),p++,setTimeout(k,$))},$)}}k();const W={root:null,rootMargin:"0px",threshold:0},E=document.querySelector(".footer-title-span"),K=new IntersectionObserver(Z,W);K.observe(E);function Z(t,e){t.forEach(o=>{o.isIntersecting&&(w.set(E,{clearProps:"all"}),w.to(E,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}
//# sourceMappingURL=footer-c7b51088.js.map
