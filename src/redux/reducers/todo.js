export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const TOGGLE_COMPLETED = "ADD_COMPLETED"
export const TOGGLE_IMPORTANT = "TOGGLE_IMPORTANT"
const TodoReducer = (state = [], { type, todo, id, newCompleted, newImportant }) => {
    switch (type) {
        case ADD_TODO:
            return [...state, todo]
        case REMOVE_TODO:
            state = state.filter(item => item.id !== id)
            return state
        case TOGGLE_COMPLETED:
            return newCompleted
        case TOGGLE_IMPORTANT:
            return newImportant
        default:
            return state;
    }


}
export default TodoReducer;