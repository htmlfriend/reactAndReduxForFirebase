import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteTodo } from "../../store/actions/todoActions";
import "./Todo.css";

class Todo extends Component {
  render() {
    return (
      <div className='todo mb-2' key={this.props.id}>
        <p style={{ color: "red" }}> email: </p>
        <p>Name : {this.props.title}</p>
        <button
          className='btn btn-danger'
          style={{ fontSize: "30px" }}
          onClick={() => this.props.deleteTodo(this.props.id)}
        >
          Delete elem
        </button>
      </div>
    );
  }
}

export default connect(null, { deleteTodo })(Todo);
