import Record from './records'
import Random from './random'
export default class RecordList {
  constructor(number) {
    this.number = number;
    this.json = require('../data.json');
    this.data = this.json.data
    this.container = document.getElementsByClassName("record-container")[0]
    // this.big =json.big;
    // this.img = json.img;
    // this.label = json.label;
    // this.views = json.views;
    // this.comments = json.comments;
    // this.likes = json.likes;
    // this.dislikes = json.dislikes;
  }
  render() {
    const newBlock = document.createElement("div");
    newBlock.className = "block";
    //creating show more button
    let moreContainer = document.body.getElementsByClassName("more-container")[0]
    if (moreContainer) { moreContainer.remove() }
    let more = document.createElement('div');
    more.className = 'more-container'
    more.innerHTML = '<a class="more">Show more...</a>'

    for (let n = 0; n < this.number; n++){
    let random = new Random();
    let i = random.randomRecord();
    let record = new Record(this.data[i]);
    newBlock.appendChild(record.form());
    }
    this.container.appendChild(newBlock)
    this.container.appendChild(more);
    document.getElementsByClassName("more")[0].onclick = () => { 
      const newBlock = new RecordList(this.number);
      newBlock.render()}

  }
}