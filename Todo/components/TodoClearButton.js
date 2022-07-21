import { addListener, getElement } from '../utils/index.js'

function TodoClearButton ({target, initialState, clearAll}){
  this.state = initialState;
  this.target = target;

  this.render = function () {
    const button = document.createElement("button");
    button.setAttribute("class", "clear-button");
    button.textContent = "Clear All Todo"
    this.target.appendChild(button);   
  }

  this.setState = function(nextState) {
    this.state = nextState;
    this.render();
  }

  this.render();
  addListener({target: getElement(".clear-button"), func: clearAll, type: "click" })
}

export default TodoClearButton;