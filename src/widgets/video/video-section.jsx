import { Container } from '@/shared/ui/container/container';
import { StepCard } from '@/entities/step/step-card';
import styles from './video-section.module.css';

export function VideoSection({ title, subtitle, steps, imageSrc }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className={styles.subtitle}>{subtitle}</span>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.steps}>
              {steps.map(s => <StepCard key={s.id} step={s} />)}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.videoWrapper}>
               <img src={imageSrc} alt="Video" className={styles.videoImage} />
               <div className={styles.playBtn}>▶</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
