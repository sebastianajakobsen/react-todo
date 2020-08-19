import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

import axios from "axios";
import "./assets/main.css";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

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
    // this.setState({
    //   todos: [...this.state.todos.filter((todo) => todo.id !== id)], // Spread syntax (...)
    // });

    axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] }));
  };

  addTodo = (title) => {
    // const newTodo = {
    //   id: this.state.todos.length + 1,
    //   // title:title
    //   title, // ES6
    //   completed: false,
    // };

    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="p-4 w-full max-w-lg m-auto mt-10">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}
                />
              </React.Fragment>
            )}
          />

          <Route path="/about" component={About} />
          {/* <Route path="/about">
              <About />
            </Route> */}
        </div>
      </Router>
    );
  }
}

export default App;
