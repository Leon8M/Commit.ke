// app/components/animations/StaggeredFadeIn.tsx
"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function StaggeredFadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {Array.isArray(children)
        ? children.map((child, i) => <motion.div key={i} variants={itemVariants}>{child}</motion.div>)
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  );
};