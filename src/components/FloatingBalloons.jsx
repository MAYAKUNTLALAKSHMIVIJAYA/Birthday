import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEffects } from '../utils/audioSystem';

export default function FloatingBalloons({ count = 12 }) {
  const balloonStyles = [
    { bg: 'from-amber-300 via-amber-500 to-amber-700', border: 'border-amber-300/40', shadow: 'shadow-amber-500/30' },
    { bg: 'from-purple-300 via-purple-500 to-indigo-800', border: 'border-purple-300/40', shadow: 'shadow-purple-500/30' },
    { bg: 'from-rose-300 via-rose-500 to-pink-700', border: 'border-rose-300/40', shadow: 'shadow-rose-500/30' },
    { bg: 'from-sky-300 via-sky-500 to-blue-700', border: 'border-sky-300/40', shadow: 'shadow-sky-500/30' },
    { bg: 'from-yellow-200 via-yellow-400 to-amber-600', border: 'border-yellow-200/40', shadow: 'shadow-yellow-400/30' },
  ];

  const [balloons, setBalloons] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 88 + 6, // 6% to 94%
      delay: Math.random() * 5,
      duration: Math.random() * 8 + 14,
      size: Math.random() * 24 + 48, // 48px to 72px
      style: balloonStyles[i % balloonStyles.length],
      drift: (Math.random() - 0.5) * 80,
    }))
  );

  const popBalloon = (id) => {
    soundEffects.playSparkle();
    setBalloons((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      <AnimatePresence>
        {balloons.map((b) => (
          <motion.div
            key={b.id}
            className="absolute pointer-events-auto cursor-pointer group"
            style={{ left: `${b.left}%`, bottom: '-120px' }}
            initial={{ y: 0, x: 0, opacity: 0 }}
            animate={{
              y: '-140vh',
              x: [0, b.drift, -b.drift, 0],
              opacity: [0, 1, 1, 0.8],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            onClick={() => popBalloon(b.id)}
            whileHover={{ scale: 1.15 }}
            title="Click to pop!"
          >
            {/* Balloon Body */}
            <div
              className={`relative rounded-[50%_50%_50%_50%_/_40%_40%_60%_60%] bg-gradient-to-tr ${b.style.bg} border ${b.style.border} shadow-lg ${b.style.shadow} transition-transform`}
              style={{ width: b.size, height: b.size * 1.25 }}
            >
              {/* Glossy highlight reflect */}
              <div className="absolute top-2 left-2.5 w-3 h-6 bg-white/40 rounded-full blur-[1px] -rotate-12" />

              {/* Knot */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-1.5 bg-black/40 rounded-sm" />

              {/* String */}
              <svg
                className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-16 stroke-white/30 fill-none"
                viewBox="0 0 20 60"
              >
                <path d="M10 0 Q 15 15, 10 30 T 10 60" strokeWidth="1.2" />
              </svg>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
