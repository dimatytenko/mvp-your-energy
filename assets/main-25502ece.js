import{P as r}from"./vendor-f008eba8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const i=document.querySelector(".js-mobile-menu"),o=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=()=>{const a=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!a),i.classList.toggle("is-open")};o.addEventListener("click",n),s.addEventListener("click",n);const e=a=>a.forEach(c=>{c.addEventListener("click",n)}),t=document.querySelectorAll(".mobile-navigation");e(t);const l=document.querySelectorAll(".mobile-social-box");e(l),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(i.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const u=document.querySelector("#upbutton");u.addEventListener("click",d);function d(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>10?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const p={paginationBox:document.getElementById("tui-pagination")};class m{constructor(){this.pagination}init(){const s={totalItems:36,itemsPerPage:12,visiblePages:3,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new r(p.paginationBox,s),this.pagination.on("afterMove",({page:n})=>console.log(n))}}const g=new m;g.init();
//# sourceMappingURL=main-25502ece.js.map
