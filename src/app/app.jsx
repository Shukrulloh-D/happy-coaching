import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ModalProvider } from '@/shared/context/modal-context';

export function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  );
}
