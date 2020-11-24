import { createElement } from "../utils";
import uploadSvg from '../img/upload.svg';
import waitSvg from '../img/wait.svg';
import okSvg from '../img/ok.svg';

class Upload {
  constructor(title, status){    
    this.status = status;
    this.title = title || 'Загрузить скан страницы с фотографией';
    this.statusText = 'Идет проверка';
    this.imgUrl = this.init();    
  }

  init(){
    switch(this.status){
      case 1:
        this.statusText = 'Проверено';
        return okSvg;
      case 0:
        this.statusText = 'Отклонено';
        return uploadSvg;
      default :
        this.statusText = 'Идет проверка';
        return waitSvg;
    }
  }  

  getTemplate(){
    return (`<li class="confirm__upload upload">
    <div class="upload__icon">
      <img src=${this.imgUrl} alt="uploadIcon"/>
    </div>

    <div class="upload__text">
      <p class="upload__title">${this.title}</p>
      <p class="upload__info">Размер файла не более 10МБ</p>
      
    </div>
    <span class="upload__status">${this.statusText}</span>
  </li>`)
  }

  getElement(){
    if(!this._element){
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
};

export default Upload;
