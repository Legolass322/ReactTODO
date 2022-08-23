import React from 'react'
import { Todo } from '../Todo/Todo'
import classes from './TodoList.module.scss'

export const TodoList = ({todos, deleteTodo, ...props}) => {
    const todoItems = todos.map((item, ix) => 
        <Todo 
            key={item.id} 
            styleClass={classes.TodoList_Todo} 
            id={ix + 1}
            name={item.name} 
            description={item.description}
            remove={() => {deleteTodo(item)}}
        />
    )
  return (
    <ul className={classes.TodoList} {...props}> {todoItems} </ul>
  )
}