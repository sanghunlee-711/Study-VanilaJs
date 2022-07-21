import App from './App.js';
import { STORAGE_NAME } from './constant/index.js';
import { getStorageData } from './utils/index.js';
try {
  //초기에 데이터 불러오기.
  const data = getStorageData({ name: STORAGE_NAME });
  const target = document.querySelector('.wrapper');
  new App({ data, target });
} catch (e) {
  window.alert(`에러가 발생했습니다: ${e}`);
  console.error(e);
}
