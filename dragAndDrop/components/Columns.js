import Column from './Column.js';
import Container from './Container.js';
const Columns = function ({ $target, titleArr, data, onDrag, onDrop }) {
  this.$target = $target;
  this.setState = (nextState) => {
    columnsArr.forEach((el) => {
      el.setState(nextState);
    });
  };

  const container = new Container({
    $target,
  });

  const containerTarget = document.querySelector('.container');
  const columnsArr = titleArr.map(
    (el) =>
      new Column({
        initialTitle: el,
        $target: containerTarget,
        data,
        onDrag,
        onDrop,
      })
  );
};

export default Columns;
