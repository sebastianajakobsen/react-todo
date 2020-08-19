import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
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

  addTodo = (title) => {
    const newTodo = {
      id:this.state.todos.length + 1,
      // title:title
      title, // ES6
      completed:false
    }
    this.setState({todos:[...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="p-4 w-full max-w-lg m-auto mt-10">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
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
