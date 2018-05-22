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

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
export default class Scroll {
  
  constructor () {
  this.name = arguments[0];
  this.pagePos = window.pageYOffset;
  this.layer = document.getElementsByClassName("scroll__layer scroll__layer_" + this.name)[0];
  this.myStyle = window.getComputedStyle(this.layer);
  this.posY = this.myStyle.getPropertyValue('margin-top');
  this.posY = this.posY.slice(0, -2);
  this.index = arguments[1];
  this.sign =  arguments[2]
  this.edge = Math.abs(arguments[2]);
  }
  
  scrolling () {
    console.log("pY: " + this.posY + ", pP: " + this.pagePos + ' sign: '+ this.sign)
    
    var newPosY = +this.posY + Math.sign(this.sign)*(this.index*window.pageYOffset);
    
    if (this.sign > 0) {
      if (newPosY <= this.edge) {
        newPosY = newPosY + 'px';
        document.getElementsByClassName("scroll__layer scroll__layer_" + this.name)[0].style.marginTop = newPosY;
      } 
    } else {
      if (newPosY >= this.edge) {
        newPosY = newPosY + 'px';
        document.getElementsByClassName("scroll__layer scroll__layer_" + this.name)[0].style.marginTop = newPosY;
      }
    }
    
    
    this.pagePos = window.pageYOffset;

  }
    scroll () {
      window.addEventListener("scroll", throttle(bind(this.scrolling, this), 10))
                }
}
