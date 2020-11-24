import { render, showActive, autoShowSlides } from '../utils';
import Feature from './feature';
import SlideWelcome from './slide-welcome';
import SlideAdvantages from './slide-advantages';
import SlideBonus from './slide-bonus';
import SlideTask2 from './slide-task2';
import { featuresData } from '../mock';

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
