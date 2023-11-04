import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        <li>{/* <Link href="/login">Login</Link> */}</li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sewing">Sewing</Link>
        </li>
        <li>
          <Link href="/crotchet">Crotchet</Link>
        </li>
      </ul>
    </div>
  );
}
