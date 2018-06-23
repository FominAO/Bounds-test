function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}
function throttle(func, ms) {

  var isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { 
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); 

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; 
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
export default class Scroll {
  
  constructor (name, speed, edge) {
  this.name = name;
  this.sign =  Math.sign(speed);
  this.speed = Math.abs(speed);
  this.pagePos = window.pageYOffset;
  this.layer = document.getElementsByClassName("scroll__layer scroll__layer_" + this.name)[0];
  this.transform = this.layer.style.transform
  // Получаем строку translateY(Ypx) и выделяем Y
  this.posY = this.transform.slice(11, this.transform.length - 3)
  this.edge = edge;
  }
  
  scrolling () {
    console.log("pY: " + this.posY + ", pP: " + this.pagePos + ' sign: '+ this.sign)
    let layerStyle = this.layer
    var newPosY = +this.posY + this.sign*(this.speed*window.pageYOffset);
    
    if ((newPosY > 0) && (newPosY <= this.edge)) {
        layerStyle.style.transform = `translateY(${newPosY}px)`;
        // if (this.name == "back") {debugger}
      } 
    // } else {
    //   if (newPosY >= this.edge) {
    //     layerStyle.style.transform = `translateY(${newPosY}px)`;
    //   }
    // }
    
    
    this.pagePos = window.pageYOffset;
    
  }
    scroll () {
      window.addEventListener("scroll", throttle(bind(this.scrolling, this), 1))
                }
}
