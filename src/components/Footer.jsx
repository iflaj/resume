import React from 'react';
import { 
  ArrowUp, 
  Heart, 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  FileText,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResumeModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3.5rem'
        }} className="footer-grid">
          
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '1.2rem'
              }}>
                I
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>Mohamed Iflaj</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Software Development & Digital Marketing
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '380px', marginBottom: '1.5rem' }}>
              G.C.E. A/L Technology Stream graduate equipped with practical programming knowledge, certified marketing proficiency, and executive leadership track record.
            </p>

            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <a 
                href={personalInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline"
                style={{ borderColor: 'rgba(52, 211, 153, 0.4)', color: 'var(--accent-emerald)' }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
              <button 
                onClick={onOpenResumeModal}
                className="btn btn-sm btn-secondary"
              >
                <FileText size={15} color="var(--accent-cyan)" />
                <span>View CV</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Explore Portfolio
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { name: 'About Profile', href: '#about' },
                { name: 'Resume Intelligence & Analysis', href: '#analysis' },
                { name: 'Technical & Marketing Skills', href: '#skills' },
                { name: 'Executive Leadership Roles', href: '#experience' },
                { name: 'Academic Education & Certifications', href: '#education' },
                { name: 'Projects & Showcase', href: '#projects' },
                { name: 'Contact Inquiry', href: '#contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--text-muted)',
                      fontSize: '0.88rem',
                      transition: 'var(--transition-smooth)'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--accent-cyan)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Reference */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Direct Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={16} color="var(--accent-cyan)" />
                <span>{personalInfo.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={16} color="var(--accent-emerald)" />
                <span>{personalInfo.phoneInternational}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={16} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{personalInfo.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.825rem',
          color: 'var(--text-subtle)'
        }}>
          <div>
            © {new Date().getFullYear()} Mohamed Ikram Mohamed Iflaj. All Rights Reserved. Crafted with React & Modern CSS.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: 600,
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.color = 'var(--accent-cyan)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-main)';
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
