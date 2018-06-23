import '../sass/main.sass';
import '../sass/record.sass';
import cloud from './cloud';
import Scroll from './scroll';
import Record from './records';
import RecordList from './record-list' 
window.onload = cloud();
let width = window.innerWidth
if (width >= 2150) { 
  let newRecords = new RecordList(8)
  newRecords.render()
} else {
  let newRecords = new RecordList(6)
  newRecords.render()
}

const mid = new Scroll("middle", -0.8, 250);
const back = new Scroll("back", 0.2, 2000);
mid.scroll();
back.scroll();
