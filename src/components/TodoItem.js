import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    render() {
        return (
            <div className={this.props.todo.completed ? 'bg-blue-100' : 'bg-red-200'}>
                <p>{this.props.todo.title}</p>
            </div>
        );
    }
}

// PropTypes
TodoItem.propTypes  = {
    todo: PropTypes.object.isRequired
}


export default TodoItem;