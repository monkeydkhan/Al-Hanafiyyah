"use client";

import { motion } from "motion/react";

export function AnimatedBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 42, -12, 0],
          y: [0, -28, 16, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute -left-24 top-10 h-[24rem] w-[24rem] rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--orb-one), transparent 68%)" }}
      />

      <motion.div
        animate={{
          x: [0, -34, 20, 0],
          y: [0, 18, -20, 0],
          scale: [1, 0.92, 1.08, 1],
        }}
        transition={{
          duration: 24,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute right-[-8rem] top-12 h-[24rem] w-[24rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--orb-two), transparent 70%)" }}
      />

      <motion.div
        animate={{
          x: [0, 24, -32, 0],
          y: [0, -28, 20, 0],
          scale: [1, 1.04, 0.94, 1],
        }}
        transition={{
          duration: 26,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute bottom-[-12rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--orb-three), transparent 70%)" }}
      />
    </div>
  );
}
