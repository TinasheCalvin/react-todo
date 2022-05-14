import { createContext, useReducer } from 'react'
import tasksReducer, { initialState } from './tasksReducer'

export const TasksContext = createContext(initialState)
const storage = window.localStorage

function saveToLocalStorage(tasks) {
    storage.setItem("tasks", JSON.stringify(tasks))
}

export const TasksContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(tasksReducer, initialState)

    const addTodoTask = (todo) => {
        let tasks = state.tasks.concat(todo)
        dispatch({
            type: "ADD_TASK",
            payload: tasks
        })
        saveToLocalStorage(tasks)
    }

    const completeTodoTask = (id) => {
        let tasks = state.tasks.map(task => (
            task.id === id ? { ...task, isComplete: true } : task
        ))
        dispatch({
            type: "COMPLETE_TASK",
            payload: tasks
        })
        saveToLocalStorage(tasks)
    }

    const addTaskToFavorites = (id) => {
        let tasks = state.tasks.map((task) => (
            task.id === id ? { ...task, isFavorite: true } : task
        ))
        dispatch({
            type: "ADD_TO_FAVORITES",
            payload: tasks
        })
    }
    
    const removeFromFavorites = (id) => {
        let tasks = state.tasks.map((task) => (
            task.id === id ? { ...task, isFavorite: false } : task
        ))
        dispatch({
            type: "REMOVE_FROM_FAVORITES",
            payload: tasks
        })
        saveToLocalStorage(tasks)
    }

    // saving all the functions and state in one variable to use in the context provider
    let value = { tasks: state.tasks, addTodoTask, completeTodoTask, addTaskToFavorites, removeFromFavorites }

    return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}