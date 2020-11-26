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
          <section class="confirm">
            <h2>Подтверждение аккаунта</h2>
            <p>Для подтверждения вашего аккаунта
              вам нужно заполнить все поля, подтвердить почтовый ящик и телефон, а также загрузить сканы ваших документов
            </p>            
            <ul class="confirm__list">                          
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
