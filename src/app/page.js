
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main} >
      <h2>Merch page!</h2>
      <Link href="./merch">
        Merch
      </Link>
     
    </main>
  );
}
