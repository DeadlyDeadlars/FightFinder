import { useState } from 'react';

const faqs = [
  { q: "Приложение бесплатное?", a: "Да, базовый функционал полностью бесплатный. В будущем появятся премиум-функции." },
  { q: "Как происходит подбор партнёра?", a: "Алгоритм учитывает твой уровень подготовки, цели, предпочтительное время и геолокацию." },
  { q: "Это приложение для знакомств?", a: "Нет, FightFinder создан исключительно для поиска партнёров по тренировкам." },
  { q: "Когда будет запуск?", a: "Бета-версия планируется в Q1 2026. Подпишись на Telegram, чтобы узнать первым." },
  { q: "Какие виды тренировок поддерживаются?", a: "Тренажёрный зал, кроссфит, бокс, единоборства, йога, бег и другие." },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {faqs.map((faq, i) => (
        <div 
          key={i} 
          style={{
            background: open === i ? 'rgba(255,107,53,0.05)' : 'rgba(255,255,255,0.03)',
            border: open === i ? '1px solid rgba(255,107,53,0.3)' : '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              padding: '20px 24px',
              textAlign: 'left',
              fontWeight: 600,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: open === i ? '#FF6B35' : 'white',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'color 0.3s'
            }}
          >
            {faq.q}
            <span style={{ 
              color: '#FF6B35', 
              transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              fontSize: '12px'
            }}>▼</span>
          </button>
          <div style={{ 
            maxHeight: open === i ? '200px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease, padding 0.3s ease',
            padding: open === i ? '0 24px 20px' : '0 24px',
            color: '#9ca3af',
            lineHeight: '1.6'
          }}>
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  );
}
