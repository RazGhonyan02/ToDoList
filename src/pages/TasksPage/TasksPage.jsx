import Input from "../../components/Input/Input";
import styles from "./TasksPage.module.scss"
import tasksImg from "../../assets/icons/tasks.svg"
import { useState } from "react";
import Button from "../../components/Button/Button";
import ImportantIcon  from "../../assets/icons/importantComponent/ImportantIcon"

const TasksPage = ({ add, remove, notCheckedTodos, completed, important }) => {
    const [text, setText] = useState("")
    const onChange = ({ currentTarget: { value } }) => {
        setText(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        add(text)
        setText("")

    }
    const onRemove = (id) => {
        remove(id)
    }
    const onCompleted = (id) => {
        completed( id )
    }
    const onImportant = (id) => {
        important(id)
    }
    return (
        <div className={styles.container}>
            <div className={styles.firstBox}>
                <img src={tasksImg} alt="tasksImg" />
                <h2>Tasks</h2>
            </div>
            <div className={styles.todoBox}>
                {notCheckedTodos?.map(({ id, text, isImportant }) => (
                    <div className={styles.mapBox} key={id} >
                        <Input type="checkbox" onChange={() => {
                            onCompleted(id)
                        }} />
                        <h2>{text}</h2>
                        <Button text="Remove" onClick={() => {
                            onRemove(id)
                        }} />
                        <ImportantIcon onClick={() => {
                            onImportant(id)
                        }} width="30px" height="30px" fill={isImportant ? "red": "black"} />
                    </div>

                ))}
            </div>
            <form onSubmit={onSubmit}>
                <Input
                    className={styles.input}
                    onChange={onChange}
                    placeholder="Add Tasks"
                    value={text} />
                <Button disabled={text.length < 4} className={styles.button} text="Add Todos" />
            </form>
        </div>


    )
}
export default TasksPage;