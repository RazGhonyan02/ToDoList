import { v4 } from "uuid";
import { TOGGLE_COMPLETED, ADD_TODO, REMOVE_TODO, TOGGLE_IMPORTANT } from "../reducers/todo";

export const addTodo = (text) => {
    const id = v4()
    const todo = {
        text,
        id, 
        isCompleted: false,
        isImportant: false,
    }
    return ({type: ADD_TODO,  todo })
}
export const removeTodo = (id) =>({ type: REMOVE_TODO, id })
export const toggleCompleted = ( id ) => (dispatch, getState) => {
    const todos = getState().todos
    const newCompleted = todos.map(item => {
       if(item.id === id) {
        
        return {
            ...item,
            isCompleted: !item.isCompleted
        }
       }
       return item
    })
    dispatch({type: TOGGLE_COMPLETED, newCompleted})
}
export const toggleImportant = ( id ) => (dispatch, getState) => {
    const todos = getState().todos
    const newImportant = todos.map(item => {
       if(item.id === id) {
        return {
            ...item,
            isImportant: !item.isImportant
        }
       }
       return item
    })
    dispatch({type: TOGGLE_IMPORTANT, newImportant})
}