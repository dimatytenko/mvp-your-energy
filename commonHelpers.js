import{L as d,c as g,C as x}from"./assets/modal-eceba8cc.js";import"./assets/vendor-5c458d1f.js";const f={trashFavoritesBtn:document.querySelector(".js-exercises-trash-btn"),StartFavoritesBtn:document.querySelector(".js-exercises-start-btn"),exerciseFavorites:document.querySelector(".js-exercise-favorites"),categoryErrorFavorites:document.querySelector(".js-favorites-error")},v=f.exerciseFavorites,u=f.categoryErrorFavorites,h=new x;m();function m(){const r=JSON.parse(localStorage.getItem(d))??[];if(r.length===0){u.classList.remove("visually-hidden");return}if(window.innerWidth<1440&&r.length>8){v.innerHTML=g(r.slice(0,8));const t=Math.ceil(r.length/8);h.init(null,t,8)}else v.innerHTML=g(r);const s=document.getElementsByClassName("favorite-card-item");for(let t=0;t<s.length;t+=1)s[t].addEventListener("click",c),s[t].addEventListener("click",n);function c(t){const o=t.target.closest(".js-exercises-trash-btn"),a=t.target.closest(".card-item");if(o){const l=a.id;let i=r.findIndex(e=>e._id===`${l}`);console.log(i);for(let e=0;e<s.length;e+=1)s[e].removeEventListener("click",c),s[e].removeEventListener("click",n);r.splice(i,1),localStorage.removeItem(d),localStorage.setItem(d,JSON.stringify(r)),m()}}function n(t){const o=t.target.closest(".js-exercises-start-btn"),a=t.target.closest(".card-item");if(o){const l=a.id;let i=r.findIndex(e=>e._id===`${l}`);console.log(i);for(let e=0;e<s.length;e+=1)s[e].removeEventListener("click",c),s[e].removeEventListener("click",n);m()}}}
//# sourceMappingURL=commonHelpers.js.map
