import { SectionTitle } from '@/shared/ui/section-title/section-title';
import { TestimonialCard } from '@/entities/testimonial/testimonial-card';
import { Container } from '@/shared/ui/container/container';
import styles from './testimonials-section.module.css';

export function TestimonialsSection({ title, data, columns = 3 }) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle title={title} align="left" />
        <div className={columns === 2 ? styles.grid2 : styles.grid}>
          {data.map(t => <TestimonialCard key={t.id} data={t} />)}
        </div>
      </Container>
    </section>
  );
}
