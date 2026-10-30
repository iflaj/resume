import React from 'react';
import { 
  Award, 
  Users, 
  Calendar, 
  CheckCircle2, 
  Trophy, 
  Camera, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} /> Leadership & Executive Experience
          </div>
          <h2 className="section-title">
            Leadership & <span className="text-gradient">Organizational Impact</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated presidential leadership across major athletic and media institutions, orchestrating teams, events, and communications.
          </p>
        </div>

        {/* Timeline Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem'
        }} className="leadership-cards-grid">
          {leadershipData.map((item, index) => {
            const isMedia = item.organization.includes('Media');
            const Icon = isMedia ? Camera : Trophy;
            const accentColor = isMedia ? 'var(--accent-cyan)' : 'var(--accent-emerald)';

            return (
              <div 
                key={index}
                className="glass-card card-glow-top"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2.25rem'
                }}
              >
                <div>
                  {/* Top Meta Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        backgroundColor: isMedia ? 'rgba(56, 189, 248, 0.12)' : 'rgba(52, 211, 153, 0.12)',
                        border: `1px solid ${isMedia ? 'rgba(56, 189, 248, 0.3)' : 'rgba(52, 211, 153, 0.3)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: accentColor
                      }}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: accentColor, fontWeight: 700, textTransform: 'uppercase' }}>
                          {item.period}
                        </div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-muted)'
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Organization Title */}
                  <div style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span>{item.organization}</span>
                  </div>

                  {/* Responsibilities & Achievements */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                    marginBottom: '1.5rem'
                  }}>
                    {item.responsibilities.map((resp, rIdx) => (
                      <div 
                        key={rIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          fontSize: '0.92rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.6
                        }}
                      >
                        <CheckCircle2 size={17} color={accentColor} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Signature Tag */}
                <div style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.825rem',
                  color: 'var(--text-subtle)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <ShieldCheck size={16} color="var(--accent-emerald)" />
                    <span>Verified Official Role</span>
                  </div>
                  <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Presidential Tenor</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Leadership Philosophy Callout */}
        <div 
          className="glass-card philosophy-card"
          style={{
            marginTop: '3rem',
            padding: '2rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.2)'
          }}
        >
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '16px',
            backgroundColor: 'rgba(56, 189, 248, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)',
            flexShrink: 0
          }}>
            <Sparkles size={26} />
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem' }}>
              Leadership Mindset: "Lead by Example, Deliver with Discipline"
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Whether directing a live school event broadcast or motivating a sports squad during a championship fixture, my guiding principle is accountability, open listening, and driving the team towards clear outcomes.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .leadership-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .philosophy-card {
            flex-direction: column !important;
            text-align: center !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
