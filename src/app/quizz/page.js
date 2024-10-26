// app/quiz/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions as originalQuestions } from '../../data/questions';
import styles from './quizz.module.scss';
import Link from 'next/link';

export default function Quiz() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [questions] = useState(originalQuestions);

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: parseInt(value) });
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert('Please answer all the questions before submitting.');
      return;
    }

    const scores = {
      Analytical: 0,
      Structural: 0,
      Conceptual: 0,
      Social: 0,
    };

    questions.forEach((question) => {
      const answer = answers[question.id] || 0;
      scores[question.category] += answer;
    });

    sessionStorage.setItem('scores', JSON.stringify(scores));
    router.push('/results');
  };

  const nextQuestion = () => {
    if (index < questions.length - 1) {
      if (!answers[questions[index].id]) {
        alert('Please answer the question before proceeding.');
        return;
      }
      setIndex(index + 1);
    } else {
      handleSubmit();
    }
  }

  const previousQuestion = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  const progress = (Object.keys(answers).length / questions.length) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.layer3}></div>

      <header className={styles.header}>
        <Link href="/">
          <h1>Discover Yourself</h1>
        </Link>
      </header>

      <div key={questions[index].id} className={styles.questionCard}>
        <p>{index + 1} / {questions.length}</p>
        <h3>{questions[index].text}</h3>
        
        <div className={styles.sliderValue}>
          {answers[questions[index].id] || 3}
        </div>

        <div className={styles.sliderContainer}>
          
          <input
            type="range"
            min="1"
            max="5"
            value={answers[questions[index].id] || 3}
            onChange={(e) => handleAnswer(questions[index].id, e.target.value)}
            className={styles.slider}
          />
          <div className={styles.sliderLabels}>
            <span>Least like me</span>
            <span>Most like me</span>
          </div>
        </div>

         {/* Previous Arrow */}
         <button onClick={previousQuestion} className={styles.arrowButton}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke="#232323" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        
        {/* Next Arrow */}
        <button onClick={nextQuestion} className={styles.arrowButton}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke="#232323" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
