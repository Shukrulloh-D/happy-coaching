import { NavLink } from 'react-router-dom';
import { Container } from '@/shared/ui/container/container';
import { Logo } from '@/shared/ui/logo/logo';
import { Button } from '@/shared/ui/button/button';
import { useModal } from '@/shared/context/modal-context';
import styles from './header.module.css';

export function Header() {
  const { open } = useModal();
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Logo />
          <nav className={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/extra-sales">Extra Salespage</NavLink>
          </nav>
          <Button onClick={open}>Get your free guide now</Button>
        </div>
      </Container>
    </header>
  );
}
