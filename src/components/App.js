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
        <ul class="slider__controls controls">
          <li class="controls__dot"></li>
          <li class="controls__dot"></li>
          <li class="controls__dot"></li>
          <li class="controls__dot"></li>       
        </ul>
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
