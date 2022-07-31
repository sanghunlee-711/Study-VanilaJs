import Column from './components/Column.js';
import Container from './components/Container.js';

const CONATINER_MAP = ['In Progress', 'Paused', 'Under Review', 'Completed'];

const App = function ({ $target, initialData }) {
  this.data = initialData;
  this.$target = $target;

  this.handleListState = ({ value, step }) => {
    const newData = this.data.map((el) => {
      if (el.value === value) {
        return {
          value,
          step,
        };
      } else {
        return el;
      }
    });
    console.log(value, step, newData);

    this.data = newData;
    // column.setState(this.data);
    allTaskColumn.setState(this.data);
    inProgresscolumn.setState(this.data);
    pausedColumn.setState(this.data);
    underReviewColumn.setState(this.data);
    completedColumn.setState(this.data);
  };

  const container = new Container({
    $target: this.$target,
  });
  const containerTarget = document.querySelector('.container');
  const allTaskColumn = new Column({
    initialTitle: 'All Tasks',
    $target: containerTarget,
    data: this.data,
    handleListState: this.handleListState,
  });

  const inProgresscolumn = new Column({
    initialTitle: 'In Progress',
    $target: containerTarget,
    data: this.data,
    handleListState: this.handleListState,
  });
  const pausedColumn = new Column({
    initialTitle: 'Paused',
    $target: containerTarget,
    data: this.data,
    handleListState: this.handleListState,
  });

  const underReviewColumn = new Column({
    initialTitle: 'Under Review',
    $target: containerTarget,
    data: this.data,
    handleListState: this.handleListState,
  });

  const completedColumn = new Column({
    initialTitle: 'Completed',
    $target: containerTarget,
    data: this.data,
    handleListState: this.handleListState,
  });
};

export default App;
