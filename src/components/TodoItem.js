import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    // Methods


    render() {
        // instead of this.props.todo.id & this.props.todo.title => id, title
        const { id, title } = this.props.todo;

        return (
            <div className={"p-4 border-b-2 " + (this.props.todo.completed ? 'line-through' : 'none')}>
                <p>
                    <input type="checkbox"
                           onChange={this.props.markComplete.bind(this, id)}/>
                           {' '}
                    {title}
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold mx-2 px-2 rounded"
                            onClick={this.props.deleteTodo.bind(this, id)}>
                        X
                    </button>
                </p>
            </div>
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem;