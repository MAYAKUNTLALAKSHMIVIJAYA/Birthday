import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight, Moon } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import { soundEffects } from '../utils/audioSystem';

export default function Screen1Welcome({ onNext }) {
  const handleProceed = () => {
    soundEffects.playSparkle();
    onNext();
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center z-10">
      {/* Subtle glowing 3D-styled Moon in the midnight sky */}
      <motion.div
        className="relative mb-8 cursor-pointer group"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        onClick={() => soundEffects.playSparkle()}
      >
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-amber-100 via-amber-200 to-amber-50 shadow-[0_0_60px_rgba(253,230,138,0.45),0_0_120px_rgba(196,181,253,0.25)] relative overflow-hidden flex items-center justify-center border border-white/40">
          {/* Subtle realistic lunar craters */}
          <div className="absolute top-5 left-7 w-6 h-6 rounded-full bg-amber-300/30 blur-[2px]" />
          <div className="absolute top-12 left-16 w-10 h-10 rounded-full bg-amber-400/20 blur-[3px]" />
          <div className="absolute bottom-6 left-9 w-8 h-8 rounded-full bg-amber-300/25 blur-[2px]" />
          <div className="absolute top-3 right-8 w-4 h-4 rounded-full bg-amber-300/20 blur-[1px]" />

          {/* Golden star sparkle on the moon */}
          <Sparkles className="w-6 h-6 text-amber-500/70 animate-pulse" />
        </div>

        {/* Ambient Halo Ring */}
        <div className="absolute inset-0 rounded-full border border-gold-300/20 scale-125 animate-pulse" />
      </motion.div>

      {/* Decorative Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/70 border border-lavender-400/20 backdrop-blur-md mb-6"
      >
        <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-spin-slow" />
        <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-lavender-200 uppercase font-sans">
          {birthdayData.welcomeScreen.badge}
        </span>
      </motion.div>

      {/* Mysterious Quotes */}
      <motion.div
        className="max-w-3xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1.0 }}
      >
        <h1 className="font-cinematic text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-100 font-medium leading-tight sm:leading-snug">
          "{birthdayData.welcomeScreen.mysteryQuote}"
        </h1>

        <motion.p
          className="text-base sm:text-xl md:text-2xl text-gradient-gold font-serif italic max-w-2xl mx-auto pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
        >
          {birthdayData.welcomeScreen.subQuote}
        </motion.p>
      </motion.div>

      {/* Discover Button */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
      >
        <button
          onClick={handleProceed}
          className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-500 text-midnight-950 font-semibold tracking-wide shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:shadow-[0_0_50px_rgba(251,191,36,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 font-sans"
        >
          {/* Subtle inner highlight shimmer */}
          <span className="text-sm sm:text-base font-cinematic font-bold tracking-wider">
            {birthdayData.welcomeScreen.buttonText}
          </span>
          <div className="w-7 h-7 rounded-full bg-midnight-950/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ChevronRight className="w-4 h-4 text-midnight-950 stroke-[3]" />
          </div>
        </button>

        <p className="text-xs text-slate-500 mt-4 font-mono tracking-widest uppercase">
          Best experienced with sound on
        </p>
      </motion.div>
    </div>
  );
}
