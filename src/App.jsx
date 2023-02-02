import { useState } from 'react'
import TodoForm from './components/form'
import Header from './components/header'
import Todo from './components/todo'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'buy milk', completed: false },
    { id: 2, title: 'read book', completed: false },
    { id: 3, title: 'learn react', completed: false },
  ])

  const toggleTodo = id => {
    setTodos(
      todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    )
  }

  const removeTodo = id => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const addTodo = title => {
    setTodos(todos.concat([{ id: Date.now(), title, completed: false }]))
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <TodoForm addTodo={addTodo} />
        <ul className="todos">
          {todos.map(item => (
            <li className="todo-item" key={item.id}>
              <Todo todo={item} onToggle={toggleTodo} onRemove={removeTodo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
