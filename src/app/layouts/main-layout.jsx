import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from '@/widgets/header/header';
import { Footer } from '@/widgets/footer/footer';
import { Newsletter } from '@/widgets/newsletter/newsletter';
import { FreeGuideModal } from '@/features/free-guide-modal/free-guide-modal';
 
export function MainLayout() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
      <FreeGuideModal />
      <ScrollRestoration />
    </>
  );
}
