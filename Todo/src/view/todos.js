//html 태그 렌더 별도
const getTodoElement = (todo) => {
  const { text, completed } = todo;

  return `
    <li ${completed ? 'class="completed"' : ''}>
      <div class="view">
        <input
          ${completed ? 'checked' : ''}
          class="toggle"
          type="checkbox"
        >
        <label>${text}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${text}">
    </li>
  `;
};

//태그렌더 호출 별도
export default (targetElement, { todos }) => {
  const newTodoList = targetElement.cloneNode(true);
  const todosElement = todos.map((el) => getTodoElement(el)).join('');
  newTodoList.innerHTML = todosElement;

  return newTodoList;
};
