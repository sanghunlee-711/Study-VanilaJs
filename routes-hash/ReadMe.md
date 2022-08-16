# Vanila js Route

1. history

- history객체의 pushState 메서드를 사용해서 페이지를 다시 로드하는걸 막고 해당 URL의 컴포넌트를 불러올 수 있음
- 브라우저의 주소창을 통해서 접근하는 경우 서버에서는 해당 경로의 파일을 찾으려 할 것 이기때문에 서버의 도움이 필요함.

2. hash

- '#' 앵커를 통해 이동하는 방법이며 www.test.com/#path 등으로 url을 표현할 수 있다.
  블로그에서 제목등 클릭하면 이동하는걸 볼 수 있는 그 것이다.

- hash는 window.location.hash를 통해 확인 가능하며 변겨 할 때 마다 popstate, hashchange이벤트가 발생하므로 이 이벤트를 활용해 라우팅을 실행할 수 있다.
  - hashHistory는 웹 페이지 내부이동이기에 history가 관리되지 않는 단점이 있다.
