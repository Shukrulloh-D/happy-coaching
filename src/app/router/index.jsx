import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/main-layout';
import { HomePage } from '@/pages/home/home';
import { ServicesPage } from '@/pages/services/services';
import { AboutPage } from '@/pages/about/about';
import { ExtraSalesPage } from '@/pages/extra-sales/extra-sales';
import { FreeGuidePage } from '@/pages/free-guide/free-guide';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'extra-sales', element: <ExtraSalesPage /> },
      { path: 'free-guide', element: <FreeGuidePage /> },
    ],
  },
]);

export { router };
