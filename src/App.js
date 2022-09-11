import './App.css';
import Overview from './components/Overview.js'
import React, { Component } from "react";


class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Overview array={this.state.tasks} />
        <form action="" id="form">
          <label for="task">Task:</label>
          <input type="text" id="task" name="task"></input>
          <button form="form" type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}



export default App;
