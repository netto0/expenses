import styles from './RoundedBox.module.css'

function RoundedBox(props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default RoundedBox