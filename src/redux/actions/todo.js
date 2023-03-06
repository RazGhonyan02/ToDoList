import { v4 } from "uuid";
import { ADD_COMPLETED, ADD_TODO, REMOVE_TODO } from "../reducers/todo";

export const addTodo = (text) => {
    const id = v4()
    const todo = {
        text,
        id, 
        isChecked: false
    }
    return ({type: ADD_TODO,  todo })
}
export const removeTodo = (id) =>({ type: REMOVE_TODO, id })
export const addCompleted = (isChecked, id, todos) => (dispatch) => {
    todos.map(item => {
       if(item.id === id) {
        item.isChecked = isChecked
       }
    })
    dispatch({type: ADD_COMPLETED})
}