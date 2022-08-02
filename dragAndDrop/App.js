import Columns from './components/Columns.js';
import Input from './components/Input.js';
import { CONATINER_MAP } from './constants/index.js';
const App = function ({ $target, initialData }) {
  this.data = initialData;
  this.$target = $target;
  this.dragTarget = { value: '', step: '' };
  this.textState = '';

  this.setData = (nextData) => {
    this.data = nextData;
    columns.setState(this.data);
  };

  this.setTextState = (nextTextState) => {
    this.textState = nextTextState;
    input.setState(nextTextState);
  };

  this.onAdd = (e) => {
    const value = this.textState;
    if (value.trim().length < 1) return;
    if (this.data.findIndex((el) => el.value === value) > -1) {
      return;
    }
    this.setData([...this.data, { value, step: CONATINER_MAP[0] }]);
    this.setTextState('');
    /*
    이렇게 다이렉트로 부르는 것 말고 좋은 방법이 있을 듯.
    이렇게 하지 않고 input comp에서 setState할 때 렌더를 콜백으로 해놓는 경우 몇글자 타이핑 후 포커스가 끊김
    */

    input.render();
  };

  this.onChange = (e) => {
    if (e.target.className !== 'add-input') return;
    if (e.code === 'Enter') {
      console.log('??..');
      this.onAdd(e);
    }
    this.setTextState(e.target.value);
  };

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

    this.setData(newData);
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

    if (dropStep === this.dragTarget.step || !CONATINER_MAP.includes(dropStep))
      return;
    this.handleListState({
      value: this.dragTarget.value,
      step: dropStep,
    });
  };

  const input = new Input({
    $target: this.$target,
    initialState: this.textState,
    onAdd: this.onAdd,
    onChange: this.onChange,
  });

  const columns = new Columns({
    $target: this.$target,
    titleArr: CONATINER_MAP,
    data: this.data,
    onDrag: this.onDrag,
    onDrop: this.onDrop,
  });
};

export default App;
