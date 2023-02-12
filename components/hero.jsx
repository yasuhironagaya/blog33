import styles from "styles/hero.module.scss";

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && <figure>[imageOnの指定があればここに画像のurlを記入]</figure>}
    </div>
  );
}
