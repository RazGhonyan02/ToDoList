import  ImportantIcon  from "../../assets/icons/importantComponent/ImportantIcon"
import { useDispatch, useSelector } from "react-redux"
import { getImportantTodos } from "../../redux/selectors/todo"
import { removeTodo, toggleCompleted, toggleImportant } from "../../redux/actions/todo"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import styles from "./Important.module.scss"
const Important = () => {
    const dispatch = useDispatch()
    const importantTodos = useSelector(getImportantTodos)
    const onImportant = (id) => {
        dispatch(toggleImportant(id))
    }
    const onCompleted = (id) => {
        dispatch(toggleCompleted(id))
    }
    const onRemove = (id) => {
        dispatch(removeTodo(id))
    }
    return (
            <div className={styles.container}>
                <div className={styles.firstBox}>
                    <ImportantIcon width="60px" heigth="60px" fill="red" />
                    <h2>Important</h2>
                </div>
                <div className={styles.todoBox}>
                {importantTodos?.map(({ id, text, isImportant }) => (
                    <div className={styles.mapBox} key={id} >
                        <Input type="checkbox" onChange={() => {
                            onCompleted(id)
                        }} />
                        <h2>{text}</h2>
                        <Button text="Remove" onClick={() => {
                            onRemove(id)
                        }} />
                        <ImportantIcon onChange={() => {
                            onImportant(id)
                        }} width="30px" height="30px" fill={isImportant ? "red": "black"} />
                    </div>

                ))}
            </div>
            </div>
    )
}
export default Important;