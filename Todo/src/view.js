// 필터링된 todo 리스트를 가진 ul
// 완료되지 않은 todo수를 가진 span
// selected 클래스를 오른쪽에 추가한 필터 유형을 가진 링크
const getTodoElement = (todo) => {
  const { text, completed } = todo;

  return `
  <li ${completed ? 'class="completed"' : ''}>
    <div class="view">
      <input 
        ${completed ? 'checked' : ''}
        class="toggle" 
        type="checkbox">
      <label>${text}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${text}">
  </li>`;
};

const getTodoCount = (todos) => {
  const notCompleted = todos.filter((todo) => !todo.completed);
  const { length } = notCompleted;

  if (length === 1) {
    return '1개의 아이템이 남아있습니다.';
  }

  return `${length}개의 아이템이 남아있습니다.`;
};

//기본적으로 사용되는 타깃 DOM요소를 받게 됨.
export default (targetElement, state) => {
  const { currentFilter, todos } = state;

  //원래의 타깃 노드를 복제하고 -> Virtual한 수정
  const element = targetElement.cloneNode(true);
  //떼어낸 돔요소를 통해 작업 진행.
  const list = element.querySelector('.todo-list');
  const counter = element.querySelector('.todo-count');
  const filters = element.querySelector('.filters');

  list.innerHTML = todos.map(getTodoElement).join('');
  counter.textContent = getTodoCount(todos);

  //state매개 변수를 사용해서 업데이트.
  Array.from(filters.querySelectorAll('li a')).forEach((a) => {
    if (a.textContent === currentFilter) {
      a.classList.add('selected');
    } else {
      a.classList.remove('selected');
    }
  });

  //변경 된 새로운 노드를 반환
  return element;
};
