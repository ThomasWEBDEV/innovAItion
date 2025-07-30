export default function AboutPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      color: '#ffffff'
    }}>
      <nav style={{
        padding: '1rem 2rem',
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(100, 116, 139, 0.2)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <a href="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#00ff88',
            textDecoration: 'none'
          }}>
            InnovAItion
          </a>
          <a href="/" style={{
            color: '#64748b',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}>
            ← Retour à l'accueil
          </a>
        </div>
      </nav>
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#00ff88',
          textAlign: 'center'
        }}>
          À propos du développeur
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#b0b0b0',
          fontSize: '1.1rem'
        }}>
          Page en construction...
        </p>
      </main>
    </div>
  );
}
