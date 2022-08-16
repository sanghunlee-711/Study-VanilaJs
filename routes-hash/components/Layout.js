const Layout = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'layout-container');
  this.$target.appendChild(wrapper);

  this.render = () => {
    // wrapper.innerHTML = `
    // `;
  };

  this.render();
};

export default Layout;
