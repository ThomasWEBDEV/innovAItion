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
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '3rem 2rem'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            marginBottom: '1.5rem',
            color: '#00ff88',
            textShadow: '0 0 30px rgba(0, 255, 136, 0.4)',
            fontWeight: '900'
          }}>
            À propos d'InnovAItion
          </h1>
          <p style={{
            fontSize: '1.4rem',
            color: '#b0b0b0',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            La première plateforme d'agrégation d'actualités tech alimentée par l'IA générative.
            Révolutionnez votre veille technologique avec des résumés intelligents en temps réel.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gap: '3rem'
        }}>

          {/* Mission Section */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
            border: '1px solid rgba(100, 116, 139, 0.3)',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              color: '#ffffff',
              marginBottom: '2rem',
              borderBottom: '3px solid #00ff88',
              paddingBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              🎯 Notre Mission
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#e2e8f0',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              Démocratiser l'accès à l'information technologique de qualité en combinant l'agrégation intelligente
              et la puissance de l'IA générative. Nous transformons le flux d'actualités tech en insights actionnables
              pour les professionnels, développeurs et entreprises innovantes.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: 'rgba(0, 255, 136, 0.1)',
                padding: '1.5rem',
                borderRadius: '15px',
                border: '1px solid rgba(0, 255, 136, 0.2)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
                <h3 style={{ color: '#00ff88', marginBottom: '0.5rem' }}>Temps Réel</h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>Actualités analysées et résumées instantanément</p>
              </div>
              <div style={{
                background: 'rgba(59, 130, 246, 0.1)',
                padding: '1.5rem',
                borderRadius: '15px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧠</div>
                <h3 style={{ color: '#3b82f6', marginBottom: '0.5rem' }}>IA Avancée</h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>Résumés contextuels générés par GPT-4</p>
              </div>
              <div style={{
                background: 'rgba(139, 92, 246, 0.1)',
                padding: '1.5rem',
                borderRadius: '15px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌍</div>
                <h3 style={{ color: '#8b5cf6', marginBottom: '0.5rem' }}>Global</h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>Sources internationales Reddit & HackerNews</p>
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
            border: '1px solid rgba(100, 116, 139, 0.3)',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              color: '#ffffff',
              marginBottom: '2rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              🚀 Technologies de Pointe
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#b0b0b0',
              lineHeight: '1.7',
              marginBottom: '2.5rem'
            }}>
              InnovAItion s'appuie sur une architecture moderne et scalable, conçue pour traiter des millions d'articles
              avec une performance optimale et une fiabilité enterprise-grade.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                background: 'rgba(15, 23, 42, 0.6)',
                padding: '2rem',
                borderRadius: '15px',
                border: '1px solid rgba(100, 116, 139, 0.2)'
              }}>
                <h3 style={{
                  color: '#00ff88',
                  fontSize: '1.4rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  🎨 Frontend Excellence
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ color: '#e2e8f0', marginBottom: '0.8rem', fontSize: '1rem' }}>• Next.js 15 - Performance optimale</li>
                  <li style={{ color: '#e2e8f0', marginBottom: '0.8rem', fontSize: '1rem' }}>• TypeScript - Code robuste</li>
                  <li style={{ color: '#e2e8f0', marginBottom: '0.8rem', fontSize: '1rem' }}>• Framer Motion - Animations fluides</li>
                  <li style={{ color: '#e2e8f0', marginBottom: '0.8rem', fontSize: '1rem' }}>• Design responsive mobile-first</li>
                </ul>
              </div>
              <div style={{
                background: 'rgba(15, 23, 42, 0.6)',
                padding: '2rem',
                borderRadius: '15px',
                border: '1px solid rgba(100, 116, 139, 0.2)'
              }}>
                <h3 style={{
                  color: '#3b82f6',
                  fontSize: '1.4rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  ⚙️ Infrastructure Cloud
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ color: '#e2e8f0', marginBottom: '0.8rem', fontSize: '1rem' }}>• OpenAI GPT-4 - IA générative</li>
                  <li style={{ color: '#e2e8f0', marginBottom: '0.8rem', fontSize: '1rem' }}>• Supabase - Base de données temps réel</li>
                  <li style={{ color: '#e2e8f0', marginBottom: '0.8rem', fontSize: '1rem' }}>• Docker - Containerisation</li>
                  <li style={{ color: '#e2e8f0', marginBottom: '0.8rem', fontSize: '1rem' }}>• CI/CD automatisé</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
            border: '1px solid rgba(100, 116, 139, 0.3)',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              color: '#ffffff',
              marginBottom: '2rem',
              borderBottom: '3px solid #8b5cf6',
              paddingBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              👥 Équipe de Développement
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                background: 'rgba(15, 23, 42, 0.6)',
                padding: '2.5rem',
                borderRadius: '15px',
                border: '1px solid rgba(100, 116, 139, 0.2)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #00ff88, #00ccff)',
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#0f172a'
                }}>
                  TF
                </div>
                <h3 style={{
                  color: '#00ff88',
                  fontSize: '1.4rem',
                  marginBottom: '0.5rem'
                }}>
                  Thomas Feret
                </h3>
                <p style={{
                  color: '#3b82f6',
                  fontSize: '1rem',
                  marginBottom: '1rem',
                  fontWeight: '500'
                }}>
                  Lead Developer & Founder
                </p>
                <p style={{
                  color: '#b0b0b0',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  Expert en développement full-stack et IA générative. Spécialisé dans les architectures scalables
                  et l'intégration d'APIs d'intelligence artificielle.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem'
                }}>
                  <a href="https://github.com/ThomasWEBDEV" target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.5rem',
                    background: 'rgba(100, 116, 139, 0.2)',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    color: '#ffffff',
                    border: '1px solid rgba(100, 116, 139, 0.3)',
                    transition: 'all 0.3s ease',
                    fontSize: '0.9rem'
                  }}>
                    <span>🐙</span> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/thomas-feret-dev" target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.5rem',
                    background: 'rgba(59, 130, 246, 0.2)',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    color: '#ffffff',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    transition: 'all 0.3s ease',
                    fontSize: '0.9rem'
                  }}>
                    <span>💼</span> LinkedIn
                  </a>
                </div>
              </div>

              <div style={{
                background: 'rgba(15, 23, 42, 0.6)',
                padding: '2.5rem',
                borderRadius: '15px',
                border: '1px solid rgba(100, 116, 139, 0.2)'
              }}>
                <h3 style={{
                  color: '#8b5cf6',
                  fontSize: '1.4rem',
                  marginBottom: '1.5rem'
                }}>
                  🌟 Rejoignez l'Équipe
                </h3>
                <p style={{
                  color: '#b0b0b0',
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}>
                  InnovAItion recrute des talents passionnés par l'IA et les technologies émergentes.
                  Participez à la révolution de l'information technologique.
                </p>
                <div style={{
                  background: 'rgba(0, 255, 136, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 255, 136, 0.2)',
                  marginBottom: '1.5rem'
                }}>
                  <h4 style={{ color: '#00ff88', marginBottom: '1rem' }}>Postes Ouverts :</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>• DevOps Engineer</li>
                    <li style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>• Data Scientist IA</li>
                    <li style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>• UX/UI Designer</li>
                  </ul>
                </div>
                <a href="mailto:careers@innovaition.com" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #00ff88, #00ccff)',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  color: '#0f172a',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}>
                  <span>✉️</span> Candidater
                </a>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
            border: '1px solid rgba(100, 116, 139, 0.3)',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              color: '#ffffff',
              marginBottom: '3rem'
            }}>
              📊 InnovAItion en Chiffres
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}>
              <div>
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: '900',
                  color: '#00ff88',
                  marginBottom: '0.5rem',
                  textShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
                }}>
                  1M+
                </div>
                <div style={{ fontSize: '1.1rem', color: '#b0b0b0' }}>Articles Analysés</div>
              </div>
              <div>
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: '900',
                  color: '#3b82f6',
                  marginBottom: '0.5rem',
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                }}>
                  50K+
                </div>
                <div style={{ fontSize: '1.1rem', color: '#b0b0b0' }}>Utilisateurs Actifs</div>
              </div>
              <div>
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: '900',
                  color: '#8b5cf6',
                  marginBottom: '0.5rem',
                  textShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
                }}>
                  99.9%
                </div>
                <div style={{ fontSize: '1.1rem', color: '#b0b0b0' }}>Uptime</div>
              </div>
              <div>
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: '900',
                  color: '#f59e0b',
                  marginBottom: '0.5rem',
                  textShadow: '0 0 20px rgba(245, 158, 11, 0.5)'
                }}>
                  24/7
                </div>
                <div style={{ fontSize: '1.1rem', color: '#b0b0b0' }}>Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(59, 130, 246, 0.1))',
          borderRadius: '20px',
          border: '1px solid rgba(100, 116, 139, 0.3)'
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: '#00ff88',
            marginBottom: '1rem'
          }}>
            Prêt à Révolutionner Votre Veille Tech ?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: '#b0b0b0',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Rejoignez des milliers de professionnels qui font confiance à InnovAItion
            pour rester à la pointe de l'innovation technologique.
          </p>
          <a href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.2rem 2.5rem',
            background: 'linear-gradient(135deg, #00ff88, #00ccff)',
            borderRadius: '15px',
            textDecoration: 'none',
            color: '#0f172a',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}>
            <span>🚀</span> Découvrir la Plateforme
          </a>
        </div>
      </main>
    </div>
  );
}
