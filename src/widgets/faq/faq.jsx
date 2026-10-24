import { useState } from 'react';

export function FAQ({ faqs }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {faqs.map((faq) => (
        <div key={faq.id} style={{ borderBottom: '1px solid #eee', padding: '20px 0' }}>
          <div 
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontWeight: 600, color: 'var(--primary)' }}
          >
            {faq.question}
            <span>{openId === faq.id ? '−' : '+'}</span>
          </div>
          {openId === faq.id && <p style={{ marginTop: '15px', color: 'var(--text)' }}>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
