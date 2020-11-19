import { test } from './test';
import img from './img/1.jpg';
import './styles/index.scss';
import { createElement, render } from './utils';
import logo from './img/jino.png';

const root = document.querySelector('#root');

const App = createElement(`<div class="App">

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
    
  </ul>
</div>`);

render(root, App);
