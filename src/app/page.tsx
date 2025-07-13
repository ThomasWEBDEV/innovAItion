import SupabaseTest from '../components/SupabaseTest'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b 0%, #7c3aed 50%, #1e293b 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <header style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
            🚀 InnovAItion
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <button style={{
              background: 'transparent',
              border: 'none',
              color: '#d1d5db',
              cursor: 'pointer',
              padding: '8px 16px'
            }}>
              Login
            </button>
            <button style={{
              background: '#7c3aed',
              border: 'none',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}>
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '24px',
          lineHeight: '1.1'
        }}>
          L'actualité IA
          <span style={{ color: '#c084fc' }}> résumée </span>
          par l'IA
        </h1>

        <p style={{
          fontSize: '20px',
          color: '#d1d5db',
          marginBottom: '48px',
          maxWidth: '600px',
          margin: '0 auto 48px auto'
        }}>
          Découvrez les dernières actualités d'HackerNews et Reddit,
          résumées intelligemment par OpenAI. Restez à jour sans perdre de temps.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          marginBottom: '64px',
          flexWrap: 'wrap'
        }}>
          <button style={{
            background: '#7c3aed',
            border: 'none',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            📰 Voir les derniers articles
          </button>
          <button style={{
            background: 'transparent',
            border: '2px solid #7c3aed',
            color: '#c084fc',
            padding: '16px 32px',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            ❓ Comment ça marche ?
          </button>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '64px'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '12px',
            padding: '32px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚡</div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>Temps Réel</h3>
            <p style={{ color: '#d1d5db' }}>Articles mis à jour en continu depuis HackerNews et Reddit</p>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '12px',
            padding: '32px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤖</div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>IA Résumés</h3>
            <p style={{ color: '#d1d5db' }}>Résumés intelligents générés par OpenAI GPT</p>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '12px',
            padding: '32px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎯</div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>Personnalisé</h3>
            <p style={{ color: '#d1d5db' }}>Filtrez par sujet et source selon vos préférences</p>
          </div>
        </div>

        {/* Status Tests */}
        <div style={{
          maxWidth: '400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{
            background: 'rgba(34, 197, 94, 0.2)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            color: '#4ade80',
            padding: '12px 16px',
            borderRadius: '8px'
          }}>
            ✅ Docker Setup Réussi !
          </div>
          <SupabaseTest />
        </div>
      </main>
    </div>
  );
}
