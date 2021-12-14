// ref : https://velog.io/@eunoia/JS%EB%A1%9C-Pagination-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

export default function Pagination({ app, initialState }) {
  this.state = initialState;
  const pageViewCount = 10;
  let totalPages = Math.ceil(this.state.totalItemCount / this.pagePerItemCount); //총 페이지 수
  let pageGroup = Math.ceil(this.state.currentPage / pageViewCount); // 화면에 보여질 페이지 그룹
  let last = pageGroup * 10; // 화면에 보여질 마지막 값
  if (last > totalPages) last = totalPages; // 총 페이지를 넘어가지 않기 위한 조건
  let start = last - (pageViewCount - 1) <= 0 ? 1 : last - (10 - 1); //화면에 보여질 첫번째 값

  let totalPagesArr = [];
  // let end =

  for (let i = start; i <= last; i++) {
    totalPagesArr.push(i);
  }

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    //if variable exist update here
    let totalPages = Math.ceil(nextState.totalItemCount / nextState.rItemCount);
    let pageGroup = Math.ceil(nextState.currentPage / pageViewCount);
    let last = pageGroup * 10;
    if (last > totalPages) last = totalPages;
    let start = last - (pageViewCount - 1) <= 0 ? 1 : last - (10 - 1);

    //초기화 후 재 생성
    totalPagesArr = [];
    for (let i = start; i <= last; i++) {
      totalPagesArr.push(i);
    }

    this.render();
  };

  this.render = () => {
    app.innerHTML = `
    <section class="container">
    <button id="decrease">&larr;</button>
      <div>
        ${totalPagesArr
          .map(
            (el) => `
          <span class="${
            el === this.state.currentPage ? 'current-page' : ''
          }">${el}</span>
        `
          )
          .join(' ')}
      </div>
      <button id="increase">&rarr;</button>
      </section>
    `;
  };

  this.render();
}
