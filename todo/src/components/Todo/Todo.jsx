import React from 'react'
import { Button } from '../UI/Button/Button'
import classes from './Todo.module.scss'

export const Todo = ({id, name, description, styleClass, remove, ...props}) => {
  return (
    <li {...props} className={`${classes.Todo} ${styleClass}`}>
      <div>
        <p>{id}. {name}</p>
        <p>{description}</p>
      </div>
      <div>
        <Button onClick={remove}>REMOVE</Button>
      </div>
    </li>
  )
}
