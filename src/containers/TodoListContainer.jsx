import { useDispatch, useSelector } from "react-redux"
import TasksPage from "../pages/TasksPage/TasksPage"
import { addCompleted, addTodo, removeTodo } from "../redux/actions/todo"
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
    const completed = (isChecked, id, todos) => {
        dispatch(addCompleted(isChecked, id, todos))
    }

    return <TasksPage add={add} remove={remove} todos={todos} notCheckedTodos={notCheckedTodos} completed={completed} />
}

export default TodoListContainer;