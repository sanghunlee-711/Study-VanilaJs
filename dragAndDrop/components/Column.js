const Column = function ({ initialTitle, $target, data, handleListState }) {
  this.data = data;
  this.$target = $target;
  this.title = initialTitle;
  this.dragTarget = null;

  const wrapper = document.createElement('div');
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
          <div class="item" draggable="true">${el.value}</div>
        `;
        })
        .join('')}
    `;
  };

  this.render();

  const dragStart = (e) => {
    console.log('drag started');
    this.setDragTarget(e.target);
    setTimeout(() => (e.target.className = 'invisible'), 0);
  };

  const dragEnd = (e) => {
    console.log('drag ended');
    e.target.className = 'item';
  };

  const dragOver = (e) => {
    //drap dropped이벤트를 발생시키기 위해 기본 event를 막아줌
    e.preventDefault();
    console.log('drag over');
  };
  const dragEnter = (e) => {
    console.log('drag entered');
  };
  const dragLeave = (e) => {
    console.log('drag left');
  };
  const dragDrop = (e) => {
    console.log('drag dropped');
    // console.log(e.target.textContent.trim(), this.dragTarget.textContent);

    const step = e.target.querySelector('h1').textContent;

    handleListState({
      value: this.dragTarget.textContent,
      step,
    });
    // this.setDragTarget(null);
    // this.setState([...this.data, ...e.target.textContent]);
  };

  document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
  });

  document.querySelectorAll('.column').forEach((column) => {
    column.addEventListener('dragover', (e, idx) => dragOver(e, idx));
    column.addEventListener('dragenter', (e, idx) => dragEnter(e, idx));
    column.addEventListener('dragleave', (e, idx) => dragLeave(e, idx));
    column.addEventListener('drop', (e, idx) => dragDrop(e, idx));
  });
};

export default Column;
