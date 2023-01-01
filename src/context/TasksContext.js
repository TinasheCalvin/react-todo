import { createContext, useReducer } from 'react'
import axios from 'axios'
import tasksReducer, { initialState } from './tasksReducer'
import { todoCreationSuccess,addToFavorites,todoRemoveFromFavorites,todoCompletionSuccess } from '../components/notifications'

export const TasksContext = createContext(initialState)

axios.defaults.baseURL = 'https://nodejs-todo.onrender.com/tasks'

export const TasksContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(tasksReducer, initialState)

    const getAllTasks = async () => {
        await axios.get('/')
            .then(res => {
                console.log(res)
                dispatch({
                    type: "GET_TASKS",
                    payload: res.data.tasks
                })
            })
            .catch(err => (
                console.log(err)
            ))
    }

    const addTodoTask = async (todo) => {
        await axios.post('/', todo)
        todoCreationSuccess()
    }

    const completeTodoTask = async (todo) => {
        await axios.put(`/${todo._id}`, { ...todo, isComplete: true})
        todoCompletionSuccess()
    }

    const addTaskToFavorites = async (todo) => {
        await axios.put(`/${todo._id}`, { ...todo, isImportant: true})
        addToFavorites()
        
    }
    
    const removeFromFavorites = async (todo) => {
        await axios.put(`/${todo._id}`, { ...todo, isImportant: false})
        todoRemoveFromFavorites()
    }

    const changeBackgroundTheme = (id,background) => {
        let themes = {...state.themes, [id]: background}
        dispatch({
            type: "CHANGE_BACKGROUND",
            payload: themes
        })
    }

    const openSidebar = () => {
        let sidebarOpen = true
        dispatch({
            type: "OPEN_SIDEBAR",
            payload: sidebarOpen
        })
    }

    const closeSidebar = () => {
        let sidebarOpen = false
        dispatch({
            type: "CLOSE_SIDEBAR",
            payload: sidebarOpen
        })
    }

    const openTaskView = () => {
        let taskOpen = true
        dispatch({
            type: "VIEW_TASK",
            payload: taskOpen
        })
    }

    const closeTaskView = () => {
        let taskOpen = false
        dispatch({
            type: "CLOSE_TASK",
            payload: taskOpen
        })
    }

    // saving all the functions and state in one variable to use in the context provider
    let value = { 
        tasks: state.tasks, 
        themes: state.themes, 
        sidebarOpen: state.sidebarOpen,
        taskOpen: state.taskOpen, 
        getAllTasks, addTodoTask,completeTodoTask,addTaskToFavorites,removeFromFavorites,changeBackgroundTheme,openSidebar,closeSidebar, openTaskView, closeTaskView 
    }

    return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}