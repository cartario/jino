import { test } from './test';
import img from './img/1.jpg';
import './styles/index.scss';
import { createElement, render, showActive, autoShowSlides } from './utils';
import auto from './img/autorenewal.svg';
import dnsSvg from './img/dns.svg';
import businesscardSvg from './img/businesscard.svg';
import certificateSvg from './img/certificate.svg';

import cloudSvg from './img/cloud.svg';
import freesslSvg from './img/freessl.svg';
import dnssecSvg from './img/dnssec.svg';
import redirectSvg from './img/redirect.svg';

const root = document.querySelector('#root');

const App = createElement(`<div class="App">

  <div class="content">
    <div class="slider">
      <ul class="slides">
      <li>  
      <section class="slide slide--1">
        <div class="container">
          <div class="slide__top">
            <a class="logo" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="15" viewBox="0 0 65 15">
            <path d="M26.708 7.223L28.2 3.125c.087-.315.05-.587-.095-.797-.148-.21-.392-.338-.65-.338h-2.33c-.354 0-.667.24-.763.582l-.92 3.445h-.687V2.78c0-.437-.354-.792-.79-.792h-1.976c-.44 0-.793.354-.793.792v3.235h-.78l-1.243-3.507c-.116-.31-.412-.52-.746-.52h-2.305c-.268 0-.52.136-.664.363-.15.228-.17.512-.06.828l1.843 4.048-1.86 4.698c-.094.242-.06.516.087.732.148.215.392.344.65.344h2.306c.35 0 .655-.228.758-.562l1.043-3.44h.97v3.21c0 .437.353.79.79.79h1.976c.437 0 .79-.354.79-.79V9h.834l.767 3.387c.087.357.404.613.77.613h2.33c.252 0 .49-.12.64-.32.148-.202.193-.463.12-.705l-1.506-4.752zM40.217 2.417c-.004-.008-.012-.017-.018-.024-.024-.045-.058-.09-.095-.132-.008-.007-.013-.02-.02-.028-.046-.045-.095-.083-.15-.12-.01-.007-.02-.012-.036-.02-.046-.024-.09-.045-.14-.062l-.05-.013c-.062-.016-.128-.03-.194-.03h-1.98c-.06 0-.118.01-.177.022-.018.003-.03.012-.046.016-.04.013-.078.025-.115.045l-.056.026c-.03.02-.064.04-.095.066-.02.012-.033.024-.05.037-.028.032-.062.065-.088.098-.01.008-.017.017-.02.025l-3.27 4.613h-.042V2.78c0-.437-.355-.792-.792-.792h-1.975c-.438 0-.792.354-.792.792v9.427c0 .123.03.238.084.342 0 .008 0 .012.004.02s.013.018.017.02c.028.05.058.096.095.137.008.01.017.017.024.028.042.046.09.082.145.115.012.014.023.018.04.024.04.024.09.046.14.058.018.01.03.014.046.018.068.017.13.03.2.03h1.975c.063 0 .12-.01.178-.02.017-.006.033-.015.05-.02.037-.012.078-.023.115-.044l.05-.028c.032-.017.065-.037.1-.062.012-.013.028-.024.045-.04.032-.03.062-.063.086-.097.01-.013.02-.02.024-.024L36.7 8.12h.045v4.087c0 .438.354.793.79.793h1.98c.438 0 .786-.354.786-.793V2.78c0-.124-.027-.24-.076-.342-.003-.008-.003-.016-.007-.02zM51.225 1.99h-1.98c-.437 0-.786.353-.786.79V6h-2.887V2.78c0-.437-.354-.792-.793-.792h-1.973c-.438 0-.794.354-.794.792v9.427c0 .438.355.79.794.79h1.973c.438 0 .793-.353.793-.79V9h2.886v3.207c0 .438.35.79.786.79h1.98c.437 0 .79-.353.79-.79V2.78c0-.437-.354-.79-.79-.79zM11.084 9.994V2.78c0-.437-.354-.792-.792-.792H3.178c-.437 0-.792.354-.792.792L1.2 9.994H.802c-.433 0-.787.354-.787.79v3.425c0 .436.354.79.787.79h1.583c.438 0 .792-.354.792-.79v-1.147h5.537v1.146c0 .436.35.79.787.79h1.583c.437 0 .792-.354.792-.79v-3.425c0-.437-.356-.79-.793-.79zm-3.1.006l-3.417-.008.77-4.977h2.647V10zM59.28 1.79c-3.374 0-5.73 2.36-5.73 5.735 0 3.375 2.356 5.734 5.73 5.734 3.378 0 5.735-2.357 5.735-5.735 0-3.376-2.357-5.734-5.734-5.734zm0 8.192c-1.56 0-2.456-.896-2.456-2.458 0-1.562.895-2.457 2.457-2.457 1.563 0 2.458.895 2.458 2.457 0 1.564-.894 2.458-2.457 2.458z"/>
            </svg>
              <span>домены</span>
            </a>
            <p>только до 31 января</p>
          </div>
          <h1 class="slide__title">Честная цена <br/>за домен .RU - 39 руб.</h1>
        
          <div class="form-wrapper">          
            <form>
              <input type="text" name="domen" placeholder="example.ru"/>
              <div class="form__footer">
                <span>Домен example.ru - свободен</span>
                <a href="#">Зарегистрировать за 39 рублей</a>
              </div>
              <button class="btn btn--form" type="submit">Проверить</button>
            </form>
            <button class="btn btn--create">Создать аккаунт</button>
          </div>
          <div class="slide__controls">
          </div>        

        </div>
      </section>
    </li>
        <li class="slide slide--2 active">
          <section>
            <div class="container">
              <div class="slide__top">
                <a class="logo" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="15" viewBox="0 0 65 15">
                  <path d="M26.708 7.223L28.2 3.125c.087-.315.05-.587-.095-.797-.148-.21-.392-.338-.65-.338h-2.33c-.354 0-.667.24-.763.582l-.92 3.445h-.687V2.78c0-.437-.354-.792-.79-.792h-1.976c-.44 0-.793.354-.793.792v3.235h-.78l-1.243-3.507c-.116-.31-.412-.52-.746-.52h-2.305c-.268 0-.52.136-.664.363-.15.228-.17.512-.06.828l1.843 4.048-1.86 4.698c-.094.242-.06.516.087.732.148.215.392.344.65.344h2.306c.35 0 .655-.228.758-.562l1.043-3.44h.97v3.21c0 .437.353.79.79.79h1.976c.437 0 .79-.354.79-.79V9h.834l.767 3.387c.087.357.404.613.77.613h2.33c.252 0 .49-.12.64-.32.148-.202.193-.463.12-.705l-1.506-4.752zM40.217 2.417c-.004-.008-.012-.017-.018-.024-.024-.045-.058-.09-.095-.132-.008-.007-.013-.02-.02-.028-.046-.045-.095-.083-.15-.12-.01-.007-.02-.012-.036-.02-.046-.024-.09-.045-.14-.062l-.05-.013c-.062-.016-.128-.03-.194-.03h-1.98c-.06 0-.118.01-.177.022-.018.003-.03.012-.046.016-.04.013-.078.025-.115.045l-.056.026c-.03.02-.064.04-.095.066-.02.012-.033.024-.05.037-.028.032-.062.065-.088.098-.01.008-.017.017-.02.025l-3.27 4.613h-.042V2.78c0-.437-.355-.792-.792-.792h-1.975c-.438 0-.792.354-.792.792v9.427c0 .123.03.238.084.342 0 .008 0 .012.004.02s.013.018.017.02c.028.05.058.096.095.137.008.01.017.017.024.028.042.046.09.082.145.115.012.014.023.018.04.024.04.024.09.046.14.058.018.01.03.014.046.018.068.017.13.03.2.03h1.975c.063 0 .12-.01.178-.02.017-.006.033-.015.05-.02.037-.012.078-.023.115-.044l.05-.028c.032-.017.065-.037.1-.062.012-.013.028-.024.045-.04.032-.03.062-.063.086-.097.01-.013.02-.02.024-.024L36.7 8.12h.045v4.087c0 .438.354.793.79.793h1.98c.438 0 .786-.354.786-.793V2.78c0-.124-.027-.24-.076-.342-.003-.008-.003-.016-.007-.02zM51.225 1.99h-1.98c-.437 0-.786.353-.786.79V6h-2.887V2.78c0-.437-.354-.792-.793-.792h-1.973c-.438 0-.794.354-.794.792v9.427c0 .438.355.79.794.79h1.973c.438 0 .793-.353.793-.79V9h2.886v3.207c0 .438.35.79.786.79h1.98c.437 0 .79-.353.79-.79V2.78c0-.437-.354-.79-.79-.79zM11.084 9.994V2.78c0-.437-.354-.792-.792-.792H3.178c-.437 0-.792.354-.792.792L1.2 9.994H.802c-.433 0-.787.354-.787.79v3.425c0 .436.354.79.787.79h1.583c.438 0 .792-.354.792-.79v-1.147h5.537v1.146c0 .436.35.79.787.79h1.583c.437 0 .792-.354.792-.79v-3.425c0-.437-.356-.79-.793-.79zm-3.1.006l-3.417-.008.77-4.977h2.647V10zM59.28 1.79c-3.374 0-5.73 2.36-5.73 5.735 0 3.375 2.356 5.734 5.73 5.734 3.378 0 5.735-2.357 5.735-5.735 0-3.376-2.357-5.734-5.734-5.734zm0 8.192c-1.56 0-2.456-.896-2.456-2.458 0-1.562.895-2.457 2.457-2.457 1.563 0 2.458.895 2.458 2.457 0 1.564-.894 2.458-2.457 2.458z"/>
                </svg>
                <span>домены</span>
                </a>
                <p>только до 31 января</p>
              </div>

              <div class="content-wrapper">
                <h2>Зарегистрировав у нас домен, вы получите</h2>
                <ul class="features features-top">
                  <li class="features__item">
                    <img src=${businesscardSvg} alt="feature"/>
                    <p>Сайт-визитка</p>
                  </li>
                  
                  <li class="features__item">
                    <img src=${dnsSvg} alt="feature"/>
                    <p>Поддержка DNS</p>
                  </li>
                  <li class="features__item">
                    <img src=${certificateSvg} alt="feature"/>
                    <p>Сертификат о владении доменом</p>
                  </li>
                  <li class="features__item">
                    <img src=${auto} alt="feature"/>
                    <p>Автопродление</p>
                  </li>                  
                </ul>
                <div class="features__bubble">
                  <p>Для любого вашего домена, зарегистрированного 
                  на «Джино», вы можете в несколько кликов создать 
                  простую страницу-визитку. Это удобно, если ваш основной 
                  сайт еще не готов, или если домен вам нужен только для почты. 
                  Вы можете разместить здесь краткую информацию о себе или вашем бизнесе, 
                  ссылки на аккаунты в соцсетях и любые другие сайты. Создание и поддержка 
                  базового варианта сайта-визитки абсолютно бесплатны.
                  </p>
                </div>

                <ul class="features features-bottom">
                  <li class="features__item">
                    <img src=${cloudSvg} alt="feature"/>
                    <p>Облачное хранилище на 20 гб</p>
                  </li>
                  
                  <li class="features__item">
                    <img src=${freesslSvg} alt="feature"/>
                    <p>Бесплатный SSL-сертификат</p>
                  </li>
                  <li class="features__item">
                    <img src=${dnssecSvg} alt="feature"/>
                    <p>DNSEC в один клик</p>
                  </li>
                  <li class="features__item">
                    <img src=${redirectSvg} alt="feature"/>
                    <p>Перенаправление</p>
                  </li>                  
                </ul>


                <button class="btn btn--create">Создать аккаунт</button>
              </div>              
            </div>
          </section>
        </li>

        <li class="slide slide--3">
          <div class="container">
            <div class="row">
              
              <div class="slide__top" style="width:100% ">
                <a class="logo" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="15" viewBox="0 0 65 15">
                  <path d="M26.708 7.223L28.2 3.125c.087-.315.05-.587-.095-.797-.148-.21-.392-.338-.65-.338h-2.33c-.354 0-.667.24-.763.582l-.92 3.445h-.687V2.78c0-.437-.354-.792-.79-.792h-1.976c-.44 0-.793.354-.793.792v3.235h-.78l-1.243-3.507c-.116-.31-.412-.52-.746-.52h-2.305c-.268 0-.52.136-.664.363-.15.228-.17.512-.06.828l1.843 4.048-1.86 4.698c-.094.242-.06.516.087.732.148.215.392.344.65.344h2.306c.35 0 .655-.228.758-.562l1.043-3.44h.97v3.21c0 .437.353.79.79.79h1.976c.437 0 .79-.354.79-.79V9h.834l.767 3.387c.087.357.404.613.77.613h2.33c.252 0 .49-.12.64-.32.148-.202.193-.463.12-.705l-1.506-4.752zM40.217 2.417c-.004-.008-.012-.017-.018-.024-.024-.045-.058-.09-.095-.132-.008-.007-.013-.02-.02-.028-.046-.045-.095-.083-.15-.12-.01-.007-.02-.012-.036-.02-.046-.024-.09-.045-.14-.062l-.05-.013c-.062-.016-.128-.03-.194-.03h-1.98c-.06 0-.118.01-.177.022-.018.003-.03.012-.046.016-.04.013-.078.025-.115.045l-.056.026c-.03.02-.064.04-.095.066-.02.012-.033.024-.05.037-.028.032-.062.065-.088.098-.01.008-.017.017-.02.025l-3.27 4.613h-.042V2.78c0-.437-.355-.792-.792-.792h-1.975c-.438 0-.792.354-.792.792v9.427c0 .123.03.238.084.342 0 .008 0 .012.004.02s.013.018.017.02c.028.05.058.096.095.137.008.01.017.017.024.028.042.046.09.082.145.115.012.014.023.018.04.024.04.024.09.046.14.058.018.01.03.014.046.018.068.017.13.03.2.03h1.975c.063 0 .12-.01.178-.02.017-.006.033-.015.05-.02.037-.012.078-.023.115-.044l.05-.028c.032-.017.065-.037.1-.062.012-.013.028-.024.045-.04.032-.03.062-.063.086-.097.01-.013.02-.02.024-.024L36.7 8.12h.045v4.087c0 .438.354.793.79.793h1.98c.438 0 .786-.354.786-.793V2.78c0-.124-.027-.24-.076-.342-.003-.008-.003-.016-.007-.02zM51.225 1.99h-1.98c-.437 0-.786.353-.786.79V6h-2.887V2.78c0-.437-.354-.792-.793-.792h-1.973c-.438 0-.794.354-.794.792v9.427c0 .438.355.79.794.79h1.973c.438 0 .793-.353.793-.79V9h2.886v3.207c0 .438.35.79.786.79h1.98c.437 0 .79-.353.79-.79V2.78c0-.437-.354-.79-.79-.79zM11.084 9.994V2.78c0-.437-.354-.792-.792-.792H3.178c-.437 0-.792.354-.792.792L1.2 9.994H.802c-.433 0-.787.354-.787.79v3.425c0 .436.354.79.787.79h1.583c.438 0 .792-.354.792-.79v-1.147h5.537v1.146c0 .436.35.79.787.79h1.583c.437 0 .792-.354.792-.79v-3.425c0-.437-.356-.79-.793-.79zm-3.1.006l-3.417-.008.77-4.977h2.647V10zM59.28 1.79c-3.374 0-5.73 2.36-5.73 5.735 0 3.375 2.356 5.734 5.73 5.734 3.378 0 5.735-2.357 5.735-5.735 0-3.376-2.357-5.734-5.734-5.734zm0 8.192c-1.56 0-2.456-.896-2.456-2.458 0-1.562.895-2.457 2.457-2.457 1.563 0 2.458.895 2.458 2.457 0 1.564-.894 2.458-2.457 2.458z"/>
                </svg>
                <span>домены</span>
                </a>                
              </div>
              
              <div class="col col-100">
                <h3>Почему стоит  выбрать "Джино"</h3>
              </div>
              <div class="col col-extra">
                <h2>
                «Джино» более 18 лет на рынке, 
                имеет 270 000 довольных клиентов, 
                собственную панель управления
                и многое другое.
                </h2>
              </div>

              <div class="col col-25">
                <button class="btn btn--create">Создать аккаунт</button>
              </div>

              <div class="slider__offer col col-100">
                <div class="slider__offer-wrapper">
                  <p>
                      Вы получите <b>1000 баллов</b> в системе лояльности <a href="#">Джино.Плюсы</a>,
                      зарегистрировавшись в течении <b>24 часов</b> после посещения данной страницы
                    </p>                  
                  <p>1000</p>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 512 512" width="50" height="50">
                  <path 
                  d="M511.874 201.258l-2.316 82.488c0 7.91-8.107 16.95-16.213 16.95l-186.452 9.04-22.004 180.795c-1.158 9.04-9.265 16.95-19.687 16.95L185.294 512c-9.265 0-16.213-6.78-15.055-15.82l22.004-179.665-176.029 9.04c-9.265 0-16.213-6.78-16.213-15.82l3.474-81.358c1.158-9.04 8.107-18.08 17.371-18.08l185.294-9.04 22.004-180.795c1.158-9.04 9.265-15.82 19.687-16.95l79.908-3.39c9.265-1.13 16.213 5.65 15.055 14.69l-23.162 179.665 177.187-9.04c9.264.001 16.213 6.781 15.055 15.821z"/></svg>               
                </div>                  
              </div>

              <p class="slider__copyright">
              © «Джино», 2003–2017. «Джино» является зарегистрированным товарным знаком. Лицензия на телематические услуги связи № 97495 от 09.03.2012. Правовая информация.
              </p> 

            </div>          
          </div>
        </div>
          
          </div>
        </li>
      </ul>
      <div class="slider__controls controls">
        <div class="controls__dot active"></div>
        <div class="controls__dot "></div>
        <div class="controls__dot"></div>
      </div>
    </div>
  </div>


  
</div>`);

render(root, App);

const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.controls__dot'));

showActive(2, slides, dots);
// autoShowSlides(slides, dots);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showActive(index, slides, dots));
});
