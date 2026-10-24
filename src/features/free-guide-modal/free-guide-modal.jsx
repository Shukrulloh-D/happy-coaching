import { useModal } from '@/shared/context/modal-context';
import { Button } from '@/shared/ui/button/button';
import styles from './free-guide-modal.module.css';

export function FreeGuideModal() {
  const { isOpen, closeModal } = useModal();
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button onClick={closeModal} className={styles.close}>✕</button>
        <h2 className={styles.title}>Get your free guide</h2>
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); alert('Guide sent!'); closeModal(); }}>
          <input type="text" placeholder="Name" required className={styles.input} />
          <input type="email" placeholder="Enter your email" required className={styles.input} />
          <Button type="submit" className="w-full">Get free guide</Button>
        </form>
      </div>
    </div>
  );
}
