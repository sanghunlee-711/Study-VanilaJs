const Column = function ({ initialTitle, $target, data }) {
  this.data = data;
  this.$target = $target;
  this.title = initialTitle;
  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'column');

  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <h1>${this.title}</h1>
      ${this.data
        .map((el) => {
          return `
          <div class="item" draggable="true">${el}</div>
        `;
        })
        .join('')}
    `;
  };

  this.render();
};

export default Column;
