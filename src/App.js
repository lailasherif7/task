import React, { Component } from "react";
import NavBar from "./components/navbar";

import "./App.css";
import Counters from "./components/counters";
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
  }
  handleRest = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters:counters  });
  };
  handleIncrement = (counter) => {
    this.setState({
      counters: this.state.counters.map((c) => {
        if (c.id === counter.id) {
          return { ...c, value: c.value + 1 };
        } else return c;
      }),
    });
  };
  handleDelete = (e) => {
    this.setState({ counters: this.state.counters.filter((v) => v.id !== e) });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            onRest={this.handleRest}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
