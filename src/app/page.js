// src/app/page.js
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2>Welcome to</h2>
            <h1>Curling You Say?</h1>
            <p>Your ultimate guide to the sport of curling.</p>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}