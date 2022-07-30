import Pagination from './components/Pagination.js';

export default function App({ target, initialState }) {
  this.target = target;
  this.state = initialState;
  this.setState = function (nextState) {
    this.state = nextState;
    pagination.setState(this.state);
  };

  this.onNext = function (e) {
    console.log('CLICK NEXT');
    const nextState = { ...this.state, currentPage: ++this.state.currentPage };
    this.setState(nextState);
  };

  this.onPrev = function (e) {
    console.log('CLICK PREV');
    const nextState = { ...this.state, currentPage: --this.state.currentPage };
    this.setState(nextState);
  };

  const pagination = new Pagination({
    target: this.target,
    initialState: this.state,
    onNext: this.onNext.bind(this),
    onPrev: this.onPrev.bind(this),
  });
}
