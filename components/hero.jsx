import styles from "styles/hero.module.scss";

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {imageOn && (
          <figure>[imageOnの指定があればここに画像のurlを記入]</figure>
        )}
      </div>
    </div>
  );
}
