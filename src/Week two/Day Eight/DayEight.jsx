{
  /*
    Day 8: Component Lifecycle Methods
Overview
Component lifecycle methods in React are special methods that run during different phases of a component's life in a React application. These methods can be categorized into three main phases:

Mounting: When a component is being inserted into the DOM.
Updating: When a component is being re-rendered due to changes in props or state.
Unmounting: When a component is being removed from the DOM.

Lifecycle Methods
Mounting Phase:

constructor(): Called before the component is mounted. It’s typically used for initializing the state and binding methods.
static getDerivedStateFromProps(): Invoked right before rendering, both on the initial mount and on subsequent updates. It returns an object to update the state, or null to update nothing.
render(): The only required method in a class component. It examines this.props and this.state and returns one of the following types: React elements, arrays, fragments, portals, strings and numbers, booleans or null.
componentDidMount(): Invoked immediately after a component is mounted. It’s commonly used for making API calls or setting up subscriptions.
Updating Phase:

static getDerivedStateFromProps(): Also called during updates.
shouldComponentUpdate(): Called to determine if the component should re-render in response to changes in props or state. It returns true or false.
render(): Called to re-render the component.
getSnapshotBeforeUpdate(): Called right before the most recently rendered output is committed to the DOM. It enables you to capture some information (e.g., scroll position) before it changes.
componentDidUpdate(): Invoked immediately after updating occurs. It's a good place to perform network requests as long as you compare the current props to previous props.
Unmounting Phase:

componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed. It’s often used for cleanup tasks like invalidating timers, canceling network requests, or cleaning up subscriptions.
Practice Exercise
Objective: Create a simple React application that displays a timer. This timer will demonstrate the usage of different lifecycle methods.

Steps:

Setup:

Create a new React component called Timer.
Initialize the state in the constructor to store the timer value.
Mounting:

In componentDidMount(), set up an interval that updates the timer value every second.
Updating:

Use shouldComponentUpdate() to control whether the component should update (e.g., you can skip updates if the timer value is divisible by 5).
Implement getSnapshotBeforeUpdate() to capture the previous timer value before updating.
In componentDidUpdate(), log the previous timer value and the updated timer value.
Unmounting:

In componentWillUnmount(), clear the interval to stop the timer.
Rendering:

In the render() method, display the timer value on the screen.
    
    */
}

import React, { Component } from "react";

class DayEight extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // Only update if time is not divisible by 5
    return nextState.time % 5 !== 0;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return prevState.time;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("Previous timer value:", snapshot);
    console.log("Updated timer value:", this.state.time);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Timer: {this.state.time}</h1>
      </div>
    );
  }
}

export default DayEight;
