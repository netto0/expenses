import styles from "./Banner.module.css";

function Banner({ icon, title, subTitle, valueType, value, visibleBalance }) {
  return (
    <div className={styles.container}>
      <div className={styles.bannerId}>
        <div className={styles.bannerIcon}>{icon}</div>
        <div>
          <p className={styles.bannerTitle}>{title}</p>
          <span className={styles.bannerSubTitle}>{subTitle}</span>
        </div>
      </div>
      <div className={styles.bannerValue}>
        <p className={`${styles[valueType]}`}>
          R$ {visibleBalance ? <span>{value}</span> : <span>--,--</span>}
        </p>
      </div>
    </div>
  );
}

export default Banner;
