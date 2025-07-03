"use client";

import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.5,
      duration: 0.8,
      ease: "easeOut"
    },
  }),
};

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: {
      delay: 2.5,
      duration: 0.5,
      when: "afterChildren"
    }
  }
};

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinished]);

  const text = "Commit.Ke".split("");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onFinished}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <motion.h1 className="text-4xl md:text-6xl font-bold tracking-wider">
        {text.map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}
