import { createContext, useReducer } from 'react'
import tasksReducer, { initialState } from './tasksReducer'

export const TasksContext = createContext(initialState)

export const TasksContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(tasksReducer, initialState)

    const addTodoTask = (todo) => {
        let tasks = state.tasks.concat(todo)
        dispatch({
            type: "ADD_TASK",
            payload: tasks
        })
    }

    const completeTodoTask = (id) => {
        let tasks = state.tasks.map(task => (
            task.id === id ? { ...task, isComplete: true } : task
        ))
        dispatch({
            type: "COMPLETE_TASK",
            payload: tasks
        })
    }

    // saving all the functions and state in one variable to use in the context provider
    let value = { tasks: state.tasks, addTodoTask, completeTodoTask }

    return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}