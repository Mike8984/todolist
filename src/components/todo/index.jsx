import React from 'react'

const Todo = ({ todo, onToggle, onRemove }) => {
  return (
    <div className="row justify-between">
      <div className="row">
        <input
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          type="checkbox"
        />
        <h3 className={todo.completed ? 'done' : ''} style={{ marginLeft: 10 }}>
          {todo.title}
        </h3>
      </div>

      <button onClick={() => onRemove(todo.id)} className="delete">
        &times;
      </button>
    </div>
  )
}

export default Todo
