import styles from './step-card.module.css';
export function StepCard({ step }) {
  return (
    <div className={styles.step}>
      <div className={styles.iconWrap}>
         <img src={step.icon} alt="icon" className={styles.icon} />
      </div>
      <div>
        <h4 className={styles.title}>{step.title}</h4>
        <p className={styles.text}>{step.text}</p>
      </div>
    </div>
  );
}
