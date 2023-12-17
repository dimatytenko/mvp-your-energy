import{a as i}from"./vendor-5014e6d0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const q="/mvp-your-energy/assets/sprite-c1fb1bf2.svg";(()=>{const s=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".mobile-social-box"),t=document.querySelector("body"),r=()=>{const a=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!a),s.classList.toggle("is-open"),t.classList.toggle("disable-scroll")},c=a=>a.forEach(g=>{g.addEventListener("click",r)});e.addEventListener("click",r),o.addEventListener("click",r),c(n)})();const l="https://your-energy.b.goit.study/api",x={FILTERS:"filters",EXEECISES:"exercises"},y={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class h{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1,this.search=""}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}getExercise(){return this.exercise}setSearch(e){this.search=e}async getCategories(){try{return(await i.get(`${l}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{const e=await i.get(`${l}/exercises?${y[this.category]}=${this.exercise}&keyword=${this.search}&page=${this.page}&perPage=12`);return console.log(e.data),e.data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await i.get(`${l}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await i.post(`${l}/subscription`,e)).data}catch(o){return o}}}class p{constructor(){}getData(e){try{const o=localStorage.getItem(e);return JSON.parse(o)}catch{console.error("Get error: ",err)}}setData(e,o){try{const n=JSON.stringify(o);localStorage.setItem(e,n)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const f=new h,u=new p,m=document.querySelector(".quote-text-js"),S=document.querySelector(".quote-author-js");async function E(){const s=new Date,e=s.getDate(),o=s.getMonth()+1,n=s.getFullYear(),t=`${e}.${o}.${n}`,r=u.getData("quote");if(r&&r.date===t)d(r.data);else try{const c=await f.getQuoteOfTheDay(),a={date:t,data:c};u.setData("quote",a),d(c)}catch(c){console.error("Error fetching the quote:",c)}}function d(s){m.textContent=s.quote,S.textContent=s.author}E();export{h as A,x as a,q as i};
//# sourceMappingURL=quote-17daa152.js.map
