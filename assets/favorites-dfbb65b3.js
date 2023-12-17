import{a as w,i as I,P as se,g as R}from"./vendor-5014e6d0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();(()=>{const t=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),a=document.querySelectorAll(".mobile-social-box"),o=document.querySelector("body"),r=()=>{const l=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!l),t.classList.toggle("is-open"),o.classList.toggle("disable-scroll")},c=l=>l.forEach(u=>{u.addEventListener("click",r)});e.addEventListener("click",r),s.addEventListener("click",r),c(a)})();const re=document.querySelector("#upbutton");re.addEventListener("click",ae);function ae(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const $="https://your-energy.b.goit.study/api",B={FILTERS:"filters",EXEECISES:"exercises"},oe={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class T{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1,this.search=""}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}getExercise(){return this.exercise}setSearch(e){this.search=e}async getCategories(){try{return(await w.get(`${$}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{const e=await w.get(`${$}/exercises?${oe[this.category]}=${this.exercise}&keyword=${this.search}&page=${this.page}&perPage=12`);return console.log(e.data),e.data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await w.get(`${$}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await w.post(`${$}/subscription`,e)).data}catch(s){return s}}}class ie{constructor(){}getData(e){try{const s=localStorage.getItem(e);return JSON.parse(s)}catch{console.error("Get error: ",err)}}setData(e,s){try{const a=JSON.stringify(s);localStorage.setItem(e,a)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const ne=new T,N=new ie,ce=document.querySelector(".quote-text-js"),le=document.querySelector(".quote-author-js");async function de(){const t=new Date,e=t.getDate(),s=t.getMonth()+1,a=t.getFullYear(),o=`${e}.${s}.${a}`,r=N.getData("quote");if(r&&r.date===o)Q(r.data);else try{const c=await ne.getQuoteOfTheDay(),l={date:o,data:c};N.setData("quote",l),Q(c)}catch(c){console.error("Error fetching the quote:",c)}}function Q(t){ce.textContent=t.quote,le.textContent=t.author}de();const ue=new T,F=document.querySelector(".js-footer-form"),g=document.querySelector(".footer-form-btn"),C=document.querySelector('input[type="email"]');function M(t){return/^[^\s@]+(?:\.[^\s@]+)*@[^\s@]+\.[^\s@]+$/.test(t)}g&&(g.disabled=!0,C.addEventListener("input",()=>{const t=C.value;M(t)?(g.style.backgroundColor="#c6cdd1",g.disabled=!1):(g.style.backgroundColor="#f4f4f4",g.disabled=!0)}),g.addEventListener("mouseover",()=>{const t=C.value;M(t)?g.style.cursor="pointer":g.style.cursor="not-allowed"}),g.addEventListener("mouseout",()=>{g.style.cursor="default"}),F.addEventListener("submit",async t=>{var a,o;t.preventDefault();const e=C.value;if(!M(e)){I.warning({message:"Invalid email address was entered.",position:"topRight"});return}const s={email:e};try{const r=await ue.subscription(s);if(console.log("resp",r),((a=r==null?void 0:r.response)==null?void 0:a.status)===409){I.warning({message:"Subscription already exists",position:"topRight"});return}if(((o=r==null?void 0:r.response)==null?void 0:o.status)===400){I.warning({message:"Bad request (invalid request body)",position:"topRight"});return}r!=null&&r.message&&I.success({message:r.message,position:"topRight"})}catch(r){console.log("error",r)}finally{F.reset()}}));const i={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh"),searchIcon:document.querySelector(".menu-search-icon"),closeIcon:document.querySelector(".menu-close-icon"),searchBtn:document.querySelector(".menu-search-btn"),searchInput:document.querySelector(".menu-search-input")};i.exerciseRefresh.addEventListener("click",ge);function ge(t){location.reload()}const m="/mvp-your-energy/assets/sprite-c1fb1bf2.svg",Y=(t,e)=>{const s=t.reduce((a,{filter:o,imgURL:r,name:c})=>(a+=`<li class="categories__card-item js-exercise" data-exercise=${c}>
        <img
          src="${r}"
          alt="${c}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${c}</h2>
        <p class="categories__card-text">${o}</p>
      </li>`,a),"");e.innerHTML=s},G=(t,e)=>{const s=t.reduce((a,{rating:o,target:r,bodyPart:c,burnedCalories:l,name:u,_id:k})=>(a+=`<li class="card-item" id=${k}>
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
            <use href="${m}#icon-star"></use>
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
          <use href="${m}#icon-arrow-right"></use>
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
          <use href="${m}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${u}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value">${l} / ...</div>
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
  </li>`,a),"");e.innerHTML=s};class me{constructor(){this.pagination}init(e,s,a){let o=3;const r={totalItems:s*a,itemsPerPage:a,visiblePages:o,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new se(i.paginationBox,r),this.pagination.on("afterMove",async({page:c})=>{if(console.log("service",e),e.type===B.FILTERS){e.setPage(c);const l=await e.getCategories();Y(l.results,i.categoriesContainer)}if(e.type===B.EXEECISES){e.setPage(c);const l=await e.getExercises();G(l.results,i.categoriesContainer)}})}}const K=new me,O=new T(B.FILTERS),y=new T(B.EXEECISES);i.categoriesList.addEventListener("click",he);i.search.addEventListener("submit",t=>fe(t,L));i.searchInput.addEventListener("input",t=>pe(t,L));i.searchInput.addEventListener("focus",ve);i.searchInput.addEventListener("blur",W);const L={searchQuery:""};i.closeIcon&&i.closeIcon.addEventListener("click",z);document.addEventListener("click",function(t){t.target.closest("#menu-close-icon")&&z(t)});function pe(t,e){const s=t.currentTarget.value.trim();e.searchQuery!==s&&(i.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-search"></use>
      </svg>
    `)}function ve(t){t.target.value.trim()&&(t.target.placeholder="")}function W(t){t.target.value.trim()||(t.target.placeholder="Search")}async function z(t){i.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-search"></use>
      </svg>
    `,i.search.reset();const e=new FormData(i.search);L.searchQuery=e.get("search").trim();const s=y.getExercise();y.setSearch(L.searchQuery),L.searchQuery===void 0&&W(t),await _(s)}async function fe(t,e){t.preventDefault();const s=new FormData(t.currentTarget);e.searchQuery=s.get("search").trim(),e.searchQuery!==""&&(i.searchBtn.innerHTML=`
      <svg id="menu-close-icon" class="menu-close-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-close"></use>
      </svg>
    `);const a=y.getExercise();return y.setSearch(e.searchQuery),await _(a),e.searchQuery}async function he(t){if(t.target.nodeName!=="LI")return;i.exercise.textContent="",i.exerciseDecor.classList.add("visually-hidden"),i.categoryError.classList.add("visually-hidden"),i.search.classList.add("visually-hidden");const e=t.currentTarget.querySelector(".current");e&&e.classList.remove("current"),t.target.classList.add("current");const s=t.target.textContent;O.setCategory(s),y.setCategory(s),await V()}async function V(){const t=await O.getCategories();if(i.categorySceletonLoader.classList.add("visually-hidden"),Y(t.results,i.categoriesContainer),t!=null&&t.totalPages||i.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){i.paginationBox.classList.add("visually-hidden");return}i.paginationBox.classList.remove("visually-hidden"),K.init(O,t.totalPages,t.perPage)}V();i.categoriesContainer.addEventListener("click",ye);async function ye(t){if(t.target.closest(".js-exercise")){const e=t.target.closest(".js-exercise").dataset.exercise;i.exercise.textContent=e,i.exerciseDecor.classList.remove("visually-hidden"),i.search.classList.remove("visually-hidden"),await _(e);return}}async function _(t){y.setExercise(t);const e=await y.getExercises();if(G(e.results,i.categoriesContainer),e!=null&&e.totalPages||i.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){i.paginationBox.classList.add("visually-hidden");return}i.paginationBox.classList.remove("visually-hidden"),K.init(y,e.totalPages,e.perPage)}const U=["#Sport","#Healthy","#Workout","#Diet"],H=100,be=document.querySelectorAll(".hero-item-text");let q=0;function Z(){if(q<U.length){const t=U[q],e=be[q];let s=0;const a=setInterval(function(){s<t.length?(e.textContent+=t[s],s++):(clearInterval(a),q++,setTimeout(Z,H))},H)}}Z();const xe={root:null,rootMargin:"0px",threshold:0},A=document.querySelector(".footer-title-span"),Ee=new IntersectionObserver(Se,xe);Ee.observe(A);function Se(t,e){t.forEach(s=>{s.isIntersecting&&(R.set(A,{clearProps:"all"}),R.to(A,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}function we(){const t=document.getElementsByClassName("categories__cards-list"),e=document.getElementById("modal");let s=!1;function a(){document.body.style.overflow="hidden"}function o(){document.body.style.overflow=""}function r(){e.style.display="flex",a(),s=!0}function c(){e.style.display="none",o(),s=!1}document.querySelector(".modal-main");const l=document.getElementsByClassName("modal-close-btn")[0];let u=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];l&&(l.onclick=function(){c(),localStorage.removeItem("currentExercise")}),window.onclick=function(n){n.target==e&&(c(),localStorage.removeItem("currentExercise"))},document.addEventListener("keydown",function(n){n.key==="Escape"&&s&&(c(),localStorage.removeItem("currentExercise"))});for(let n=0;n<t.length;n+=1)t[n].addEventListener("click",function(p){const v=p.target.closest(".card-menu-start"),b=p.target.closest(".card-item");if(v){const x=b.id;r();const f=`https://your-energy.b.goit.study/api/exercises/${x}`;w.get(f).then(d=>{if(d)return localStorage.setItem("currentExercise",JSON.stringify(d.data)),d.data}).then(d=>{console.log(d),k(d);const h=document.getElementById("fav-btn");if(h){const j=u.some(S=>S._id===d._id);h.querySelector(".modal-heart-icon use").setAttribute("href",j?`${m}#icon-trash`:`${m}#icon-heart`),h.querySelector(".modal-btn-text").textContent=j?"Remove from favorites":"Add to favorites",h.addEventListener("click",function(){const S=u.some(P=>P._id===d._id);S?u=u.filter(P=>P._id!==d._id):u.push(d),localStorage.setItem("savedExercises",JSON.stringify(u)),h.querySelector(".modal-btn-text").textContent=S?"Add to favorites":"Remove from favorites",h.querySelector(".modal-heart-icon use").setAttribute("href",S?`${m}#icon-heart`:`${m}#icon-trash`)})}}).catch(d=>{console.error("There was a problem with the Axios request:",d)})}});function k(n){const E=document.getElementById("cardDetails");console.log("exerciseDetailsContainer",E);let p=null;n.gifUrl?p=`<div class="modal-gif-wrapper">
        <img class="gif" src="${n.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:p=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const v=`<p class='modal-card-title'>${n.name.charAt(0).toUpperCase()+n.name.slice(1)}</p>`,b=te(Math.round(n.rating*10)/10),x=`<div class='modal-rating-container'>
      <span class="modal-rating">${n.rating.toString().includes(".")?Math.round(n.rating*10)/10:n.rating+".0"}</span>
      ${b}
      </div>`,f=`<div class="modal-details-container">
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Target</p>
      <p class="modal-details-info">${n.target.charAt(0).toUpperCase()+n.target.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title body-part">Body Part</p>
      <p class="modal-details-info">${n.bodyPart.charAt(0).toUpperCase()+n.bodyPart.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Equipment</p>
      <p class="modal-details-info">${n.equipment.charAt(0).toUpperCase()+n.equipment.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Popular</p>
      <p class="modal-details-info">${n.popularity}</p>
      </div>
      </div>
      <div class="modal-details-wrapper modal-calories">
      <p class="modal-details-title">Burned Calories</p>
      <p class="modal-details-info">${n.burnedCalories}</p>
      </div>`,d=`<div class="modal-description">${n.description}</div>`,h=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="${m}#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;E.innerHTML=`${p+`<div class="modal-content-wrapper">${v+x+f+d+h}</div>`}`}function te(n){const E=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="${m}#icon-star"></use>
      </svg></div>`,p=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="${m}#icon-star"></use>
      </svg></div>`;let v="",b=Math.floor(n),x=n-b;for(let f=0;f<5;f++)if(f<b)v+=E;else if(f===b&&x>0){const d=Math.round(x*100);v+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${d}%, rgba(244, 244, 244, 0.2) ${d}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${d}%, rgba(244, 244, 244, 0.2) ${d}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="${m}#icon-star"></use>
          </svg></div>`}else v+=p;return`${v}`}}window.onload=function(){document.querySelector(".home__container")&&we()};document.querySelector(".exercises-trash-btn"),document.querySelector(".js-exercise-favorites"),document.querySelector(".js-favorites-error");const J=i.exercise,Le=i.categoryError,D="savedExercises";ee();function ee(){const t=document.getElementsByClassName("favorite-card-item"),e=JSON.parse(localStorage.getItem(D))??[];if(e.length===0){console.log("savedExercis"),Le.classList.remove("visually-hidden");return}console.log(e),J.innerHTML=X(e);for(let a=0;a<t.length;a+=1)t[a].addEventListener("click",s);function s(a){const o=a.target.closest(".exercises-trash-btn"),r=a.target.closest(".card-item");if(o){const c=r.id;let l=e.findIndex(u=>u._id===`${c}`);console.log(l),console.log(e[l]),l>=0&&(e.splice(l,1),localStorage.removeItem(D),localStorage.setItem(D,JSON.stringify(e))),J.innerHTML=X(e),ee()}}}function X(t){return t.map(({_id:e,target:s,bodyPart:a,burnedCalories:o,time:r,name:c})=>`
            <li class="card-item favorite-card-item" id=${e}>
                <div class="card-menu">
                <div class="exercises-box">
                    <div class="card-menu-workout">WORKOUT</div>
                    <button class="exercises-trash-btn" type="button">
                        <svg
                            class="card-menu-trash-icon"
                            width="16"
                            height="16"
                        >
                            <use href="./img/sprite.svg#icon-trash"></use>
                        </svg>
                    </button>
                </div>

                <div class="card-menu-start">
                    <button class="exercises-start-btn" type="button">
                        <p class="card-menu-start-text">Start</p>
                        <svg
                            class="card-menu-start-icon"
                            width="16"
                            height="16"
                        >
                            <use href="./img/sprite.svg#icon-arrow-right"></use>
                        </svg>
                    </button>
                </div>
                </div>

                <div class="card-title">
                <div class="card-title-icon-box">
                    <svg
                    class="card-title-icon"
                    width="24"
                    height="24"
                    >
                     <use href="./img/sprite.svg#icon-run"></use>
                    </svg>
                </div>
                <p class="card-title-text">${c}</p>
                </div>

                <div class="card-info">
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Burned calories:
                    <span class="card-info-about-value">${o} / ${r} min</span>
                    </p>
                </div>
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Body part: <span class="card-info-about-value">${a}</span>
                    </p>
                </div>
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Target: <span class="card-info-about-value">${s}</span>
                    </p>
                </div>
                </div>
            </li>
        `).join("")}
//# sourceMappingURL=favorites-dfbb65b3.js.map
