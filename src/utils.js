export const createElement = (template) => {
  const element = document.createElement('div');
  element.innerHTML = template;
  return element.firstChild;
};

export const render = (container, component) => {
  container.append(component.getElement());
};

export const showActive = (index, slides, dots) => {
  dots.forEach((dot) => dot.classList.remove('active'));
  slides.forEach((slide) => slide.setAttribute('style', 'display:none'));
  const isExist = slides[index];
  if (!isExist) {
    slides[0].setAttribute('style', 'display:block');
    dots[0].classList.add('active');
    return;
  }
  slides[index].setAttribute('style', 'display:block');
  dots[index].classList.add('active');
};

export const autoShowSlides = (slides, dots) => {
  let current = 0;
  const TIMER = 3000;

  setTimeout(function show() {
    showActive(current, slides, dots);
    if (current < slides.length - 1) {
      setTimeout(show, TIMER);
    }
    if (current === slides.length - 1) {
      current = -1;
      setTimeout(show, TIMER);
    }
    current++;
  }, TIMER);
};

export const getRandom = (arr)=>{
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
};
