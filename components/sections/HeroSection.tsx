'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { heroConfig, siteConfig } from '@/lib/settings';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % siteConfig.roles.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-snap-section"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #ff6b00, transparent)' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #ff6b00, transparent)' }}
          animate={{ scale: [1.1, 1, 1.1], rotate: [10, 0, 10] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {/* Grid */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8"
          style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--accent)', border: '1px solid rgba(255,107,0,0.25)' }}
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          {heroConfig.badge}
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-body text-lg mb-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          {heroConfig.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(16px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-title font-extrabold text-6xl md:text-8xl leading-tight mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {heroConfig.name}
        </motion.h1>

        {/* Rotating Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-12 flex items-center justify-center mb-6 overflow-hidden"
        >
          <motion.span
            key={roleIndex}
            initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: 0.5 }}
            className="font-title text-2xl md:text-3xl font-semibold"
            style={{ color: 'var(--accent)' }}
          >
            {siteConfig.roles[roleIndex]}
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="font-body max-w-xl mx-auto text-base leading-relaxed mb-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          {heroConfig.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Link href={heroConfig.cta.primary.href}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,107,0,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="font-body font-semibold px-8 py-3.5 rounded-full text-sm tracking-wide"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              {heroConfig.cta.primary.label}
            </motion.button>
          </Link>
          <Link href={heroConfig.cta.secondary.href}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="font-body font-medium px-8 py-3.5 rounded-full text-sm tracking-wide"
              style={{ border: '1px solid var(--border)', color: 'var(--text-primary)', background: 'var(--bg-card)' }}
            >
              {heroConfig.cta.secondary.label}
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>Scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        </motion.div>
      </div>
    </section>
  );
}
