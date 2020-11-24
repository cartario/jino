import { render, showActive, autoShowSlides } from '../utils';
import Feature from './feature';
import SlideWelcome from './slide-welcome';
import SlideAdvantages from './slide-advantages';
import SlideBonus from './slide-bonus';
import SlideTask2 from './slide-task2';
import Upload from './upload';
import { featuresData } from '../mock';
import uploadSvg from '../img/upload.svg';
import waitSvg from '../img/wait.svg';
import okSvg from '../img/ok.svg';

const getRandomSvg = (arr)=>{
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

class Board {
  constructor(){
    this.slides == null;
    this.dots = null;     
  }

  renderSlides() {
    const slidesContainer = document.querySelector('.slides');
    render(slidesContainer, SlideWelcome);
    render(slidesContainer, SlideAdvantages);
    render(slidesContainer, SlideBonus);
    render(slidesContainer, SlideTask2);

    if (slidesContainer) {
      const slides = Array.from(document.querySelectorAll('.slide'));
      const dots = Array.from(document.querySelectorAll('.controls__dot'));

      this.slides = slides;
      this.dots = dots;

      showActive(3, slides, dots);      

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showActive(index, slides, dots));
      });
    }

    const inputFile = document.querySelector('.upload--input');
    const inputFileField = document.querySelector('.upload__input');   

    
    const handleFile = (file) => {
      if (file.type === 'text/html' || file.type === 'text/css' || file.type === 'text/javascript' || file.type === 'application/pdf' ){            
            return;
          }   
      //TODO - post request     
      console.log(file);
      const target = inputFile.querySelector('.upload__img');
      target.setAttribute('src', 'https://pear-advert.ru/images/uploads/blog/273/30.gif');

      setTimeout(()=>{
        target.setAttribute('src', getRandomSvg([uploadSvg, waitSvg, okSvg]));
      }, 2000)     
    }

    const handleClickFileInput = () => {      
      inputFileField.click();
      inputFileField.addEventListener('change', ()=>{        
        const file = inputFileField.files[0];
        handleFile(file);        
      })    
    }    
    
    inputFile.addEventListener('click', handleClickFileInput);    
  }

  autoShowSlides(){
    autoShowSlides(this.slides, this.dots);   
  }

  submitForm() {
    const form = document.querySelector('form');
    const formFooter = document.querySelector('.form__footer');
    const formBtn = form.querySelector('.btn--form');

    const handleSubmit = (e) => {
      e.preventDefault();
      formFooter.setAttribute('style', 'display:inline-flex');
      formBtn.remove();
    };

    form.addEventListener('submit', handleSubmit);
  }

  renderFeatures() {
    const featuresTop = document.querySelector('.features-top');
    const featuresBottom = document.querySelector('.features-bottom');

    featuresData.slice(0, 4).map((feature) => {
      const FeatureComponent = new Feature(feature.imgSrc, feature.text);
      render(featuresTop, FeatureComponent);
    });

    featuresData.slice(4).map((feature) => {
      const FeatureComponent = new Feature(feature.imgSrc, feature.text);
      render(featuresBottom, FeatureComponent);
    });
  }  
};

export default Board;
