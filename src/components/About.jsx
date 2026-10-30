import React from 'react';
import { 
  User, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar, 
  Award, 
  Code, 
  Megaphone, 
  Layout, 
  Users, 
  Camera,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { personalInfo, servicesData } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Layout: Layout,
    Megaphone: Megaphone,
    Camera: Camera,
    Users: Users
  };

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} /> Profile & Value Proposition
          </div>
          <h2 className="section-title">
            Passionate About Technology, <br />
            <span className="text-gradient">Driven by Purpose</span>
          </h2>
          <p className="section-subtitle">
            Bridging technical software development with real-world marketing and decisive organizational leadership.
          </p>
        </div>

        {/* Bio Overview & Details Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2.5rem',
          alignItems: 'stretch',
          marginBottom: '4.5rem'
        }} className="about-grid">
          
          {/* Detailed Narrative */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', fontWeight: 800 }}>
                Who is Mohamed Iflaj?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                I am a disciplined and forward-thinking G.C.E. Advanced Level Technology Stream student from Sri Lanka. My educational path has given me a solid foundation in engineering principles, information technology, and analytical problem-solving.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Beyond academic coursework, I have invested actively in practical skills: completing intensive software development training through <strong style={{ color: 'var(--text-main)' }}>Vibe Code</strong> and professional digital marketing certification via <strong style={{ color: 'var(--text-main)' }}>MMT Business Hub</strong>.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                What sets me apart is my proven real-world leadership. As <strong style={{ color: 'var(--accent-cyan)' }}>President of the Al-Azhar Media Unit</strong> and <strong style={{ color: 'var(--accent-emerald)' }}>President of the Jinnah Sports Club</strong>, I have coordinated large teams, managed multi-camera school events, published public announcements, and resolved complex logistics under pressure.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.85rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-subtle)'
            }} className="core-values-grid">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" />
                <span>Fast Learner & Adaptable</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" />
                <span>Trilingual Communicator</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" />
                <span>High Attention to Detail</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" />
                <span>Collaborative Team Spirit</span>
              </div>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="glass-card card-glow-top" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={20} color="var(--accent-cyan)" /> Personal Snapshot
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0
                  }}>
                    <User size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Full Name</span>
                    <p style={{ fontWeight: 600, fontSize: '0.92rem' }}>{personalInfo.fullName}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-indigo)',
                    flexShrink: 0
                  }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Address & Location</span>
                    <p style={{ fontWeight: 600, fontSize: '0.92rem' }}>{personalInfo.address}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(52, 211, 153, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-emerald)',
                    flexShrink: 0
                  }}>
                    <Calendar size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Date of Birth</span>
                    <p style={{ fontWeight: 600, fontSize: '0.92rem' }}>{personalInfo.dateOfBirth}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(251, 191, 36, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-amber)',
                    flexShrink: 0
                  }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Official Email</span>
                    <p style={{ fontWeight: 600, fontSize: '0.92rem' }}>{personalInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.75rem' }}>
              <a href="#contact" className="btn btn-secondary" style={{ width: '100%' }}>
                <span>Connect with Me</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* What I Bring to the Table (Capabilities) */}
        <div style={{ marginTop: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Core Capabilities & Value Delivered
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              How my unique blend of tech skills, marketing insights, and leadership drive results.
            </p>
          </div>

          <div className="grid-4">
            {servicesData.map((service, index) => {
              const ServiceIcon = iconMap[service.icon] || Layout;
              return (
                <div 
                  key={index} 
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1.65rem'
                  }}
                >
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    marginBottom: '1.25rem'
                  }}>
                    <ServiceIcon size={22} />
                  </div>

                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.65rem' }}>
                    {service.title}
                  </h4>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .core-values-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
