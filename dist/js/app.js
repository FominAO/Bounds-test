!function(e){var s={};function t(i){if(s[i])return s[i].exports;var n=s[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=s,t.d=function(e,s,i){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:i})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=1)}({1:function(e,s,t){"use strict";t.r(s);t(16),t(9);class i{constructor(){this.name=arguments[0],this.pagePos=window.pageYOffset,this.layer=document.getElementsByClassName("scroll__layer scroll__layer_"+this.name)[0],this.myStyle=window.getComputedStyle(this.layer),this.posY=this.myStyle.getPropertyValue("margin-top"),this.posY=this.posY.slice(0,-2),this.index=arguments[1],this.sign=arguments[2],this.edge=Math.abs(arguments[2])}scrolling(){console.log("pY: "+this.posY+", pP: "+this.pagePos+" sign: "+this.sign);var e=+this.posY+Math.sign(this.sign)*(this.index*window.pageYOffset);this.sign>0?e<=this.edge&&(e+="px",document.getElementsByClassName("scroll__layer scroll__layer_"+this.name)[0].style.marginTop=e):e>=this.edge&&(e+="px",document.getElementsByClassName("scroll__layer scroll__layer_"+this.name)[0].style.marginTop=e),this.pagePos=window.pageYOffset}scroll(){var e,s;window.addEventListener("scroll",function(e,s){var t,i,n=!1;return function l(){if(n)return t=arguments,void(i=this);e.apply(this,arguments),n=!0,setTimeout(function(){n=!1,t&&(l.apply(i,t),t=i=null)},s)}}((e=this.scrolling,s=this,function(){return e.apply(s,arguments)}),10))}}class n{constructor(e){this.big=e.big,this.img=e.img,this.label=e.label,this.views=e.views,this.comments=e.comments,this.likes=e.likes,this.dislikes=e.dislikes}form(){let e=`<div class="content"> ${`<div class="label"> ${this.label} </div>`} ${`<div class="media"> ${`<span class="like"><span class="like-icon"></span>${this.likes}</span>`} ${`<span class="comment"><span class="comment-icon"></span>${this.comments}</span>`} ${`<span class="view"><span class="view-icon"></span>${this.views}</span>`} </div>`} </div>`,s=document.createElement("div");return s.innerHTML='<div class="img"></div>'+e,"true"===this.big?(s.className="record__big",s.getElementsByClassName("img")[0].className="record__big_img",s.getElementsByClassName("content")[0].className="record__big_content",s.getElementsByClassName("record__big_img")[0].style.backgroundImage=`url(${this.img})`):(s.className="record",s.getElementsByClassName("img")[0].style.backgroundImage=`url(${this.img})`),s}}class l{randomRecord(){return Math.floor(10*Math.random())}}class o{constructor(e){this.number=e,this.json=t(2),this.data=this.json.data}render(){const e=document.createElement("div");e.className="block";let s=document.body.getElementsByClassName("more-container")[0];s&&s.remove();let t=document.createElement("div");t.className="more-container",t.innerHTML='<a class="more">Show more...</a>';for(let s=0;s<this.number;s++){let s=(new l).randomRecord(),t=new n(this.data[s]);e.appendChild(t.form())}document.getElementsByClassName("container")[0].appendChild(e),document.body.getElementsByClassName("container")[0].appendChild(t),document.getElementsByClassName("more")[0].onclick=(()=>{new o(this.number).render()})}}window.onload=(document.getElementsByClassName("scroll__layer_back")[0].style.backgroundImage="none",document.getElementsByClassName("scroll__layer_back")[0].innerHTML='<svg version="1.1" id="wave1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3000 2450">\n\t<style type="text/css">\n\t.wave1_1 {fill: url(#SVWAVE1_3_);}\n</style>\n<linearGradient id="SVWAVE1_3_" gradientUnits="userSpaceOnUse" x1="-9.094947e-13" y1="1004.5" x2="3004.6719" y2="1004.5">\n<stop offset="0" style="stop-color:#00D3CA" />\n<stop offset="0.6872" style="stop-color:#09F7BE" />\n</linearGradient>\n<path class="wave1_1" d="M3000,2002.5v2009.7H0L0-6.5c0,0,512.3,323.4,1040.8,387C1921,486.5,2862,1933.5,3000,2002.5z"/></svg>',document.getElementsByClassName("scroll__layer_middle")[0].style.backgroundImage="none",document.getElementsByClassName("scroll__layer_middle")[0].innerHTML='<svg version="1.1" id="wave2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3000 2000">\n<style type="text/css">\n.wave2_2 {fill: url(#SVGWAVE2_2_);}</style>\n<linearGradient id="SVGWAVE2_2_" gradientUnits="userSpaceOnUse" x1="8" y1="1112.5" x2="2997.002" y2="1112.5">\n<stop offset="0" style="stop-color:#00C2C6" />\n<stop offset="0.4484" style="stop-color:#00D8C3" />\n<stop offset="1" style="stop-color:#00F0C0" /></linearGradient>\n<path class="wave2_2" d="M0,1056c0,0,509-492,1661-672S3000,0,3000,0v3000H0V1056z" /></svg>',document.getElementsByClassName("scroll__layer_front")[0].style.backgroundImage="none",void(document.getElementsByClassName("scroll__layer_front-svg")[0].innerHTML='<svg version="1.1" id="wave3" xmlns="http://www.w3.org/2000/svg" viewBox="0 500 3000 1000">\n\t<style type="text/css">\n\t.st0{fill:#fafafa;}\t\n</style>\n<path class="st0" d="M3000,1031.7c-646.5,173.5-1086.6,92-1373.3-20c-335.5-131.1-515.7-325.3-850-320C443.6,697,174.9,897,0,1065\nv1935h3000V1031.7z"/></svg>')),new o(3).render();const a=new i("middle",.4,-1),r=new i("back",.2,200);a.scroll(),r.scroll()},16:function(e,s){},2:function(e){e.exports={data:[{big:"false",img:"https://image.flaticon.com/icons/svg/925/925619.svg",label:"This text displeys that every record in this list were createddy gettin from 1 element of json file",views:"20",comments:"10",likes:"10",dislikes:"2"},{big:"false",img:"https://image.flaticon.com/icons/svg/925/925614.svg",label:"This text displeys that every record in this list were createddy gettin from 2 element of json file",views:"22",comments:"1",likes:"7",dislikes:"3"},{big:"true",img:"https://image.flaticon.com/icons/svg/925/925644.svg",label:"This text displeys that every record in this list were createddy gettin from 3 element of json file",views:"40",comments:"4",likes:"11",dislikes:"3"},{big:"false",img:"https://image.flaticon.com/icons/svg/925/925642.svg",label:"This text displeys that every record in this list were createddy gettin from 4 element of json file",views:"15",comments:"11",likes:"23",dislikes:"8"},{big:"false",img:"https://image.flaticon.com/icons/svg/925/925613.svg",label:"This text displeys that every record in this list were createddy gettin from 5 element of json file",views:"23",comments:"14",likes:"12",dislikes:"0"},{big:"false",img:"https://image.flaticon.com/icons/svg/925/925640.svg",label:"This text displeys that every record in this list were createddy gettin from 6 element of json file",views:"55",comments:"3",likes:"13",dislikes:"1"},{big:"false",img:"https://image.flaticon.com/icons/svg/925/925618.svg",label:"This text displeys that every record in this list were createddy gettin from 7 element of json file",views:"14",comments:"14",likes:"2",dislikes:"10"},{big:"true",img:"https://image.flaticon.com/icons/svg/925/925623.svg",label:"This text displeys that every record in this list were createddy gettin from 8 element of json file",views:"22",comments:"4",likes:"3",dislikes:"1"},{big:"false",img:"https://image.flaticon.com/icons/svg/925/925633.svg",label:"This text displeys that every record in this list were createddy gettin from 9 element of json file",views:"33",comments:"2",likes:"12",dislikes:"0"},{big:"false",img:"https://image.flaticon.com/icons/svg/925/925627.svg",label:"This text displeys that every record in this list were createddy gettin from 10 element of json file",views:"32",comments:"11",likes:"14",dislikes:"3"}]}},9:function(e,s){}});