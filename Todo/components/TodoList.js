import { addListener, getElement, isInstance, isValidate } from '../utils/index.js'

const TodoList = function ({initialState, target, deleteTodo, checkTodo}) {
  isInstance({_this:this, instanceName: TodoList});
  if (!isValidate(initialState)) throw new Error("올바르지 않은 데이터입니다.")

  this.state = initialState
  this.target = target

  const wrapper = document.createElement("ul")
  wrapper.setAttribute("class", "list-wrapper");
  this.target.appendChild(wrapper);
  

  this.render = function () {
    const elements = this.state.map(({isCompleted, text},idx) => {
        return `
        <li key=${text+"-"+idx}>
          <input type="checkbox" class="check-btn" ${isCompleted ? "checked" : ''}></input>
          ${isCompleted ? `<s>${text}</s>` : `${text}`}
          <button type="button" class="delete-btn">X</button>
        </li>
        `
    }).join("")

    wrapper.innerHTML = `${elements}`
  }

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  }

  
  this.render();
  const element = getElement(".list-wrapper");
  addListener({target:element, func: deleteTodo, type: "click" })
  addListener({target:element, func: checkTodo, type: "click" })
}

export default TodoList;