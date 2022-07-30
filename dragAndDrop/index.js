import App from './App.js';

try {
  const data = ['React', 'Vue', 'Angular', 'Remix', 'Svelte'];
  const app = new App({
    $target: document.querySelector('#root'),
    initialData: data,
  });
} catch (e) {
  alert('앱 불러오기 에러 발생');
  console.error(e);
}
