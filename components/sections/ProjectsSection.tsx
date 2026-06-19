'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projectsConfig } from '@/lib/settings';
import BlurIn from '@/components/ui/BlurIn';
import SectionLabel from '@/components/ui/SectionLabel';

interface ProjectsSectionProps {
  isPreview?: boolean;
}

export default function ProjectsSection({ isPreview = false }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projectsConfig.items
    : projectsConfig.items.filter((p) => p.category === activeCategory);

  const displayItems = isPreview ? filtered.slice(0, 3) : filtered;

  return (
    <section
      className={`relative ${isPreview ? 'scroll-snap-section min-h-screen flex items-center' : 'py-24'}`}
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <BlurIn>
          <SectionLabel>{projectsConfig.sectionLabel}</SectionLabel>
          <h2 className="font-title text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            {projectsConfig.title}
          </h2>
          <p className="font-body text-sm mb-8 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            {projectsConfig.description}
          </p>
        </BlurIn>

        {/* Category filter */}
        <BlurIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {projectsConfig.categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="font-body text-xs font-medium px-4 py-2 rounded-full transition-all duration-300"
                style={{
                  background: activeCategory === cat ? 'var(--accent)' : 'var(--bg-card)',
                  color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </BlurIn>

        {/* Project grid */}
        <div className="grid md:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {displayItems.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.25)' }}
                  className="h-full rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  {/* Gradient header */}
                  <div
                    className={`h-28 bg-gradient-to-br ${project.color} flex items-center justify-center text-4xl relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: 'white' }}
                    />
                    {project.emoji}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="font-body text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--accent)' }}
                      >
                        {project.category}
                      </span>
                      <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{project.year}</span>
                    </div>
                    <h3 className="font-title font-semibold text-base mb-2 leading-tight" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <p className="font-body text-xs leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-body text-xs px-2 py-0.5 rounded-full"
                          style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
