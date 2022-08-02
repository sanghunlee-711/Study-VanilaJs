const Input = function ({ $target, initialState, onAdd, onChange }) {
  this.state = initialState;
  this.$target = $target;
  const wrapper = document.createElement('div');
  $target.appendChild(wrapper);

  this.setState = (nextState) => {
    if (nextState !== this.state) {
      this.state = nextState;
      // this.render();
      this.initialFocus();
    }
  };

  this.initialFocus = () => {
    document.querySelector('.add-input').focus();
  };

  this.render = () => {
    wrapper.innerHTML = `
      <div class="input-container">
        <h1>Add your task</h1>
        <div>
        <input class="add-input" type="text" value="${this.state}" />
        <button class="add-button">Add</button>
        </div>
      </div>
    `;
  };

  this.render();

  wrapper.addEventListener('click', (e) => {
    if (e.target.className !== 'add-button') return;
    onAdd(e);
  });

  wrapper.addEventListener('keyup', (e) => {
    onChange(e);
  });

  this.initialFocus();
};

export default Input;
