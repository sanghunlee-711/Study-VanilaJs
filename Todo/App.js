import TodoClearButton from './components/TodoClearButton.js';
import TodoCount from './components/TodoCount.js';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import TodoTitle from './components/TodoTitle.js';
import { CUSTOM_EVENT_REMOVE_ALL, STORAGE_NAME } from './constant/index.js';
import {
  getElement,
  getKeyAndValidation,
  isInstance,
  isValidate,
  setStorageData,
} from './utils/index.js';

const App = function ({ data, target }) {
  isInstance({ _this: this, instanceName: App });
  this.data = data;
  this.target = target;

  this.enterTodo = function (e) {
    const code = e.code;
    if (code !== 'Enter') return;
    this.addTodo();
  };

  this.addTodo = function (e) {
    const inputEl = getElement('.type-todo');
    const text = inputEl.value;
    //미 입력시 추가 금지.
    if (!text.trim().length) return;

    const newState = [...this.data, { text, isCompleted: false }];

    this.setState([...newState]);

    //setStating 후 input 비우고 다시 포커스 맞추기
    inputEl.value = '';
    inputEl.focus();
  };

  this.deleteTodo = function (e) {
    const { keyValue, isValidate } = getKeyAndValidation({
      e,
      name: 'delete-btn',
    });

    if (!isValidate) return null;

    const filteredState = this.data.filter(
      (el, idx) => el.text + '-' + idx !== keyValue
    );
    //state기반 처리
    this.setState(filteredState);
  };

  this.checkTodo = function (e) {
    const { keyValue, isValidate } = getKeyAndValidation({
      e,
      name: 'check-btn',
    });

    if (!isValidate) return null;

    const nextState = this.data.map((el, idx) => {
      //리스트별 구분을 위한 키값 사용
      const elementKey = el.text + '-' + idx;
      if (keyValue === elementKey) {
        return {
          text: el.text,
          isCompleted: !el.isCompleted,
        };
      }
      return el;
    });

    this.setState(nextState);
  };

  this.clearAll = function (e) {
    document.dispatchEvent(CUSTOM_EVENT_REMOVE_ALL);
  };

  const todoTitle = new TodoTitle({
    target: this.target,
    title: 'This is Todo Title',
  });

  const todoInput = new TodoInput({
    target: this.target,
    addTodo: this.addTodo.bind(this),
    enterTodo: this.enterTodo.bind(this),
  });

  const todoList = new TodoList({
    target: this.target,
    initialState: this.data,
    deleteTodo: this.deleteTodo.bind(this),
    checkTodo: this.checkTodo.bind(this),
  });
  const todoCount = new TodoCount({
    target: this.target,
    initialState: this.data,
  });
  const todoClear = new TodoClearButton({
    target: this.target,
    initialState: this.data,
    clearAll: this.clearAll.bind(this),
  });

  this.setState = function (nextData) {
    if (!isValidate(nextData)) throw new Error('올바르지 않은 데이터입니다.');
    this.data = nextData;
    setStorageData({ name: STORAGE_NAME, data: this.data });
    todoList.setState(this.data);
    todoCount.setState(this.data);
  };

  document.addEventListener('removeAll', () => {
    this.setState([]);
  });
};

export default App;
