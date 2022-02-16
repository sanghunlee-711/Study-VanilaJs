//ref: https://www.youtube.com/watch?v=vLkPBj9ZaU0
// HTMLElement extends는 라이프사이클 과 여러가지 요소를 가져오기 위함 ??
class MyCounter extends HTMLElement {
  constructor() {
    super();
    //쉐도우 돔임
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  get count() {
    return this.getAttribute('count');
  }

  set count(val) {
    this.setAttribute('count', val);
  }

  static get observerdAttributes() {
    return ['count'];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === 'count') {
      this.render();
      let btn = this.shadow.querySelector('#btn');
      console.log(btn);
      btn.addEventListener('click', this.inc.bind(this));
    }
  }

  inc() {
    this.count++;
  }

  //First life cycle event in this comp.
  connectedCallback() {
    this.render();
    let btn = this.shadow.querySelector('#btn');
    console.log(btn);
    btn.addEventListener('click', this.inc.bind(this));
  }

  render() {
    this.shadow.innerHTML = `
      <h1>Counter</h1>
      ${this.count}
      <button id='btn'>Increment</button>
    `;
  }
}

//이러면 아래 카운터 커스텀 태그를 사용할 수 있음
customElements.define('my-counter', MyCounter);
