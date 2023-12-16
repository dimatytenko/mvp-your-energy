import{a as h,i as b,P as J,g as k}from"./vendor-5014e6d0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();(()=>{const t=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".mobile-social-box"),r=document.querySelector("body"),o=()=>{const l=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!l),t.classList.toggle("is-open"),r.classList.toggle("disable-scroll")},s=l=>l.forEach(d=>{d.addEventListener("click",o)});e.addEventListener("click",o),a.addEventListener("click",o),s(i)})();const H=document.querySelector("#upbutton");H.addEventListener("click",Q);function Q(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const x="https://your-energy.b.goit.study/api",L={FILTERS:"filters",EXEECISES:"exercises"},X={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class C{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}async getCategories(){try{return(await h.get(`${x}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{return(await h.get(`${x}/exercises?${X[this.category]}=${this.exercise}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await h.get(`${x}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await h.post(`${x}/subscription`,e)).data}catch(a){return a}}}class z{constructor(){}getData(e){try{const a=localStorage.getItem(e);return JSON.parse(a)}catch{console.error("Get error: ",err)}}setData(e,a){try{const i=JSON.stringify(a);localStorage.setItem(e,i)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const G=new C,A=new z,Y=document.querySelector(".quote-text-js"),W=document.querySelector(".quote-author-js");async function K(){const t=new Date,e=t.getDate(),a=t.getMonth()+1,i=t.getFullYear(),r=`${e}.${a}.${i}`,o=A.getData("quote");if(o&&o.date===r)M(o.data);else try{const s=await G.getQuoteOfTheDay(),l={date:r,data:s};A.setData("quote",l),M(s)}catch(s){console.error("Error fetching the quote:",s)}}function M(t){Y.textContent=t.quote,W.textContent=t.author}K();const Z=new C,D=document.querySelector(".js-footer-form"),u=document.querySelector(".footer-form-btn"),E=document.querySelector('input[type="email"]');function $(t){return/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}u&&(u.disabled=!0,E.addEventListener("input",()=>{const t=E.value;$(t)?(u.style.backgroundColor="#c6cdd1",u.disabled=!1):(u.style.backgroundColor="#f4f4f4",u.disabled=!0)}),u.addEventListener("mouseover",()=>{const t=E.value;$(t)?u.style.cursor="pointer":u.style.cursor="not-allowed"}),u.addEventListener("mouseout",()=>{u.style.cursor="default"}),D.addEventListener("submit",async t=>{var i,r;t.preventDefault();const e=E.value;if(!$(e)){b.warning({message:"Invalid email address was entered.",position:"topRight"});return}const a={email:e};try{const o=await Z.subscription(a);if(console.log("resp",o),((i=o==null?void 0:o.response)==null?void 0:i.status)===409){b.warning({message:"Subscription already exists",position:"topRight"});return}if(((r=o==null?void 0:o.response)==null?void 0:r.status)===400){b.warning({message:"Bad request (invalid request body)",position:"topRight"});return}b.success({message:o.message,position:"topRight"})}catch(o){console.log("error",o)}finally{D.reset()}}));const n={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader")},q="/mvp-your-energy/assets/sprite-2566d563.svg",j=(t,e)=>{const a=t.reduce((i,{filter:r,imgURL:o,name:s})=>(i+=`<li class="categories__card-item js-exercise" data-exercise=${s}>
        <img
          src="${o}"
          alt="${s}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${s}</h2>
        <p class="categories__card-text">${r}</p>
      </li>`,i),"");e.innerHTML=a},R=(t,e)=>{const a=t.reduce((i,{rating:r,target:o,bodyPart:s,burnedCalories:l,name:d})=>(i+=`<li class="card-item">
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
        <div class="card-info-about-value">${o}</div>
      </div>
    </div>
  </li>`,i),"");e.innerHTML=a};class V{constructor(){this.pagination}init(e,a,i){let r=3;const o={totalItems:a*i,itemsPerPage:i,visiblePages:r,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new J(n.paginationBox,o),this.pagination.on("afterMove",async({page:s})=>{if(console.log("service",e),e.type===L.FILTERS){e.setPage(s);const l=await e.getCategories();j(l.results,n.categoriesContainer)}if(e.type===L.EXEECISES){e.setPage(s);const l=await e.getExercises();R(l.results,n.categoriesContainer)}})}}const U=new V,P=new C(L.FILTERS),w=new C(L.EXEECISES);n.categoriesList.addEventListener("click",ee);async function ee(t){if(t.target.nodeName!=="LI")return;n.exercise.textContent="",n.exerciseDecor.classList.add("visually-hidden"),n.categoryError.classList.add("visually-hidden");const e=t.currentTarget.querySelector(".current");e&&e.classList.remove("current"),t.target.classList.add("current");const a=t.target.textContent;P.setCategory(a),w.setCategory(a),await N()}async function N(){const t=await P.getCategories();if(n.categorySceletonLoader.classList.add("visually-hidden"),j(t.results,n.categoriesContainer),console.log("categories.totalPages <= 1",t.totalPages<=1),t!=null&&t.totalPages||n.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){console.log("categories.totalPages <= 1",t.totalPages<=1),n.paginationBox.classList.add("visually-hidden");return}n.paginationBox.classList.remove("visually-hidden"),U.init(P,t.totalPages,t.perPage)}N();n.categoriesContainer.addEventListener("click",te);async function te(t){if(console.log(t.target),t.target.closest(".js-exercise")){const e=t.target.closest(".js-exercise").dataset.exercise;n.exercise.textContent=e,n.exerciseDecor.classList.remove("visually-hidden"),await se(e);return}}async function se(t){w.setExercise(t);const e=await w.getExercises();if(console.log(e),R(e.results,n.categoriesContainer),e!=null&&e.totalPages||n.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){n.paginationBox.classList.add("visually-hidden");return}n.paginationBox.classList.remove("visually-hidden"),U.init(w,e.totalPages,e.perPage)}const _=["#Sport","#Healthy","#Workout","#Diet"],O=100,oe=document.querySelectorAll(".hero-item-text");let S=0;function F(){if(S<_.length){const t=_[S],e=oe[S];let a=0;const i=setInterval(function(){a<t.length?(e.textContent+=t[a],a++):(clearInterval(i),S++,setTimeout(F,O))},O)}}F();const ae={root:null,rootMargin:"0px",threshold:0},B=document.querySelector(".footer-title-span"),re=new IntersectionObserver(ie,ae);re.observe(B);function ie(t,e){t.forEach(a=>{a.isIntersecting&&(k.set(B,{clearProps:"all"}),k.to(B,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}function ne(){const t=document.getElementsByClassName("categories__cards-list"),e=document.getElementById("modal"),a=document.getElementsByClassName("modal-close-btn")[0];let i=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];a&&(a.onclick=function(){e.style.display="none",localStorage.removeItem("currentExercise")}),window.onclick=function(s){s.target==e&&(e.style.display="none",localStorage.removeItem("currentExercise"))};for(let s=0;s<t.length;s+=1)t[s].addEventListener("click",function(d){const g=d.target.closest(".card-menu-start"),v=d.target.closest(".card-item");if(g){const f=v.dataset.id;e.style.display="flex";const p=`https://your-energy.b.goit.study/api/exercises/${f}`;h.get(p).then(c=>{if(c)return localStorage.setItem("currentExercise",JSON.stringify(c.data)),c.data}).then(c=>{r(c);const m=document.getElementById("fav-btn");if(m){const T=i.some(y=>y._id===c._id);m.querySelector(".modal-heart-icon use").setAttribute("href",T?"./img/sprite.svg#icon-trash":"./img/sprite.svg#icon-heart"),m.querySelector(".modal-btn-text").textContent=T?"Unfavorite":"Add to favorites",m.addEventListener("click",function(){const y=i.some(I=>I._id===c._id);y?i=i.filter(I=>I._id!==c._id):i.push(c),localStorage.setItem("savedExercises",JSON.stringify(i)),m.querySelector(".modal-btn-text").textContent=y?"Add to favorites":"Unfavorite",m.querySelector(".modal-heart-icon use").setAttribute("href",y?"./img/sprite.svg#icon-heart":"./img/sprite.svg#icon-trash")})}}).catch(c=>{console.error("There was a problem with the Axios request:",c)})}});function r(s){const l=document.getElementById("exerciseDetails");let d=null;s.gifUrl?d=`<div class="modal-gif-wrapper">
        <img class="gif" src="${s.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:d=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const g=`<p class='modal-card-title'>${s.name.charAt(0).toUpperCase()+s.name.slice(1)}</p>`,v=o(Math.round(s.rating*10)/10),f=`<div class='modal-rating-container'>
      <span class="modal-rating">${s.rating.toString().includes(".")?Math.round(s.rating*10)/10:s.rating+".0"}</span>
      ${v}
      </div>`,p=`<div class="modal-details-container">
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
      </div>`,c=`<div class="modal-description">${s.description}</div>`,m=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="./img/sprite.svg#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;l.innerHTML=`${d+`<div class="modal-content-wrapper">${g+f+p+c+m}</div>`}`}function o(s){const l=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="./img/sprite.svg#icon-star"></use>
      </svg></div>`,d=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="./img/sprite.svg#icon-star"></use>
      </svg></div>`;let g="",v=Math.floor(s),f=s-v;for(let p=0;p<5;p++)if(p<v)g+=l;else if(p===v&&f>0){const c=Math.round(f*100);g+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${c}%, rgba(244, 244, 244, 0.2) ${c}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${c}%, rgba(244, 244, 244, 0.2) ${c}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="./img/sprite.svg#icon-star"></use>
          </svg></div>`}else g+=d;return`${g}`}}window.onload=function(){document.querySelector(".home__container")&&ne()};
//# sourceMappingURL=modal-af74532b.js.map
