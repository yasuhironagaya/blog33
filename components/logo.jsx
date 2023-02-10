import styles from "styles/logo.module.scss";
import Link from "next/link";

export default function Logo({ boxOn = false }) {
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      CUBE
    </Link>
  );
}
