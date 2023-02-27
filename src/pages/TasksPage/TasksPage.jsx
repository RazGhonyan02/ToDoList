import Aside from "../../components/Aside/Aside";
import Input from "../../components/Input/Input";
import styles from "./TasksPage.module.scss"
import tasksImg from "../../assets/icons/tasks.svg"
const TasksPage = () => {
    return (
        <main className={styles.main}>
            <Aside />
            <div className={styles.container}>
                <div className={styles.firstBox}>
                    <img src={tasksImg} alt="" />
                    <h2>Tasks</h2>
                </div>
                <div></div>
                <Input placeholder="Add Tasks"/>
            </div>
        </main>
        
        
    )
}
export default TasksPage;