import styles from './blog-card.module.css';
export function BlogCard({ post }) {
  return (
    <div className={styles.card}>
      <img src={post.image} alt={post.title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.text}>{post.text}</p>
      </div>
    </div>
  );
}
