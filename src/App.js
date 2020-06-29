import React, { Component } from "react";
import Header from "./components/Header";
import TodoRow from "./components/TodoRow";
import NewTodo from "./components/NewTodo";
import DoneTasksVisibility from "./components/DoneTasksVisibility";
import { Table } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam",
      todos: [
        { task: "Zrobić zadanie na Codewars", done: false },
        { task: "Przerobić kurs na freeCodeCamp", done: true },
        { task: "Pograć w koszykówkę", done: false }
      ],
      showCompleted: true
    };
  }

  componentDidMount() {
    const data = localStorage.getItem("todos");
    this.setState(
      data != null
        ? JSON.parse(data)
        : {
            userName: "Adam",
            todos: [
              { task: "Zrobić zadanie na Codewars", done: false },
              { task: "Przerobić kurs na freeCodeCamp", done: true },
              { task: "Pograć w koszykówkę", done: false }
            ],
            showCompleted: true
          }
    );
  }

  createNewTodo = newTodoText => {
    const { todos } = this.state;
    if (!todos.find(item => item.task === newTodoText)) {
      this.setState(
        {
          todos: [...todos, { task: newTodoText, done: false }]
        },
        () => this.setLocalStorage()
      );
    }
  };

  toggleTodoDone = todo => {
    this.setState(
      {
        todos: this.state.todos.map(item =>
          item.task !== todo.task ? item : { ...item, done: !item.done }
        )
      },
      () => this.setLocalStorage()
    );
  };

  setLocalStorage = () =>
    localStorage.setItem("todos", JSON.stringify(this.state));

  todoRows = isDone =>
    this.state.todos
      .filter(item => item.done === isDone)
      .map(item => (
        <TodoRow
          key={item.task}
          item={item}
          onDoneToggle={this.toggleTodoDone}
        />
      ));

  render() {
    const { userName, todos, showCompleted } = this.state;
    return (
      <div className="App">
        <Header todos={todos} userName={userName} />
        <NewTodo onTodoCreate={this.createNewTodo} />
        <div className="Todos">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Zadanie</th>
                <th>Wykonano</th>
              </tr>
            </thead>
            <tbody>{this.todoRows(false)}</tbody>
          </Table>
        </div>
        <DoneTasksVisibility
          isChecked={showCompleted}
          onVisibilityChange={checked =>
            this.setState({ showCompleted: checked })
          }
        />
        {showCompleted && (
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Zadanie</th>
                <th>Wykonano</th>
              </tr>
            </thead>
            <tbody>{this.todoRows(true)}</tbody>
          </Table>
        )}
      </div>
    );
  }
}
