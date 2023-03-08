import { useDispatch, useSelector } from "react-redux"
import TasksPage from "../pages/TasksPage/TasksPage"
import { toggleCompleted, addTodo, removeTodo, toggleImportant } from "../redux/actions/todo"
import { getNotCheckedTodos, getTodos } from "../redux/selectors/todo"

const TodoListContainer = () => {
    const dispatch = useDispatch()
    const todos = useSelector(getTodos)
    const notCheckedTodos = useSelector(getNotCheckedTodos)


    const add = (text) => {
        dispatch(addTodo(text, todos))
    }
    const remove = (id) => {
        dispatch(removeTodo(id))
    }
    const completed = ( id ) => {
        dispatch(toggleCompleted( id ))
    }
    const important = ( id ) => {
        dispatch(toggleImportant( id ))
    }

    return <TasksPage add={add} remove={remove}  notCheckedTodos={notCheckedTodos} completed={completed} important={important} />
}

export default TodoListContainer;