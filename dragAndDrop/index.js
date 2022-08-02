//ref : https://stackabuse.com/drag-and-drop-in-vanilla-javascript/

import App from './App.js';

const testData = [
  {
    value: 'React',
    step: 'All Tasks',
  },
  {
    value: 'Vue',
    step: 'All Tasks',
  },
  {
    value: 'Angular',
    step: 'All Tasks',
  },
  {
    value: 'Svelte',
    step: 'All Tasks',
  },
  {
    value: 'Vite',
    step: 'All Tasks',
  },
];
try {
  const app = new App({
    $target: document.querySelector('#root'),
    initialData: testData,
  });
} catch (e) {
  alert('앱 불러오기 에러 발생');
  console.error(e);
}
