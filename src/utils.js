export const createElement = (template) => {
  const element = document.createElement('div');
  element.innerHTML = template;
  return element.firstChild;
};

export const render = (container, component) => {
  container.append(component);  
};
