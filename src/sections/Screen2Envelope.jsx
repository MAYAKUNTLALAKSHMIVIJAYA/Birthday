import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronRight, Sparkles, ScrollText, Mail } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import { soundEffects } from '../utils/audioSystem';
import TypewriterText from '../components/TypewriterText';

export default function Screen2Envelope({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      soundEffects.playSealBreak();
      soundEffects.playSparkle();
      setIsOpen(true);
      // Reveal continue button after letter opens
      setTimeout(() => setShowContinue(true), 1200);
    }
  };

  const handleContinue = () => {
    soundEffects.playSparkle();
    onNext();
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 z-10">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-xl mx-auto mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-xs font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1 rounded-full border border-gold-400/20">
          Personal Invitation
        </span>
        <h2 className="font-cinematic text-3xl sm:text-4xl text-slate-100 font-bold mt-3">
          {birthdayData.envelopeScreen.introHeading}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 font-sans">
          {birthdayData.envelopeScreen.introSubheading}
        </p>
      </motion.div>

      {/* Interactive Envelope Container */}
      <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
        {!isOpen ? (
          /* Closed Wax-Sealed Envelope */
          <motion.div
            className="relative w-full aspect-[16/10] max-w-[420px] rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-lavender-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(167,139,250,0.15)] flex flex-col items-center justify-center p-6 cursor-pointer group"
            onClick={handleOpenEnvelope}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            {/* Envelope flap folded design */}
            <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden pointer-events-none">
              <div className="w-full h-full bg-slate-800/90 [clip-path:polygon(0_0,100%_0,50%_100%)] border-b border-lavender-400/20" />
            </div>

            {/* Glowing Wax Seal */}
            <motion.div
              className="relative z-20 w-20 h-20 rounded-full bg-gradient-to-tr from-amber-700 via-amber-500 to-yellow-300 shadow-[0_0_35px_rgba(245,158,11,0.6)] flex flex-col items-center justify-center text-midnight-950 font-cinematic font-bold border-2 border-yellow-200 cursor-pointer group-hover:scale-110 transition-transform duration-300"
              animate={{
                boxShadow: [
                  '0 0 25px rgba(245,158,11,0.4)',
                  '0 0 45px rgba(245,158,11,0.8)',
                  '0 0 25px rgba(245,158,11,0.4)',
                ],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="w-6 h-6 fill-midnight-950 text-midnight-950 stroke-[2.5]" />
              <span className="text-[9px] tracking-wider font-extrabold uppercase mt-0.5">
                {birthdayData.envelopeScreen.sealLabel}
              </span>
            </motion.div>

            {/* Tap prompt */}
            <div className="mt-8 flex items-center gap-1.5 text-xs text-lavender-300 font-mono tracking-wider uppercase animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Tap the seal to open</span>
            </div>
          </motion.div>
        ) : (
          /* Opened Letter Document */
          <motion.div
            className="w-full max-w-xl bg-gradient-to-b from-[#131b2e] to-[#0c1222] border border-gold-400/30 rounded-2xl p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(251,191,36,0.15)] relative overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Top decorative header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <ScrollText className="w-5 h-5 text-gold-400" />
                <span className="font-cinematic text-xs tracking-widest text-gold-300 uppercase">
                  Confidential & Personal
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {birthdayData.envelopeScreen.letterDate}
              </span>
            </div>

            {/* Letter Salutation */}
            <h3 className="font-handwritten text-2xl sm:text-3xl text-gold-300 font-bold mb-4">
              {birthdayData.envelopeScreen.letterGreeting}
            </h3>

            {/* Letter Body with Typewriter Animation */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {birthdayData.envelopeScreen.letterBody.map((paragraph, index) => (
                <TypewriterText
                  key={index}
                  text={paragraph}
                  speed={index === 0 ? 18 : 22}
                  delay={index * 600}
                  className="font-light"
                />
              ))}
            </div>

            {/* Letter Sign-off */}
            <div className="mt-8 pt-6 border-t border-white/10 text-right">
              <p className="font-sans text-xs text-slate-400 italic">
                {birthdayData.envelopeScreen.letterClosing}
              </p>
              <p className="font-handwritten text-xl sm:text-2xl text-gold-400 font-bold mt-1">
                {birthdayData.envelopeScreen.letterSignature}
              </p>
            </div>

            {/* Continue Button */}
            <AnimatePresence>
              {showContinue && (
                <motion.div
                  className="mt-8 pt-4 flex justify-center"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <button
                    onClick={handleContinue}
                    className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-gold-500 text-white font-semibold text-sm sm:text-base tracking-wide shadow-glow-purple hover:shadow-glow-gold hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <span>{birthdayData.envelopeScreen.continueButtonText}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
