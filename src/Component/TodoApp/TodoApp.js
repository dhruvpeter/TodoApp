import React, { Component } from "react";
import "./TodoApp.css";
export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    // const allItems = this.state.items;
    // allItems.push(input);
    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };
  deleteItem = (key) => {
    //   const allItems=this.state.items;
    //   allItems.splice(key,1);
    //   this.setState({
    //       items:allItems
    //   })
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };
  editItem = (key) => {
    this.setState({
      input: this.state.items[key],
    });
    this.deleteItem(key);
  };
  render() {
    const { input, items } = this.state;
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input
            type="text"
            onChange={this.handleChange}
            value={input}
            placeholder="Enter Items..."
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}{" "}
              <i
                className="fas fa-edit"
                onClick={() => this.editItem(index)}
              ></i>
              <i
                className="far fa-trash-alt"
                onClick={() => this.deleteItem(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
