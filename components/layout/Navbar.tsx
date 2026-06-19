'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/settings';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  const menuIcons: Record<string, string> = {
    About: '👤',
    Skill: '⚡',
    Education: '🎓',
    Project: '🚀',
    Contact: '📬',
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        style={{
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-title font-bold text-2xl tracking-tight" style={{ color: 'var(--accent)' }}>
            Mrcl.
          </Link>

          {/* Right: Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full transition-all duration-500 focus:outline-none overflow-hidden"
            style={{ background: isDark ? '#1a1a1a' : '#e0e0e0', border: '1px solid var(--border)' }}
            aria-label="Toggle theme"
          >
            {mounted && (
              <>
                <motion.div
                  className="absolute inset-0 flex items-center justify-between px-1.5 text-xs"
                  initial={false}
                >
                  <span>🌙</span>
                  <span>☀️</span>
                </motion.div>
                <motion.div
                  className="absolute top-0.5 w-6 h-6 rounded-full shadow-md"
                  style={{ background: isDark ? '#ff6b00' : '#111' }}
                  animate={{ x: isDark ? 0 : 28 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — floating icon dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <motion.div
          className="flex items-center gap-2 rounded-full px-4 py-3 shadow-2xl"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            backdropFilter: 'blur(20px)',
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 25 }}
        >
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <motion.div
                className="w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all"
                style={{ background: 'var(--bg-secondary)' }}
                whileHover={{ scale: 1.2, background: 'var(--accent)' }}
                whileTap={{ scale: 0.9 }}
                title={link.label}
              >
                {menuIcons[link.label]}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Desktop side nav */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {siteConfig.navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <motion.div
              className="group relative flex items-center justify-end gap-2"
              whileHover={{ x: -4 }}
            >
              <motion.span
                className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap font-body"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </motion.span>
              <div
                className="w-2 h-2 rounded-full transition-all duration-300 group-hover:w-4 group-hover:rounded-full"
                style={{ background: 'var(--accent)' }}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </>
  );
}
