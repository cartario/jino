import { render, showActive, autoShowSlides } from '../utils';
import Feature from './feature';
import SlideWelcome from './slide-welcome';
import SlideAdvantages from './slide-advantages';
import SlideBonus from './slide-bonus';
import SlideTask2 from './slide-task2';
import Upload from './upload';
import { featuresData } from '../mock';

class Board {
  constructor() {
    this.slides == null;
    this.dots = null;
  }

  renderSlides() {
    const slidesContainer = document.querySelector('.slides');
    const uploadComponent = new Upload();

    render(slidesContainer, SlideWelcome);
    render(slidesContainer, SlideAdvantages);
    render(slidesContainer, SlideBonus);
    render(slidesContainer, SlideTask2);
    render(document.querySelector('.confirm__list'), uploadComponent);

    if (slidesContainer) {
      const slides = Array.from(document.querySelectorAll('.slide'));
      const dots = Array.from(document.querySelectorAll('.controls__dot'));

      this.slides = slides;
      this.dots = dots;

      showActive(0, slides, dots);

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showActive(index, slides, dots));
      });
    }

    uploadComponent.setClickHandler();
  }

  autoShowSlides() {
    autoShowSlides(this.slides, this.dots);
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
}

export default Board;
