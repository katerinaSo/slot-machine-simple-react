import React, { Component } from "react";
import "./App.css";
import Machine from "./Machine";

class App extends Component {
  getChoices = () => {
    const randomChoice = () => {
      return Math.ceil(Math.random() * 3).toString();
    };
    return [randomChoice(), randomChoice(), randomChoice()];
  };
  render() {
    return (
      <div>
        <Machine choices={() => this.getChoices()} />
        <Machine choices={() => this.getChoices()} />
        <Machine choices={() => this.getChoices()} />
        <form>
          <button type="submit">play again</button>
        </form>
      </div>
    );
  }
}

export default App;
