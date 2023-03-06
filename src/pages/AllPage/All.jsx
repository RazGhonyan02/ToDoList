import styles from "./All.module.scss"
import allImg from "../../assets/icons/all.svg"
import Input from "../../components/Input/Input";
import { addCompleted, removeTodo } from "../../redux/actions/todo";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { AllHooks } from "../../hooks/AllHooks";
const All = () => {
    const [open, setOpen] = useState(false)
    const { importantTodos, todos, completedTodos, notCompletedTodos } = AllHooks()
    

    const onRemoveChecked = (e, id, todos) => {
        dispatch(addCompleted(e.target.value, id, todos))
    }
    const onOpen = () => {
        setOpen(!open)
    }
    const onChecked = (e, id, todos) => {
        dispatch(addCompleted(e.target.checked, id, todos))
    }
    const onRemove = (id) => {
        dispatch(removeTodo(id))
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.firstBox}>
                <img src={allImg} alt="" />
                <h2>All</h2>
            </div>
                <h2 className={styles.h2}>Tasks</h2>
            <div className={styles.todoBox}>
                {notCompletedTodos?.map(({ id, text }) => (
                    <div className={styles.mapBox} key={id} >
                        <h2>{text}</h2>
                        <Input type="checkbox" onChange={(e) => {
                            onChecked(e, id, todos)
                        }} />
                        <Button className={styles.button} text="Remove" onClick={() => {
                            onRemove(id)
                        }} />
                    </div>

                ))}
            </div>
            <h2 role="button" onClick={onOpen} className={styles.h2}>Completed</h2>
            { open && <div className={styles.dropDown}>
                {completedTodos?.map(({ id, text }) => (
                    <div className={styles.mapBox} key={id} >
                        <h2>{text}</h2>
                        <Input type="checkbox" onChange={() => {
                            onRemoveChecked(e, id, todos)
                        }} />
                        <Button className={styles.button} text="Remove" onClick={() => {
                            onRemove(id)
                        }} />
                    </div>

                ))}
            </div>}
            <div className={styles.todoBox}></div>
        </div>
    )
}
export default All;