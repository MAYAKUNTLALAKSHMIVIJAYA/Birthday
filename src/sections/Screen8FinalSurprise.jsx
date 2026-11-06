import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Sparkles, RotateCcw, Heart, Star, Share2, Check } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import { soundEffects } from '../utils/audioSystem';
import ImageWithFallback from '../components/ImageWithFallback';

export default function Screen8FinalSurprise({ onReplay }) {
  const [unlocked, setUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleUnlock = () => {
    soundEffects.playSealBreak();
    soundEffects.playSparkle();
    setUnlocked(true);
  };

  const handleCopyWishes = () => {
    const textToCopy = `Happy Birthday ${birthdayData.recipient.name}! 🌟\n${birthdayData.finalSurpriseScreen.secretQuote}\n${birthdayData.finalSurpriseScreen.finalWords}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    soundEffects.playSparkle();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative min-h-screen px-4 py-20 max-w-4xl mx-auto z-10 flex flex-col items-center justify-center text-center">
      {/* Header */}
      <div className="max-w-xl mx-auto mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1 rounded-full border border-gold-400/20">
          The Vault Finale
        </span>
        <h2 className="font-cinematic text-3xl sm:text-5xl text-slate-100 font-bold mt-3">
          {birthdayData.finalSurpriseScreen.dialogTitle}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 font-sans">
          {birthdayData.finalSurpriseScreen.teaserText}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!unlocked ? (
          /* Locked State */
          <motion.div
            key="locked"
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.div
              onClick={handleUnlock}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border-2 border-gold-400/40 shadow-glow-gold flex flex-col items-center justify-center cursor-pointer group hover:border-gold-300 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Lock className="w-10 h-10 text-gold-400 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase mt-2">
                Unlock Vault
              </span>
            </motion.div>

            <motion.button
              onClick={handleUnlock}
              className="mt-8 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-midnight-950 font-cinematic font-bold text-sm sm:text-base tracking-wider shadow-glow-gold hover:shadow-glow-gold-lg transition-all"
            >
              {birthdayData.finalSurpriseScreen.buttonLabel}
            </motion.button>
          </motion.div>
        ) : (
          /* Unlocked Final Keepsake Card */
          <motion.div
            key="unlocked"
            className="w-full max-w-2xl glass-card rounded-3xl p-6 sm:p-10 border border-gold-400/40 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Unlock Badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="p-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Unlock className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                Secret Unlocked
              </span>
            </div>

            {/* Hidden Photo Memory */}
            <div className="relative aspect-[16/10] max-w-md mx-auto rounded-xl overflow-hidden shadow-polaroid border border-white/10 mb-6 bg-slate-900">
              <ImageWithFallback
                src={birthdayData.finalSurpriseScreen.hiddenPhotoUrl}
                alt="Secret Memory"
                fallbackTitle="A Wonderful Memory"
                fallbackTheme="indigo"
                fallbackIcon="heart"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 to-transparent p-3 text-xs text-slate-300 font-sans">
                {birthdayData.finalSurpriseScreen.hiddenPhotoCaption}
              </div>
            </div>

            {/* Secret Quote */}
            <blockquote className="font-serif italic text-lg sm:text-xl text-gold-200 leading-relaxed mb-6">
              {birthdayData.finalSurpriseScreen.secretQuote}
            </blockquote>

            {/* Final Iconic Words */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 my-6">
              <p className="font-cinematic text-lg sm:text-xl text-gradient-cosmic font-bold">
                "{birthdayData.finalSurpriseScreen.finalWords}"
              </p>
            </div>

            {/* Action Bar (Share/Copy & Replay) */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-6 border-t border-white/10">
              <button
                onClick={handleCopyWishes}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-white/10 hover:border-gold-400/40 text-slate-200 text-xs sm:text-sm font-medium transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Wishes Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-gold-400" />
                    <span>Copy Birthday Keepsake</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  soundEffects.playSparkle();
                  onReplay();
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-gold-500 text-white text-xs sm:text-sm font-semibold shadow-glow-purple hover:shadow-glow-gold hover:scale-105 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{birthdayData.finalSurpriseScreen.replayButton}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
