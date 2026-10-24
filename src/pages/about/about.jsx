import { Container } from '@/shared/ui/container/container';
import { Button } from '@/shared/ui/button/button';
import { SectionTitle } from '@/shared/ui/section-title/section-title';
import { TestimonialCard } from '@/entities/testimonial/testimonial-card';
import { testimonials } from '@/shared/lib/mock-data';
import styles from './about.module.css';

export function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div style={{ flex: 1 }}>
              <span style={{ color: '#999', fontWeight: 600 }}>ABOUT ME</span>
              <h1 className={styles.title}>About me</h1>
              <p style={{ fontSize: '18px', marginBottom: '30px', lineHeight: 1.6 }}>I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps that I discovered to hack productivity.</p>
              <Button>Get your free guide now</Button>
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>
               <img src="/images/about.png" alt="About" className={styles.img} />
            </div>
          </div>
        </Container>
      </section>
      
      <div className="container">
        <div className={styles.logos}>
          <span>Layers</span><span>Sisyphus</span><span>Circooles</span><span>Catalog</span><span>Quotient</span>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0' }}>
        <SectionTitle title="Hear out what my clients say about me." align="center" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {testimonials.map(t => <TestimonialCard key={t.id} data={t} />)}
        </div>
      </div>
    </>
  );
}
