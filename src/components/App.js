import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Todos from "./Todos/Todos";
import AddTodo from "./AddTodo/AddTodo";
import Navbar from "./Navbar/Navbar";

import { getTodos } from "../store/actions/todoActions";
// import axios from "axios";
// import Loding from "./Loding/Loding";
const data = [
  { id: 1, title: "wash your hands" },
  { id: 2, title: "wash my car" },
  { id: 3, title: "water my flowers" },
];
class App extends Component {
  getUsers() {
    // this.setState({
    //   loding: true,
    // });
    // setTimeout(() => {
    // return axios("https://api.randomuser.me/?nat=US&results=5").then(
    //   (response) =>
    //     this.setState({
    //       todos: [...this.state.todos, ...response.data.results],
    //       loding: false,
    //     })
    // );

    this.setState({
      todos: data,
      loading: false,
    });
  }

  // componentWillMount() {
  //   this.getUsers();
  // }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, ...data],
      loding: false,
    });
  }

  // deleteTodo = (e, itemId) => {
  //   this.setState({
  //     todos: this.state.todos.filter((elem) => elem.id !== itemId),
  //   });
  //   console.log("click from app");
  // };

  // addTodo = (todo) => {
  //   this.setState({ todos: [todo, ...this.state.todos] });
  // };
  // componentDidMount() {
  //   setTimeout(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
  //       this.setState({
  //         todos: res.data,
  //       });
  //     });
  //   }, 3000);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("state,props ", this.componentDidUpdate, prevProps, prevState);
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    return (
      <div className='container'>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Todos todos={this.props.todos} />}
          />
          <Route exact path='/add' component={() => <AddTodo />} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
  };
};

export default withRouter(connect(mapStateToProps, { getTodos })(App));
if (module.hot) {
  module.hot.accept();
}
