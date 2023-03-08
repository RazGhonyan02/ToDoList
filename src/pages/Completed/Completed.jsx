import styles from "./Completed.module.scss"
import completedImg from "../../assets/icons/completed.svg"
import { useDispatch, useSelector } from "react-redux"
import { getCompletedTodos } from "../../redux/selectors/todo"
import { removeTodo, toggleCompleted } from "../../redux/actions/todo"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import ImportantIcon from "../../assets/icons/importantComponent/ImportantIcon"
const Completed = () => {
    const completedTodos = useSelector(getCompletedTodos)
    const dispatch = useDispatch()
    const onRemove = (id) => {
        dispatch(removeTodo(id))
    }
    const onCompleted = ( id ) => {
        dispatch(toggleCompleted(id))
    }
    return (
            <div className={styles.container}>
                <div className={styles.firstBox}>
                    <img src={completedImg} alt="" />
                    <h2>Completed</h2>
                </div>
                <div className={styles.todoBox}>
                    {completedTodos?.map(({ id, text, isCompleted, isImportant }) => (
                    <div className={styles.mapBox} key={id} >
                        <Input type="checkbox" checked={isCompleted} onChange={(e) => {
                            onCompleted( id )
                        }} />
                        <h2>{text}</h2>
                        <Button text="Remove" onClick={() => {
                            onRemove(id)
                        }} />
                        <ImportantIcon width="30px" height="30px" fill={isImportant? "red": "black"} />
                    </div>

                ))}
                </div>
            </div>
    )
}
export default Completed;