'use client';
import { motion } from 'framer-motion';
import { useAOSBlur } from './useAOSBlur';

interface BlurInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

export default function BlurIn({ children, delay = 0, direction = 'up', className = '' }: BlurInProps) {
  const { ref, visible } = useAOSBlur();

  const variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
      y: direction === 'up' ? 30 : 0,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
      y: 0,
    },
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={visible ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
