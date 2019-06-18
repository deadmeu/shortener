import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(JSON.stringify(data));
        this.setState({ todos: data });
      });
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    });
  }

  // Delete Todo
  delTodo = (id) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const deleteParams = {
      method: 'DELETE'
    }

    fetch(url, deleteParams)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(JSON.stringify(data));
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
      });
  }

  addTodo = (title) => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const data = {
      title,
      completed: false
    };
    const postParams = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(url, postParams)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(JSON.stringify(data));
        this.setState({ todos: [...this.state.todos, data] });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
