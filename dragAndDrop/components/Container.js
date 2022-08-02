const Container = function ({ $target }) {
  this.$target = $target;

  this.render = () => {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    this.$target.appendChild(container);
  };

  this.render();
};

export default Container;
