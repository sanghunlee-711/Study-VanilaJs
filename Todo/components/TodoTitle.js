import { isInstance } from '../utils/index.js'

const TodoInput = function ({target, title}) {
  isInstance({_this:this, instanceName:TodoInput});
  if(!title.length) throw new Error("타이틀을 작성해주세요.")
  
  this.target = target;
  this.title = title;

  this.render = function () {
    const title = `<h1>${this.title}</h1>`;

    this.target.insertAdjacentHTML("afterbegin",title);
  }
  this.render();
} 

export default TodoInput;