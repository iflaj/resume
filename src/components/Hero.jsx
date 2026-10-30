import React, { useState, useEffect } from 'react';
import { 
  Download, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  Code, 
  TrendingUp, 
  Award, 
  Camera,
  MessageCircle, 
  ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="section" style={{ paddingTop: '4.75rem', paddingBottom: '3.5rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Introductions & Actions */}
          <div>
            {/* Status Pill */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.35rem 0.95rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '1rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <span style={{
                position: 'relative',
                display: 'flex',
                height: '10px',
                width: '10px'
              }}>
                <span style={{
                  position: 'absolute',
                  display: 'inline-flex',
                  height: '100%',
                  width: '100%',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-emerald)',
                  opacity: 0.75,
                  animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
                }} />
                <span style={{
                  position: 'relative',
                  display: 'inline-flex',
                  borderRadius: '50%',
                  height: '10px',
                  width: '10px',
                  backgroundColor: 'var(--accent-emerald)'
                }} />
              </span>
              <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-main)' }}>
                {personalInfo.status}
              </span>
            </div>

            {/* Main Heading */}
            <h1 style={{ 
              fontSize: 'clamp(2.4rem, 5.2vw, 3.8rem)', 
              lineHeight: 1.1, 
              marginBottom: '1.25rem',
              fontWeight: 800
            }}>
              Hi, I'm <br />
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            {/* Animated Dynamic Subtitle */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              minHeight: '2.4rem',
              marginBottom: '1.5rem'
            }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '1.25rem', fontWeight: 500 }}>
                Specialized in
              </span>
              <span 
                key={currentSubtitleIndex}
                style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  color: 'var(--accent-cyan)',
                  animation: 'fadeInSlide 0.4s ease-out'
                }}
              >
                {personalInfo.subtitles[currentSubtitleIndex]}
              </span>
            </div>

            {/* Resume Summary Statement */}
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '580px'
            }}>
              {personalInfo.bio}
            </p>

            {/* Quick Badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginBottom: '2rem'
            }}>
              <div className="pill-badge active">
                <Code size={14} /> Technology Stream A/L
              </div>
              <div className="pill-badge active">
                <TrendingUp size={14} /> Digital Marketing
              </div>
              <div className="pill-badge active">
                <Camera size={14} /> Event Photography
              </div>
              <div className="pill-badge active">
                <Award size={14} /> 2x Student President
              </div>
              <div className="pill-badge">
                <MapPin size={14} /> Sri Lanka
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.9rem',
              alignItems: 'center'
            }}>
              <a href="#contact" className="btn btn-primary">
                <span>Get In Touch</span>
                <ArrowRight size={17} />
              </a>

              <button 
                onClick={onOpenResumeModal}
                className="btn btn-secondary"
              >
                <Sparkles size={16} color="var(--accent-cyan)" />
                <span>View Full Resume</span>
              </button>

              <a 
                href={personalInfo.whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ borderColor: 'rgba(52, 211, 153, 0.4)', color: 'var(--accent-emerald)' }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile Card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Ambient Backlight */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 70%)',
              filter: 'blur(45px)',
              zIndex: 0
            }} />

            {/* Main Portrait Frame */}
            <div 
              className="glass-card"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '1.25rem',
                borderRadius: '28px',
                maxWidth: '430px',
                width: '100%',
                border: '1px solid var(--border-hover)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              {/* Photo Container */}
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '4 / 4.7',
                backgroundColor: 'var(--bg-surface-elevated)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={personalInfo.photo} 
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />

                {/* Corner floating pill 1 */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.785rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                }}>
                  <Award size={14} color="var(--accent-amber)" />
                  President @ Media Unit
                </div>

                {/* Corner floating pill 2 */}
                <div style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '14px',
                  right: '14px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '0.65rem 0.9rem',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.5)'
                }}>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff' }}>
                      Mohamed Iflaj
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)' }}>
                      Software Dev & Digital Marketing
                    </div>
                  </div>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--gradient-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                  }}>
                    <CheckCircle2 size={16} />
                  </div>
                </div>
              </div>

              {/* Quick Contact Micro Strip */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                marginTop: '1rem',
                fontSize: '0.8rem',
                color: 'var(--text-muted)'
              }}>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.55rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-surface)',
                    textDecoration: 'none',
                    color: 'inherit',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <Mail size={14} color="var(--accent-cyan)" />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {personalInfo.email}
                  </span>
                </a>
                <a 
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.55rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-surface)',
                    textDecoration: 'none',
                    color: 'inherit',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <Phone size={14} color="var(--accent-emerald)" />
                  <span>{personalInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
            marginTop: '4.5rem'
          }}
          className="stats-grid"
        >
          {personalInfo.stats.map((stat, i) => (
            <div 
              key={i}
              className="glass-card card-glow-top"
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.3rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                color: 'var(--accent-cyan)',
                lineHeight: 1.1,
                marginBottom: '0.35rem'
              }}>
                {stat.value}
                <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  {stat.suffix}
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
