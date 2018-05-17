import '../sass/main.sass';
import '../sass/record.sass';
import cloud from './cloud';
import scroll from './scroll';
import Record from './records'; 
window.onload = cloud();
document.getElementsByClassName("more")[0].onclick = () => { 
  const newRecord = new Record;
  newRecord.render()}
scroll("middle", 50);
scroll("back", -30);
scroll("front", 20);