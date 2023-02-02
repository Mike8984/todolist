import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>todolist</h1>
    </div>
  )
}

export default Header
