import{a as u,i as d,P as B}from"./vendor-0810ff82.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();(()=>{const t=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".mobile-social-box"),r=document.querySelector("body"),a=()=>{const c=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!c),t.classList.toggle("is-open"),r.classList.toggle("disable-scroll")},s=c=>c.forEach(h=>{h.addEventListener("click",a)});e.addEventListener("click",a),o.addEventListener("click",a),s(n)})();const D=document.querySelector("#upbutton");D.addEventListener("click",k);function k(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const g="https://your-energy.b.goit.study/api",y={FILTERS:"filters",EXEECISES:"exercises"},M={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class f{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}async getCategories(){try{return(await u.get(`${g}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{return(await u.get(`${g}/exercises?${M[this.category]}=${this.exercise}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await u.get(`${g}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await u.post(`${g}/subscription`,e)).data}catch(o){return o}}}class j{constructor(){}getData(e){try{const o=localStorage.getItem(e);return JSON.parse(o)}catch{console.error("Get error: ",err)}}setData(e,o){try{const n=JSON.stringify(o);localStorage.setItem(e,n)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const O=new f,x=new j,A=document.querySelector(".quote-text-js"),R=document.querySelector(".quote-author-js");async function _(){const t=new Date,e=t.getDate(),o=t.getMonth()+1,n=t.getFullYear(),r=`${e}.${o}.${n}`,a=x.getData("quote");if(a&&a.date===r)E(a.data);else try{const s=await O.getQuoteOfTheDay(),c={date:r,data:s};x.setData("quote",c),E(s)}catch(s){console.error("Error fetching the quote:",s)}}function E(t){A.textContent=t.quote,R.textContent=t.author}_();const N=new f,L=document.querySelector(".js-footer-form"),l=document.querySelector(".footer-form-btn");L.addEventListener("submit",F);function C(t){return/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(t)}l.disabled=!0;emailInput.addEventListener("input",()=>{const t=emailInput.value;C(t)?(l.style.backgroundColor="#c6cdd1",l.disabled=!1):(l.style.backgroundColor="#f4f4f4",l.disabled=!0)});async function F(t){var r,a;t.preventDefault();const o=document.querySelector('input[type="email"]').value;if(!C(o))return d.failure("Invalid email address was entered.");const n={email:o};try{const s=await N.subscription(n);if(console.log("resp",s),((r=s==null?void 0:s.response)==null?void 0:r.status)===409){d.show({message:"Subscription already exists",color:"red",position:"topRight"});return}if(((a=s==null?void 0:s.response)==null?void 0:a.status)===400){d.show({message:s.response.data.message,color:"red",position:"topRight"});return}d.show({message:s.message,color:"green",position:"topRight"})}catch(s){console.log("error",s)}L.reset()}const i={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error")},v="/mvp-your-energy/assets/sprite-41f7b6b2.svg",P=(t,e)=>{const o=t.reduce((n,{filter:r,imgURL:a,name:s})=>(n+=`<li class="categories__card-item js-exercise" data-exercise=${s}>
        <img
          src="${a}"
          alt="${s}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${s}</h2>
        <p class="categories__card-text">${r}</p>
      </li>`,n),"");e.innerHTML=o},q=(t,e)=>{const o=t.reduce((n,{rating:r,target:a,bodyPart:s,burnedCalories:c,name:h})=>(n+=`<li class="card-item">
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
            <use href="${v}#icon-star"></use>
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
          <use href="${v}#icon-arrow-right"></use>
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
          <use href="${v}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${h}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value">${c} / ...</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value">${s}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value">${a}</div>
      </div>
    </div>
  </li>`,n),"");e.innerHTML=o};class Q{constructor(){this.pagination}init(e,o,n){let r=3;const a={totalItems:o*n,itemsPerPage:n,visiblePages:r,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new B(i.paginationBox,a),this.pagination.on("afterMove",async({page:s})=>{if(console.log("service",e),e.type===y.FILTERS){e.setPage(s);const c=await e.getCategories();P(c.results,i.categoriesContainer)}if(e.type===y.EXEECISES){e.setPage(s);const c=await e.getExercises();q(c.results,i.categoriesContainer)}})}}const $=new Q,b=new f(y.FILTERS),m=new f(y.EXEECISES);i.categoriesList.addEventListener("click",X);async function X(t){if(t.target.nodeName!=="LI")return;i.exercise.textContent="",i.exerciseDecor.classList.add("visually-hidden"),i.categoryError.classList.add("visually-hidden");const e=t.currentTarget.querySelector(".current");e&&e.classList.remove("current"),t.target.classList.add("current");const o=t.target.textContent;b.setCategory(o),m.setCategory(o),await I()}async function I(){const t=await b.getCategories();if(P(t.results,i.categoriesContainer),console.log("categories.totalPages <= 1",t.totalPages<=1),t!=null&&t.totalPages||i.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){console.log("categories.totalPages <= 1",t.totalPages<=1),i.paginationBox.classList.add("visually-hidden");return}i.paginationBox.classList.remove("visually-hidden"),$.init(b,t.totalPages,t.perPage)}I();i.categoriesContainer.addEventListener("click",Y);async function Y(t){if(console.log(t.target),t.target.closest(".js-exercise")){const e=t.target.closest(".js-exercise").dataset.exercise;i.exercise.textContent=e,i.exerciseDecor.classList.remove("visually-hidden"),await z(e);return}}async function z(t){m.setExercise(t);const e=await m.getExercises();if(console.log(e),q(e.results,i.categoriesContainer),e!=null&&e.totalPages||i.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){i.paginationBox.classList.add("visually-hidden");return}i.paginationBox.classList.remove("visually-hidden"),$.init(m,e.totalPages,e.perPage)}const S=["#Sport","#Healthy","#Workout","#Diet"],w=100,H=document.querySelectorAll(".hero-item-text");let p=0;function T(){if(p<S.length){const t=S[p],e=H[p];let o=0;const n=setInterval(function(){o<t.length?(e.textContent+=t[o],o++):(clearInterval(n),p++,setTimeout(T,w))},w)}}T();
//# sourceMappingURL=hero-26f5c38d.js.map
