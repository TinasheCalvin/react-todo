export const initialState = {
    tasks: []
}

const tasksReducer = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case "ADD_TASK":
            return { ...state, tasks: payload }
        
        case "COMPLETE_TASK":
            return { ...state, tasks: payload }
        
        default:
            return state
    }

}

export default tasksReducer