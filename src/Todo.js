import React from 'react'

const Todo = ({text, id, completed, toggleCompleted}) => {
  const style = completed ? 'glyphicon-ok-circle' : 'glyphicon-remove-circle'
  return (
    <a className='task-item' href='#' onClick={toggleCompleted}>
      <span className='task-item'>
        <span className={'glyphicon ' + style} />
      </span>
      <span className='task-inner'>{text}</span>
    </a>
  )
}

Todo.propTypes = {
  id: React.PropTypes.number,
  text: React.PropTypes.string,
  completed: React.PropTypes.bool,
  toggleCompleted: React.PropTypes.func
}

export default Todo
