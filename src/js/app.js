import '../sass/main.sass';
import '../sass/record.sass';
import cloud from './cloud';
import Scroll from './scroll';
import Record from './records';
import RecordList from './record-list' 
window.onload = cloud();
let newRecords = new RecordList(3)
newRecords.render()
const mid = new Scroll("middle", 0.4, -1);
const back = new Scroll("back", 0.2, 200);
mid.scroll();
back.scroll();
