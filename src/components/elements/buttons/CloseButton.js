import styles from './CloseButton.module.css'
import { TfiClose } from "react-icons/tfi";

function CloseButton({func}) {
    return (
        <div className={styles.closeButton} onClick={func}>
        <TfiClose />
      </div>
    )
}

export default CloseButton