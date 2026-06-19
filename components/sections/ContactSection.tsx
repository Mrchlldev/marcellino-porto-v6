'use client';
import { motion } from 'framer-motion';
import { contactConfig } from '@/lib/settings';
import BlurIn from '@/components/ui/BlurIn';
import SectionLabel from '@/components/ui/SectionLabel';

interface ContactSectionProps {
  isPreview?: boolean;
}

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.67l-2.94-.92c-.64-.203-.654-.64.135-.953l11.566-4.458c.537-.194 1.006.131.963.882z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export default function ContactSection({ isPreview = false }: ContactSectionProps) {
  return (
    <section
      className={`relative ${isPreview ? 'scroll-snap-section min-h-screen flex items-center' : 'py-24'}`}
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <BlurIn>
          <SectionLabel>{contactConfig.sectionLabel}</SectionLabel>
          <h2 className="font-title text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            {contactConfig.title}
          </h2>
          <p className="font-body text-sm mb-12 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            {contactConfig.description}
          </p>
        </BlurIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
          {contactConfig.cards.map((card, i) => (
            <BlurIn key={card.id} delay={0.15 * i} direction={i === 0 ? 'left' : 'right'}>
              <a href={card.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: `0 30px 60px ${card.glowColor}`,
                    borderColor: 'rgba(255,107,0,0.4)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full p-8 rounded-3xl relative overflow-hidden group cursor-pointer transition-all duration-400"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  {/* BG gradient orb */}
                  <motion.div
                    className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-6`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {card.icon === 'telegram' ? <TelegramIcon /> : <MailIcon />}
                  </motion.div>

                  <h3 className="font-title font-bold text-xl mb-1" style={{ color: 'var(--text-primary)' }}>
                    {card.platform}
                  </h3>
                  <p
                    className="font-body text-sm font-medium mb-3"
                    style={{ color: 'var(--accent)' }}
                  >
                    {card.handle}
                  </p>
                  <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {card.description}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    className="absolute bottom-6 right-6 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'var(--accent)', color: '#fff' }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </a>
            </BlurIn>
          ))}
        </div>
      </div>
    </section>
  );
}
