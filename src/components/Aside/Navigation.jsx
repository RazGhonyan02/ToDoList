import { NavLink } from "react-router-dom"
import tasksImg from "../../assets/icons/tasks.svg"
import importantImg from "../../assets/icons/important.svg"
import completedImg from "../../assets/icons/completed.svg"
import allImg from "../../assets/icons/all.svg"

import styles from "./Aside.module.scss"
import { useSelector } from "react-redux"
import { getCompletedTodos, getImportantTodos, getNotCheckedTodos, getTodos } from "../../redux/selectors/todo"
const Navigation = () => {
    const todos = useSelector(getTodos)
    const tasksLength = useSelector(getNotCheckedTodos)
    const importantLength = useSelector(getImportantTodos)
    const completedLength = useSelector(getCompletedTodos)

    return (
        <nav className={styles.nav}>
            <div className={styles.box}>
                <img className={styles.img} src={allImg} alt="" />
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/all">All</NavLink>
                <p>{todos.length}</p>
            </div>
            <div className={styles.box}>
                <img className={styles.img} src={tasksImg} alt="" />
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/">Tasks</NavLink>
                <p>{tasksLength.length}</p>
            </div>
            <div className={styles.box}>
                <img className={styles.img} src={importantImg} alt="" />
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/important">Important</NavLink>
                <p>{importantLength.length}</p>
            </div>
            <div className={styles.box}>
                <img className={styles.img} src={completedImg} alt="" />
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/completed">Completed</NavLink>
                <p>{completedLength.length}</p>
            </div>
        </nav >
    )
}
export default Navigation;