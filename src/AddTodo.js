import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class AddTodo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        createNew: false
      }
      this.createNew = this.eventHandlers().saveTodo.bind(this);
      this.onTitleChange = this.eventHandlers().onTitleChange.bind(this);
      this.toggleCreateButton = this.eventHandlers().toggleCreateButton.bind(this);
    }
    eventHandlers() {
        return {
          onTitleChange: function(e) {
            this.setState({title: e.target.value});
          },
          saveTodo: function(title) {
            var payload = {
              title,
              status: 'pending'
            }
            this.props.addTodo(payload);
            this.setState({createNew: false, title: ''})
          },
          toggleCreateButton: function(value) {
            this.setState({createNew: value})
          }
        }
      }
      render() {
        return (
          <section className="main-section">
            {!this.state.createNew && <button onClick={() => this.toggleCreateButton(true)}>Create New</button>}
            {this.state.createNew && <div>
              <input className="form-control" type="text" value={this.state.title} onChange={this.onTitleChange}/>
              <button onClick={() => {this.createNew(this.state.title)}}>Save</button>
              </div>
            }
        </section>
        )
      }
}


const mapDispatchToProps = dispatch => ({
    addTodo: data => dispatch(addTodo(data))
  })
  
  export default connect(null, mapDispatchToProps)(AddTodo);