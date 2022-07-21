import { isInstance, isValidate } from '../utils/index.js'

const TodoCount = function ({initialState, target}) {
  isInstance({_this: this, instanceName:TodoCount});
  if (!isValidate(initialState)) throw new Error("올바르지 않은 데이터입니다.")
  this.state = initialState
  this.target = target;
  this.wrapper = document.createElement('div');
  this.wrapper.setAttribute("class", "count-wrapper");
  this.target.appendChild(this.wrapper);
  
  this.render = function () {
    const totalCounts = this.state.length;
    const checkedCounts = this.state.filter((el)=>el.isCompleted).length;    
    const countElements =`
        <span>Total todo counts: ${totalCounts}</span>
        <span>Checked todo counts: ${checkedCounts}</span>
        
    `;

    this.wrapper.innerHTML = countElements;
  }
  
  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  }

  
    this.render();
    
};

export default TodoCount;