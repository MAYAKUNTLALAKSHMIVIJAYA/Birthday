import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote, ChevronRight, Heart, Star } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import { soundEffects } from '../utils/audioSystem';
import TypewriterText from '../components/TypewriterText';

export default function Screen6SpecialMessage({ onNext }) {
  useEffect(() => {
    soundEffects.playSparkle();
  }, []);

  return (
    <div className="relative min-h-screen px-4 py-20 max-w-4xl mx-auto z-10 flex flex-col justify-between">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lavender-500/10 border border-lavender-400/30 text-lavender-300 font-mono text-xs uppercase tracking-widest mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>{birthdayData.specialMessageScreen.badge}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-cinematic text-3xl sm:text-5xl lg:text-6xl text-slate-100 font-bold leading-tight"
        >
          {birthdayData.specialMessageScreen.heading}
        </motion.h2>
      </div>

      {/* Main Parchment Letter Card */}
      <motion.div
        className="relative glass-card rounded-3xl p-8 sm:p-14 border border-gold-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(251,191,36,0.15)] overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Soft Ambient Corner Aura */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Inspirational Quote Banner */}
        <div className="relative mb-8 pb-6 border-b border-white/10 flex items-start gap-4">
          <Quote className="w-8 h-8 text-gold-400 flex-shrink-0 opacity-75 mt-1" />
          <p className="font-serif italic text-base sm:text-xl text-gold-200/90 leading-relaxed">
            {birthdayData.specialMessageScreen.quote}
          </p>
        </div>

        {/* Message Paragraphs */}
        <div className="space-y-6 text-slate-200 text-base sm:text-lg leading-relaxed font-sans font-light">
          {birthdayData.specialMessageScreen.paragraphs.map((para, idx) => (
            <TypewriterText
              key={idx}
              text={para}
              speed={16}
              delay={idx * 700 + 400}
              className="text-slate-300"
            />
          ))}
        </div>

        {/* Signature & Heart */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold-500 to-amber-300 flex items-center justify-center text-midnight-950 font-bold shadow-glow-gold">
              <Star className="w-6 h-6 fill-midnight-950" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-mono tracking-wider">
                {birthdayData.specialMessageScreen.signature}
              </p>
              <p className="font-cinematic text-lg font-bold text-slate-100">
                {birthdayData.specialMessageScreen.senderName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-rose-400/80 text-sm font-handwritten text-xl">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-pulse" />
            <span>Always wishing you happiness ✨</span>
          </div>
        </div>
      </motion.div>

      {/* Button to Trigger Climax */}
      <div className="text-center mt-12">
        <button
          onClick={() => {
            soundEffects.playSparkle();
            onNext();
          }}
          className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-500 text-midnight-950 font-bold text-base tracking-wider shadow-glow-gold hover:shadow-glow-gold-lg hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Sparkles className="w-5 h-5 animate-spin-slow" />
          <span className="font-cinematic">Wait, There Is One More Thing...</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
