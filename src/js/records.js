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
    self=this
      let userName = `<div class='user-name'>
            ${this.user.username}
                        </div>`
      let location = this.location ? `<div class='user-location'>
                            ${this.location}
                        </div>`:''
      let caption = this.caption ? `<div class='user-caption'> 
                                            ${this.caption}
                                        </div>`: ''
        let header = `<div class='user-header'>
                        <div class='user'>
                            <div class='user-pic'> 
                                <img src='${this.user.profile_picture}'>
                            </div>
                            <div class='user-info'> 
                                ${userName}
                                ${location}
                            </div>
                        </div>
                        
                        <div>
                            ${this.time}
                        </div>
                        
                        
                     </div>`
        let likes = `<div class='like'>
                        <img src='./img/heart.png' onclick='alert("${self.id}")'>
                        <span>${this.likes}<span>
                    </div>`
        let mainPic = `<img class='main-image' src = ${this.img}>`
        let template = document.createElement('div')
        template.innerHTML = mainPic + header + likes + caption
        template.className = 'record'
        return template

  }
}