
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main} >
      <h2>Hello! I deleted everything on "page.js" and only kept main tags</h2>
      <Link href="./merch">
        Merch
      </Link>
     
    </main>
  );
}
