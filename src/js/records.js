export default class Record {
  constructor(data) {
    this.avatar = data.avatar;
    this.username = data.username;
    this.geo = data.geo;
    this.time = data.time;
    this.img = data.img;
    this.description = data.description;
    this.likes = data.likes;
  }
  form() {
     let avatar = `<div class="avatar"></div>`;
     let username = `<div class="username">${this.username}</div>`;
     let geo = `<div class="geo">${this.geo}</div>`;
     let time = `<div class="time">${this.timeCouter(this.time)}</div>`;
     let img = `<img class="record-img" src = "${this.img}"></img>`;
     let description = `<div class="description">${this.description}</div>`;
     let like = `<div class="like-icon"></div><div class="like-count">${this.likes}</div>`;
     let userInfo = `<div class="record-header__user-info">${avatar}${username}${geo}</div>`;
     let footer = `<div class="record-footer">${like}${description}</div>`;
     let header = `<div class="record-header">${userInfo}${time}</div>`;
     let template = document.createElement('div');
     template.innerHTML = `${header}${img}<hr>${footer}`;
     template.className = 'record';
     template.getElementsByClassName("avatar")[0].style.backgroundImage = `url(${this.avatar})`
     return template
     
  }
  timeCouter() {
    return "3h"
  }
}