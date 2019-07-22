import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    contador: 0
  };

  decrement = () => {
    if (this.state.contador == 0) {
      this.setState({
        contador: 0
      });
    } else {
      this.setState({
        contador: this.state.contador - 1
      });
    }
  };

  increment = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.decrement}>-</button>
          Contador: {this.state.contador}
          <button onClick={this.increment}>+</button>
        </header>
      </div>
    );
  }
}

export default App;
