import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="flex">
        <input
          className="w-5/6 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          placeholder="Add Todo ..."
        />
        <input
          type="submit"
          value="Submit"
          className="bg-green-500 w-1/6 hover:bg-green-700  text-white font-bold mx-2 p-2 rounded"
        />
      </form>
    );
  }
}

export default AddTodo;
