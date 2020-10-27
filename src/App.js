import React, { Component } from "react";
import About from "./Component/About/About";
import Header from "./Component/Header/Header";
import TodoApp from "./Component/TodoApp/TodoApp";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" exact component={TodoApp} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}
