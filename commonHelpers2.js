import"./assets/styles-d7fafaef.js";import{a as w,i as $,P as V,g as j}from"./assets/vendor-5014e6d0.js";(()=>{const t=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".mobile-social-box"),l=document.querySelector("body"),a=()=>{const d=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!d),t.classList.toggle("is-open"),l.classList.toggle("disable-scroll")},n=d=>d.forEach(m=>{m.addEventListener("click",a)});e.addEventListener("click",a),s.addEventListener("click",a),n(i)})();const Z=document.querySelector("#upbutton");Z.addEventListener("click",ee);function ee(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const I="https://your-energy.b.goit.study/api",B={FILTERS:"filters",EXEECISES:"exercises"},te={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class P{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1,this.search=""}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}getExercise(){return this.exercise}setSearch(e){this.search=e}async getCategories(){try{return(await w.get(`${I}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{const e=await w.get(`${I}/exercises?${te[this.category]}=${this.exercise}&keyword=${this.search}&page=${this.page}&perPage=12`);return console.log(e.data),e.data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await w.get(`${I}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await w.post(`${I}/subscription`,e)).data}catch(s){return s}}}class se{constructor(){}getData(e){try{const s=localStorage.getItem(e);return JSON.parse(s)}catch{console.error("Get error: ",err)}}setData(e,s){try{const i=JSON.stringify(s);localStorage.setItem(e,i)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const re=new P,O=new se,ae=document.querySelector(".quote-text-js"),oe=document.querySelector(".quote-author-js");async function ie(){const t=new Date,e=t.getDate(),s=t.getMonth()+1,i=t.getFullYear(),l=`${e}.${s}.${i}`,a=O.getData("quote");if(a&&a.date===l)Q(a.data);else try{const n=await re.getQuoteOfTheDay(),d={date:l,data:n};O.setData("quote",d),Q(n)}catch(n){console.error("Error fetching the quote:",n)}}function Q(t){ae.textContent=t.quote,oe.textContent=t.author}ie();const ne=new P,U=document.querySelector(".js-footer-form"),g=document.querySelector(".footer-form-btn"),C=document.querySelector('input[type="email"]');function D(t){return/^[^\s@]+(?:\.[^\s@]+)*@[^\s@]+\.[^\s@]+$/.test(t)}g&&(g.disabled=!0,C.addEventListener("input",()=>{const t=C.value;D(t)?(g.style.backgroundColor="#c6cdd1",g.disabled=!1):(g.style.backgroundColor="#f4f4f4",g.disabled=!0)}),g.addEventListener("mouseover",()=>{const t=C.value;D(t)?g.style.cursor="pointer":g.style.cursor="not-allowed"}),g.addEventListener("mouseout",()=>{g.style.cursor="default"}),U.addEventListener("submit",async t=>{var i,l;t.preventDefault();const e=C.value;if(!D(e)){$.warning({message:"Invalid email address was entered.",position:"topRight"});return}const s={email:e};try{const a=await ne.subscription(s);if(console.log("resp",a),((i=a==null?void 0:a.response)==null?void 0:i.status)===409){$.warning({message:"Subscription already exists",position:"topRight"});return}if(((l=a==null?void 0:a.response)==null?void 0:l.status)===400){$.warning({message:"Bad request (invalid request body)",position:"topRight"});return}a!=null&&a.message&&$.success({message:a.message,position:"topRight"})}catch(a){console.log("error",a)}finally{U.reset()}}));const r={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh"),searchIcon:document.querySelector(".menu-search-icon"),closeIcon:document.querySelector(".menu-close-icon"),searchBtn:document.querySelector(".menu-search-btn"),searchInput:document.querySelector(".menu-search-input")};r.exerciseRefresh.addEventListener("click",ce);function ce(t){location.reload()}const u="/mvp-your-energy/assets/sprite-c1fb1bf2.svg",N=(t,e)=>{const s=t.reduce((i,{filter:l,imgURL:a,name:n})=>(i+=`<li class="categories__card-item js-exercise"
      style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${a}), lightgray -56.383px -2px / 129.575% 103.719% no-repeat"
      data-exercise=${n}>
        <img
          src="${a}"
          alt="${n}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${n}</h2>
        <p class="categories__card-text">${l}</p>
      </li>`,i),"");e.innerHTML=s},J=(t,e)=>{const s=t.reduce((i,{rating:l,target:a,bodyPart:n,burnedCalories:d,name:m,_id:k})=>(i+=`<li class="card-item" id=${k}>
    <div class="card-menu">
      <div class="card-menu-box">
        <div class="card-menu-workout">WORKOUT</div>
        <div class="card-menu-rating">
          <p class="card-menu-rating-text">${Math.round(l)}.0</p>
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
      <p class="card-title-text">${m}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value">${d} / ...</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value">${n}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value">${a}</div>
      </div>
    </div>
  </li>`,i),"");e.innerHTML=s};class le{constructor(){this.pagination}init(e,s,i){let l=3;const a={totalItems:s*i,itemsPerPage:i,visiblePages:l,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new V(r.paginationBox,a),this.pagination.on("afterMove",async({page:n})=>{if(console.log("service",e),e.type===B.FILTERS){e.setPage(n);const d=await e.getCategories();N(d.results,r.categoriesContainer)}if(e.type===B.EXEECISES){e.setPage(n);const d=await e.getExercises();J(d.results,r.categoriesContainer)}})}}const X=new le,M=new P(B.FILTERS),y=new P(B.EXEECISES);r.categoriesList.addEventListener("click",me);r.search.addEventListener("submit",t=>ge(t,L));r.searchInput.addEventListener("input",t=>de(t,L));r.searchInput.addEventListener("focus",ue);r.searchInput.addEventListener("blur",G);const L={searchQuery:""};r.closeIcon&&r.closeIcon.addEventListener("click",Y);document.addEventListener("click",function(t){t.target.closest("#menu-close-icon")&&Y(t)});function de(t,e){const s=t.currentTarget.value.trim();e.searchQuery!==s&&(r.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="${u}#icon-search"></use>
      </svg>
    `)}function ue(t){t.target.placeholder=""}function G(t){t.target.value.trim()||(t.target.placeholder="Search")}async function Y(t){r.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="${u}#icon-search"></use>
      </svg>
    `,r.search.reset();const e=new FormData(r.search);L.searchQuery=e.get("search").trim();const s=y.getExercise();y.setSearch(L.searchQuery),L.searchQuery===void 0&&G(t),await _(s),r.categoryError.classList.add("visually-hidden")}async function ge(t,e){t.preventDefault();const s=new FormData(t.currentTarget);e.searchQuery=s.get("search").trim(),e.searchQuery!==""&&(r.searchBtn.innerHTML=`
      <svg id="menu-close-icon" class="menu-close-icon" width="18" height="18">
        <use href="${u}#icon-close"></use>
      </svg>
    `),r.categoryError.classList.add("visually-hidden");const i=y.getExercise();return console.log(i),y.setSearch(e.searchQuery),await _(i),e.searchQuery}async function me(t){if(t.target.nodeName!=="LI")return;r.exercise.textContent="",r.exerciseDecor.classList.add("visually-hidden"),r.categoryError.classList.add("visually-hidden"),r.search.classList.add("visually-hidden");const e=t.currentTarget.querySelector(".current");e&&e.classList.remove("current"),t.target.classList.add("current");const s=t.target.textContent;M.setCategory(s),y.setCategory(s),await W()}async function W(){const t=await M.getCategories();if(r.categorySceletonLoader.classList.add("visually-hidden"),N(t.results,r.categoriesContainer),t!=null&&t.totalPages||r.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){r.paginationBox.classList.add("visually-hidden");return}r.paginationBox.classList.remove("visually-hidden"),X.init(M,t.totalPages,t.perPage)}W();r.categoriesContainer.addEventListener("click",pe);async function pe(t){if(t.target.closest(".js-exercise")){const e=t.target.closest(".js-exercise").dataset.exercise;r.exercise.textContent=e,r.exerciseDecor.classList.remove("visually-hidden"),r.search.classList.remove("visually-hidden"),await _(e);return}}async function _(t){y.setExercise(t);const e=await y.getExercises();if(J(e.results,r.categoriesContainer),e!=null&&e.totalPages||r.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){r.paginationBox.classList.add("visually-hidden");return}r.paginationBox.classList.remove("visually-hidden"),X.init(y,e.totalPages,e.perPage)}const F=["#Sport","#Healthy","#Workout","#Diet"],H=100,he=document.querySelectorAll(".hero-item-text");let q=0;function z(){if(q<F.length){const t=F[q],e=he[q];let s=0;const i=setInterval(function(){s<t.length?(e.textContent+=t[s],s++):(clearInterval(i),q++,setTimeout(z,H))},H)}}z();const ve={root:null,rootMargin:"0px",threshold:0},A=document.querySelector(".footer-title-span"),fe=new IntersectionObserver(ye,ve);fe.observe(A);function ye(t,e){t.forEach(s=>{s.isIntersecting&&(j.set(A,{clearProps:"all"}),j.to(A,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}function be(){const t=document.getElementsByClassName("categories__cards-list"),e=document.getElementById("modal");let s=!1;function i(){document.body.style.overflow="hidden"}function l(){document.body.style.overflow=""}function a(){e.style.display="flex",i(),s=!0}function n(){e.style.display="none",l(),s=!1}document.querySelector(".modal-main");const d=document.getElementsByClassName("modal-close-btn")[0];let m=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];d&&(d.onclick=function(){n(),localStorage.removeItem("currentExercise")}),window.onclick=function(o){o.target==e&&(n(),localStorage.removeItem("currentExercise"))},document.addEventListener("keydown",function(o){o.key==="Escape"&&s&&(n(),localStorage.removeItem("currentExercise"))});for(let o=0;o<t.length;o+=1)t[o].addEventListener("click",function(p){const h=p.target.closest(".card-menu-start"),b=p.target.closest(".card-item");if(h){const x=b.id;a();const v=`https://your-energy.b.goit.study/api/exercises/${x}`;w.get(v).then(c=>{if(c)return localStorage.setItem("currentExercise",JSON.stringify(c.data)),c.data}).then(c=>{console.log(c),k(c);const f=document.getElementById("fav-btn");if(f){const R=m.some(S=>S._id===c._id);f.querySelector(".modal-heart-icon use").setAttribute("href",R?`${u}#icon-trash`:`${u}#icon-heart`),f.querySelector(".modal-btn-text").textContent=R?"Remove from favorites":"Add to favorites",f.addEventListener("click",function(){const S=m.some(T=>T._id===c._id);S?m=m.filter(T=>T._id!==c._id):m.push(c),localStorage.setItem("savedExercises",JSON.stringify(m)),f.querySelector(".modal-btn-text").textContent=S?"Add to favorites":"Remove from favorites",f.querySelector(".modal-heart-icon use").setAttribute("href",S?`${u}#icon-heart`:`${u}#icon-trash`)})}}).catch(c=>{console.error("There was a problem with the Axios request:",c)})}});function k(o){const E=document.getElementById("cardDetails");console.log("exerciseDetailsContainer",E);let p=null;o.gifUrl?p=`<div class="modal-gif-wrapper">
        <img class="gif" src="${o.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:p=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const h=`<p class='modal-card-title'>${o.name.charAt(0).toUpperCase()+o.name.slice(1)}</p>`,b=K(Math.round(o.rating*10)/10),x=`<div class='modal-rating-container'>
      <span class="modal-rating">${o.rating.toString().includes(".")?Math.round(o.rating*10)/10:o.rating+".0"}</span>
      ${b}
      </div>`,v=`<div class="modal-details-container">
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Target</p>
      <p class="modal-details-info">${o.target.charAt(0).toUpperCase()+o.target.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title body-part">Body Part</p>
      <p class="modal-details-info">${o.bodyPart.charAt(0).toUpperCase()+o.bodyPart.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Equipment</p>
      <p class="modal-details-info">${o.equipment.charAt(0).toUpperCase()+o.equipment.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Popular</p>
      <p class="modal-details-info">${o.popularity}</p>
      </div>
      </div>
      <div class="modal-details-wrapper modal-calories">
      <p class="modal-details-title">Burned Calories</p>
      <p class="modal-details-info">${o.burnedCalories}</p>
      </div>`,c=`<div class="modal-description">${o.description}</div>`,f=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="${u}#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;E.innerHTML=`${p+`<div class="modal-content-wrapper">${h+x+v+c+f}</div>`}`}function K(o){const E=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="${u}#icon-star"></use>
      </svg></div>`,p=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="${u}#icon-star"></use>
      </svg></div>`;let h="",b=Math.floor(o),x=o-b;for(let v=0;v<5;v++)if(v<b)h+=E;else if(v===b&&x>0){const c=Math.round(x*100);h+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${c}%, rgba(244, 244, 244, 0.2) ${c}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${c}%, rgba(244, 244, 244, 0.2) ${c}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="${u}#icon-star"></use>
          </svg></div>`}else h+=p;return`${h}`}}window.onload=function(){document.querySelector(".home__container")&&be()};
//# sourceMappingURL=commonHelpers2.js.map
