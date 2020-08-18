import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import "./assets/main.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out trash",
        completed: false,
      },
      {
        id: 2,
        title: "Take a shower",
        completed: false,
      },
      {
        id: 3,
        title: "walk the dog",
        completed: true,
      },
    ],
  };

  // Toggle Todo Completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // delete Todo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)], // Spread syntax (...)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
