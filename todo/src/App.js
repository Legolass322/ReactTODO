import React, { useState } from 'react'
import { TodoForm } from './components/TodoForm/TodoForm'
import { TodoList } from './components/TodoList/TodoList'

export default function App() {
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
    <div className='App'>
        <TodoForm create={addTodo} />
        <TodoList todos={todoList} deleteTodo={removeTodo}/>
    </div>
    )
}