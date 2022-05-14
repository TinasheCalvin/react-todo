const storage = window.localStorage
let tasks = JSON.parse(storage.getItem('tasks'))

export const initialState = {
    tasks: tasks ? tasks : []
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
        
        default:
            return state
    }

}

export default tasksReducer