!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=1)}({1:function(e,t,s){"use strict";s.r(t);s(14),s(7);class i{constructor(e,t,s){this.name=e,this.sign=Math.sign(t),this.speed=Math.abs(t),this.pagePos=window.pageYOffset,this.layer=document.getElementsByClassName("scroll__layer scroll__layer_"+this.name)[0],this.transform=this.layer.style.transform,this.posY=this.transform.slice(11,this.transform.length-3),this.edge=s}scrolling(){console.log("pY: "+this.posY+", pP: "+this.pagePos+" sign: "+this.sign);let e=this.layer;var t=+this.posY+this.sign*(this.speed*window.pageYOffset);t>0&&t<=this.edge&&(e.style.transform=`translateY(${t}px)`),this.pagePos=window.pageYOffset}scroll(){var e,t;window.addEventListener("scroll",function(e,t){var s,i,n=!1;return function o(){if(n)return s=arguments,void(i=this);e.apply(this,arguments),n=!0,setTimeout(function(){n=!1,s&&(o.apply(i,s),s=i=null)},t)}}((e=this.scrolling,t=this,function(){return e.apply(t,arguments)}),1))}}class n{constructor(e){this.avatar=e.avatar,this.username=e.username,this.geo=e.geo,this.time=e.time,this.img=e.img,this.description=e.description,this.likes=e.likes}form(){let e=`<div class="username">${this.username}</div>`,t=`<div class="geo">${this.geo}</div>`,s=`<div class="time">${this.timeCouter(this.time)}</div>`,i=`<img class="record-img" src = "${this.img}"></img>`,n=`<div class="description">${this.description}</div>`,o=`<div class="record-footer">${`<div class="like-icon"></div><div class="like-count">${this.likes}</div>`}${n}</div>`,a=`<div class="record-header">${`<div class="record-header__user-info"><div class="avatar"></div>${e}${t}</div>`}${s}</div>`,r=document.createElement("div");return r.innerHTML=`${a}${i}<hr>${o}`,r.className="record",r.getElementsByClassName("avatar")[0].style.backgroundImage=`url(${this.avatar})`,r}timeCouter(){return"3h"}}class o{randomRecord(){return Math.floor(10*Math.random())}}class a{constructor(e){this.number=e,this.json=s(2),this.data=this.json.data,this.container=document.getElementsByClassName("record-container")[0]}render(){const e=document.createElement("div");e.className="block";let t=document.body.getElementsByClassName("more-container")[0];t&&t.remove();let s=document.createElement("div");s.className="more-container",s.innerHTML='<a class="more">Show more...</a>';for(let t=0;t<this.number;t++){let t=(new o).randomRecord(),s=new n(this.data[t]);e.appendChild(s.form())}this.container.appendChild(e),this.container.appendChild(s),document.getElementsByClassName("more")[0].onclick=(()=>{new a(this.number).render()})}}if(window.onload=function(){let e=document.querySelectorAll("[class *= scroll__layer_]");e[0].innerHTML='<svg version="1.1" id="wave1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3000 2450">\n\t<style type="text/css">\n\t.wave1_1 {fill: url(#SVWAVE1_3_);}\n</style>\n<linearGradient id="SVWAVE1_3_" gradientUnits="userSpaceOnUse" x1="-9.094947e-13" y1="1004.5" x2="3004.6719" y2="1004.5">\n<stop offset="0" style="stop-color:#00D3CA" />\n<stop offset="0.6872" style="stop-color:#09F7BE" />\n</linearGradient>\n<path class="wave1_1" d="M3000,2002.5v2009.7H0L0-6.5c0,0,512.3,323.4,1040.8,387C1921,486.5,2862,1933.5,3000,2002.5z"/></svg>',e[1].innerHTML='<svg version="1.1" id="wave2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3000 3000">\n<style type="text/css">\n.wave2_2 {fill: url(#SVGWAVE2_2_);}</style>\n<linearGradient id="SVGWAVE2_2_" gradientUnits="userSpaceOnUse" x1="8" y1="1112.5" x2="2997.002" y2="1112.5">\n<stop offset="0" style="stop-color:#00C2C6" />\n<stop offset="0.4484" style="stop-color:#00D8C3" />\n<stop offset="1" style="stop-color:#00F0C0" /></linearGradient>\n<path class="wave2_2" d="M0,1056c0,0,509-492,1661-672S3000,0,3000,0v3000H0V1056z" /></svg>',e[4].innerHTML='<svg version="1.1" id="wave3" xmlns="http://www.w3.org/2000/svg" viewBox="0 500 3000 1000">\n\t<style type="text/css">\n\t.st0{fill:#fafafa;}\t\n</style>\n<path class="st0" d="M3000,1031.7c-646.5,173.5-1086.6,92-1373.3-20c-335.5-131.1-515.7-325.3-850-320C443.6,697,174.9,897,0,1065\nv1935h3000V1031.7z"/></svg>',e[1].style.transform="translateY(250px)",e[0].style.transform="translateY(0px)"}(),window.innerWidth>=2150){new a(8).render()}else{new a(6).render()}const r=new i("middle",-.8,250),l=new i("back",.2,2e3);r.scroll(),l.scroll()},14:function(e,t){},2:function(e){e.exports={data:[{avatar:"http://www.i-sonnik.ru/wp-content/uploads/2016/10/shlyapa-4.jpg",username:"pellekofficial",geo:"Tokyo",time:"0",img:"https://image.flaticon.com/icons/svg/925/925619.svg",description:"This text displays that every record in this list were createddy gettin from 1 element of json file",likes:"10"},{avatar:"http://www.i-sonnik.ru/wp-content/uploads/2016/10/shlyapa-4.jpg",username:"pellekofficial",geo:"Osaka",time:"0",img:"https://image.flaticon.com/icons/svg/925/925614.svg",description:"This text displays that every record in this list were createddy gettin from 2 element of json file",likes:"7"},{avatar:"http://www.i-sonnik.ru/wp-content/uploads/2016/10/shlyapa-4.jpg",username:"pellekofficial",geo:"Kioto",time:"0",img:"https://image.flaticon.com/icons/svg/925/925644.svg",description:"This text displays that every record in this list were createddy gettin from 3 element of json file",likes:"11"},{avatar:"http://www.i-sonnik.ru/wp-content/uploads/2016/10/shlyapa-4.jpg",username:"pellekofficial",geo:"Nagoya",time:"0",img:"https://image.flaticon.com/icons/svg/925/925642.svg",description:"This text displays that every record in this list were createddy gettin from 4 element of json file",likes:"23"},{avatar:"http://www.i-sonnik.ru/wp-content/uploads/2016/10/shlyapa-4.jpg",username:"pellekofficial",geo:"Tokyo",time:"0",img:"https://image.flaticon.com/icons/svg/925/925613.svg",description:"This text displays that every record in this list were createddy gettin from 5 element of json file",likes:"12"},{avatar:"http://www.i-sonnik.ru/wp-content/uploads/2016/10/shlyapa-4.jpg",username:"pellekofficial",geo:"Hakone",time:"0",img:"https://image.flaticon.com/icons/svg/925/925640.svg",description:"This text displays that every record in this list were createddy gettin from 6 element of json file",likes:"13"},{avatar:"http://www.i-sonnik.ru/wp-content/uploads/2016/10/shlyapa-4.jpg",username:"pellekofficial",geo:"Tokyo",time:"0",img:"https://image.flaticon.com/icons/svg/925/925618.svg",description:"This text displays that every record in this list were createddy gettin from 7 element of json file",likes:"2"},{avatar:"http://www.i-sonnik.ru/wp-content/uploads/2016/10/shlyapa-4.jpg",username:"pellekofficial",geo:"Osaka",time:"0",img:"http://www.rosphoto.com/images/u/articles/1606/1_30.jpg",description:"This text displays that every record in this list were createddy gettin from 8 element of json file",likes:"3"},{avatar:"http://www.i-sonnik.ru/wp-content/uploads/2016/10/shlyapa-4.jpg",username:"pellekofficial",geo:"Tokyo",time:"0",img:"https://image.flaticon.com/icons/svg/925/925633.svg",description:"This text displays that every record in this list were createddy gettin from 9 element of json file",likes:"12"},{avatar:"http://www.i-sonnik.ru/wp-content/uploads/2016/10/shlyapa-4.jpg",username:"pellekofficial",geo:"Tokyo",time:"0",img:"https://image.flaticon.com/icons/svg/925/925627.svg",description:"This text displays that every record in this list were createddy gettin from 10 element of json file",likes:"14"}]}},7:function(e,t){}});