export default function createLeftMenu (n){
  
  var ul = "";
  for (let i = 0; i < n; i++) {
    let num = '\n<span class="left_menu-list-number">' + (i+1) + '</span>'
    let svg = '\n<svg version="1.1" class="paragraph" id="paragraph'+ i +'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61.8 45.6">\n<style type="text/css"> \n\t.par' + (i+1) + ' {fill: url(#SVGPAR_'+ (i+1) +'_);}</style>\n<linearGradient id="SVGPAR_'+ (i+1) +'_" gradientUnits="userSpaceOnUse" x1="-0.2083" y1="22.625" x2="61.9592" y2="22.625"><stop offset="0" style="stop-color:#0FCABF" />\n<stop offset="0.5593" style="stop-color:#25DCAC" /><stop offset="1" style="stop-color:#32E6A2" /></linearGradient>\n<rect x="-0.4" y="-0.4" class="par' + (i+1) + '" width="62" height="46" /></svg>'
    let li = '<li class="left_menu-list"><div class="left_menu-list_container">' + svg + num + '</div></li>';
    ul += li;
  }
  document.getElementsByClassName('left_menu_lists')[0].innerHTML = ul;
  // document.getElementsByClassName("left_menu-list_container")[0].style.width = "none";
  // document.getElementById('paragraph').style.display = 'none';
  // [0].style.position = 'initial'
  console.log(1)
}
export function changePharagraf(n) {
  
  for(let i = 0; i < n; i++){
    document.getElementsByClassName('left_menu-list-number')[i].onclick = () => { 
      for (let k = 0; k < n; k++) {
        document.getElementById('paragraph' + k).style.display = 'none'
        document.getElementsByClassName('left_menu-list-number')[k].style.position = 'initial'
        document.getElementsByClassName('left_menu-list-number')[k].style.fontSize = '50pt'
      }
    document.getElementById('paragraph' + i).style.display = 'initial'
    document.getElementsByClassName('left_menu-list-number')[i].style.position = 'absolute'
    document.getElementsByClassName('left_menu-list-number')[i].style.fontSize = '55pt'
  }
}
}
export function firstClick (n) {
  for (let k = 0; k < n; k++) {
    document.getElementById('paragraph' + k).style.display = 'none'
    document.getElementsByClassName('left_menu-list-number')[k].style.position = 'initial'
    document.getElementsByClassName('left_menu-list-number')[k].style.fontSize = '50pt'
  }
document.getElementById('paragraph' + 0).style.display = 'initial'
document.getElementsByClassName('left_menu-list-number')[0].style.position = 'absolute'
document.getElementsByClassName('left_menu-list-number')[0].style.fontSize = '55pt'
}


