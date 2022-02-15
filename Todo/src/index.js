//렌더링 엔진 부분
// requestAnimationFrame을 이용하면
// 모든 DOM조작이나 애니메이션이 이 api를 기반으로 실행됨
// 이 콜백내에서 작업을 수행하면 조금 더 효율적이게 됨.
// 이 API는 메인스레드를 차단하지 않고 리페인트가 이벤트루프에서 스케줄링 되기 직전에 실행됨

// 과정
// 브라우저 렌더 -> 다음 렌더 대기 (이 과정 사이에 requestAnimationFrame api 작동)
// 다음렌더링 대기 -> 새 가상 노드
// 새 가상노드 -> DOM조작 (여기서 replaceNode)
// DOM조작 -> 브라우저렌더링
import getTodos from './api/getTodos.js';
import registry from './registry.js';
import counterView from './view/counter.js';
import filtersView from './view/filters.js';
import todosView from './view/todos.js';

registry.add('todos', todosView);
registry.add('counter', counterView);
registry.add('filters', filtersView);

const state = {
  todos: getTodos(),
  currentFilter: 'All',
};

const main = document.querySelector('.todoapp');

window.requestAnimationFrame(() => {
  const main = document.querySelector('.todoapp');
  const newMain = registry.renderRoot(main, state);
  // const newMain = appView(main, state); // 기존 app.js에서 임의로 클래스명을 통해 매칭하는 것이아님
  // data-component속성을 통해서 registry의 고차함수를 통해 매핑해줌

  main.replaceWith(newMain);
});
