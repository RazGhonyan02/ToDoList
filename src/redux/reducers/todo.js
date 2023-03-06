export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const ADD_COMPLETED = "ADD_COMPLETED"
const TodoReducer = (state = JSON.parse(localStorage.getItem("state")) || [], { type, todo, id }) => {
    switch (type) {
        case ADD_TODO:
            localStorage.setItem("state", JSON.stringify([...state, todo]))
            return [...state, todo]
        case REMOVE_TODO:
            state = state.filter(item => item.id !== id)
            localStorage.setItem("state", JSON.stringify(state))
            return state
        case ADD_COMPLETED:
            localStorage.setItem("state", JSON.stringify(state))
            return state     
        default:
            return state;
    }


}
export default TodoReducer;