import { Container } from '@/shared/ui/container/container';
import { Button } from '@/shared/ui/button/button';
import { SectionTitle } from '@/shared/ui/section-title/section-title';
import { ServiceCard } from '@/entities/service/service-card';
import { TestimonialCard } from '@/entities/testimonial/testimonial-card';
import { BlogCard } from '@/entities/blog/blog-card';
import { useModal } from '@/shared/context/modal-context';
import { services, testimonials, blogs } from '@/shared/lib/mock-data';
import styles from './home.module.css';

export function HomePage() {
  const { open } = useModal();

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.script}>PROVEN STRATEGIES BACKED BY SCIENCE</span>
              <h1 className={styles.title}>Live life at the full potential</h1>
              <p className={styles.text}>I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps that I discovered to hack productivity.</p>
              <Button onClick={open}>Get your free guide now</Button>
            </div>
            <div className={styles.imageWrap}>
              <div className={styles.floatingCard}>
                <div className={styles.floatIcon}>🎯</div>
                <div>
                  <div className={styles.floatTitle}>100%</div>
                  <div className={styles.floatText}>Success rate this year</div>
                </div>
              </div>
              <img src="/images/hero.png" alt="Coach" className={styles.heroImg} />
            </div>
          </div>
        </Container>
      </section>
      
      <section style={{ padding: '100px 0' }}>
        <Container>
          <SectionTitle title="I can help you in these particular areas." />
          <div className={styles.grid3}>
            {services.slice(0, 3).map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </Container>
      </section>

      <div className="container">
        <SectionTitle title="Hear out what my clients say about me." />
        <div className={styles.grid3}>
            {testimonials.map(t => <TestimonialCard key={t.id} data={t} />)}
        </div>
      </div>

      <div className="container" style={{ marginTop: '100px' }}>
        <SectionTitle title="Stay Motivated, read the weekly blog articles." align="center" />
        <div className={styles.grid3}>
            {blogs.map(b => <BlogCard key={b.id} post={b} />)}
        </div>
      </div>

      <Container>
        <div className={styles.promoGrid}>
            <div style={{ flex: 1 }}>
              <h2 className={styles.promoTitle}>Don't miss out on my 'Live life at the full potential' free guide</h2>
              <p style={{ color: '#777', marginBottom: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <Button onClick={open}>Download my free guide</Button>
            </div>
            <div className={styles.promoCard}>
              <div className={styles.promoBadge}>Free guide!</div>
              <h3 style={{ fontSize: '32px', color: '#fff' }}>Are you ready to transform your life?</h3>
              <img src="/images/purple-card.png" alt="Guide" className={styles.promoImg} />
            </div>
        </div>
      </Container>

      <Container>
        <div className={styles.sessionBox}>
            <div className={styles.sessionContent}>
              <h2 style={{ fontSize: '36px', color: 'var(--primary)', marginBottom: '15px' }}>Get 15-Minutes Complimentary online session.</h2>
              <p style={{ color: '#777', marginBottom: '30px' }}>Limited Period Offer. Claim Now.</p>
              <Button>Book now</Button>
            </div>
            <img src="/images/session.png" alt="Session" className={styles.sessionImg} />
        </div>
      </Container>
    </>
  );
}
