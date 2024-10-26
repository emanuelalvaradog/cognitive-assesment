'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './results.module.scss';

export default function Results() {
  const router = useRouter();
  const [scores, setScores] = useState(null);

  useEffect(() => {
    const storedScores = sessionStorage.getItem('scores');
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    } else {
      router.push('/'); // Redirect to home if no scores are found
    }
  }, [router]);

  if (!scores) {
    return null; // Render nothing while redirecting
  }

  const retakeQuizz = () => {
    sessionStorage.removeItem('scores');
    router.push('/');
  }

  // Calculate total score and percentages
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const percentages = {};
  Object.keys(scores).forEach((category) => {
    percentages[category] = ((scores[category] / totalScore) * 100).toFixed(1);
  });

  // Determine dominant traits
  const maxScore = Math.max(...Object.values(scores));
  const dominantTraits = Object.keys(scores).filter(
    (category) => scores[category] === maxScore
  );

  return (
    <div className={styles.container}>

      <section className={styles.analysisSection}>
        <h2>
          Your dominant trait{dominantTraits.length > 1 ? 's are' : ' is'}:
        </h2>
        {dominantTraits.map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <p>{getDescriptionForCategory(category)}</p>
          </div>
        ))}
      </section>
      
      <section className={styles.scoresSection}>
        {Object.keys(scores).map((category) => (
          <div key={category} className={styles.scoreCard}>
            <h2>{category}</h2>
            <p>{percentages[category]}%</p>
          </div>
        ))}
      </section>


      <button onClick={retakeQuizz} className={styles.ctaButton}>
        Retake the Quiz
      </button>
    </div>
  );
}

function getDescriptionForCategory(category) {
  const descriptions = {
    Analytical:
      'You have a strong analytical mind, capable of solving complex problems with logical reasoning and critical thinking.',
    Structural:
      'You value organization and structure, preferring clear plans and detailed guidelines in your approach.',
    Conceptual:
      'You are creative and imaginative, always exploring new ideas and innovative solutions.',
    Social:
      'You are outgoing and empathetic, thriving on interactions and building meaningful relationships with others.',
  };
  return descriptions[category] || '';
}
