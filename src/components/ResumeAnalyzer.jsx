import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle, 
  Target, 
  TrendingUp, 
  FileCheck, 
  Download, 
  Copy, 
  Check, 
  ShieldCheck, 
  Award, 
  Layers,
  Briefcase,
  ExternalLink
} from 'lucide-react';
import { personalInfo, resumeAnalysis } from '../data/portfolioData';

export default function ResumeAnalyzer({ onOpenResumeModal }) {
  const [activeTab, setActiveTab] = useState('strengths');
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    navigator.clipboard.writeText(personalInfo.bio);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="analysis" className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.015)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} /> Resume Intelligence & Analysis
          </div>
          <h2 className="section-title">
            Professional Profile & <span className="text-gradient">Resume Analysis</span>
          </h2>
          <p className="section-subtitle">
            An in-depth evaluation of Mohamed Iflaj's qualifications, ATS compliance, leadership caliber, and job market suitability.
          </p>
        </div>

        {/* Main Scorecard Banner */}
        <div 
          className="glass-card card-glow-top"
          style={{
            marginBottom: '2.5rem',
            padding: '2.2rem',
            border: '1px solid var(--border-hover)',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            gap: '2.2rem',
            alignItems: 'center'
          }} className="scorecard-grid">
            
            {/* ATS Score Circle */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                background: 'conic-gradient(var(--accent-cyan) 0deg 338deg, var(--bg-surface-elevated) 338deg 360deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(56, 189, 248, 0.35)'
              }}>
                <div style={{
                  width: '92px',
                  height: '92px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-surface)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--accent-cyan)',
                    lineHeight: 1
                  }}>
                    {resumeAnalysis.atsScore}
                  </span>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    OUT OF 100
                  </span>
                </div>
              </div>
              <span style={{ 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                color: 'var(--accent-emerald)', 
                marginTop: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}>
                High Match (ATS)
              </span>
            </div>

            {/* Headline and Executive Evaluation */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(52, 211, 153, 0.12)',
                border: '1px solid rgba(52, 211, 153, 0.3)',
                color: 'var(--accent-emerald)',
                fontSize: '0.785rem',
                fontWeight: 700,
                marginBottom: '0.6rem'
              }}>
                <ShieldCheck size={14} /> {resumeAnalysis.readinessLevel}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                {resumeAnalysis.summaryHeadline}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '680px' }}>
                Combines high school Technology Stream rigor with certified training in web programming and marketing strategy. Standout differentiator: proven presidential leadership over 2 major student bodies.
              </p>
            </div>

            {/* Quick Actions Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '170px' }}>
              <a 
                href={personalInfo.resumePdf} 
                download="Mohamed_Iflaj_Resume.pdf"
                className="btn btn-sm btn-primary"
                style={{ width: '100%' }}
              >
                <Download size={15} />
                <span>Download CV</span>
              </a>

              <button
                onClick={handleCopySummary}
                className="btn btn-sm btn-secondary"
                style={{ width: '100%' }}
              >
                {copied ? <Check size={15} color="var(--accent-emerald)" /> : <Copy size={15} />}
                <span>{copied ? 'Copied Bio!' : 'Copy Summary'}</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="btn btn-sm btn-outline"
                style={{ width: '100%' }}
              >
                <ExternalLink size={15} />
                <span>View Full CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '0.75rem',
          marginBottom: '2rem',
          overflowX: 'auto'
        }}>
          {[
            { id: 'strengths', label: 'Key Pillars & Strengths', icon: Award },
            { id: 'roles', label: 'Target Roles & Compatibility', icon: Target },
            { id: 'swot', label: 'SWOT & Edge Analysis', icon: TrendingUp },
            { id: 'verified', label: 'Verified Resume Details', icon: FileCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: isActive ? '1px solid var(--border-hover)' : '1px solid transparent',
                  backgroundColor: isActive ? 'var(--bg-surface-elevated)' : 'transparent',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        {activeTab === 'strengths' && (
          <div className="grid-2">
            {resumeAnalysis.keyTakeaways.map((item, index) => (
              <div 
                key={index}
                className="glass-card"
                style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                  flexShrink: 0
                }}>
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.45rem', fontWeight: 700 }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'roles' && (
          <div className="grid-2">
            {resumeAnalysis.careerTargets.map((item, index) => (
              <div key={index} className="glass-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(99, 102, 241, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-indigo)'
                    }}>
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{item.role}</h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Entry-Level / Internship Match</span>
                    </div>
                  </div>
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {item.match}
                  </div>
                </div>

                {/* Match Progress Bar */}
                <div style={{
                  width: '100%',
                  height: '7px',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  borderRadius: '99px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: item.match,
                    height: '100%',
                    background: 'var(--gradient-brand)',
                    borderRadius: '99px'
                  }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'swot' && (
          <div className="grid-2">
            {/* Strengths */}
            <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-emerald)' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--accent-emerald)' }}>
                <CheckCircle size={18} /> Candidate Core Strengths
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {resumeAnalysis.swotAnalysis.strengths.map((s, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-cyan)' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>
                <TrendingUp size={18} /> Growth Trajectory & Future Upskilling
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {resumeAnalysis.swotAnalysis.growthOpportunities.map((o, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>•</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'verified' && (
          <div className="glass-card">
            <h4 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileCheck size={20} color="var(--accent-cyan)" /> Official Resume Index Details
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem'
            }} className="verified-grid">
              <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Full Name</span>
                <p style={{ fontWeight: 600, marginTop: '0.25rem' }}>{personalInfo.fullName}</p>
              </div>

              <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Date of Birth</span>
                <p style={{ fontWeight: 600, marginTop: '0.25rem' }}>{personalInfo.dateOfBirth}</p>
              </div>

              <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>NIC Number</span>
                <p style={{ fontWeight: 600, marginTop: '0.25rem' }}>{personalInfo.nic}</p>
              </div>

              <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email Address</span>
                <p style={{ fontWeight: 600, marginTop: '0.25rem' }}>{personalInfo.email}</p>
              </div>

              <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Direct Contact</span>
                <p style={{ fontWeight: 600, marginTop: '0.25rem' }}>{personalInfo.phone}</p>
              </div>

              <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Address</span>
                <p style={{ fontWeight: 600, marginTop: '0.25rem', fontSize: '0.88rem' }}>{personalInfo.address}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .scorecard-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .scorecard-grid > div {
            justify-content: center;
            align-items: center;
          }
          .verified-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
