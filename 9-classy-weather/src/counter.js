import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 5 };
    this.handelDecrement = this.handelDecrement.bind(this);
    this.handelIncrement = this.handelIncrement.bind(this);
  }
  handelDecrement() {
    this.setState((currentState) => {
      return { counter: currentState.counter - 1 };
    });
  }
  handelIncrement() {
    this.setState((currentState) => {
      return { counter: currentState.counter + 1 };
    });
  }
  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.counter);
    return (
      <div>
        <button onClick={this.handelDecrement}>-</button>
        <span>
          {date.toDateString()}[{this.state.counter}]
        </span>
        <button onClick={this.handelIncrement}>+</button>
      </div>
    );
  }
}
export default Counter;
