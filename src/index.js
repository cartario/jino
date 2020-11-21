import { test } from './test';
import img from './img/1.jpg';
import './styles/index.scss';
import { createElement, render, showActive, autoShowSlides } from './utils';
import logo from './img/jino.png';

const root = document.querySelector('#root');

const App = createElement(`<div class="App">
<div class="row">
  <div class="content">
    <div class="slider">
      <ul class="slides">
      <li>  
      <section class="slide slide--1">
        <div class="container">
          <div class="slide__top">
            <a href="#">
              
              <span>домены</span>
            </a>
            <span>только до 31 января</span>
          </div>
          <h1>Честная цена за домен.ру - 39 руб.</h1>
        
          <form>
            <input type="text" name="domen"/>
            <div>
              <span>Домен свободен</span>
              <a href="#">Зарегистрироваться</a>
            </div>
            <button type="submit">Check</button>
          </form>

          <button>Создать аккаунт</button>

          <div class="slide__controls">

          </div>
        </div>
      </section>
    </li>
        <li class="slide slide--2 active">
        </li>
        <li class="slide slide--3">
        </li>
      </ul>
      <div class="slider__controls controls">
        <div class="controls__dot active"></div>
        <div class="controls__dot "></div>
        <div class="controls__dot"></div>
      </div>
    </div>
  </div>

</div>
  
</div>`);

render(root, App);

const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.controls__dot'));

showActive(0, slides, dots);
// autoShowSlides(slides, dots);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showActive(index, slides, dots));
});
