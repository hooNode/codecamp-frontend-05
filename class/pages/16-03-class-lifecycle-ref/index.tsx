import { Component, createRef } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  ref = createRef<HTMLInputElement>();

  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨");
    this.ref.current?.focus();
  }

  componentDidUpdate() {
    console.log("수정되고 다시 그려짐");
  }

  componentWillUnmount() {
    console.log("여기서 나갈래용");
  }

  onClickCounter = () => {
    console.log("카운터를 클릭하셨습니다.");
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <>
        <div>
          <input ref={this.ref} type="text" />
          <div>현재카운트: {this.state.count}</div>
          <button onClick={this.onClickCounter}>카운트 올리기</button>
          <button onClick={this.onClickMove}>나가기</button>
        </div>
      </>
    );
  }
}
