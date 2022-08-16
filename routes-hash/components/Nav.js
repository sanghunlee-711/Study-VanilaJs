import { ROUTES } from '../contants/index.js';

const Nav = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('nav');
  wrapper.setAttribute('class', 'nav-container');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <ul>
        ${ROUTES.map((el) => {
          return `
            <li>
              <a href = "${el.path}">${el.name}</a>
            </li>
          `;
        }).join('')}
      </ul>
    `;
  };

  this.render();
};

export default Nav;
