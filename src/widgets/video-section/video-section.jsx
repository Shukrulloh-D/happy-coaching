import { StepCard } from '@/entities/step/step-card';
import { Container } from '@/shared/ui/container/container';
import styles from './video-section.module.css';

export function VideoSection({ title, subtitle, steps, imageSrc }) {
  return (
    <section className={styles.section}>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#999', fontSize: '14px', textTransform: 'uppercase' }}>{subtitle}</span>
          <h2 style={{ fontSize: '40px', marginTop: '10px', color: 'var(--primary)' }}>{title}</h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.left}>
            {steps.map(s => <StepCard key={s.id} step={s} />)}
          </div>
          <div className={styles.right}>
            <div className={styles.videoWrapper}>
               <img src={imageSrc} alt="Video Placeholder" className={styles.videoImage} />
               <div className={styles.playBtn}>▶</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
