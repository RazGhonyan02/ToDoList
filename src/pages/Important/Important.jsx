import styles from "./Important.module.scss"
import importantImg from "../../assets/icons/important.svg"
const Important = () => {
    return (
            <div className={styles.container}>
                <div className={styles.firstBox}>
                    <img src={importantImg} alt="" />
                    <h2>Important</h2>
                </div>
                <div></div>
            </div>
    )
}
export default Important;