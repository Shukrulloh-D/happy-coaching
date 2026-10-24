import { SectionTitle } from '@/shared/ui/section-title/section-title';
import { BlogCard } from '@/entities/blog/blog-card';
import { Container } from '@/shared/ui/container/container';
import { Button } from '@/shared/ui/button/button';
import styles from './blog-section.module.css';

export function BlogSection({ posts }) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle title="Stay Motivated, read the weekly blog articles." align="center" />
        <div className={styles.grid}>
          {posts.map(p => <BlogCard key={p.id} post={p} />)}
        </div>
        <div className={styles.btnWrap}>
          <Button>Read more blogs</Button>
        </div>
      </Container>
    </section>
  );
}
