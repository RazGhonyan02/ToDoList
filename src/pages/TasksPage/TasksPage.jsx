import Input from "../../components/Input/Input";
import styles from "./TasksPage.module.scss"
import tasksImg from "../../assets/icons/tasks.svg"
import { useState } from "react";
import Button from "../../components/Button/Button";

const TasksPage = ({ add, remove, todos, notCheckedTodos, completed }) => {
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
    const onChecked = (e, id, todos) => {
        completed(e.target.checked, id, todos)
    }
    return (
        <div className={styles.container}>
            <div className={styles.firstBox}>
                <img src={tasksImg} alt="tasksImg" />
                <h2>Tasks</h2>
            </div>
            <div className={styles.todoBox}>
                {notCheckedTodos?.map(({ id, text }) => (
                    <div className={styles.mapBox} key={id} >
                        <Input type="checkbox" onChange={(e) => {
                            onChecked(e, id, todos)
                        }} />
                        <h2>{text}</h2>
                        <Button text="Remove" onClick={() => {
                            onRemove(id)
                        }} />
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