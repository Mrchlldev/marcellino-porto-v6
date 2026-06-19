'use client';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        {children}
      </motion.div>
    </div>
  );
}
