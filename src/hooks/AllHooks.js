import { useDispatch, useSelector } from "react-redux"
import { getCompletedTodos, getImportantTodos, getNotCheckedTodos, getTodos } from "../redux/selectors/todo"

export const AllHooks = () => {
    const todos = useSelector(getTodos)
    const importantTodos = useSelector(getImportantTodos)
    const completedTodos = useSelector(getCompletedTodos)
    const notCompletedTodos = useSelector(getNotCheckedTodos)

    return {
        todos,
        importantTodos, 
        completedTodos, 
        notCompletedTodos
    }
}