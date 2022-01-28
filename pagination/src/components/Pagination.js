// ref : https://velog.io/@eunoia/JS%EB%A1%9C-Pagination-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

export default function Pagination({ app, initialState }) {
  this.state = initialState;
  const pageViewCount = 10; // 페이지당 보여주고 싶은 아이템 개수
  let totalPages = Math.ceil(this.state.totalItemCount / this.pagePerItemCount); //총 페이지 수 = 전체아이템개수 / 한페이지당 아이템 개수

  let pageGroup = Math.ceil(this.state.currentPage / pageViewCount); // 화면에 보여질 페이지 그룹 ex) 1그룹 : 1.-5, 2그룹: 6-10 ... = 올림(현재페이지/ 보여줄 페이지그룹당 페이지 개수)
  let last = pageGroup * 10; // 화면에 보여질 마지막 값 = 현재페이지 그룹 * 현재 페이지
  if (last > totalPages) last = totalPages; // 토탈보다 크면 토탈페이지로
  let start = last - (pageViewCount - 1) <= 0 ? 1 : last - (10 - 1); //화면에 보여질 첫번째 값 = 현재 페이지그룹 마지막값 - (페이지당 보여줄 개수 값 - 1) <=0 ? 1:  마지막값 - (페이지당 보여줄 페이지개수값 - 1)

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
    let last = pageGroup * pageViewCount;
    if (last > totalPages) last = totalPages;
    let start =
      last - (pageViewCount - 1) <= 0 ? 1 : last - (pageViewCount - 1);

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
