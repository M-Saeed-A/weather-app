import{a as u,o as l,c,b as s,w as f,v as m,t as d,d as y,e as h}from"./vendor.cd8981cc.js";const g=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}};g();var b="/assets/city.43386dc1.jpg",v=(e,o)=>{const i=e.__vccOpts||e;for(const[n,t]of o)i[n]=t;return i};const p="f5a78ba5f146ec4b7b427305ac1173a0",_={name:"App",data:()=>({city:"",data:null,isLoading:!1}),methods:{getData(){this.isLoading=!0,u.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${p}&units=metric&lang=fa`,{params:{q:this.city,appid:p,units:"metric",lang:"fa"}}).then(({data:e})=>{this.isLoading=!1,this.data=e})}}},w={class:"d-flex justify-content-center",dir:"rtl"},L={class:"card",style:{width:"18rem"}},k=s("img",{src:b,class:"card-img-top",alt:"..."},null,-1),A={class:"card-body"},D={class:"input-group mb-3"},N={key:0,class:"card-text"},O={key:1,class:"card-text"};function E(e,o,i,n,t,a){return l(),c("div",w,[s("div",L,[k,s("div",A,[s("div",D,[s("button",{class:"btn btn-primary",onClick:o[0]||(o[0]=(...r)=>a.getData&&a.getData(...r)),type:"button",id:"button-addon1"}," \u0627\u0631\u0633\u0627\u0644 "),f(s("input",{"onUpdate:modelValue":o[1]||(o[1]=r=>e.city=r),type:"text",class:"form-control",placeholder:"\u0627\u0633\u0645 \u0634\u0647\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F","aria-label":"Example text with button addon","aria-describedby":"button-addon1"},null,512),[[m,e.city]])]),e.data?(l(),c("div",N,[s("p",null,"\u0627\u0633\u0645 \u0634\u0647\u0631: "+d(e.data.name),1),s("p",null,"\u062F\u0645\u0627: "+d(e.data.main.temp),1),s("p",null,"\u062A\u0648\u0636\u06CC\u062D\u0627\u062A: "+d(e.data.weather[0].description),1),s("p",null,"\u0633\u0631\u0639\u062A \u0628\u0627\u062F: "+d(e.data.wind.speed),1)])):e.isLoading?(l(),c("p",O,"\u062F\u0631 \u062D\u0627\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A...")):y("",!0)])])])}var $=v(_,[["render",E]]);h($).mount("#app");
