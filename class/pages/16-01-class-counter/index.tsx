import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCounter() {
    console.log("카운터를 클릭하셨습니다.");
  }

  render() {
    return (
      <>
        <div>
          현재카운트: {this.state.count}
          <button onClick={this.onClickCounter}>카운트 올리기</button>
        </div>
      </>
    );
  }
}
