import React, { Component } from 'react';
import { changeStatus } from './actions';
import { connect } from 'react-redux';

class Todo extends Component {
    render() {
        let props = this.props;
        return(
            <tr>
             <td>{props.todo.id}</td>
             <td> {props.todo.title}</td>
             <td> {props.todo.status}</td>
             {props.todo.status === 'pending' && <td><button className="btn btn-primary btn-sm" onClick={() => this.props.markAsCompleted(props.todo.id)}>mark as completed</button></td>}
            </tr>
        )
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        markAsCompleted: (id) => dispatch(changeStatus(id))
    }
}

let todo = connect(null, mapDispatchToProps)(Todo);
export default todo;