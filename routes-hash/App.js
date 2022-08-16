import Layout from './components/Layout.js';
import Nav from './components/Nav.js';
import { initialRoutes } from './routes.js';
const App = function ({ $target }) {
  this.$target = $target;

  const nav = new Nav({ $target: this.$target });
  const layoutContainer = new Layout({ $target: this.$target });

  initialRoutes({ el: document.querySelector('.layout-container') });
};

export default App;
