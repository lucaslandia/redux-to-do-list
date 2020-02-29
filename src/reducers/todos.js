import * as constants from '../constants/constants'

const todos = (state = [], action) =>{
    switch (action.type) {
        case constants.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case constants.TOGGLE_TODO:
            return state.map(t => t.id === action.id 
                ? { ...t, completed: !t.completed}
                : t)        
        default:
            return state
    }
}

export default todos