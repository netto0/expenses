import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.medias}>
        <FaInstagram />
        <FaLinkedin />
        <FaFacebook />
      </div>
      <div className={styles.copyRight}>
        <span>Expen$es</span> &copy; 2022
      </div>
    </div>
  );
}

export default Footer;
