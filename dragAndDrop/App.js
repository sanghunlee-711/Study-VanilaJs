import Column from './components/Column.js';
import Container from './components/Container.js';

const CONATINER_MAP = ['In Progress', 'Paused', 'Under Review', 'Completed'];

const App = function ({ $target, initialData }) {
  this.data = initialData;
  this.$target = $target;
  this.dragTarget = { value: '', step: '' };

  this.handleListState = ({ value, step }) => {
    const newData = this.data.map((el) => {
      if (el.value === value) {
        return {
          value,
          step,
        };
      } else {
        return el;
      }
    });
    console.log('new DAta', newData);

    this.data = newData;

    allTaskColumn.setState(this.data);
    inProgresscolumn.setState(this.data);
    pausedColumn.setState(this.data);
    underReviewColumn.setState(this.data);
    completedColumn.setState(this.data);
  };

  this.setDragTarget = ({ value, step }) => {
    this.dragTarget = { value, step };
  };

  this.onDrag = (e) => {
    console.log('onDrag!', e.target.dataset);
    this.dragTarget = {
      value: e.target.textContent,
      step: e.target.dataset.id,
    };
  };

  this.onDrop = (e) => {
    const step = e.target.closest('ul').dataset.id;
    //step이 유효한 값이면 업데이트하깅(현재랑 다르고 스텝 배열안에 값이 있는경우)

    if (step === this.dragTarget.step) return;
    this.handleListState({
      value: this.dragTarget.value,
      step,
    });
  };

  const container = new Container({
    $target: this.$target,
  });

  const containerTarget = document.querySelector('.container');

  const allTaskColumn = new Column({
    initialTitle: 'All Tasks',
    $target: containerTarget,
    data: this.data,
    onDrag: this.onDrag,
    onDrop: this.onDrop,
  });

  const inProgresscolumn = new Column({
    initialTitle: 'In Progress',
    $target: containerTarget,
    data: this.data,

    onDrag: this.onDrag,
    onDrop: this.onDrop,
  });
  const pausedColumn = new Column({
    initialTitle: 'Paused',
    $target: containerTarget,
    data: this.data,
    onDrag: this.onDrag,
    onDrop: this.onDrop,
  });

  const underReviewColumn = new Column({
    initialTitle: 'Under Review',
    $target: containerTarget,
    data: this.data,
    onDrag: this.onDrag,
    onDrop: this.onDrop,
  });

  const completedColumn = new Column({
    initialTitle: 'Completed',
    $target: containerTarget,
    data: this.data,
    onDrag: this.onDrag,
    onDrop: this.onDrop,
  });
};

export default App;
