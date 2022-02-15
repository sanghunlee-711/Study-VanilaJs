const registry = {};

//원래 구성요소(만들어져있는 view[ex. todosView]) 를 활용해 렌더해주는 고차함수임
// 잘보면 함수를 리턴함 ㅇㅇ
const renderWrapper = (component) => {
  return (targetElement, state) => {
    const element = component(targetElement, state);

    const childComponents = element.querySelectorAll('[data-component]'); // data-component 속성을 가진 html 코드를 모두 가져옴

    Array.from(childComponents).forEach((target) => {
      //가져온 DOM Node들을 registry객체와 매핑시켜 자식 구성요소를 호출함
      const name = target.dataset.component;
      const child = registry[name];
      if (!child) return; //에러처리

      target.replaceWith(child(target, state)); //렌더를 위해 replaceWith메서드 활용
    });
    return element;
  };
};
// registry에 구성요소를 추가하며 간단하게 래핑해주는 함수
const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

//application의 루트를 렌더링하는 메서드 제공
const renderRoot = (root, state) => {
  const cloneComponent = (root) => {
    return root.cloneNode(true);
  };

  return renderWrapper(cloneComponent)(root, state);
};

// 구성요소 레지스트리의 공용인터페이스로서 외부 제공
export default {
  add,
  renderRoot,
};
