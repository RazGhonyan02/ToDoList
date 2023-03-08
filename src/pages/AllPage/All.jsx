import styles from "./All.module.scss"
import allImg from "../../assets/icons/all.svg"
import Input from "../../components/Input/Input";
import { toggleCompleted, removeTodo, toggleImportant } from "../../redux/actions/todo";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { useAllHooks } from "../../hooks/useAllHooks";
import { useDispatch } from "react-redux";
import ImportantIcon from "../../assets/icons/importantComponent/ImportantIcon";
const All = () => {
    const [openCompleted, setOpenCompleted] = useState(false)
    const [openImportant, setOpenImportant] = useState(false)
    const dispatch = useDispatch()
    const { importantTodos, completedTodos, notCompletedTodos } = useAllHooks()
    
    const onOpenCompleted = () => {
        setOpenCompleted(!openCompleted)
    }
    const onOpenImportant = () => {
        setOpenImportant(!openImportant)
    }
    const onCompleted = ( id ) => {
        dispatch(toggleCompleted( id ))
    }
    const onRemove = (id) => {
        dispatch(removeTodo(id))
    }
    const onImportant = ( id ) => {
        dispatch(toggleImportant( id ))
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.firstBox}>
                <img src={allImg} alt="" />
                <h2>All</h2>
            </div>
                <h2 className={styles.h2}>Tasks</h2>
            <div className={styles.todoBox}>
                {notCompletedTodos?.map(({ id, text, isImportant }) => (
                    <div className={styles.mapBox} key={id} >
                        <Input type="checkbox" onChange={() => {
                            onCompleted( id )
                        }} />
                        <h2>{text}</h2>
                        <Button className={styles.button} text="Remove" onClick={() => {
                            onRemove(id)
                        }} />
                        <ImportantIcon onClick={() => {
                            onImportant(id)
                        }} width="30px" height="30px" fill={isImportant? "red": "black"} />
                    </div>

                ))}
            </div>
            <h2 role="button" onClick={onOpenCompleted} className={styles.h2}>Completed {completedTodos.length}</h2>
            { openCompleted && <div className={styles.dropDown}>
                {completedTodos?.map(({ id, text, isCompleted, isImportant }) => (
                    <div className={styles.mapBox} key={id} >
                        <Input type="checkbox" checked={isCompleted} onChange={() => {
                            onCompleted( id )
                        }} />
                        <h2>{text}</h2>
                        <Button className={styles.button} text="Remove" onClick={() => {
                            onRemove(id)
                        }} />
                        <ImportantIcon width="30px" height="30px" fill={isImportant? "red": "black"} />
                    </div>

                ))}
            </div>}
            <h2 role="button" onClick={onOpenImportant} className={styles.h2}>Important {importantTodos.length}</h2>
            { openImportant && <div className={styles.dropDown}>
                {importantTodos?.map(({ id, text, isCompleted, isImportant }) => (
                    <div className={styles.mapBox} key={id} >
                        <Input type="checkbox" checked={isCompleted} onChange={() => {
                            onCompleted( id )
                        }} />
                        <h2>{text}</h2>
                        <Button className={styles.button} text="Remove" onClick={() => {
                            onRemove(id)
                        }} />
                        <ImportantIcon onClick={() => {
                            onImportant(id)
                        }} width="30px" height="30px" fill={isImportant? "red": "black"} />
                    </div>

                ))}
            </div>}
        </div>
    )
}
export default All;