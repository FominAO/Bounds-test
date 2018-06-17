export default class Record {
  constructor(data) {
    this.big = data.big;
    this.img = data.img;
    this.label = data.label;
    this.views = data.views;
    this.comments = data.comments;
    this.likes = data.likes;
    this.dislikes = data.dislikes;
  }
  form() {
     let img = `<div class="img"></div>`;
     let label = `<div class="label"> ${this.label} </div>`;
     let like = `<span class="like"><span class="like-icon"></span>${this.likes}</span>`;
     let comment = `<span class="comment"><span class="comment-icon"></span>${this.comments}</span>`;
     let view = `<span class="view"><span class="view-icon"></span>${this.views}</span>`;
     let media = `<div class="media"> ${like} ${comment} ${view} </div>`;
     let content = `<div class="content"> ${label} ${media} </div>`;
     let template = document.createElement('div')
     template.innerHTML = img + content;
     if (this.big === "true") { 
       template.className = 'record__big'
       template.getElementsByClassName("img")[0].className = "record__big_img"
       template.getElementsByClassName("content")[0].className = "record__big_content"
       template.getElementsByClassName("record__big_img")[0].style.backgroundImage = `url(${this.img})`
      } else {
              template.className = 'record';
              template.getElementsByClassName("img")[0].style.backgroundImage = `url(${this.img})`
      }
      
      return template
     document.body.getElementsByClassName("container")[0].appendChild(template);
     
     /////////////////////
     

  
  }
}