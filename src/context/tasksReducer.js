const storage = window.localStorage
let tasks = JSON.parse(storage.getItem('tasks'))

let themes = {
    'myDay': '/images/TV Tower.jpg',
    'important': '/images/Beach.jpg',
    'planned': '/images/Sunset.jpg',
    'assigned': '/images/Desert.jpg',
    'myTasks': '/images/Lighthouse.jpg'
}

export const initialState = {
    tasks: tasks ? tasks : [],
    themes: themes,
    sidebarOpen: false
}

const tasksReducer = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case "ADD_TASK":
            return { ...state, tasks: payload }
        
        case "COMPLETE_TASK":
            return { ...state, tasks: payload }
        
        case "ADD_TO_FAVORITES":
            return { ...state, tasks: payload }
        
        case "REMOVE_FROM_FAVORITES":
            return { ...state, tasks: payload }
        
        case "CHANGE_BACKGROUND":
            return { ...state, themes: payload }

        case "OPEN_SIDEBAR":
            return { ...state, sidebarOpen: payload }

        case "CLOSE_SIDEBAR":
            return { ...state, sidebarOpen: payload }

        default:
            return state
    }

}

export default tasksReducer