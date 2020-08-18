import React, {Component} from 'react';
import Todos from "./components/Todos";
import './assets/main.css';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Take out trash',
                completed: false,
            },
            {
                id: 2,
                title: 'Take a shower',
                completed: false,
            },
            {
                id: 3,
                title: 'walk the dog',
                completed: true,
            }
        ]
    }

    markComplete = (id) => {
        console.log(id);
    }

    render() {
        return (
            <div className="text-2xl">
                <h1>App</h1>
                <Todos todos={this.state.todos} markComplete={this.markComplete} />
            </div>
        );
    }

}

export default App;
