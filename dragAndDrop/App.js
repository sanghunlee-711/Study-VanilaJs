import Column from './components/Column.js';
import Container from './components/Container.js';

const CONATINER_MAP = ['In Progress', 'Paused', 'Under Review', 'Completed'];

const App = function ({ $target, initialData }) {
  this.data = initialData;
  this.$target = $target;

  const container = new Container({
    $target: this.$target,
  });
  const containerTarget = document.querySelector('.container');
  const allTaskColumn = new Column({
    initialTitle: 'All Tasks',
    $target: containerTarget,
    data: this.data,
  });

  const inProgresscolumn = new Column({
    initialTitle: 'In Progress',
    $target: containerTarget,
    data: [],
  });
  const pausedColumn = new Column({
    initialTitle: 'Paused',
    $target: containerTarget,
    data: [],
  });

  const underReviewColumn = new Column({
    initialTitle: 'Under Review',
    $target: containerTarget,
    data: [],
  });

  const completedColumn = new Column({
    initialTitle: 'Completed',
    $target: containerTarget,
    data: [],
  });
};

export default App;
