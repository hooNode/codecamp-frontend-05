import axios from "axios";

export default function CallbackPromiseAsyncAwaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();

    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res: any) => {
      const num = res.currentTarget.responseText.split(" ")[0];

      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.responseText).UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res: any) => {
          console.log(JSON.parse(res.target.response).length);
        });
      });
    });
  };
  const onClickPromise = () => {
    axios.get("http://numbersapi.com/random?min=1&max=200");
  };
  const onClickAsyncAwait = () => {};

  return (
    <>
      <button onClick={onClickCallback}>Callback 요청</button>
      <button onClick={onClickPromise}>Promise 요청</button>
      <button onClick={onClickAsyncAwait}>Async-Await 요청</button>
    </>
  );
}
