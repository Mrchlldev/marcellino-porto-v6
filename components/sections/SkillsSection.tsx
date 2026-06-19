'use client';
import { motion } from 'framer-motion';
import { skillsConfig } from '@/lib/settings';
import BlurIn from '@/components/ui/BlurIn';
import SectionLabel from '@/components/ui/SectionLabel';

interface SkillsSectionProps {
  isPreview?: boolean;
}

const toolColors: Record<string, string> = {
  'Alight Motion': '#7C3AED',
  'Canva': '#00C4CC',
  'CapCut': '#000',
  'Acode': '#1565C0',
  'Pixellab': '#E91E63',
  'PicsArt': '#3B82F6',
  'Lightroom': '#0EA5E9',
  'Figma': '#F24E1E',
  'VS Code': '#007ACC',
  'Photoshop': '#31A8FF',
  'After Effects': '#9999FF',
  'Premiere Pro': '#9999FF',
};

export default function SkillsSection({ isPreview = false }: SkillsSectionProps) {
  return (
    <section
      className={`relative ${isPreview ? 'scroll-snap-section min-h-screen flex items-center' : 'py-24'}`}
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <BlurIn>
          <SectionLabel>{skillsConfig.sectionLabel}</SectionLabel>
          <h2 className="font-title text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            {skillsConfig.title}
          </h2>
          <p className="font-body text-sm mb-10 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            {skillsConfig.description}
          </p>
        </BlurIn>

        {/* Skill categories with progress bars */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {skillsConfig.categories.map((cat, ci) => (
            <BlurIn key={ci} delay={0.1 * ci}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                className="p-6 rounded-2xl h-full transition-all duration-300"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="font-title font-semibold text-base" style={{ color: 'var(--text-primary)' }}>{cat.title}</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {cat.skills.map((skill, si) => (
                    <div key={si}>
                      <div className="flex justify-between mb-1.5">
                        <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{skill.name}</span>
                        <span className="font-title text-xs font-semibold" style={{ color: 'var(--accent)' }}>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: 'linear-gradient(90deg, #ff6b00, #ff9a3c)' }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 * si, ease: 'easeOut' }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </BlurIn>
          ))}
        </div>

        {/* Tools section */}
        <BlurIn delay={0.3}>
          <h3 className="font-title text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            Apps & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillsConfig.tools.map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                title={tool.name}
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl cursor-pointer shadow-sm"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: `0 4px 12px ${toolColors[tool.name] || '#ff6b00'}22`,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, type: 'spring', stiffness: 300 }}
                viewport={{ once: true }}
              >
                {tool.emoji}
              </motion.div>
            ))}
          </div>
        </BlurIn>
      </div>
    </section>
  );
}
