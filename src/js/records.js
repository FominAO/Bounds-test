export default class Record {
  constructor(img, label, views, comments, likes, dislikes) {
    this.img = img;
    this.label = label;
    this.views = views;
    this.comments = comments;
    this.likes = likes;
    this.dislikes = dislikes;
  }
  render() {
     let img = '<div class="img"></div>';
     let label = '<div class="label">Компания Bounds ищет на "Моём круге" специалиста, похожего на вас. Вот вакансии, которые они разместили за последние 24 часа:</div>';
     let like = '<span class="like"><span class="like-icon"></span>10</span>';
     let comment = '<span class="comment"><span class="comment-icon"></span>20</span>';
     let view = '<span class="view"><span class="view-icon"></span>30</span>';
     let media = '<div class="media">' + like + comment + view + '</div>';
     let content = '<div class="content">' + label + media + '</div>'
     let template = document.createElement('div')
     template.innerHTML = img + content;
     template.className = 'record';
     document.body.getElementsByClassName("container")[0].appendChild(template);
     document.body.getElementsByClassName("more-container")[0].remove()
     let more = document.createElement('div');
     more.className = 'more-container'
     more.innerHTML = '<a class="more">Show more...</a>'
     document.body.getElementsByClassName("container")[0].appendChild(more);
     document.getElementsByClassName("more")[0].onclick = () => { 
      const newRecord = new Record;
      newRecord.render()}

  
  }
}