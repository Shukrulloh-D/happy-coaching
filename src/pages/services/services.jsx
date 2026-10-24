import { Container } from '@/shared/ui/container/container';
import { SectionTitle } from '@/shared/ui/section-title/section-title';
import { Accordion } from '@/shared/ui/accordion/accordion';
import { ServiceCard } from '@/entities/service/service-card';
import { VideoSection } from '@/widgets/video/video-section';
import { services, faqs, steps } from '@/shared/lib/mock-data';
import styles from './services.module.css';

export function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
         <Container>
            <div className={styles.heroGrid}>
               <div style={{ flex: 1 }}>
                  <h1 className={styles.title}>I help people to discover their true potential</h1>
                  <p className={styles.text}>I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps that I discovered to hack productivity.</p>
               </div>
               <div style={{ flex: 1 }}>
                  <img src="/images/service.png" alt="Services" className={styles.img} />
               </div>
            </div>
         </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <SectionTitle title="I can help you in these particular areas." align="center" />
          <div className={styles.grid2}>
            {services.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </Container>
      </section>

      <VideoSection title="Are you ready to transform your life?" subtitle="How does it work?" steps={steps} imageSrc="/images/video.png" />

      <section className={styles.section} style={{ background: 'var(--bg-gray)' }}>
        <Container>
          <SectionTitle title="Good to know." script="Everything you need to know about my services" align="center" />
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
