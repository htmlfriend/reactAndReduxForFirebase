import React, { Component } from "react";
import Todo from "../Todo/Todo";

export class Todos extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>List todo </h1>
        {Array.isArray(this.props.todos) && this.props.todos.length ? (
          this.props.todos.map((elem) => (
            <Todo
              id={elem.id}
              key={elem.id}
              title={elem.title}
              deleteTodo={this.props.deleteTodo}
            />
          ))
        ) : (
          <h1>Loding .....</h1>
        )}
      </div>
    );
  }
}

export default Todos;
