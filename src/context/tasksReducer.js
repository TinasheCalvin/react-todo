let themes = {
    'myDay': '/images/TV Tower.jpg',
    'important': '/images/Beach.jpg',
    'planned': '/images/Sunset.jpg',
    'assigned': '/images/Desert.jpg',
    'myTasks': '/images/Lighthouse.jpg'
}

export const initialState = {
    tasks: [],
    themes: themes,
    sidebarOpen: false,
    taskOpen: false
}

const tasksReducer = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case "GET_TASKS":
            return { ...state, tasks: payload }
        
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

        case "VIEW_TASK":
            return { ...state, taskOpen: payload }

        case "CLOSE_TASK":
            return { ...state, taskOpen: payload }
    

        default:
            return state
    }

}

export default tasksReducer