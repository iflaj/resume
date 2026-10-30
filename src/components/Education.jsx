import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  BadgeCheck, 
  Layers
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.015)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} /> Education & Credentials
          </div>
          <h2 className="section-title">
            Academic Background & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal educational milestones paired with specialized vocational industry certifications in modern code and marketing.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem'
        }} className="edu-grid">
          
          {/* Column 1: Academic Degrees */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.75rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'rgba(56, 189, 248, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)'
              }}>
                <GraduationCap size={20} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>
                Formal Education
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {educationData.map((edu, idx) => (
                <div key={idx} className="glass-card card-glow-top">
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.75rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                        {edu.degree}
                      </h4>
                      <div style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                        {edu.institution}
                      </div>
                    </div>

                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: 'var(--accent-cyan)'
                    }}>
                      {edu.status}
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {edu.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {edu.highlights.map((hl, hIdx) => (
                      <span key={hIdx} className="pill-badge">
                        <CheckCircle2 size={13} color="var(--accent-emerald)" />
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Industry Certifications */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.75rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'rgba(99, 102, 241, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-indigo)'
              }}>
                <Award size={20} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>
                Certifications & Training
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="glass-card card-glow-top">
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.75rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                        {cert.title}
                      </h4>
                      <div style={{ fontSize: '0.95rem', color: 'var(--accent-indigo)', fontWeight: 600 }}>
                        {cert.organization}
                      </div>
                    </div>

                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(52, 211, 153, 0.12)',
                      border: '1px solid rgba(52, 211, 153, 0.3)',
                      color: 'var(--accent-emerald)'
                    }}>
                      <BadgeCheck size={13} style={{ display: 'inline', marginRight: '4px' }} />
                      Verified Training
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {cert.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {cert.badges.map((b, bIdx) => (
                      <span 
                        key={bIdx} 
                        className="pill-badge"
                        style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Learning Roadmap / Continuous Growth Pill */}
              <div 
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '1px dashed var(--border-hover)'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(251, 191, 36, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-amber)',
                  flexShrink: 0
                }}>
                  <Layers size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Continuous Professional Upskilling</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Actively advancing full-stack React applications, API integrations, and conversion-focused performance marketing.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
