import { createElement } from "../utils";

class App {
  constructor(){
    
  }
  getTemplate(){
    return (`<div class="App">
    <div class="content">
      <div class="slider">
        <ul class="slides">        
        </ul>
        <div class="slider__controls controls">
          <div class="controls__dot"></div>
          <div class="controls__dot "></div>
          <div class="controls__dot"></div>       
        </div>
      </div>
    </div>  
  </div>`)
  }

  getElement(){
    if(!this._element){
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
};

const component = new App();
export default component;
