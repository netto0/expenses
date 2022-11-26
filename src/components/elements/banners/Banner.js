import styles from "./Banner.module.css";

// function AccBanner({id}) {
function Banner(props) {
  return (
    <div className={styles.container}>
      <div className={styles.bannerId}>
        <div className={styles.bannerIcon}>{props.icon}</div>
        <div>
          <p className={styles.bannerTitle}>{props.title}</p>
          <span className={styles.bannerSubTitle}>{props.subTitle}</span>
        </div>
      </div>
      <div className={styles.bannerValue}>
        <p className={`${styles[props.valueType]}`}>
          R$ <span>{props.value}</span>
        </p>
      </div>
    </div>
  );
}

export default Banner;
