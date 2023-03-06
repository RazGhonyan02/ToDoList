import { NavLink } from "react-router-dom"
import tasksImg from "../../assets/icons/tasks.svg"
import importantImg from "../../assets/icons/important.svg"
import completedImg from "../../assets/icons/completed.svg"
import allImg from "../../assets/icons/all.svg"

import styles from "./Aside.module.scss"
import { useSelector } from "react-redux"
import { getNotCheckedTodos, getTodos } from "../../redux/selectors/todo"
const Navigation = () => {
    const todos = useSelector(getTodos)
    const tasksLength = useSelector(getNotCheckedTodos)

    return (
        <nav className={styles.nav}>
            <div className={styles.box}>
                <img className={styles.img} src={allImg} alt="" />
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/all">All</NavLink>
                <p>{todos.length}</p>
            </div>
            <div className={styles.box}>
                <img className={styles.img} src={tasksImg} alt="" />
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/tasks">Tasks</NavLink>
                <p>{tasksLength.length}</p>
            </div>
            <div className={styles.box}>
                <img className={styles.img} src={importantImg} alt="" />
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/important">Important</NavLink>
                <p>1</p>
            </div>
            <div className={styles.box}>
                <img className={styles.img} src={completedImg} alt="" />
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/completed">Completed</NavLink>
                <p>1</p>
            </div>
        </nav >
    )
}
export default Navigation;