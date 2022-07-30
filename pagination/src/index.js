import App from './app.js';

const target = document.querySelector('#app');
const data = {
  currentPage: 1,
  totalItemCount: 300,
  pagePerItemCount: 20,
};
new App({ target, initialState: data });
