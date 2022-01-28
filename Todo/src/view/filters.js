// Todo MVC필터를 렌더링 하는 View 함수

export default (targetElement, { currentFilter }) => {
  const newCounter = targetElement.cloneNode(true);

  Array.from(newCounter.querySelectorAll('li a')).forEach((a) => {
    if (a.textContent === currentFilter) {
      a.classList.add('selected');
    } else {
      a.classList.remove('selected');
    }
  });

  return newCounter;
};
