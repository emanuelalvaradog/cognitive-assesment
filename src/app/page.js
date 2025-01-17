// app/page.js

import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.layer3}></div>   
      <header>
        <h3>tailored just for you</h3>

        <div className={styles.containerMain}>
          <h1>Unlock your potential</h1>
          <span>(no matter who you are)</span>
        </div>

        <p>
        The first test designed to gain unbiased clarity on your actions and behaviors, understanding the &aposwhy&apos behind them. Uncover the true you.
        </p>
        <Link href="/quizz">
          <button className={styles.ctaButton}>Start your journey now</button>
        </Link>
      </header>

      <section className={styles.reviewsContainer}>
        <div className={styles.reviewBox}>
          <p>
            &quotThe insights I gained from this assessment were eye-opening. It helped me
            understand my strengths in both personal and professional life.&quot
          </p>
        </div>
        <div className={styles.reviewBox}>
          <p>
            &quotThis assessment provided a deep understanding of my personality traits. It
            guided my career path and relationships.&quot
          </p>
        </div>
        <div className={styles.reviewBox}>
          <p>
            &quotThe insights I gained from this assessment were eye-opening. It helped me
            understand my strengths in both personal and professional life.&quot
          </p>
        </div>
        <div className={styles.reviewBox}>
          <p>
            &quotThis assessment provided a deep understanding of my personality traits. It
            guided my career path and relationships.&quot
          </p>
        </div>
        <div className={styles.reviewBox}>
          <p>
            &quotThe insights I gained from this assessment were eye-opening. It helped me
            understand my strengths in both personal and professional life.&quot
          </p>
        </div>
        <div className={styles.reviewBox}>
          <p>
            &quotThis assessment provided a deep understanding of my personality traits. It
            guided my career path and relationships.&quot
          </p>
        </div>
        <div className={styles.reviewBox}>
          <p>
            &quotThe insights I gained from this assessment were eye-opening. It helped me
            understand my strengths in both personal and professional life.&quot
          </p>
        </div>
        <div className={styles.reviewBox}>
          <p>
            &quotThis assessment provided a deep understanding of my personality traits. It
            guided my career path and relationships.&quot
          </p>
        </div>        
      </section>
      
    </div>
  );
}
