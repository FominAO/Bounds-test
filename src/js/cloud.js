export default function cloud() {
  let svgBack = '<svg version="1.1" id="wave1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3000 2450">\n\t<style type="text/css">\n\t.wave1_1 {fill: url(#SVWAVE1_3_);}\n</style>\n<linearGradient id="SVWAVE1_3_" gradientUnits="userSpaceOnUse" x1="-9.094947e-13" y1="1004.5" x2="3004.6719" y2="1004.5">\n<stop offset="0" style="stop-color:#00D3CA" />\n<stop offset="0.6872" style="stop-color:#09F7BE" />\n</linearGradient>\n<path class="wave1_1" d="M3000,2002.5v2009.7H0L0-6.5c0,0,512.3,323.4,1040.8,387C1921,486.5,2862,1933.5,3000,2002.5z"/></svg>';
  let svgMid = '<svg version="1.1" id="wave2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3000 3000">\n<style type="text/css">\n.wave2_2 {fill: url(#SVGWAVE2_2_);}</style>\n<linearGradient id="SVGWAVE2_2_" gradientUnits="userSpaceOnUse" x1="8" y1="1112.5" x2="2997.002" y2="1112.5">\n<stop offset="0" style="stop-color:#00C2C6" />\n<stop offset="0.4484" style="stop-color:#00D8C3" />\n<stop offset="1" style="stop-color:#00F0C0" /></linearGradient>\n<path class="wave2_2" d="M0,1056c0,0,509-492,1661-672S3000,0,3000,0v3000H0V1056z" /></svg>';
  let svgFront = '<svg version="1.1" id="wave3" xmlns="http://www.w3.org/2000/svg" viewBox="0 500 3000 1000">\n\t<style type="text/css">\n\t.st0{fill:#fafafa;}	\n</style>\n<path class="st0" d="M3000,1031.7c-646.5,173.5-1086.6,92-1373.3-20c-335.5-131.1-515.7-325.3-850-320C443.6,697,174.9,897,0,1065\nv1935h3000V1031.7z"/></svg>';
  
  let layers = document.querySelectorAll("[class *= scroll__layer_]")

  layers[0].innerHTML = svgBack
  layers[1].innerHTML = svgMid
  layers[4].innerHTML = svgFront
  layers[1].style.transform = "translateY(250px)"
  layers[0].style.transform = "translateY(0px)"
}