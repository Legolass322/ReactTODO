import React, { useState } from 'react'
import { Button } from '../UI/Button/Button'
import { Input } from '../UI/Input/Input'
import classes from './TodoForm.module.scss'

export const TodoForm = ({create, ...props}) => {
    const [todoName, setTodoName] = useState('')
    const [todoDescription, setTodoDescription] = useState('')
    const addTodo = e => {
        e.preventDefault()
        create(todoName, todoDescription)
        setTodoName('')
        setTodoDescription('')
    }
  return (
    <form className={classes.TodoForm}>
        <Input
            type="text"
            value={todoName}
            onChange={e => setTodoName(e.target.value)}
        />
        <Input
            type="text"
            value={todoDescription}
            onChange={e => setTodoDescription(e.target.value)}
        />
        <Button onClick={addTodo}>ADD</Button>
    </form>
  )
}
