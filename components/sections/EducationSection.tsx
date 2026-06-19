'use client';
import { motion } from 'framer-motion';
import { educationConfig } from '@/lib/settings';
import BlurIn from '@/components/ui/BlurIn';
import SectionLabel from '@/components/ui/SectionLabel';

interface EducationSectionProps {
  isPreview?: boolean;
}

export default function EducationSection({ isPreview = false }: EducationSectionProps) {
  return (
    <section
      className={`relative ${isPreview ? 'scroll-snap-section min-h-screen flex items-center' : 'py-24'}`}
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <BlurIn>
          <SectionLabel>{educationConfig.sectionLabel}</SectionLabel>
          <h2 className="font-title text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            {educationConfig.title}
          </h2>
          <p className="font-body text-sm mb-10 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            {educationConfig.description}
          </p>
        </BlurIn>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
          />

          <div className="flex flex-col gap-6">
            {educationConfig.items.map((item, i) => (
              <BlurIn key={item.id} delay={0.15 * i}>
                <motion.div
                  whileHover={{ x: 6, boxShadow: '0 20px 40px rgba(255,107,0,0.1)' }}
                  className="relative md:pl-16 group"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-4 top-6 w-4 h-4 rounded-full hidden md:flex items-center justify-center -translate-x-1/2 z-10"
                    style={{ background: 'var(--accent)', boxShadow: '0 0 0 4px var(--bg-secondary)' }}
                    whileHover={{ scale: 1.5 }}
                  />

                  <div
                    className="p-6 rounded-2xl transition-all duration-300"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h3 className="font-title font-bold text-lg leading-tight" style={{ color: 'var(--text-primary)' }}>
                            {item.title}
                          </h3>
                          <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                            {item.institution}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="font-body text-xs font-medium px-3 py-1 rounded-full"
                          style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--accent)', border: '1px solid rgba(255,107,0,0.2)' }}
                        >
                          {item.years}
                        </span>
                        <span
                          className="font-body text-xs px-3 py-1 rounded-full"
                          style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
                        >
                          {item.badge}
                        </span>
                      </div>
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </BlurIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
