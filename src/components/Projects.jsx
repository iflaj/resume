import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle, 
  Code, 
  Layers, 
  ArrowUpRight,
  TrendingUp,
  Globe
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = ['All', 'Software Development', 'Web & Management System', 'Digital Marketing'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} /> Showcase & Initiatives
          </div>
          <h2 className="section-title">
            Featured Projects & <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Practical applications uniting software development, institutional media systems, and targeted digital marketing campaigns.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '3rem'
        }}>
          {filterCategories.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'var(--bg-surface-elevated)',
                  color: isSelected ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid-2">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card card-glow-top"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem'
              }}
            >
              <div>
                {/* Header Tag */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    color: 'var(--accent-cyan)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {project.category}
                  </span>

                  <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                    #{project.id < 10 ? `0${project.id}` : project.id}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.85rem' }}>
                  {project.tagline}
                </p>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {project.description}
                </p>

                {/* Key Features List */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface)'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Key Capabilities & Outcomes:
                  </span>
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <CheckCircle size={14} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & CTA */}
              <div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.45rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="pill-badge"
                      style={{ fontSize: '0.72rem', backgroundColor: 'var(--bg-surface-elevated)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-sm btn-secondary"
                  >
                    <span>Inspect Architecture</span>
                    <Sparkles size={14} color="var(--accent-cyan)" />
                  </button>

                  <a 
                    href="#contact" 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--accent-cyan)',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Inquire Project</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="glass-card"
              style={{
                maxWidth: '650px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '2.5rem',
                border: '1px solid var(--border-hover)',
                boxShadow: 'var(--shadow-lg)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {selectedProject.category}
                  </span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.2rem' }}>
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    width: '34px',
                    height: '34px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-main)',
                    cursor: 'pointer'
                  }}
                >
                  ✕
                </button>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {selectedProject.description}
              </p>

              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.85rem' }}>
                Key Technical & Strategic Features
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <CheckCircle size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.85rem' }}>
                Technology Stack Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {selectedProject.technologies.map((t, idx) => (
                  <span key={idx} className="pill-badge active">
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="#contact" onClick={() => setSelectedProject(null)} className="btn btn-primary" style={{ flex: 1 }}>
                  <span>Discuss Implementation</span>
                  <ArrowUpRight size={16} />
                </a>
                <button onClick={() => setSelectedProject(null)} className="btn btn-secondary">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
