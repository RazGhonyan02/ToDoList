import styles from "./Input.module.scss"
const Input = ({...rest}) => {
    return <input className={styles.input} type="text" {...rest} />
}
export default Input;