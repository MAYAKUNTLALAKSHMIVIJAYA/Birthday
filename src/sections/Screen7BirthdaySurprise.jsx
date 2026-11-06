import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Wind, ChevronRight, Cake, PartyPopper, Heart } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import { soundEffects } from '../utils/audioSystem';
import FireworksCanvas from '../components/FireworksCanvas';
import FloatingBalloons from '../components/FloatingBalloons';

export default function Screen7BirthdaySurprise({ onNext }) {
  const [stage, setStage] = useState('suspense'); // 'suspense' -> 'revealed'
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);

  // Trigger confetti burst
  const launchGrandConfetti = () => {
    const end = Date.now() + 3.5 * 1000;
    const colors = birthdayData.birthdaySurpriseScreen.confettiColors;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  // Handle revealing the grand birthday explosion
  const handleReveal = () => {
    soundEffects.playFanfare();
    launchGrandConfetti();
    setStage('revealed');
  };

  // Handle candle blowing
  const handleBlowCandles = () => {
    if (candlesBlown) return;
    setIsBlowing(true);
    soundEffects.playBlower();

    setTimeout(() => {
      setCandlesBlown(true);
      setIsBlowing(false);
      soundEffects.playFanfare();
      launchGrandConfetti();
    }, 900);
  };

  return (
    <div className="relative min-h-screen px-4 py-16 max-w-5xl mx-auto z-10 flex flex-col items-center justify-center text-center">
      {/* Background Celebrations when Revealed */}
      {stage === 'revealed' && (
        <>
          <FireworksCanvas active={true} intensity="high" />
          <FloatingBalloons count={14} />
        </>
      )}

      <AnimatePresence mode="wait">
        {stage === 'suspense' ? (
          /* SUSPENSE STAGE */
          <motion.div
            key="suspense"
            className="max-w-2xl mx-auto py-12 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-20 h-20 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-6 shadow-glow-gold"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <PartyPopper className="w-9 h-9" />
            </motion.div>

            <h2 className="font-cinematic text-3xl sm:text-5xl text-slate-100 font-bold mb-4 leading-tight">
              {birthdayData.birthdaySurpriseScreen.suspenseText}
            </h2>

            <p className="text-slate-400 text-base sm:text-xl font-serif italic mb-10">
              {birthdayData.birthdaySurpriseScreen.countdownPrompt}
            </p>

            <motion.button
              onClick={handleReveal}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-amber-400 via-gold-500 to-yellow-300 text-midnight-950 font-cinematic font-extrabold text-lg sm:text-xl tracking-widest shadow-[0_0_50px_rgba(251,191,36,0.8)] hover:shadow-[0_0_80px_rgba(251,191,36,1)] transition-all uppercase cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 animate-spin" />
                <span>UNVEIL THE SURPRISE!</span>
                <Sparkles className="w-6 h-6 animate-spin" />
              </span>
            </motion.button>
          </motion.div>
        ) : (
          /* GRAND BIRTHDAY REVEAL STAGE */
          <motion.div
            key="revealed"
            className="w-full max-w-4xl mx-auto flex flex-col items-center py-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            {/* Grand Typography */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 15, duration: 1.2 }}
              className="mb-8"
            >
              <p className="text-sm sm:text-base font-mono uppercase tracking-[0.3em] text-lavender-300 mb-2">
                {birthdayData.birthdaySurpriseScreen.revealSubtitle}
              </p>
              <h1 className="font-cinematic text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient-gold tracking-tight drop-shadow-[0_0_35px_rgba(251,191,36,0.5)]">
                {birthdayData.birthdaySurpriseScreen.revealGreeting}
              </h1>
              <h2 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-wider mt-1 text-gradient-cosmic">
                {birthdayData.recipient.name.toUpperCase()}!
              </h2>
            </motion.div>

            {/* Realistic 3D Interactive Birthday Cake */}
            <div className="relative my-6 flex flex-col items-center">
              {/* Cake Glow Aura */}
              <div className="absolute -inset-10 bg-gold-400/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative flex flex-col items-center">
                {/* Glowing Candles on Top */}
                <div className="flex items-end justify-center gap-4 sm:gap-6 mb-1 z-20">
                  {Array.from({ length: birthdayData.birthdaySurpriseScreen.candlesCount }).map(
                    (_, i) => (
                      <div key={i} className="flex flex-col items-center relative">
                        {/* Candle Flame or Extinguished Smoke */}
                        {!candlesBlown ? (
                          <motion.div
                            className="w-3.5 h-6 sm:w-4 sm:h-7 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white shadow-[0_0_20px_#fde68a,0_0_35px_#f59e0b] origin-bottom cursor-pointer"
                            animate={{
                              scaleY: [1, 1.2, 0.9, 1.15, 1],
                              scaleX: [1, 0.85, 1.1, 0.9, 1],
                              rotate: [-2, 3, -1, 2, -2],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.6 + i * 0.1,
                              ease: 'easeInOut',
                            }}
                            onClick={handleBlowCandles}
                            title="Click to blow out candles!"
                          />
                        ) : (
                          /* Soft Extinguished Smoke Trail */
                          <motion.div
                            initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                            animate={{ opacity: 0, y: -40, scale: 2 }}
                            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
                            className="w-2.5 h-6 rounded-full bg-slate-400/40 blur-[2px]"
                          />
                        )}

                        {/* Candle Wick */}
                        <div className="w-0.5 h-2 bg-neutral-900" />

                        {/* Candle Wax Stick */}
                        <div
                          className={`w-3 sm:w-3.5 h-12 sm:h-14 rounded-t-sm shadow-md border-t border-white/40 ${
                            i % 2 === 0
                              ? 'bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600'
                              : 'bg-gradient-to-b from-purple-200 via-purple-400 to-indigo-600'
                          }`}
                        />
                      </div>
                    )
                  )}
                </div>

                {/* Cake Top Tier */}
                <div className="w-56 sm:w-72 h-14 sm:h-18 rounded-2xl bg-gradient-to-b from-slate-100 via-amber-50 to-amber-200 border-2 border-white/60 shadow-xl relative overflow-hidden flex items-center justify-center z-10">
                  {/* Frosting drips */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-white/90 rounded-b-xl [clip-path:polygon(0_0,100%_0,100%_70%,85%_100%,70%_60%,50%_100%,30%_65%,15%_100%,0_60%)]" />
                  <span className="font-handwritten text-xl sm:text-2xl text-amber-900 font-bold z-10">
                    Pure Gold
                  </span>
                </div>

                {/* Cake Bottom Tier */}
                <div className="w-72 sm:w-96 h-18 sm:h-22 rounded-2xl bg-gradient-to-b from-purple-900 via-slate-900 to-midnight-950 border-2 border-gold-400/40 shadow-2xl relative overflow-hidden flex items-center justify-center -mt-2">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-400/10 via-transparent to-transparent" />
                  <span className="font-cinematic text-xs sm:text-sm tracking-widest text-gold-300 font-bold uppercase">
                    Celebrating {birthdayData.recipient.name}
                  </span>
                </div>

                {/* Cake Plate Stand */}
                <div className="w-80 sm:w-[420px] h-4 rounded-full bg-gradient-to-r from-slate-600 via-gold-400 to-slate-600 shadow-2xl -mt-1" />
              </div>

              {/* Candle Blowing Interaction Control */}
              <div className="mt-8">
                {!candlesBlown ? (
                  <motion.button
                    onClick={handleBlowCandles}
                    disabled={isBlowing}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-slate-900/90 border border-gold-400/60 text-gold-300 hover:bg-gold-400/20 font-sans text-sm sm:text-base font-semibold shadow-glow-gold transition-all"
                  >
                    <Wind className={`w-5 h-5 ${isBlowing ? 'animate-spin' : ''}`} />
                    <span>{isBlowing ? 'Blowing Wind...' : 'Blow Out The Candles 🎂'}</span>
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-6 sm:p-8 rounded-2xl border border-gold-400/40 max-w-xl mx-auto shadow-glow-gold"
                  >
                    <h3 className="font-cinematic text-xl sm:text-2xl text-gradient-gold font-bold mb-2">
                      {birthdayData.birthdaySurpriseScreen.wishesBlownTitle}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
                      {birthdayData.birthdaySurpriseScreen.wishesBlownText}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Advance to Final Secret Screen */}
            <div className="mt-12">
              <button
                onClick={() => {
                  soundEffects.playSparkle();
                  onNext();
                }}
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-gold-500 text-white font-semibold text-sm sm:text-base tracking-wide shadow-glow-purple hover:shadow-glow-gold hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>{birthdayData.finalSurpriseScreen.buttonLabel}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
