'use client'

export default function ContactPage() {
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
            <a href="/" style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              background: 'linear-gradient(45deg, #00ff88, #00ccff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
              textDecoration: 'none'
            }}>
              InnovAItion
            </a>
            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <a href="/" style={{
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>
                Accueil
              </a>
              <a href="/#test" style={{
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
              <a href="/contact" style={{
                color: '#00ff88',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                fontWeight: '600'
              }}>
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section Contact */}
        <section style={{
          paddingTop: '120px',
          paddingBottom: '4rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #1a1a1a 100%)',
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
            background: `
              radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 204, 255, 0.05) 0%, transparent 50%)
            `,
            pointerEvents: 'none'
          }} />

          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(90deg, transparent 98%, rgba(0, 255, 136, 0.1) 100%),
              linear-gradient(180deg, transparent 98%, rgba(0, 255, 136, 0.1) 100%)
            `,
            backgroundSize: '50px 50px',
            animation: 'matrix-move 20s linear infinite'
          }} />

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10
          }}>
            {/* Header */}
            <div style={{
              textAlign: 'center',
              marginBottom: '4rem'
            }}>
              <h1 style={{
                fontSize: '4rem',
                fontWeight: '900',
                marginBottom: '1rem',
                background: 'linear-gradient(45deg, #ffffff, #00ff88, #00ccff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(0, 255, 136, 0.3)',
                animation: 'glow 2s ease-in-out infinite alternate'
              }}>
                Créons Ensemble
              </h1>
              <p style={{
                fontSize: '1.3rem',
                color: '#b0b0b0',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Développeur Full-Stack passionné, disponible 24/7 pour transformer vos idées en solutions digitales innovantes
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '3rem',
              alignItems: 'start'
            }}>
              {/* Informations Contact */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(51, 65, 85, 0.4) 100%)',
                border: '1px solid rgba(100, 116, 139, 0.3)',
                borderRadius: '20px',
                padding: '2.5rem',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  marginBottom: '2rem',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ color: '#00ff88' }}>🚀</span>
                  Let's Connect
                </h2>

                {/* Contact Info */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>👨‍💻</span>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '600' }}>Thomas FERET</div>
                      <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Full-Stack Developer</div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>📧</span>
                    <div>
                      <a href="mailto:thomas.feret@hotmail.fr" style={{
                        color: '#00ff88',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}>
                        thomas.feret@hotmail.fr
                      </a>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>📱</span>
                    <div>
                      <a href="tel:+33781822142" style={{
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontWeight: '600'
                      }}>
                        07 81 82 21 42
                      </a>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>📍</span>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '600' }}>Rennes, Bretagne</div>
                      <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>France 🇫🇷</div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    background: 'rgba(0, 255, 136, 0.05)',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 255, 136, 0.2)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>⚡</span>
                    <div>
                      <div style={{ color: '#00ff88', fontWeight: '600' }}>Disponible 24/7</div>
                      <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Réponse sous 2h garantie</div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}>
                  <a href="https://github.com/ThomasWEBDEV" target="_blank" rel="noopener noreferrer" style={{
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    🔗 GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/thomas-feret-dev/" target="_blank" rel="noopener noreferrer" style={{
                    padding: '0.75rem',
                    background: 'rgba(0, 119, 181, 0.2)',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 119, 181, 0.3)',
                    color: '#0077b5',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    💼 LinkedIn
                  </a>
                </div>

                {/* Types de collaboration */}
                <div style={{
                  background: 'rgba(0, 255, 136, 0.05)',
                  border: '1px solid rgba(0, 255, 136, 0.2)',
                  borderRadius: '15px',
                  padding: '1.5rem'
                }}>
                  <h3 style={{
                    color: '#00ff88',
                    marginBottom: '1rem',
                    fontSize: '1.1rem',
                    fontWeight: '700'
                  }}>
                    🎯 Collaborations Recherchées
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: '#b0b0b0'
                  }}>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#00ff88' }}>▶</span> Applications Web Full-Stack
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#00ff88' }}>▶</span> Solutions IA & Automatisation
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#00ff88' }}>▶</span> Missions Freelance
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#00ff88' }}>▶</span> Projets Startup
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#00ff88' }}>▶</span> Consulting Technique
                    </li>
                  </ul>
                </div>
              </div>

              {/* Formulaire de Contact */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(51, 65, 85, 0.4) 100%)',
                border: '1px solid rgba(100, 116, 139, 0.3)',
                borderRadius: '20px',
                padding: '2.5rem',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  marginBottom: '2rem',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ color: '#00ccff' }}>💬</span>
                  Démarrons votre projet
                </h2>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      required
                      style={{
                        padding: '1rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        color: '#ffffff',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    <input
                      type="email"
                      placeholder="Votre email"
                      required
                      style={{
                        padding: '1rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        color: '#ffffff',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>

                  <select
                    required
                    style={{
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <option value="">Type de projet</option>
                    <option value="webapp">Application Web</option>
                    <option value="mobile">Application Mobile</option>
                    <option value="ai">Solution IA</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="saas">SaaS</option>
                    <option value="consulting">Consulting</option>
                    <option value="autre">Autre</option>
                  </select>

                  <textarea
                    placeholder="Décrivez votre projet en détail..."
                    required
                    rows={6}
                    style={{
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                  />

                  <button
                    type="submit"
                    style={{
                      padding: '1.2rem 2rem',
                      background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                      border: 'none',
                      borderRadius: '50px',
                      color: '#000000',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 10px 30px rgba(0, 255, 136, 0.3)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    🚀 Lancer le Projet
                  </button>
                </form>

                <div style={{
                  marginTop: '2rem',
                  padding: '1rem',
                  background: 'rgba(0, 255, 136, 0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 255, 136, 0.2)',
                  textAlign: 'center'
                }}>
                  <p style={{
                    color: '#00ff88',
                    margin: 0,
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    ⚡ Réponse garantie sous 2h • Devis gratuit • Premier call offert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{
          padding: '6rem 2rem',
          background: '#000000'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              marginBottom: '3rem',
              background: 'linear-gradient(45deg, #ffffff, #00ff88)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Questions Fréquentes
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#00ff88', marginBottom: '0.5rem' }}>
                  🕐 Délais de réponse ?
                </h3>
                <p style={{ color: '#b0b0b0', margin: 0 }}>
                  Je réponds sous 2h maximum, 7j/7. Pour les urgences, n'hésitez pas à appeler directement.
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#00ff88', marginBottom: '0.5rem' }}>
                  💰 Comment ça marche niveau tarifs ?
                </h3>
                <p style={{ color: '#b0b0b0', margin: 0 }}>
                  Devis gratuit sous 24h. Tarifs transparents selon la complexité. Paiement échelonné possible.
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#00ff88', marginBottom: '0.5rem' }}>
                  🚀 Délais de livraison ?
                </h3>
                <p style={{ color: '#b0b0b0', margin: 0 }}>
                  Variables selon le projet. MVP en 1-2 semaines, applications complètes 4-8 semaines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          background: '#0a0a0a',
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
              <a href="https://github.com/ThomasWEBDEV" target="_blank" style={{
                color: '#666666',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}>🐙</a>
              <a href="https://www.linkedin.com/in/thomas-feret-dev/" target="_blank" style={{
                color: '#666666',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}>💼</a>
              <a href="/" style={{
                color: '#666666',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}>🏠</a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes matrix-move {
          0% { transform: translateY(0px); }
          100% { transform: translateY(50px); }
        }

        @keyframes glow {
          0% { filter: drop-shadow(0 0 20px rgba(0, 255, 136, 0.5)); }
          100% { filter: drop-shadow(0 0 40px rgba(0, 255, 136, 0.8)); }
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

        input:focus, textarea:focus, select:focus {
          border-color: rgba(0, 255, 136, 0.5) !important;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.2) !important;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }

          [style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }

          [style*="display: grid"][style*="1fr 1fr"] {
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
