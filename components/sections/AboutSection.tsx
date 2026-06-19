'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { aboutConfig } from '@/lib/settings';
import BlurIn from '@/components/ui/BlurIn';
import SectionLabel from '@/components/ui/SectionLabel';

interface AboutSectionProps {
  isPreview?: boolean;
}

export default function AboutSection({ isPreview = false }: AboutSectionProps) {
  return (
    <section
      className={`relative ${isPreview ? 'scroll-snap-section min-h-screen flex items-center' : 'py-24'}`}
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <BlurIn>
          <SectionLabel>{aboutConfig.sectionLabel}</SectionLabel>
          <h2 className="font-title text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            {aboutConfig.title}
          </h2>
        </BlurIn>

        <div className={`grid ${isPreview ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-12 mt-8`}>
          {/* Paragraph 1 */}
          <BlurIn delay={0.1} direction="left">
            <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {aboutConfig.paragraph1}
            </p>

            {isPreview && (
              <Link href="/about">
                <motion.span
                  className="inline-flex items-center gap-2 mt-6 font-body font-medium text-sm"
                  style={{ color: 'var(--accent)' }}
                  whileHover={{ x: 4 }}
                >
                  {aboutConfig.readMoreLink.label}
                  <span>→</span>
                </motion.span>
              </Link>
            )}
          </BlurIn>

          {/* Paragraph 2 - Cards */}
          <BlurIn delay={0.2} direction="right">
            <div className="grid grid-cols-1 gap-3">
              {aboutConfig.paragraph2Cards.map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6, borderColor: 'rgba(255,107,0,0.5)' }}
                  className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <span className="text-2xl flex-shrink-0">{card.icon}</span>
                  <div>
                    <h4 className="font-title font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{card.title}</h4>
                    <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </BlurIn>
        </div>

        {/* Lazy Dreams Card */}
        {!isPreview && (
          <BlurIn delay={0.3}>
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: '0 0 40px rgba(255,107,0,0.15)' }}
              className="mt-10 p-8 rounded-3xl relative overflow-hidden"
              style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,107,0,0.2)' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5 text-9xl select-none pointer-events-none">💤</div>
              <h3 className="font-title text-xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
                {aboutConfig.lazyDreams.title}
              </h3>
              <p className="font-title text-lg italic mb-4" style={{ color: 'var(--text-secondary)' }}>
                {aboutConfig.lazyDreams.quote}
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {aboutConfig.lazyDreams.content}
              </p>
            </motion.div>
          </BlurIn>
        )}

        {/* Stats on full page */}
        {!isPreview && (
          <div className="grid grid-cols-3 gap-6 mt-10">
            {aboutConfig.stats.map((stat, i) => (
              <BlurIn key={i} delay={0.1 * i}>
                <div className="text-center p-6 rounded-2xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <div className="font-title text-3xl font-extrabold mb-1" style={{ color: 'var(--accent)' }}>{stat.value}</div>
                  <div className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                </div>
              </BlurIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
