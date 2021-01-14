import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";
import "./AddTodo.css";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({ id: Date.now(), title: this.state.title });
    this.setState({ title: "" });
  };
  render() {
    return (
      <form className='add-todo' onSubmit={this.onSubmit}>
        <h1>Add a task</h1>
        <div className='form-group mb-3'>
          <label htmlFor='title'>Name of a task</label>
          <input
            onChange={this.onChange}
            type='text'
            name='title'
            value={this.state.title}
            className='form-control'
          />
        </div>
        <button className='btn btn-success btn-lg' type='submit'>
          Add task
        </button>
      </form>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
