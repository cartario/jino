import { createElement, getRandom } from '../utils';
import uploadSvg from '../img/upload.svg';
import waitSvg from '../img/wait.svg';
import okSvg from '../img/ok.svg';

const data = [
  {
    svg: okSvg,
    status: 'Проверено',
  },
  {
    svg: waitSvg,
    status: 'Идет проверка',
  },
  {
    svg: uploadSvg,
    status: 'Отклонено',
  },
];

class Upload {
  constructor() {
    this.obj = null;
    this.file = null;
    this.status = '';
    this.title = 'Загрузить скан страницы с фотографией';
    this.imgUrl = uploadSvg;
  }

  getTemplate() {
    return `<li class="confirm__upload upload">    
    <div class="upload__icon">
      <img class="upload__img" src=${this.imgUrl} alt="uploadIcon"/>
    </div>
    <div class="upload__text">
      <p class="upload__title">${this.title}</p>
      <p class="upload__info">Размер файла не более 10МБ</p>      
    </div>
    <span class="upload__status">${this.status}</span>
    <input class="upload__input" type="file"/>
  </li>`;
  }

  setClickHandler() {
    const inputFileField = this.getElement().querySelector('.upload__input');

    this.getElement().addEventListener('click', () => {
      inputFileField.click();
      inputFileField.addEventListener('change', () => {
        const file = inputFileField.files[0];
        this.file = file;
        this.handleFile(file);
      });
    });
  }

  handleRequest(file) {    
    fetch('/')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  handleFile(file) {
    if (
      file.type === 'text/html' ||
      file.type === 'text/css' ||
      file.type === 'text/javascript' ||
      file.type === 'application/pdf'
    ) {
      return;
    }

    this.handleRequest(file);

    const img = this.getElement().querySelector('.upload__img');
    const status = this.getElement().querySelector('.upload__status');
    const title = this.getElement().querySelector('.upload__title');
    const infoSize = this.getElement().querySelector('.upload__info');
    img.setAttribute('src', 'https://pear-advert.ru/images/uploads/blog/273/30.gif');

    status.classList.remove('upload__status--ok');
    status.classList.remove('upload__status--err');
    status.textContent = 'Идет проверка';

    setTimeout(() => {
      this.obj = getRandom(data);
      img.setAttribute('src', this.obj.svg);
      status.textContent = this.obj.status;
      this.status = this.obj.status;
      status.classList.remove('upload__status--ok');
      status.classList.remove('upload__status--err');

      if (this.status === 'Проверено') {
        status.classList.add('upload__status--ok');
        title.textContent = this.file.name.substr(0, 40);
        infoSize.textContent = Math.floor(this.file.size / 1000) + 'kb';
      }
      if (this.status === 'Отклонено') {
        status.classList.add('upload__status--err');
      }
    }, 2000);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
}

export default Upload;
