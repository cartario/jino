import { createElement } from "../utils";
import uploadSvg from '../img/upload.svg';
import Upload from './upload';



class Slide {
  constructor(){
    this.upload = this.getItem(uploadSvg,null, 'yo');
  }
  
  getItem(title, status){
    const UploadComponent = new Upload(title, status);
    return UploadComponent.getTemplate();
  }

  getTemplate(){
    return (`<li><section class="slide slide--4">
    <div class="container">
      <div class="row">
        <div class="col col-50">
          <form class="profile">
            <div class="profile__field">
              <label>e-mail
                <input type="text" placeholder="e-mail"/>
              </label>
              <a href=#>Изменить</a>
            </div>
            <div class="profile__field">
              <label>Phone
                <input type="text" placeholder="phone"/>
              </label> 
              <a href=#>Задать</a>                       
            </div>
            <p>Номер мобильного телефона для важных оповещений...</p>   
            <button class="btn profile__btn" type="submit">Save</button>
          </form>

          <section class="confirm">
            <h2>Подтверждение аккаунта</h2>
            <p>Для подтверждения вашего аккаунта...</p>            
            <ul class="confirm__list">
              <li class="confirm__upload upload upload--input">
                <div class="upload__icon">
                  <img src=${uploadSvg} alt="uploadIcon"/>
                </div>
                <div class="upload__text">
                  <a class="upload__title" href="#">Загрузить скан страницы с фотографией</a>
                  <p class="upload__info">Размер файла не более 10МБ</p>
                </div>
              </li>             
            </ul>
          </section>
        </div>
      </div>
    </div>
  </section></li>`)
  }

  getElement(){
    if(!this._element){
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
};




const component = new Slide();
export default component;
