(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d=document.getElementById("icon");d.addEventListener("click",p);function p(){document.body.classList.toggle("night-mode"),document.body.classList.contains("night-mode")?d.src="/img/night-mode.svg":d.src="/img/day-mode.svg"}const v=document.querySelector(".check-btn-js"),l=document.querySelector(".check-input"),s=document.querySelector(".check-text");v.onclick=function(){l.value!==""&&Number(l.value)?l.value%4===0?(s.textContent="Ви народилися у високосний рік!",s.style.color="#00BB00"):(s.textContent="Ви народилися не у високосний рік!",s.style.color="#FF0000"):(s.textContent="Введіть рік народження!",s.style.color="#FF0000"),l.value=""};const C=document.querySelectorAll(".rps__list__btn");document.querySelector(".comp__score");document.querySelector(".player__score");document.getElementById("winner");const b=document.querySelector(".rps__btn");let h="";C.forEach(n=>{n.addEventListener("click",()=>{n.dataset.choice,h=x()})});function x(){const n=["rock","paper","scissors"],o=Math.floor(Math.random()*n.length);return n[o]}b.addEventListener("click",()=>{h.style.borderColor="green"});const a=document.querySelector(".calculator-button");a.addEventListener("click",()=>{a.classList.toggle("active-calc-btn")});const u=document.querySelector(".time-input"),q=document.querySelector(".time-btn-js"),g=document.getElementById("days"),m=document.getElementById("hours"),f=document.getElementById("minutes"),y=document.getElementById("seconds");document.querySelector(".time-text");g.style.marginRight="5px";q.onclick=function(){const o=Math.floor(u.value/1440),c=Math.floor((u.value-o*24*60)/60),r=Math.floor(u.value-(o*24*60+c*60)),e=Math.floor((u.value-(o*24*60+c*60+r))*60);g.textContent=`${o} дн.`,c>=10?m.textContent=`${c}:`:m.textContent=`0${c}:`,r>=10?f.textContent=`${r}:`:f.textContent=`0${r}:`,e>=10?y.textContent=`${e}`:y.textContent=`0${e}:`};
