import{L as n,c as g,r as x,C as S}from"./assets/modalrating-dde4a9c2.js";import"./assets/vendor-5c458d1f.js";const f={trashFavoritesBtn:document.querySelector(".js-exercises-trash-btn"),StartFavoritesBtn:document.querySelector(".js-exercises-start-btn"),exerciseFavorites:document.querySelector(".js-exercise-favorites"),categoryErrorFavorites:document.querySelector(".js-favorites-error")},v=f.exerciseFavorites,E=f.categoryErrorFavorites,L=new S;l();function l(){const e=JSON.parse(localStorage.getItem(n))??[];if(h(e),e.length===0){E.classList.remove("visually-hidden");return}u()}function m(e){const s=e.target.closest(".js-exercises-trash-btn"),c=e.target.closest(".card-item");if(s){const r=document.getElementsByClassName("favorite-card-item"),i=JSON.parse(localStorage.getItem(n))??[],a=c.id;let o=i.findIndex(t=>t._id===`${a}`);console.log(o);for(let t=0;t<r.length;t+=1)r[t].removeEventListener("click",m),r[t].removeEventListener("click",d);i.splice(o,1),localStorage.removeItem(n),localStorage.setItem(n,JSON.stringify(i)),console.log("savedExercis",i),l()}}function d(e){const s=e.target.closest(".js-exercises-start-btn"),c=e.target.closest(".card-item");if(s){const r=document.getElementsByClassName("favorite-card-item"),i=JSON.parse(localStorage.getItem(n))??[],a=c.id;let o=i.findIndex(t=>t._id===`${a}`);console.log(o);for(let t=0;t<r.length;t+=1)r[t].removeEventListener("click",m),r[t].removeEventListener("click",d);l()}}function u(){const e=document.getElementsByClassName("favorite-card-item");for(let s=0;s<e.length;s+=1)e[s].addEventListener("click",m),e[s].addEventListener("click",d)}function h(e){if(window.innerWidth<1440){v.innerHTML=g(e.slice(0,8));const s=Math.ceil(e.length/8);L.init(null,s,8,u),e.length<=8&&x.paginationBox.classList.add("visually-hidden")}else v.innerHTML=g(e)}
//# sourceMappingURL=commonHelpers.js.map
