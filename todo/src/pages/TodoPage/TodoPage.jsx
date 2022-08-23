import React, { useState } from 'react'
import { Layout } from '../../components/Layout/Layout'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { TodoList } from '../../components/TodoList/TodoList'

export const TodoPage = () => {
    const [todoList, setTodoList] = useState([])
    
    const addTodo = (name, description) => {
        if (!name) return
        const newTodo = {
            id: Date.now(),
            name: name,
            description: description
        }
        setTodoList([...todoList, newTodo])
    }
    const removeTodo = (item) => {
        setTodoList(
            todoList.filter(todo => todo.id !== item.id)
        )
    }
  return (
    <>
        <TodoForm create={addTodo} />
        <TodoList todos={todoList} deleteTodo={removeTodo}/>
    </>
  )
}
