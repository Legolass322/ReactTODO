import React, { useState } from 'react'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { TodoList } from '../../components/TodoList/TodoList'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../../store/todoReducer'

export const TodoPage = () => {
    const todoList = useSelector(state => state.todo.currentList)
    const dispatch = useDispatch()
    
    const add = (name, description) => {
        if (!name) return
        const newTodo = {
            id: Date.now(),
            name: name,
            description: description
        }
        dispatch(addTodo(newTodo))
    }
    const remove = (item) => {
        dispatch(removeTodo(item.id))
    }
  return (
    <>
        <TodoForm create={add} />
        <TodoList todos={todoList} deleteTodo={remove}/>
    </>
  )
}
