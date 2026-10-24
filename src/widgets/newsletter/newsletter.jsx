import { Container } from '@/shared/ui/container/container';
import { Button } from '@/shared/ui/button/button';
import styles from './newsletter.module.css';

export function Newsletter() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <div>
            <h3 className={styles.title}>Get notified when I publish new articles</h3>
            <p className={styles.subtitle}>Stay up to date with the latest news, announcements, and articles.</p>
          </div>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className={styles.input} required />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
