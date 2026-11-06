import React from 'react';
import { Sparkles } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

export default function Navbar({ activeScreen, setActiveScreen }) {
  const screens = [
    { id: 1, label: 'Starry Sky' },
    { id: 2, label: 'Letter' },
    { id: 3, label: 'Memories' },
    { id: 4, label: 'Reels' },
    { id: 5, label: 'Journey' },
    { id: 6, label: 'Message' },
    { id: 7, label: 'Celebration' },
    { id: 8, label: 'Secret' },
  ];

  return (
    <header className="fixed top-3.5 left-3 sm:top-5 sm:left-5 z-40">
      <div className="flex items-center gap-3">
        {/* Recipient Monogram / Pill */}
        <div
          onClick={() => setActiveScreen(1)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 hover:border-gold-400/40 transition-colors shadow-lg cursor-pointer group"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400 group-hover:rotate-45 transition-transform duration-300" />
          <span className="font-cinematic text-xs tracking-widest text-slate-200 group-hover:text-gold-200 uppercase font-semibold">
            {birthdayData.recipient.name}
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-300 font-mono">
            {birthdayData.recipient.birthdayDate}
          </span>
        </div>

        {/* Desktop progress dots */}
        <nav className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/5">
          {screens.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveScreen(s.id)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeScreen === s.id
                  ? 'w-6 bg-gradient-to-r from-gold-400 to-lavender-400 shadow-[0_0_10px_#fbbf24]'
                  : 'w-2 bg-slate-700/60 hover:bg-slate-500'
              }`}
              title={s.label}
              aria-label={`Jump to ${s.label}`}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
