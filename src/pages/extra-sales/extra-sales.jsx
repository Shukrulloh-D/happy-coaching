import { Container } from '@/shared/ui/container/container';
import { Button } from '@/shared/ui/button/button';
import { SectionTitle } from '@/shared/ui/section-title/section-title';
import { VideoSection } from '@/widgets/video/video-section';
import { steps } from '@/shared/lib/mock-data';

export function ExtraSalesPage() {
  return (
    <>
      <section style={{ padding: '100px 0', background: 'var(--bg-gray)' }}>
        <Container>
          <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
            <div style={{ flex: 1 }}>
              <span style={{ color: '#999', fontWeight: 600 }}>PROVEN STRATEGIES</span>
              <h1 style={{ fontSize: '56px', margin: '20px 0', color: 'var(--primary)' }}>Self Esteem Therapy</h1>
              <p style={{ fontSize: '18px', marginBottom: '30px', lineHeight: 1.6 }}>I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps.</p>
              <Button>Claim your spot</Button>
            </div>
            <div style={{ flex: 1 }}>
               <img src="/images/therapy.png" alt="Therapy" style={{ width: '100%', borderRadius: '20px' }} />
            </div>
          </div>
        </Container>
      </section>

      <VideoSection title="Are you ready to transform your life?" subtitle="How does it work?" steps={steps} imageSrc="/images/video.png" />
    </>
  );
}
