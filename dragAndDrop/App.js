import Columns from './components/Columns.js';
import { CONATINER_MAP } from './constants/index.js';
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

    this.data = newData;
    columns.setState(this.data);
  };

  this.setDragTarget = ({ value, step }) => {
    this.dragTarget = { value, step };
  };

  this.onDrag = (e) => {
    if (e.target.className !== 'item') return;
    this.dragTarget = {
      value: e.target.textContent,
      step: e.target.dataset.id,
    };
  };

  this.onDrop = (e) => {
    const dropStep = e.target.closest('ul').dataset.id;
    //step이 유효한 값이면 업데이트하깅(현재랑 다르고 스텝 배열안에 값이 있는경우)

    if (dropStep === this.dragTarget.step || !CONATINER_MAP.includes(dropStep))
      return;
    this.handleListState({
      value: this.dragTarget.value,
      step: dropStep,
    });
  };

  const columns = new Columns({
    $target: this.$target,
    titleArr: CONATINER_MAP,
    data: this.data,
    onDrag: this.onDrag,
    onDrop: this.onDrop,
  });
};

export default App;
