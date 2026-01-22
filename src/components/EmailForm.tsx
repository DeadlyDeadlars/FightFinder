import { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setEmail('');
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '16px' }}>
        <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>🎉</span>
        <p style={{ color: 'white', fontWeight: 600, fontSize: '18px' }}>Ты в списке!</p>
        <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '8px' }}>Мы напишем тебе, когда всё будет готово</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Твой email"
          required
          style={{
            flex: 1,
            minWidth: '200px',
            padding: '16px 24px',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white',
            fontSize: '16px',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            padding: '16px 32px',
            background: 'linear-gradient(to right, #FF6B35, #E55A2B)',
            color: 'white',
            fontWeight: 700,
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            opacity: status === 'loading' ? 0.5 : 1
          }}
        >
          {status === 'loading' ? 'Отправка...' : 'Записаться →'}
        </button>
      </div>
    </form>
  );
}
