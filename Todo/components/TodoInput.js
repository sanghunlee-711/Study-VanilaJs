import { addListener, getElement, isInstance } from '../utils/index.js'

const TodoInput = function ({target, addTodo, enterTodo}) {
  isInstance({_this: this, instanceName:TodoInput});
  
  this.target = target;
  this.wrapper = document.createElement("div");
  this.target.appendChild(this.wrapper);
  this.render = function () {
    const elements =`
        <input class="type-todo" type="text">
        <button class="add-button">Add</button>
    `;

    this.wrapper.innerHTML= elements;
  }

  this.setState = function (nextState) {
    this.state = nextState;
  }

  this.render();
  addListener({target: getElement(".wrapper"), func: addTodo, type: "click" })
  addListener({target: getElement(".wrapper"), func: enterTodo, type: "keyup" })
  

  
} 

export default TodoInput;