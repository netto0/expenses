import styles from './Warning.module.css'

function Warning({text}) {
    return (
        <span className={styles.msg}>{text}</span>
    )
}

export default Warning