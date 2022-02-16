export default function HofPage() {
  // eslint-disable-next-line no-undef
  const onClickChild = (el) => (e) => {
    console.log(el);
  };

  return (
    <div>
      <h1>HOF 연습 페이지입니다!!!</h1>
      {["철수", "영희", "훈이"].map((el, index) => (
        <div key={el} onClick={onClickChild(el)}>
          {" "}
          {el}
        </div>
      ))}
    </div>
  );
}
