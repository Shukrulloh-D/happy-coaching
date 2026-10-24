import { Link } from 'react-router-dom';
import styles from './logo.module.css';
export function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <div className={styles.icon}>P</div>
      Happy Coaching
    </Link>
  );
}
