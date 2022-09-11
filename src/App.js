import './App.css';
import Overview from './components/Overview.js'
import React, { Component } from "react";
import uniqid from "uniqid";


class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      task: {text: '', id: uniqid()},
    };
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    if (this.state.task.text !== '') {
      this.setState({
        tasks: this.state.tasks.concat(this.state.task),
        task: {text: '', id: uniqid()},
      });
    }
    console.log(this.state.tasks);
  };

  change = (e) => {
    this.setState({
      tasks: this.state.tasks,
      task: {text: e.target.value, id:this.state.task.id},
    })
  };

  render() {
    return (
      <div className="App">
        <form action="" id="form" onSubmit={this.onSubmitTask}>
          <label htmlFor="task">Task:</label>
          <input type="text" id="task" name="task" onChange={this.change}></input>
          <button form="form" type="submit">Add Task</button>
        </form>
        <Overview array={this.state.tasks} />
      </div>
    );
  };
}



export default App;
