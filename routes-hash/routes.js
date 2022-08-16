import { ROUTES } from './contants/index.js';
function renderHTML(el, Component) {
  document.querySelector('.layout-container').innerHTML = '';
  if (Component.name === 'Content') {
    new Component({
      $target: document.querySelector('.layout-container'),
      contentId: getContentId(),
    });
  } else {
    new Component({
      $target: document.querySelector('.layout-container'),
    });
  }
}

const getContentId = () => {
  const hashLocation = window.location.hash;
  if (!hashLocation.includes('#contentId=')) return null;

  const [_, contentId] = hashLocation.split('=');
  return contentId;
};

function getHashRoute() {
  let route = ROUTES[0].components;

  ROUTES.forEach((hashRoute) => {
    const hashLocation = window.location.hash;

    if (getContentId()) {
      return ROUTES.filter((el) => el.name === 'Content')[0].components;
    }

    if (hashLocation === hashRoute.path) route = hashRoute.components;
  });
  return route;
}

export function initialRoutes(el) {
  renderHTML(el, ROUTES[0].components);

  window.addEventListener('hashchange', () => {
    return renderHTML(el, getHashRoute());
  });
  window.onload = () => {
    renderHTML(null, getHashRoute());
  };
}
