
export default function scroll (name, index) {
  window.addEventListener("scroll", scrolling)
  var pagePos = 0;
  function scrolling () {
  let layer = document.getElementsByClassName("scroll__layer scroll__layer_" + name)[0];
  let style = window.getComputedStyle(layer);
  let posY = style.getPropertyValue('background-position-y');
  
  
  posY = posY.slice(0, -2);
  var newPosY = +posY - index*(window.pageYOffset - pagePos);
  pagePos = window.pageYOffset;
  
  newPosY = newPosY + 'px';
  layer.style.backgroundPositionY = newPosY;
  console.log(name);
}
}