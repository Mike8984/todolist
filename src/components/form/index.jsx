import { useState } from 'react'
import styles from './form.module.css'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if (value.trim()) {
      addTodo(value)
      setValue('')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>
          Create todo
        </button>
      </form>
    </>
  )
}

export default TodoForm
