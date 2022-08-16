import { ROUTES } from './contants/index.js';
function renderHTML(el, Component) {
  document.querySelector('.layout-container').innerHTML = '';
  const page = new Component({
    $target: document.querySelector('.layout-container'),
  });
  // el.innerHTML = route;
}

function getHashRoute() {
  let route = ROUTES[0].components;
  ROUTES.forEach((hashRoute) => {
    if (window.location.hash === hashRoute.path) {
      route = hashRoute.components;
    }
  });
  return route;
}

export function initialRoutes(el) {
  renderHTML(el, ROUTES[0].components);

  window.addEventListener('hashchange', () => {
    console.log('get hash change ?');
    return renderHTML(el, getHashRoute());
  });
  window.onload = () => {
    renderHTML(null, getHashRoute());
  };
}
