import heroImage from '../assets/hero-illustration.jpg';

export default function Landing() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <a href="/" className="logo">Rent</a>
          <nav className="nav-links">
            <a href="#objets">Objets</a>
            <a href="#comment">Comment ça marche</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: '3rem 1rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', 
            marginBottom: '1rem', 
            color: 'var(--text)' 
          }}>
            Un oubli avant le cours ?
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
            color: 'var(--text-muted)', 
            marginBottom: '2rem', 
            maxWidth: '450px', 
            margin: '0 auto 2rem' 
          }}>
            Emprunte rapidement et discrètement le matériel dont tu as besoin. Sans interruption, sans stress.
          </p>
          
          {/* Hero Image */}
          <div className="hero-image-wrapper animate-scale-in">
            <img 
              src={heroImage} 
              alt="Fournitures scolaires" 
              className="hero-image"
            />
          </div>
          
          <a 
            href="#objets" 
            className="btn btn-primary" 
            style={{ fontSize: '1rem', padding: '1rem 2rem' }}
          >
            Voir les objets disponibles →
          </a>
        </div>
      </section>

      {/* How it works */}
      <section id="comment" style={{ padding: '3rem 1rem', background: '#f3f4f6' }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '2.5rem', 
            fontSize: 'clamp(1.5rem, 4vw, 1.75rem)' 
          }}>
            Comment ça marche ?
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.5rem', 
            maxWidth: '800px', 
            margin: '0 auto' 
          }}>
            {[
              { num: '1', title: 'Choisis', desc: 'Parcours les objets disponibles' },
              { num: '2', title: 'Réserve', desc: 'Clique sur "Réserver" en un instant' },
              { num: '3', title: 'Récupère', desc: 'Va chercher ton objet au point de retrait' },
            ].map(step => (
              <div key={step.num} style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '3rem', height: '3rem', borderRadius: '50%', 
                  background: 'var(--primary)', color: 'white', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem', fontSize: '1.25rem', fontWeight: '600',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  {step.num}
                </div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '2rem 1rem', 
        textAlign: 'center', 
        color: 'var(--text-muted)', 
        fontSize: '0.875rem', 
        borderTop: '1px solid var(--border)' 
      }}>
        <p>© 2026 Rent. Fait pour les étudiants, par des étudiants.</p>
      </footer>
    </div>
  );
}
