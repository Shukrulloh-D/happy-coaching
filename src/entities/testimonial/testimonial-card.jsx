import styles from './testimonial-card.module.css';
export function TestimonialCard({ data }) {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{data.text}</p>
      <div className={styles.authorWrap}>
        <img src={data.avatar} alt={data.name} className={styles.avatar} />
        <div>
          <h4 className={styles.name}>{data.name}</h4>
          <div className={styles.stars}>{'★'.repeat(data.rating)}{'☆'.repeat(5 - data.rating)}</div>
        </div>
      </div>
    </div>
  );
}
