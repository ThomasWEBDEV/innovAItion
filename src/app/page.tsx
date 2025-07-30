'use client'

import SupabaseTest from '../components/SupabaseTest'
import SimpleTest from '@/components/SimpleTest'

export default function Home() {
  return (
    <>
      <div style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        color: '#ffffff',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        overflowX: 'hidden',
        lineHeight: '1.6',
        position: 'relative'
      }}>
        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              background: 'linear-gradient(45deg, #00ff88, #00ccff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(0, 255, 136, 0.3)'
            }}>
              InnovAItion
            </div>
            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <a href="#" style={{
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>
                Accueil
              </a>
              <a href="#test" style={{
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>
                Test API
              </a>
              <a href="/about" style={{
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                À propos
                <span style={{
                  position: 'absolute',
                  bottom: '0.2rem',
                  left: '50%',
                  width: '0%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #00ff88, #00ccff)',
                  transition: 'all 0.3s ease',
                  transform: 'translateX(-50%)'
                }} />
              </a>
              <a href="#" style={{
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Effects */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `radial-gradient(circle at 30% 70%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 30%, rgba(0, 204, 255, 0.1) 0%, transparent 50%)`,
            animation: 'pulse 4s ease-in-out infinite alternate'
          }} />

          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(90deg, transparent 98%, rgba(0, 255, 136, 0.2) 100%),
              linear-gradient(180deg, transparent 98%, rgba(0, 255, 136, 0.2) 100%)
            `,
            backgroundSize: '50px 50px',
            animation: 'matrix-move 20s linear infinite'
          }} />

          <div style={{
            textAlign: 'center',
            zIndex: 10,
            maxWidth: '800px',
            padding: '0 2rem'
          }}>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: '900',
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #ffffff, #00ff88, #00ccff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'glow 2s ease-in-out infinite alternate',
              textShadow: '0 0 30px rgba(0, 255, 136, 0.5)'
            }}>
              L'AVENIR DE L'IA
            </h1>

            <p style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: '#b0b0b0',
              animation: 'fadeInUp 1s ease-out 0.5s both'
            }}>
              Découvrez les dernières innovations en intelligence artificielle.
              Agrégateur d'actualités tech alimenté par l'IA nouvelle génération.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              marginTop: '3rem',
              animation: 'fadeInUp 1s ease-out 1s both',
              flexWrap: 'wrap'
            }}>
              <a href="#test" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                color: '#000000',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0, 255, 136, 0.3)',
                display: 'inline-block'
              }}>
                Tester l'API
              </a>
              <button style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                background: 'transparent',
                color: '#ffffff',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }}>
                En savoir plus
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{
          padding: '8rem 2rem',
          background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: '3rem',
              marginBottom: '4rem',
              background: 'linear-gradient(45deg, #ffffff, #00ff88)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Fonctionnalités Avancées
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
                border: '1px solid rgba(100, 116, 139, 0.3)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(148, 163, 184, 0.1)',
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)'
                }} />
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  color: '#00ff88',
                  textShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
                }}>

                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#ffffff'
                }}>
                  Temps Réel
                </h3>
                <p style={{
                  color: '#b0b0b0',
                  lineHeight: '1.6'
                }}>
                  Agrégation en temps réel des sources tech les plus fiables.
                  Notifications instantanées pour les breaking news.
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
                border: '1px solid rgba(100, 116, 139, 0.3)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(148, 163, 184, 0.1)',
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)'
                }} />
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  color: '#00ff88',
                  textShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
                }}>

                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#ffffff'
                }}>
                  IA Générative
                </h3>
                <p style={{
                  color: '#b0b0b0',
                  lineHeight: '1.6'
                }}>
                  Résumés automatiques d'articles grâce à l'IA GPT-4.
                  Analyse contextuelle et insights pertinents en temps réel.
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
                border: '1px solid rgba(100, 116, 139, 0.3)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(148, 163, 184, 0.1)',
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)'
                }} />
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  color: '#00ff88',
                  textShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
                }}>

                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#ffffff'
                }}>
                  Personnalisation
                </h3>
                <p style={{
                  color: '#b0b0b0',
                  lineHeight: '1.6'
                }}>
                  Algorithme d'apprentissage adaptatif qui comprend vos préférences.
                  Feed personnalisé selon vos intérêts tech.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TEST SECTION - HACKERNEWS API */}
        <section id="test" style={{
          padding: '6rem 2rem',
          background: '#000000'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #ff6b6b, #ffa500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Test Live API
            </h2>
            <p style={{
              color: '#b0b0b0',
              fontSize: '1.2rem'
            }}>
              Démonstration en temps réel de l'agrégation HackerNews
            </p>
          </div>

          <SimpleTest />
        </section>

        {/* Stats Section */}
        <section style={{
          padding: '6rem 2rem',
          background: '#0a0a0a'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '15px',
              border: '1px solid rgba(100, 116, 139, 0.3)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '900',
                color: '#00ff88',
                marginBottom: '0.5rem',
                textShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
              }}>
                1M+
              </div>
              <div style={{
                fontSize: '1.2rem',
                color: '#b0b0b0'
              }}>
                Articles Analysés
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '15px',
              border: '1px solid rgba(100, 116, 139, 0.3)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '900',
                color: '#00ff88',
                marginBottom: '0.5rem',
                textShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
              }}>
                50K+
              </div>
              <div style={{
                fontSize: '1.2rem',
                color: '#b0b0b0'
              }}>
                Utilisateurs Actifs
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '15px',
              border: '1px solid rgba(100, 116, 139, 0.3)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '900',
                color: '#00ff88',
                marginBottom: '0.5rem',
                textShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
              }}>
                99.9%
              </div>
              <div style={{
                fontSize: '1.2rem',
                color: '#b0b0b0'
              }}>
                Uptime
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '15px',
              border: '1px solid rgba(100, 116, 139, 0.3)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '900',
                color: '#00ff88',
                marginBottom: '0.5rem',
                textShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
              }}>
                24/7
              </div>
              <div style={{
                fontSize: '1.2rem',
                color: '#b0b0b0'
              }}>
                Monitoring
              </div>
            </div>
          </div>
        </section>

        {/* Status Tests */}
        <section style={{
          padding: '4rem 2rem',
          background: '#000000'
        }}>
          <div style={{
            maxWidth: '500px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{
              background: 'rgba(34, 197, 94, 0.2)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              color: '#4ade80',
              padding: '12px 16px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              ✅ Docker Setup Réussi !
            </div>
            <SupabaseTest />
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          background: '#000000',
          padding: '3rem 2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#666666',
              marginBottom: '1rem'
            }}>
              © 2025 InnovAItion. Powered by Next.js & OpenAI
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '1rem'
            }}>
              <a href="#" style={{
                color: '#666666',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}>🐦</a>
              <a href="#" style={{
                color: '#666666',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}>💼</a>
              <a href="#" style={{
                color: '#666666',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}>🐙</a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }

        @keyframes matrix-move {
          0% { transform: translateY(0px); }
          100% { transform: translateY(50px); }
        }

        @keyframes glow {
          0% { filter: drop-shadow(0 0 20px rgba(0, 255, 136, 0.5)); }
          100% { filter: drop-shadow(0 0 40px rgba(0, 255, 136, 0.8)); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        nav a:hover {
          color: #00ff88 !important;
          text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
        }

        nav a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00ff88, #00ccff);
          transition: width 0.3s ease;
        }

        nav a:hover::after {
          width: 100%;
        }

        nav a[href="/about"]:hover {
          color: #00ff88 !important;
          text-shadow: 0 0 15px rgba(0, 255, 136, 0.6);
          background: rgba(0, 255, 136, 0.1) !important;
          transform: translateY(-2px);
        }

        nav a[href="/about"]:hover span {
          width: 100% !important;
          box-shadow: 0 0 10px rgba(0, 255, 136, 0.8);
        }

        button:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 15px 40px rgba(0, 255, 136, 0.5) !important;
        }

        [style*="background: rgba(255, 255, 255, 0.05)"]:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 255, 136, 0.2);
          border-color: rgba(0, 255, 136, 0.3) !important;
        }

        @media (max-width: 768px) {
          nav ul {
            display: none;
          }

          h1 {
            font-size: 2.5rem !important;
          }

          p {
            font-size: 1.2rem !important;
          }

          [style*="display: flex"][style*="gap: 1rem"] {
            flex-direction: column;
            align-items: center;
          }

          [style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #00ff88, #00ccff);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #00ccff, #00ff88);
        }
      `}</style>
    </>
  );
}
