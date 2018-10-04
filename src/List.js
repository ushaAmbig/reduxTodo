import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo.js';


class List extends Component {
    render() {
        let todos = this.props.todos.map((todo, index) => <Todo key={index}  todo={todo}/>)
        return (
            <section className="main-section">
                {this.props.todos && this.props.todos.length > 0  && <div><h4>List of tasks:</h4>
                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos}
                    </tbody>
                    </table>
                </div>
                }
                {this.props.todos && !this.props.todos.length && <div>No Tasks added. Click create to add new tasks.</div>}
            </section>
        )
    }
} 
const mapStateToProps = state => {
    return {
     todos: state.todos
    }
} 
export default connect(mapStateToProps)(List);
