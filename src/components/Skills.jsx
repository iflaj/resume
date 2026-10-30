import React, { useState } from 'react';
import { 
  Code, 
  TrendingUp, 
  Award, 
  Languages, 
  Camera,
  Check, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 
    'Software Development', 
    'Digital Marketing & Growth', 
    'Photography & Visual Media',
    'Leadership & Management', 
    'Languages'
  ];

  const filteredCategories = selectedCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.category === selectedCategory);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return Code;
      case 'TrendingUp': return TrendingUp;
      case 'Camera': return Camera;
      case 'Award': return Award;
      case 'Languages': return Languages;
      default: return Code;
    }
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.015)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code size={14} /> Skills & Proficiencies
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive matrix of technical abilities, digital marketing disciplines, executive leadership traits, and language masteries.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.55rem 1.15rem',
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

        {/* Categories Display */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredCategories.map((catGroup, idx) => {
            const Icon = getCategoryIcon(catGroup.icon);
            return (
              <div key={idx} className="glass-card card-glow-top">
                {/* Category Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)'
                    }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{catGroup.category}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{catGroup.description}</p>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '0.785rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--accent-cyan)'
                  }}>
                    {catGroup.skills.length} Competencies
                  </span>
                </div>

                {/* Skills Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.5rem 2rem'
                }} className="skills-meter-grid">
                  {catGroup.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.45rem'
                      }}>
                        <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)' }}>
                          {skill.name}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {skill.tag && (
                            <span style={{
                              fontSize: '0.72rem',
                              padding: '0.15rem 0.5rem',
                              borderRadius: 'var(--radius-full)',
                              backgroundColor: 'rgba(52, 211, 153, 0.15)',
                              color: 'var(--accent-emerald)',
                              fontWeight: 700
                            }}>
                              {skill.tag}
                            </span>
                          )}
                          <span style={{
                            fontSize: '0.825rem',
                            fontWeight: 700,
                            color: 'var(--accent-cyan)',
                            fontFamily: 'var(--font-heading)'
                          }}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar Container */}
                      <div style={{
                        width: '100%',
                        height: '7px',
                        backgroundColor: 'var(--bg-surface)',
                        borderRadius: '99px',
                        overflow: 'hidden',
                        border: '1px solid var(--border-subtle)'
                      }}>
                        <div 
                          style={{
                            width: `${skill.level}%`,
                            height: '100%',
                            background: 'var(--gradient-brand)',
                            borderRadius: '99px',
                            transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-meter-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
