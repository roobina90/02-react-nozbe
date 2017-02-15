import React from 'react'
import Todo from './Todo.js'
import _ from 'lodash'

export default React.createClass({
  getInitialState () {
    return {
      todos: [
        { id: 1, text: 'Task1', completed: false },
        { id: 2, text: 'Task2', completed: false },
        { id: 3, text: 'Task3', completed: false }
      ]
    }
  },

  toggleTaskCompleted (taskId) {
    const task = _.find(this.state.todos, todo => todo.id === taskId)
    task.completed = !task.completed

    this.setState({ todos: this.state.todos })
  },
  render () {
    return (<div>
      <h2>Todos</h2>
      {this.state.todos.map(todo => <Todo key={todo.id} {...todo} toggleCompleted={() => this.toggleTaskCompleted(todo.id)} />)}
    </div>
    )
  }
})
