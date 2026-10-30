import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Code, 
  MapPin, 
  Mail, 
  Phone 
} from 'lucide-react';
import { personalInfo, educationData, certificationsData, leadershipData, skillCategories } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('structured'); // 'structured' or 'pdf'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
      onClick={onClose}
    >
      <div 
        className="glass-card"
        style={{
          maxWidth: '920px',
          width: '100%',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          border: '1px solid var(--border-hover)',
          boxShadow: 'var(--shadow-lg)',
          backgroundColor: 'var(--bg-surface)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-card)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)'
            }}>
              <FileText size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                Official Resume: Mohamed Iflaj
              </h3>
              <p style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>
                Verified G.C.E. A/L Technology Stream & Student Leader
              </p>
            </div>
          </div>

          {/* Control Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* View Mode Toggle */}
            <div style={{
              display: 'flex',
              background: 'var(--bg-surface-elevated)',
              padding: '0.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}>
              <button
                onClick={() => setViewMode('structured')}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  backgroundColor: viewMode === 'structured' ? 'var(--accent-cyan)' : 'transparent',
                  color: viewMode === 'structured' ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.785rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Structured View
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  backgroundColor: viewMode === 'pdf' ? 'var(--accent-cyan)' : 'transparent',
                  color: viewMode === 'pdf' ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.785rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Original PDF
              </button>
            </div>

            <button
              onClick={() => window.print()}
              aria-label="Print Resume"
              className="btn btn-sm btn-secondary"
              style={{ padding: '0.45rem 0.75rem' }}
            >
              <Printer size={15} />
            </button>

            <a
              href={personalInfo.resumePdf}
              download="Mohamed_Iflaj_Resume.pdf"
              className="btn btn-sm btn-primary"
              style={{ padding: '0.45rem 0.85rem' }}
            >
              <Download size={15} />
              <span>Download</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: viewMode === 'pdf' ? 0 : '2rem' }}>
          {viewMode === 'pdf' ? (
            <iframe
              src={personalInfo.resumePdf}
              title="Mohamed Iflaj Resume PDF"
              style={{
                width: '100%',
                height: '75vh',
                border: 'none'
              }}
            />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '820px', margin: '0 auto' }}>
              
              {/* Resume Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '1.5rem',
                borderBottom: '2px solid var(--border-subtle)',
                flexWrap: 'wrap',
                gap: '1.5rem'
              }}>
                <div>
                  <h1 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                    Mohamed Ikram Mohamed Iflaj
                  </h1>
                  <p style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.2rem' }}>
                    Technology Stream Student — Software Development & Digital Marketing
                  </p>
                </div>

                <div style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid var(--accent-cyan)',
                  flexShrink: 0
                }}>
                  <img src={personalInfo.photo} alt={personalInfo.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

              {/* Personal Details Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                fontSize: '0.875rem'
              }} className="modal-details-grid">
                <div>
                  <span style={{ color: 'var(--text-subtle)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Email</span>
                  <div style={{ fontWeight: 600 }}>{personalInfo.email}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-subtle)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Phone</span>
                  <div style={{ fontWeight: 600 }}>{personalInfo.phone}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-subtle)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Date of Birth</span>
                  <div style={{ fontWeight: 600 }}>{personalInfo.dateOfBirth}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-subtle)', fontSize: '0.75rem', textTransform: 'uppercase' }}>National ID (NIC)</span>
                  <div style={{ fontWeight: 600 }}>{personalInfo.nic}</div>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <span style={{ color: 'var(--text-subtle)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Residential Address</span>
                  <div style={{ fontWeight: 600 }}>{personalInfo.address}</div>
                </div>
              </div>

              {/* Profile Summary */}
              <div>
                <h4 style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--accent-cyan)',
                  marginBottom: '0.65rem'
                }}>
                  Professional Profile
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  {personalInfo.bio}
                </p>
              </div>

              {/* Education */}
              <div>
                <h4 style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--accent-cyan)',
                  marginBottom: '0.85rem'
                }}>
                  Education
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {educationData.map((e, idx) => (
                    <div key={idx} style={{ padding: '0.85rem 1rem', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.95rem' }}>
                        <span>{e.degree}</span>
                        <span style={{ color: 'var(--accent-emerald)', fontSize: '0.8rem' }}>{e.status}</span>
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{e.institution}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--accent-cyan)',
                  marginBottom: '0.85rem'
                }}>
                  Certifications & Training
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }} className="modal-cert-grid">
                  {certificationsData.map((c, idx) => (
                    <div key={idx} style={{ padding: '0.85rem 1rem', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{c.title}</div>
                      <div style={{ color: 'var(--accent-cyan)', fontSize: '0.825rem' }}>{c.organization}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership */}
              <div>
                <h4 style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--accent-cyan)',
                  marginBottom: '0.85rem'
                }}>
                  Leadership & Responsibilities
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {leadershipData.map((l, idx) => (
                    <div key={idx} style={{ padding: '1rem', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>
                        {l.title} — {l.organization}
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        {l.responsibilities.map((r, rIdx) => (
                          <li key={rIdx} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent-cyan)' }}>•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills & Languages */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.25rem' }} className="modal-skills-grid">
                <div>
                  <h4 style={{
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--accent-cyan)',
                    marginBottom: '0.65rem'
                  }}>
                    Core Competencies
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {["Marketing & Digital Marketing", "Event & Portrait Photography", "Leadership", "Project Management", "Software Development (foundational)", "Communication & Teamwork", "HTML5 / CSS3 / JavaScript", "Event Coordination"].map((s, idx) => (
                      <span key={idx} className="pill-badge">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--accent-cyan)',
                    marginBottom: '0.65rem'
                  }}>
                    Languages
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Tamil</span>
                      <strong style={{ color: 'var(--accent-emerald)' }}>Native</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Sinhala</span>
                      <strong style={{ color: 'var(--accent-emerald)' }}>Fluent</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>English</span>
                      <strong style={{ color: 'var(--accent-cyan)' }}>Professional</strong>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 650px) {
          .modal-details-grid {
            grid-template-columns: 1fr !important;
          }
          .modal-cert-grid {
            grid-template-columns: 1fr !important;
          }
          .modal-skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
