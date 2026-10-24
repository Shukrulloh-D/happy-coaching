import styles from './service-card.module.css';
export function ServiceCard({ service }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <img src={service.icon} alt="icon" className={styles.icon} />
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.text}>{service.text}</p>
    </div>
  );
}
