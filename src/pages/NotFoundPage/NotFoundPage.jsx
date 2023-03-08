import { NavLink } from "react-router-dom"
import styles from "./NotFoundPage.module.scss"
const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Not Found</h1>
            <NavLink to="/" className={styles.link}>Go To Tasks</NavLink>
        </div>
    )
}
export default NotFoundPage;