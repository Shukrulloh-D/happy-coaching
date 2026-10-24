import { useState } from 'react';
import styles from './accordion.module.css';
export function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);
  return (
    <div>
      {items.map(item => (
        <div key={item.id} className={styles.item}>
          <div className={styles.header} onClick={() => setOpenId(openId === item.id ? null : item.id)}>
            {item.question}
            <span className={`${styles.icon} ${openId === item.id ? styles.iconOpen : ''}`}>+</span>
          </div>
          {openId === item.id && <div className={styles.content}>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}
