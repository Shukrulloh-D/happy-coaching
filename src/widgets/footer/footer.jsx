import { Link } from 'react-router-dom';
import { Container } from '@/shared/ui/container/container';
import { Logo } from '@/shared/ui/logo/logo';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <div style={{ marginBottom: '20px' }}><Logo /></div>
            <p className={styles.desc}>Design amazing digital experiences that create more happy in the world.</p>
          </div>
          <div>
            <h4 className={styles.colTitle}>Pages</h4>
            <div className={styles.links}>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About us</Link>
              <Link to="/extra-sales">Extra Sales/Landingpage</Link>
              <Link to="/free-guide">Free guide</Link>
            </div>
          </div>
          <div>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.links}>
              <span>+123 456 789</span>
              <span>hello@happydigital.nl</span>
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>Made with a 💙 by HappyDigital</span>
          <div className={styles.socials}>
            <span>in</span><span>fb</span><span>tw</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
