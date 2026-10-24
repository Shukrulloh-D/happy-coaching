import styles from './button.module.css';
export function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button className={`${styles.btn} ${variant === 'outline' ? styles.btnOutline : ''} ${className}`} {...props}>
      {children}
    </button>
  );
}
