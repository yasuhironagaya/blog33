import styles from "styles/contact.module.scss";
import Social from "components/social";

export default function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="30px" />
      <address>@nifty.com</address>
    </div>
  );
}
