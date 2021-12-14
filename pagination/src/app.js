import Pagination from './components/Pagination.js';

export default function App(app) {
  this.state = {
    currentPage: 1,
    totalItemCount: 300,
    pagePerItemCount: 20,
  };

  const pagination = new Pagination({ app, initialState: this.state });

  pagination.setState({
    currentPage: 7,
  });
}
