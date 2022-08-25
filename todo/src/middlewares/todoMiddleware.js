import { addTodo, removeTodo } from "../store/todoReducer"

export const todoMiddleware = store => next => action => {
    const result = next(action)
    if (addTodo.match(action) || removeTodo.match(action)) { 
        localStorage.setItem(
            'currentList', 
            JSON.stringify(store.getState().todo.currentList)
        )
    }
    return result
}