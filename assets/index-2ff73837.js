(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const i=document.getElementById("icon");i.addEventListener("click",m);function m(){document.body.classList.toggle("night-mode"),document.body.classList.contains("night-mode")?i.src="/img/night-mode.svg":i.src="/img/day-mode.svg"}const a=document.querySelector(".check-btn-js"),c=document.querySelector(".check-input"),r=document.querySelector(".check-text");a.addEventListener("click",f);function f(){c.value!==""&&Number(c.value)?c.value%4===0?(r.textContent="Ви народилися у високосний рік!",r.style.color="#00BB00"):(r.textContent="Ви народилися не у високосний рік!",r.style.color="#FF0000"):(r.textContent="Введіть рік народження!",r.style.color="#FF0000"),c.value=""}const y=document.querySelector(".rps__list__btn");document.querySelector(".comp__score");document.querySelector(".player__score");document.getElementById("winner");const g=document.querySelector(".rps__btn");let u="";const p="Комп’ютер виграв раунд!";p.style.color="red";const h="Ви виграли раунд!";h.style.color="green";y.forEach(o=>{o.addEventListener("click",()=>{o.dataset.choice,u=S()})});function S(){const o=["rock","paper","scissors"],n=Math.floor(Math.random()*o.length);return o[n]}g.addEventListener("click",()=>{u.style.borderColor="green"});document.querySelector(".time-input");document.querySelector(".time-btn-js");document.querySelector(".time-text");
