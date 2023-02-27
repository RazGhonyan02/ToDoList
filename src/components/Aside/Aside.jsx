import styles from "./Aside.module.scss"
import Navigation from "./Navigation";
const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Navigation />
        </aside>
    )
}
export default Aside;