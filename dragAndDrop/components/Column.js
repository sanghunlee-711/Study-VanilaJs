const Column = function ({ initialTitle, $target, data, onDrag, onDrop }) {
  this.data = data;
  this.$target = $target;
  this.title = initialTitle;
  this.dragTarget = null;

  const wrapper = document.createElement('ul');
  wrapper.setAttribute('data-id', this.title);
  wrapper.setAttribute('class', 'column');

  this.$target.appendChild(wrapper);

  this.setDragTarget = (nextTarget) => {
    this.dragTarget = nextTarget;
  };

  this.setState = (nextState) => {
    this.data = nextState;
    this.render();
  };

  this.render = () => {
    wrapper.innerHTML = `
      <h1>${this.title}</h1>
      ${this.data
        .filter((el) => el.step === this.title)
        .map((el) => {
          return `
          <li class="item" draggable="true" data-id=${this.title}>${el.value}</li>
        `;
        })
        .join('')}
    `;
  };

  this.render();

  this.$target.addEventListener('dragstart', (e) => {
    if (e.target.className !== 'item') return;
    onDrag(e);
  });
  this.$target.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  this.$target.addEventListener('drop', (e) => {
    onDrop(e);
  });
};

export default Column;
