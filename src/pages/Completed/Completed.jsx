import styles from "./Completed.module.scss"
import completedImg from "../../assets/icons/completed.svg"
import { useDispatch, useSelector } from "react-redux"
import { getCompletedTodos } from "../../redux/selectors/todo"
import { removeTodo } from "../../redux/actions/todo"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
const Completed = () => {
    const completedTodos = useSelector(getCompletedTodos)
    const dispatch = useDispatch()
    const onRemove = (id) => {
        dispatch(removeTodo(id))
    }
    return (
            <div className={styles.container}>
                <div className={styles.firstBox}>
                    <img src={completedImg} alt="" />
                    <h2>Completed</h2>
                </div>
                <div className={styles.todoBox}>
                    {completedTodos?.map(({ id, text, isChecked }) => (
                    <div className={styles.mapBox} key={id} >
                        <Input type="checkbox" checked={isChecked} onChange={(e) => {
                            onChecked(e, id, todos)
                        }} />
                        <h2>{text}</h2>
                        <Button text="Remove" onClick={() => {
                            onRemove(id)
                        }} />
                    </div>

                ))}
                </div>
            </div>
    )
}
export default Completed;