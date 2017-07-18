import React from "react";

import Todo from "../components/TodoItem";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class Todos extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });
    const panelStyle={
      margin: "15px auto",
      maxWidth: "400px"
    };

    return (
      <div className="panel panel-default" style={panelStyle}>
        <div className="panel-heading">
          <h1>Todos</h1>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="form-group col-sm-8">
              <input className="form-control"/>
            </div>
            <div className="form-group col-sm-2">
              <button className="btn btn-default fa fa-plus"></button>
            </div>
            <div className="form-group col-sm-2">
              <button onClick={this.reloadTodos.bind(this)} className="btn btn-default fa fa-refresh"></button>
            </div>
          </div>
          <ul className="todolist">{TodoComponents}</ul>
        </div>
      </div>
    );
  }
}
