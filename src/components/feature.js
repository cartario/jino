import { createElement } from "../utils";

class Feature {
  constructor(imgSrc, text){
    this.imgSrc = imgSrc;
    this.text = text;
    this._element = null;
  }
  getTemplate(){
    return (`<li class="col col-25 features__item">
    <img src=${this.imgSrc} alt="feature"/>
    <p>${this.text}</p>
  </li>`)
  }

  getElement(){
    if(!this._element){
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
};

export default Feature;
